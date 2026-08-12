// Class 11 Botany Chapter 3 - Plant Anatomy (Anatomy of Flowering Plants)
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
        <b style="color: #E040FB;">1. Plant Anatomy:</b> Study of the internal cellular structure and organization of plant tissues and vegetative/reproductive organs.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">2. Tissue System:</b> A structural and functional unit of tissues classified into Epidermal, Ground, and Vascular tissue systems.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">3. Epidermal Tissue System:</b> Outer protective covering of plant body comprising epidermis, stomata, cuticle, trichomes, and root hairs.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">4. Stomata &amp; Guard Cells:</b> Epidermal pores flanked by 2 specialized Guard Cells (kidney-shaped in dicots, dumbbell-shaped in monocots) regulating transpiration and gas exchange.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">5. Ground Tissue System:</b> All internal plant tissues except epidermis and vascular bundles (cortex, pericycle, pith, medullary rays, and leaf mesophyll).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">6. Vascular Tissue System:</b> Conducting complex tissues comprising Xylem (water transport) and Phloem (food translocation).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">7. Endarch Primary Xylem:</b> Condition where Protoxylem lies towards the center (pith) and Metaxylem lies towards the periphery (characteristic of Stems).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">8. Exarch Primary Xylem:</b> Condition where Protoxylem lies towards the periphery and Metaxylem lies towards the center (characteristic of Roots).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">9. Radial Vascular Bundle:</b> Xylem and Phloem arranged in separate alternating radii along the circumference (Roots).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">10. Conjoint Collateral Bundle:</b> Xylem and Phloem lie together on the same radius. Classified into <b>Open</b> (with cambium, Dicot Stem) and <b>Closed</b> (without cambium, Monocot Stem).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">11. Casparian Strips:</b> Band-like suberin thickenings present on the radial and transverse walls of root Endodermal cells creating a water-impermeable barrier.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">12. Stele:</b> All tissues present inside the endodermis comprising Pericycle, Vascular Bundles, and Pith.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">13. Diarch to Tetrarch vs Polyarch:</b> Dicot roots possess 2 to 4 xylem bundles (diarch to tetrarch); Monocot roots possess more than 6 xylem bundles (polyarch).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">14. Lysigenous Water Cavity:</b> Water-containing cavity in monocot stem vascular bundles formed by dissolution of protoxylem vessels.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">15. Dorsiventral Leaf:</b> Dicot leaf possessing distinct upper (adaxial) and lower (abaxial) surfaces with mesophyll differentiated into Palisade and Spongy parenchyma.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">16. Isobilateral Leaf:</b> Monocot leaf with similar upper/lower epidermal surfaces and undifferentiated mesophyll.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">17. Bulliform Cells (Motor Cells):</b> Large, empty, colorless epidermal cells present in grass leaves that absorb water to open leaves or become flaccid to roll leaves during drought.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">18. Bundle Sheath:</b> Layer of parenchymatous or sclerenchymatous cells enclosing vascular bundles in leaf veins.
      </div>
    </div>
  </div>


  <!-- EXACT SYLLABUS HEADING WORD-FOR-WORD -->
  <h2 style="color: #E040FB; margin-top: 10px; font-size: 20px; font-weight: bold;">Tissue systems in plants – Epidermal, ground and vascular tissue systems; Anatomy and functions of dicot and monocot root, stem and leaves</h2>
  <div style="text-align: center; margin: 24px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NjAgNTYwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYTAwMjIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMzYjAwNGQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMWEwMDIyIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGZpbHRlciBpZD0iZ2xvdyI+CiAgICAgIDxmZURyb3BTaGFkb3cgZHg9IjAiIGR5PSI0IiBzdGREZXZpYXRpb249IjYiIGZsb29kLWNvbG9yPSIjRTA0MEZCIiBmbG9vZC1vcGFjaXR5PSIwLjYiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNzYwIiBoZWlnaHQ9IjU2MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDEpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjM4MCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPlBsYW50IFRpc3N1ZSBTeXN0ZW1zIEFyY2hpdGVjdHVyZSAoQW5hdG9teSk8L3RleHQ+CgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLCA2NSkiPgogICAgPCEtLSAxLiBFcGlkZXJtYWwgVGlzc3VlIFN5c3RlbSAtLT4KICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMjYiIGhlaWdodD0iNDEwIiByeD0iMTQiIGZpbGw9InJnYmEoMCwyMzAsMTE4LDAuMDgpIiBzdHJva2U9IiMwMEU2NzYiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMTEzIiB5PSIzMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNjc2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xLiBFUElERVJNQUwgU1lTVEVNPC90ZXh0PgogICAgCiAgICA8cmVjdCB4PSIxMiIgeT0iNTUiIHdpZHRoPSIyMDIiIGhlaWdodD0iMTAwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjMDBFNjc2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjIyIiB5PSI3OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjlGMEFFIj7igKIgT3V0ZXIgRXBpZGVybWlzIExheWVyPC90ZXh0PgogICAgPHRleHQgeD0iMjIiIHk9IjEwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPlNpbmdsZS1sYXllcmVkLCBDdXRpY2xlIGNvYXQ8L3RleHQ+CiAgICA8dGV4dCB4PSIyMiIgeT0iMTIwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+UHJldmVudHMgdHJhbnNwaXJhdGlvbjwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSIxNDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5QYXJlbmNoeW1hdG91cyBjZWxsczwvdGV4dD4KCiAgICA8cmVjdCB4PSIxMiIgeT0iMTcwIiB3aWR0aD0iMjAyIiBoZWlnaHQ9IjExMCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iIzAwRTY3NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8dGV4dCB4PSIyMiIgeT0iMTkzIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2OUYwQUUiPuKAoiBTdG9tYXRhICZhbXA7IEd1YXJkIENlbGxzPC90ZXh0PgogICAgPHRleHQgeD0iMjIiIHk9IjIxNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPktpZG5leS1zaGFwZWQgKERpY290cyk8L3RleHQ+CiAgICA8dGV4dCB4PSIyMiIgeT0iMjM1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+RHVtYmJlbGwtc2hhcGVkIChNb25vY290cyk8L3RleHQ+CiAgICA8dGV4dCB4PSIyMiIgeT0iMjU1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+U3Vic2lkaWFyeSBjZWxscyBzdXJyb3VuZDwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSIyNzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5SZWd1bGF0ZXMgZ2FzIGV4Y2hhbmdlPC90ZXh0PgoKICAgIDxyZWN0IHg9IjEyIiB5PSIyOTUiIHdpZHRoPSIyMDIiIGhlaWdodD0iMTAwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjMDBFNjc2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjIyIiB5PSIzMTgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzY5RjBBRSI+4oCiIEVwaWRlcm1hbCBBcHBlbmRhZ2VzPC90ZXh0PgogICAgPHRleHQgeD0iMjIiIHk9IjM0MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPlJvb3QgSGFpcnM6IFVuaWNlbGx1bGFyPC90ZXh0PgogICAgPHRleHQgeD0iMjIiIHk9IjM2MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPlRyaWNob21lczogTXVsdGljZWxsdWxhcjwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSIzODAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5TZWNyZXRvcnkgLyBQcm90ZWN0aXZlPC90ZXh0PgoKICAgIDwhLS0gMi4gR3JvdW5kIFRpc3N1ZSBTeXN0ZW0gLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNDcsIDApIj4KICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjIyNiIgaGVpZ2h0PSI0MTAiIHJ4PSIxNCIgZmlsbD0icmdiYSgyNTUsMTQ1LDAsMC4wOCkiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICAgIDx0ZXh0IHg9IjExMyIgeT0iMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGOTEwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Mi4gR1JPVU5EIFNZU1RFTTwvdGV4dD4KCiAgICAgIDxyZWN0IHg9IjEyIiB5PSI1NSIgd2lkdGg9IjIwMiIgaGVpZ2h0PSIxMDAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSIyMiIgeT0iNzgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRDE4MCI+4oCiIFBhcmVuY2h5bWE8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5UaGluIGNlbGx1bG9zaWMgd2FsbHM8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIxMjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5MaXZpbmcgY2VsbHMgd2l0aCB2YWN1b2xlczwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjE0MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPlBob3Rvc3ludGhlc2lzICZhbXA7IFN0b3JhZ2U8L3RleHQ+CgogICAgICA8cmVjdCB4PSIxMiIgeT0iMTcwIiB3aWR0aD0iMjAyIiBoZWlnaHQ9IjExMCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIxOTMiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRDE4MCI+4oCiIENvbGxlbmNoeW1hPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMjE1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+UGVjdGluL0NlbGx1bG9zZSBjb3JuZXJzPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMjM1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+TWVjaGFuaWNhbCBlbGFzdGljaXR5PC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMjU1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+Rm91bmQgaW4gaHlwb2Rlcm1pczwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjI3MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPkxpdmluZyBtZWNoYW5pY2FsIHRpc3N1ZTwvdGV4dD4KCiAgICAgIDxyZWN0IHg9IjEyIiB5PSIyOTUiIHdpZHRoPSIyMDIiIGhlaWdodD0iMTAwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRkY5MTAwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPHRleHQgeD0iMjIiIHk9IjMxOCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZEMTgwIj7igKIgU2NsZXJlbmNoeW1hPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMzQwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+VGhpY2sgbGlnbmlmaWVkIGRlYWQgd2FsbHM8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIzNjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5GaWJlcnMgJmFtcDsgU2NsZXJlaWRzIChncml0dHkpPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMzgwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+UmlnaWQgc3RydWN0dXJhbCBzdXBwb3J0PC90ZXh0PgogICAgPC9nPgoKICAgIDwhLS0gMy4gVmFzY3VsYXIgVGlzc3VlIFN5c3RlbSAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ5NCwgMCkiPgogICAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMjI2IiBoZWlnaHQ9IjQxMCIgcng9IjE0IiBmaWxsPSJyZ2JhKDIyNCw2NCwyNTEsMC4wOCkiIHN0cm9rZT0iI0UwNDBGQiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICAgIDx0ZXh0IHg9IjExMyIgeT0iMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0UwNDBGQiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+My4gVkFTQ1VMQVIgU1lTVEVNPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMTIiIHk9IjU1IiB3aWR0aD0iMjAyIiBoZWlnaHQ9IjEwMCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iI0UwNDBGQiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSI3OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRUE4MEZDIj7igKIgWHlsZW0gVmVzc2VscyAmYW1wOyBUcmFjaGVpZHM8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5Db25kdWN0cyB3YXRlciAmYW1wOyBtaW5lcmFsczwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjEyMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPkVuZGFyY2g6IFN0ZW0gKFByb3RvIGluc2lkZSk8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIxNDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5FeGFyY2g6IFJvb3QgKFByb3RvIG91dHNpZGUpPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMTIiIHk9IjE3MCIgd2lkdGg9IjIwMiIgaGVpZ2h0PSIxMTAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSIyMiIgeT0iMTkzIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNFQTgwRkMiPuKAoiBQaGxvZW0gRWxlbWVudHM8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIyMTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5TaWV2ZSBUdWJlcyAmYW1wOyBDb21wYW5pb248L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIyMzUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5UcmFuc2xvY2F0ZXMgb3JnYW5pYyBmb29kPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMjU1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+UGhsb2VtIFBhcmVuY2h5bWEvRmliZXJzPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMjcyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+U2lldmUgcGxhdGVzIHdpdGggcG9yZXM8L3RleHQ+CgogICAgICA8cmVjdCB4PSIxMiIgeT0iMjk1IiB3aWR0aD0iMjAyIiBoZWlnaHQ9IjEwMCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iI0UwNDBGQiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIzMTgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0VBODBGQyI+4oCiIEJ1bmRsZSBUeXBlczwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjM0MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPlJhZGlhbDogQWx0ZXJuYXRlIHJhZGlpIChSb290KTwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjM2MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPkNvbmpvaW50IE9wZW46IERpY290IFN0ZW08L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIzODAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5Db25qb2ludCBDbG9zZWQ6IE1vbm9jb3Q8L3RleHQ+CiAgICA8L2c+CiAgPC9nPgoKICA8IS0tIEJvdHRvbSBCYXIgLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDQ5NSkiPgogICAgPHJlY3Qgd2lkdGg9IjcyMCIgaGVpZ2h0PSI1MCIgcng9IjEwIiBmaWxsPSJyZ2JhKDIyNCw2NCwyNTEsMC4xNSkiIHN0cm9rZT0iI0UwNDBGQiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz4KICAgIDx0ZXh0IHg9IjM2MCIgeT0iMzEiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRUE4MEZDIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QbGFudCBCb2R5ID0gT3V0ZXIgUHJvdGVjdGl2ZSBFcGlkZXJtaXMgKyBJbnRlcm5hbCBTdHJ1Y3R1cmFsIEdyb3VuZCArIFRyYW5zcG9ydGluZyBWYXNjdWxhciBCdW5kbGVzPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 650px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 6px 22px rgba(224, 64, 251, 0.4); border: 2px solid #E040FB;" alt="3D Plant Tissue Systems Architecture" /><p style="color: #E040FB; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 3.1: 3D Plant Tissue Systems Architecture (Epidermal, Ground &amp; Vascular Tissue Systems)</p></div>

  <p>Plant anatomy investigates the structural adaptation of plant cells and tissues that enable mechanical support, transport of water/nutrients, and photosynthesis across vegetative organs. Based on structure and location, plant tissues organize into three master tissue systems: Epidermal, Ground, and Vascular Tissue Systems.</p>

  <h3 style="color: #E040FB; margin-top: 20px; font-size: 18px; font-weight: bold;">(i) Tissue Systems in Plants: Epidermal, Ground, and Vascular Tissue Systems</h3>
  <p>• <b style="color: #E040FB;">1. Epidermal Tissue System:</b> Forms the outermost protective skin of the entire plant body.<br>
  - <i>Epidermis:</i> Single layer of elongated, compactly arranged parenchymatous cells lacking intercellular spaces. Covered externally by a thick waxy layer called <b>Cuticle</b> (absent in roots) to prevent water loss.<br>
  - <i>Stomata &amp; Guard Cells:</i> Minute pores present in leaf epidermis. Each stoma is enclosed by two specialized <b>Guard Cells</b> containing chloroplasts. Guard cells are kidney-shaped (reniform) in Dicots and dumbbell-shaped in Monocots. Specialized epidermal cells surrounding guard cells are called <b>Subsidiary Cells</b>.<br>
  - <i>Epidermal Appendages:</i> Unicellular <b>Root Hairs</b> in roots absorb water and minerals from soil. Multicellular <b>Trichomes</b> in stems reduce transpiration and may be branched, unbranched, or secretory.</p>

  <p>• <b style="color: #E040FB;">2. Ground (Fundament) Tissue System:</b> Forms the major bulk of internal plant organs between epidermis and vascular tissue.<br>
  - Consists of simple permanent tissues: <b>Parenchyma</b> (thin cellulosic walls, photosynthesis and storage), <b>Collenchyma</b> (pectin-thickened corners, flexible mechanical support in young stems), and <b>Sclerenchyma</b> (lignified dead cells with pits, rigid support).<br>
  - Organized into distinct concentric zones: Cortex, Hypodermis, Endodermis, Pericycle, Pith (Medulla), and Medullary Rays in stems and roots, and <b>Mesophyll</b> in leaves.</p>

  <p>• <b style="color: #E040FB;">3. Vascular Tissue System:</b> Complex conducting tissues composed of <b>Xylem</b> (water and mineral transport) and <b>Phloem</b> (translocation of organic food solutes).<br>
  - <i>Protoxylem &amp; Metaxylem Orientation:</i> Primary xylem is classified into <b>Endarch</b> (protoxylem inside towards center, metaxylem outside — STEMS) and <b>Exarch</b> (protoxylem outside towards periphery, metaxylem inside — ROOTS).<br>
  - <i>Vascular Bundle Arrangements:</i><br>
  a) <b style="color: #E040FB;">Radial Bundles:</b> Xylem and Phloem lie in separate alternating radii along the circumference (characteristic of all ROOTS).<br>
  b) <b style="color: #E040FB;">Conjoint Collateral Bundles:</b> Xylem and Phloem lie together on the same radius. Classified into <b>Open</b> (vascular cambium present between xylem and phloem, enabling secondary growth in Dicot Stems) and <b>Closed</b> (vascular cambium absent, no secondary growth in Monocot Stems).<br>
  c) <b style="color: #E040FB;">Bicollateral Bundles:</b> Xylem is flanked by outer and inner phloem strands with cambium strips (Solanaceae and Cucurbitaceae stems).</p>

  <div style="text-align: center; margin: 24px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NjAgNTgwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYTAwMjIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMzYjAwNGQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMWEwMDIyIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNzYwIiBoZWlnaHQ9IjU4MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDIpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjM4MCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BbmF0b215ICZhbXA7IEludGVybmFsIFN0cnVjdHVyZSBvZiBSb290cyAmYW1wOyBTdGVtczwvdGV4dD4KCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDY1KSI+CiAgICA8IS0tIDEuIERpY290IFJvb3QgdnMgTW9ub2NvdCBSb290IC0tPgogICAgPHJlY3Qgd2lkdGg9IjM1MCIgaGVpZ2h0PSI0MjAiIHJ4PSIxNCIgZmlsbD0icmdiYSgyMjQsNjQsMjUxLDAuMDYpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMTc1IiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTciIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRUE4MEZDIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EaWNvdCBSb290IHZzIE1vbm9jb3QgUm9vdDwvdGV4dD4KCiAgICA8cmVjdCB4PSIxNSIgeT0iNDgiIHdpZHRoPSIzMjAiIGhlaWdodD0iMTcwIiByeD0iMTAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iI0UwNDBGQiIgc3Ryb2tlLXdpZHRoPSIxLjIiLz4KICAgIDx0ZXh0IHg9IjI4IiB5PSI3NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIj5EaWNvdCBSb290IChlLmcuIFN1bmZsb3dlci9QZWEpOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI4IiB5PSI5OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZmlsbD0iI0ZGRiI+4oCiIEVwaWJsZW1hIHdpdGggdW5pY2VsbHVsYXIgcm9vdCBoYWlyczwvdGV4dD4KICAgIDx0ZXh0IHg9IjI4IiB5PSIxMTgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZpbGw9IiNGRkYiPuKAoiBFbmRvZGVybWlzIHdpdGggU3ViZXJpbiBDYXNwYXJpYW4gU3RyaXBzPC90ZXh0PgogICAgPHRleHQgeD0iMjgiIHk9IjEzOCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZmlsbD0iI0ZGRiI+4oCiIFZhc2N1bGFyIEJ1bmRsZXM6IERpYXJjaCB0byBUZXRyYXJjaCAoMi00KTwvdGV4dD4KICAgIDx0ZXh0IHg9IjI4IiB5PSIxNTgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZpbGw9IiNGRkYiPuKAoiBYeWxlbSBFeGFyY2g7IFNtYWxsL2luY29uc3BpY3VvdXMgUGl0aDwvdGV4dD4KICAgIDx0ZXh0IHg9IjI4IiB5PSIxNzgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZpbGw9IiNGRkYiPuKAoiBVbmRlcmdvZXMgc2Vjb25kYXJ5IGdyb3d0aCB2aWEgY2FtYml1bTwvdGV4dD4KCiAgICA8cmVjdCB4PSIxNSIgeT0iMjMyIiB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE3MCIgcng9IjEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMS4yIi8+CiAgICA8dGV4dCB4PSIyOCIgeT0iMjU4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNFMDQwRkIiPk1vbm9jb3QgUm9vdCAoZS5nLiBNYWl6ZS9XaGVhdCk6PC90ZXh0PgogICAgPHRleHQgeD0iMjgiIHk9IjI4MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZmlsbD0iI0ZGRiI+4oCiIEVwaWJsZW1hICZhbXA7IFBhcmVuY2h5bWF0b3VzIENvcnRleDwvdGV4dD4KICAgIDx0ZXh0IHg9IjI4IiB5PSIzMDIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZpbGw9IiNGRkYiPuKAoiBFbmRvZGVybWlzIHdpdGggdGhpY2sgQ2FzcGFyaWFuIFN0cmlwczwvdGV4dD4KICAgIDx0ZXh0IHg9IjI4IiB5PSIzMjIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZpbGw9IiNGRkYiPuKAoiBWYXNjdWxhciBCdW5kbGVzOiBQb2x5YXJjaCAoJmd0OzYgYnVuZGxlcyk8L3RleHQ+CiAgICA8dGV4dCB4PSIyOCIgeT0iMzQyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmaWxsPSIjRkZGIj7igKIgTGFyZ2UsIHdlbGwtZGV2ZWxvcGVkIGNlbnRyYWwgUGl0aDwvdGV4dD4KICAgIDx0ZXh0IHg9IjI4IiB5PSIzNjIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZpbGw9IiNGRkYiPuKAoiBOTyBzZWNvbmRhcnkgZ3Jvd3RoIChubyBjYW1iaXVtKTwvdGV4dD4KCiAgICA8IS0tIDIuIERpY290IFN0ZW0gdnMgTW9ub2NvdCBTdGVtIC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzcwLCAwKSI+CiAgICAgIDxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iNDIwIiByeD0iMTQiIGZpbGw9InJnYmEoMjI0LDY0LDI1MSwwLjA2KSIgc3Ryb2tlPSIjRTA0MEZCIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgICAgPHRleHQgeD0iMTc1IiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTciIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRUE4MEZDIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EaWNvdCBTdGVtIHZzIE1vbm9jb3QgU3RlbTwvdGV4dD4KCiAgICAgIDxyZWN0IHg9IjE1IiB5PSI0OCIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxNzAiIHJ4PSIxMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRTA0MEZCIiBzdHJva2Utd2lkdGg9IjEuMiIvPgogICAgICA8dGV4dCB4PSIyOCIgeT0iNzQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0UwNDBGQiI+RGljb3QgU3RlbSAoZS5nLiBTdW5mbG93ZXIpOjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjgiIHk9Ijk4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmaWxsPSIjRkZGIj7igKIgQ29sbGVuY2h5bWF0b3VzIEh5cG9kZXJtaXMgZm9yIGZsZXhpYmlsaXR5PC90ZXh0PgogICAgICA8dGV4dCB4PSIyOCIgeT0iMTE4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmaWxsPSIjRkZGIj7igKIgRW5kb2Rlcm1pcyBmb3JtcyBzdGFyY2ggc2hlYXRoPC90ZXh0PgogICAgICA8dGV4dCB4PSIyOCIgeT0iMTM4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmaWxsPSIjRkZGIj7igKIgVmFzY3VsYXIgQnVuZGxlcyBpbiBhIFJJTkcgYXJyYW5nZW1lbnQ8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI4IiB5PSIxNTgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZpbGw9IiNGRkYiPuKAoiBDb25qb2ludCwgQ29sbGF0ZXJhbCwgT1BFTiAoSW50cmFmYXNjaWN1bGFyIENhbWJpdW0pPC90ZXh0PgogICAgICA8dGV4dCB4PSIyOCIgeT0iMTc4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmaWxsPSIjRkZGIj7igKIgTGFyZ2UgY2VudHJhbCBQaXRoICZhbXA7IE1lZHVsbGFyeSBSYXlzPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMTUiIHk9IjIzMiIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxNzAiIHJ4PSIxMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRTA0MEZCIiBzdHJva2Utd2lkdGg9IjEuMiIvPgogICAgICA8dGV4dCB4PSIyOCIgeT0iMjU4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNFMDQwRkIiPk1vbm9jb3QgU3RlbSAoZS5nLiBNYWl6ZSk6PC90ZXh0PgogICAgICA8dGV4dCB4PSIyOCIgeT0iMjgyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmaWxsPSIjRkZGIj7igKIgU2NsZXJlbmNoeW1hdG91cyBIeXBvZGVybWlzPC90ZXh0PgogICAgICA8dGV4dCB4PSIyOCIgeT0iMzAyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmaWxsPSIjRkZGIj7igKIgVW5kaWZmZXJlbnRpYXRlZCBwYXJlbmNoeW1hdG91cyBHcm91bmQgdGlzc3VlPC90ZXh0PgogICAgICA8dGV4dCB4PSIyOCIgeT0iMzIyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmaWxsPSIjRkZGIj7igKIgVmFzY3VsYXIgQnVuZGxlcyBTQ0FUVEVSRUQgKHBlcmlwaGVyYWwgc21hbGwpPC90ZXh0PgogICAgICA8dGV4dCB4PSIyOCIgeT0iMzQyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmaWxsPSIjRkZGIj7igKIgQ29uam9pbnQsIENvbGxhdGVyYWwsIENMT1NFRCAobm8gY2FtYml1bSk8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI4IiB5PSIzNjIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZpbGw9IiNGRkYiPuKAoiBMeXNpZ2Vub3VzIFdhdGVyIENhdml0eSBpbnNpZGUgYnVuZGxlczwvdGV4dD4KICAgIDwvZz4KICA8L2c+CgogIDwhLS0gQm90dG9tIEJhciAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwgNTA1KSI+CiAgICA8cmVjdCB3aWR0aD0iNzIwIiBoZWlnaHQ9IjU1IiByeD0iMTAiIGZpbGw9InJnYmEoMjI0LDY0LDI1MSwwLjE1KSIgc3Ryb2tlPSIjRTA0MEZCIiBzdHJva2Utd2lkdGg9IjEuOCIvPgogICAgPHRleHQgeD0iMzYwIiB5PSIyNCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNFQTgwRkMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPktleSBBdWRpdHM6IFJvb3QgWHlsZW0gPSBFeGFyY2ggfCBTdGVtIFh5bGVtID0gRW5kYXJjaDwvdGV4dD4KICAgIDx0ZXh0IHg9IjM2MCIgeT0iNDQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RGljb3QgU3RlbSA9IFJpbmcgT3BlbiBCdW5kbGVzIHwgTW9ub2NvdCBTdGVtID0gU2NhdHRlcmVkIENsb3NlZCBCdW5kbGVzPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 650px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 6px 22px rgba(224, 64, 251, 0.4); border: 2px solid #E040FB;" alt="3D Dicot vs Monocot Root &amp; Stem Anatomy" /><p style="color: #E040FB; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 3.2: 3D Dicot vs Monocot Root &amp; Stem Cross-Sectional Anatomy</p></div>

  <h3 style="color: #E040FB; margin-top: 20px; font-size: 18px; font-weight: bold;">(ii) Anatomy and Functions of Dicot and Monocot Roots</h3>
  <p>• <b style="color: #E040FB;">Dicot Root Anatomy (e.g. Sunflower / Pea):</b><br>
  1. <i>Epiblema (Piliferous Layer):</i> Outermost single layer of thin-walled cells bearing unicellular root hairs without cuticle.<br>
  2. <i>Cortex:</i> Multi-layered, homogeneous parenchymatous tissue with prominent intercellular spaces storing food.<br>
  3. <i>Endodermis:</i> Innermost layer of cortex consisting of barrel-shaped cells without intercellular spaces. Characterized by band-like suberin thickenings called <b>Casparian Strips</b> on radial/transverse walls that act as a waterproof barrier.<br>
  4. <i>Pericycle:</i> Thick-walled parenchymatous layer inside endodermis giving rise to lateral roots and part of vascular cambium.<br>
  5. <i>Vascular Bundles:</i> <b>Radial</b> arrangement, <b>Exarch</b> xylem, <b>Diarch to Tetrarch</b> (2 to 4 xylem and phloem patches).<br>
  6. <i>Pith:</i> Small, narrow, or inconspicuous.<br><br>
  • <b style="color: #E040FB;">Monocot Root Anatomy (e.g. Maize):</b><br>
  - Possesses Epiblema, Cortex, Endodermis with Casparian strips, and Pericycle similar to dicot roots.<br>
  - Key Differences: Vascular bundles are <b>Polyarch</b> (more than 6 xylem and phloem bundles), possess a <b>large, well-developed central Pith</b>, and do NOT undergo secondary growth.</p>

  <h3 style="color: #E040FB; margin-top: 20px; font-size: 18px; font-weight: bold;">(iii) Anatomy and Functions of Dicot and Monocot Stems</h3>
  <p>• <b style="color: #E040FB;">Dicot Stem Anatomy (e.g. Sunflower):</b><br>
  1. <i>Epidermis:</i> Single outer layer coated with cuticle, bearing multicellular trichomes and stomata.<br>
  2. <i>Cortex:</i> Divided into 3 zones:<br>
  &nbsp;&nbsp;a) <b>Hypodermis:</b> Few layers of collenchyma below epidermis providing mechanical strength and flexibility.<br>
  &nbsp;&nbsp;b) <b>General Cortex:</b> Parenchymatous cells with intercellular spaces.<br>
  &nbsp;&nbsp;c) <b>Endodermis (Starch Sheath):</b> Single layer of cells rich in starch grains.<br>
  3. <i>Pericycle:</i> Present on inner side of endodermis as semilunar patches of sclerenchyma above phloem.<br>
  4. <i>Vascular Bundles:</i> Arranged in a characteristic <b>RING</b> surrounding central pith. Each bundle is <b>Conjoint, Collateral, OPEN</b> (possesses intrafascicular cambium strip), with <b>Endarch</b> primary xylem.<br>
  5. <i>Pith &amp; Medullary Rays:</i> Large central parenchymatous pith; radial strips of parenchyma between vascular bundles form medullary rays.<br><br>
  • <b style="color: #E040FB;">Monocot Stem Anatomy (e.g. Maize):</b><br>
  1. <i>Epidermis:</i> Cuticularized layer lacking trichomes.<br>
  2. <i>Hypodermis:</i> Sclerenchymatous (provides rigid mechanical support).<br>
  3. <i>Ground Tissue:</i> Mass of continuous parenchymatous cells not differentiated into cortex, endodermis, pericycle, or pith.<br>
  4. <i>Vascular Bundles:</i> <b>SCATTERED</b> throughout ground tissue. Peripheral bundles are smaller and compactly arranged; central bundles are larger. Bundles are <b>Conjoint, Collateral, CLOSED</b> (lacks cambium). Each bundle is enveloped by a sclerenchymatous bundle sheath and contains a <b>Lysigenous Water Cavity</b> formed by breakdown of protoxylem.</p>

  <div style="text-align: center; margin: 24px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NjAgNTYwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYTAwMjIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMzYjAwNGQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMWEwMDIyIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGZpbHRlciBpZD0iZ2xvdyI+CiAgICAgIDxmZURyb3BTaGFkb3cgZHg9IjAiIGR5PSI0IiBzdGREZXZpYXRpb249IjYiIGZsb29kLWNvbG9yPSIjRTA0MEZCIiBmbG9vZC1vcGFjaXR5PSIwLjYiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNzYwIiBoZWlnaHQ9IjU2MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDMpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjM4MCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPkRpY290IChEb3JzaXZlbnRyYWwpIHZzIE1vbm9jb3QgKElzb2JpbGF0ZXJhbCkgTGVhZiBBbmF0b215PC90ZXh0PgoKICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwgNjUpIj4KICAgIDwhLS0gTGVmdCBCb3g6IERvcnNpdmVudHJhbCBEaWNvdCBMZWFmIC0tPgogICAgPHJlY3Qgd2lkdGg9IjM1MCIgaGVpZ2h0PSI0MTUiIHJ4PSIxNCIgZmlsbD0icmdiYSgyMjQsNjQsMjUxLDAuMDYpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMTc1IiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTciIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRUE4MEZDIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xLiBEaWNvdCAoRG9yc2l2ZW50cmFsKSBMZWFmPC90ZXh0PgoKICAgIDxyZWN0IHg9IjE1IiB5PSI1MCIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIzNDUiIHJ4PSIxMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRTA0MEZCIiBzdHJva2Utd2lkdGg9IjEuMiIvPgogICAgPHRleHQgeD0iMzAiIHk9Ijc4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNFMDQwRkIiPktleSBBbmF0b21pY2FsIEZlYXR1cmVzOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxMDUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjRUE4MEZDIj5FcGlkZXJtaXM6PC90c3Bhbj4gRGlzdGluY3QgQWRheGlhbCAodXBwZXIpICZhbXA7IEFiYXhpYWwgKGxvd2VyKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjRUE4MEZDIj5IeXBvc3RvbWF0b3VzOjwvdHNwYW4+IFN0b21hdGEgbWFpbmx5IG9uIGxvd2VyIHN1cmZhY2U8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iMTU5IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iIzY5RjBBRSI+TWVzb3BoeWxsIERpZmZlcmVudGlhdGlvbjo8L3RzcGFuPjwvdGV4dD4KICAgIDx0ZXh0IHg9IjQ1IiB5PSIxODQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZpbGw9IiNEREQiPjEuIDx0c3BhbiBmaWxsPSIjRkZEMTgwIj5QYWxpc2FkZSBQYXJlbmNoeW1hOjwvdHNwYW4+IFZlcnRpY2FsIGNvbHVtbmFyIGNlbGxzPC90ZXh0PgogICAgPHRleHQgeD0iNDUiIHk9IjIwNCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNBQUEiPiAgICB3aXRoIGFidW5kYW50IGNobG9yb3BsYXN0cyBmYWNpbmcgdXBwZXIgc2lkZS48L3RleHQ+CiAgICA8dGV4dCB4PSI0NSIgeT0iMjI4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmaWxsPSIjREREIj4yLiA8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+U3Bvbmd5IFBhcmVuY2h5bWE6PC90c3Bhbj4gTG9vc2Ugcm91bmRlZCBjZWxsczwvdGV4dD4KICAgIDx0ZXh0IHg9IjQ1IiB5PSIyNDgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjQUFBIj4gICAgd2l0aCBsYXJnZSBpbnRlcmNlbGx1bGFyIGFpciBzcGFjZXMgJmFtcDsgc3Vic3RvbWF0YWwgY2F2aXR5LjwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIyNzgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjRUE4MEZDIj5WYXNjdWxhciBTeXN0ZW06PC90c3Bhbj4gQ29uam9pbnQsIENvbGxhdGVyYWwsIENsb3NlZDwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIzMDMiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZpbGw9IiNEREQiPiAgU3Vycm91bmRlZCBieSBwYXJlbmNoeW1hdG91cyA8dHNwYW4gZmlsbD0iIzgwRDhGRiI+QnVuZGxlIFNoZWF0aDwvdHNwYW4+LjwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIzMjgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZpbGw9IiNEREQiPiAgUmV0aWN1bGF0ZSB2ZW5hdGlvbiDinpQgVmFyaWFibGUgYnVuZGxlIHNpemVzLjwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIzNTMiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZpbGw9IiNEREQiPiAgRXhhbXBsZTogU3VuZmxvd2VyICZhbXA7IE1hbmdvIGxlYXZlcy48L3RleHQ+CgogICAgPCEtLSBSaWdodCBCb3g6IElzb2JpbGF0ZXJhbCBNb25vY290IExlYWYgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNzAsIDApIj4KICAgICAgPHJlY3Qgd2lkdGg9IjM1MCIgaGVpZ2h0PSI0MTUiIHJ4PSIxNCIgZmlsbD0icmdiYSgyMjQsNjQsMjUxLDAuMDYpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgICA8dGV4dCB4PSIxNzUiIHk9IjMwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNFQTgwRkMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjIuIE1vbm9jb3QgKElzb2JpbGF0ZXJhbCkgTGVhZjwvdGV4dD4KCiAgICAgIDxyZWN0IHg9IjE1IiB5PSI1MCIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIzNDUiIHJ4PSIxMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRTA0MEZCIiBzdHJva2Utd2lkdGg9IjEuMiIvPgogICAgICA8dGV4dCB4PSIzMCIgeT0iNzgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0UwNDBGQiI+S2V5IEFuYXRvbWljYWwgRmVhdHVyZXM6PC90ZXh0PgogICAgICA8dGV4dCB4PSIzMCIgeT0iMTA1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0VBODBGQyI+RXBpZGVybWlzOjwvdHNwYW4+IFNpbWlsYXIgYWRheGlhbCAmYW1wOyBhYmF4aWFsIHN1cmZhY2VzPC90ZXh0PgogICAgICA8dGV4dCB4PSIzMCIgeT0iMTMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0VBODBGQyI+QW1waGlzdG9tYXRvdXM6PC90c3Bhbj4gU3RvbWF0YSBlcXVhbCBvbiBib3RoIHN1cmZhY2VzPC90ZXh0PgogICAgICA8dGV4dCB4PSIzMCIgeT0iMTU5IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2OUYwQUUiPuKAoiA8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+VW5kaWZmZXJlbnRpYXRlZCBNZXNvcGh5bGw6PC90c3Bhbj48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjQ1IiB5PSIxODQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZpbGw9IiNEREQiPiAgTm8gcGFsaXNhZGUgb3Igc3Bvbmd5IHBhcmVuY2h5bWEgZGlzdGluY3Rpb24uPC90ZXh0PgogICAgICA8dGV4dCB4PSI0NSIgeT0iMjA0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0FBQSI+ICBVbmlmb3JtIHJvdW5kZWQgcGhvdG9zeW50aGV0aWMgZ3JlZW4gY2VsbHMuPC90ZXh0PgogICAgICA8dGV4dCB4PSIzMCIgeT0iMjM0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM4MEQ4RkYiPuKAoiBCdWxsaWZvcm0gQ2VsbHMgKE1vdG9yIENlbGxzKTo8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjQ1IiB5PSIyNTgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZpbGw9IiNEREQiPiAgTGFyZ2UsIGVtcHR5LCBjb2xvcmxlc3MgZXBpZGVybWFsIGNlbGxzIGluIGdyYXNzZXMuPC90ZXh0PgogICAgICA8dGV4dCB4PSI0NSIgeT0iMjc4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0FBQSI+ICBUdXJnaWQg4p6UIExlYWYgb3BlbnM7IEZsYWNjaWQg4p6UIElud2FyZCBsZWFmIHJvbGxpbmc8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjQ1IiB5PSIyOTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjQUFBIj4gIGR1cmluZyB3YXRlciBzdHJlc3MgdG8gcmVkdWNlIHRyYW5zcGlyYXRpb24hPC90ZXh0PgogICAgICA8dGV4dCB4PSIzMCIgeT0iMzI1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0VBODBGQyI+VmFzY3VsYXIgU3lzdGVtOjwvdHNwYW4+IFBhcmFsbGVsIHZlbmF0aW9uIOKelDwvdGV4dD4KICAgICAgPHRleHQgeD0iNDUiIHk9IjM0OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZmlsbD0iI0RERCI+ICBOZWFybHkgZXF1YWwgc2l6ZWQgdmFzY3VsYXIgYnVuZGxlcyAoZXhjZXB0IG1haW4gdmVpbikuPC90ZXh0PgogICAgICA8dGV4dCB4PSI0NSIgeT0iMzY4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmaWxsPSIjREREIj4gIEV4YW1wbGU6IEdyYXNzZXMsIE1haXplICZhbXA7IFdoZWF0IGxlYXZlcy48L3RleHQ+CiAgICA8L2c+CiAgPC9nPgoKICA8IS0tIEJvdHRvbSBCYXIgLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDQ5NSkiPgogICAgPHJlY3Qgd2lkdGg9IjcyMCIgaGVpZ2h0PSI1MCIgcng9IjEwIiBmaWxsPSJyZ2JhKDIyNCw2NCwyNTEsMC4xNSkiIHN0cm9rZT0iI0UwNDBGQiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz4KICAgIDx0ZXh0IHg9IjM2MCIgeT0iMzEiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRUE4MEZDIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EaWNvdCBMZWFmID0gUGFsaXNhZGUgKyBTcG9uZ3kgTWVzb3BoeWxsIHwgTW9ub2NvdCBMZWFmID0gQnVsbGlmb3JtIENlbGxzICZhbXA7IFVuaWZvcm0gTWVzb3BoeWxsPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 650px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 6px 22px rgba(224, 64, 251, 0.4); border: 2px solid #E040FB;" alt="3D Dicot vs Monocot Leaf Anatomy" /><p style="color: #E040FB; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 3.3: 3D Dicot (Dorsiventral) vs Monocot (Isobilateral) Leaf Anatomy &amp; Bulliform Cells</p></div>

  <h3 style="color: #E040FB; margin-top: 20px; font-size: 18px; font-weight: bold;">(iv) Anatomy and Functions of Dicot (Dorsiventral) and Monocot (Isobilateral) Leaves</h3>
  <p>• <b style="color: #E040FB;">Dicot (Dorsiventral) Leaf Anatomy (e.g. Sunflower / Mango):</b><br>
  1. <i>Epidermis:</i> Covers both upper surface (<b>Adaxial Epidermis</b>) and lower surface (<b>Abaxial Epidermis</b>) with distinct cuticle. Stomata are significantly more abundant on abaxial epidermis (<b>Hypostomatous</b> leaf).<br>
  2. <i>Mesophyll:</i> Photosynthetic parenchymatous tissue between upper and lower epidermis containing chloroplasts. Differentiated into two distinct layers:<br>
  &nbsp;&nbsp;a) <b>Palisade Parenchyma:</b> Situated towards adaxial epidermis; elongated vertical columnar cells packed compactly without intercellular spaces.<br>
  &nbsp;&nbsp;b) <b>Spongy Parenchyma:</b> Situated towards abaxial epidermis; loosely arranged oval/rounded cells with large air cavities and substomatal cavities.<br>
  3. <i>Vascular System:</i> Includes vascular bundles in veins and midrib. Bundles are conjoint, collateral, closed, surrounded by a layer of thick-walled parenchymatous <b>Bundle Sheath Cells</b>. Reticulate venation results in variable vascular bundle sizes.<br><br>
  • <b style="color: #E040FB;">Monocot (Isobilateral) Leaf Anatomy (e.g. Grass / Maize):</b><br>
  1. <i>Epidermis:</i> Stomata distributed almost equally on both adaxial and abaxial surfaces (<b>Amphistomatous</b> leaf).<br>
  2. <i>Mesophyll:</i> <b>NOT differentiated</b> into palisade and spongy parenchyma. Consists of uniform rounded green cells.<br>
  3. <i>Bulliform Cells (Motor Cells):</i> In grasses, specialized adaxial epidermal cells along veins become large, empty, and colorless. When turgid with water, they expand to expose the leaf blade; when flaccid during drought/water stress, they cause inward leaf rolling to minimize transpiration!<br>
  4. <i>Vascular System:</i> Parallel venation results in nearly uniform sized vascular bundles (except main midrib vein), each enclosed by prominent bundle sheath.</p>


  <!-- BOTTOM CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(224, 64, 251, 0.15), rgba(123, 31, 162, 0.15)); border: 1.5px solid #E040FB; border-radius: 10px; padding: 16px; margin-top: 25px;">
    <h3 style="color: #E040FB; font-weight: bold; margin: 0 0 8px 0; font-size: 18px; text-align: center;">⚡ Master Chapter 3 Plant Anatomy Cheat Sheet</h3>
    <ul style="margin: 0; padding-left: 20px; line-height: 1.8; font-size: 14.5px;">
      <li><b style="color: #E040FB;">Stomata Guard Cells:</b> Kidney-shaped in Dicots | Dumbbell-shaped in Monocots.</li>
      <li><b style="color: #E040FB;">Protoxylem Orientation:</b> Endarch in Stems (Protoxylem inside) | Exarch in Roots (Protoxylem outside).</li>
      <li><b style="color: #E040FB;">Root Anatomy:</b> Radial bundles, Casparian strips in endodermis | Diarch-Tetrarch (Dicot) vs Polyarch &gt;6 (Monocot).</li>
      <li><b style="color: #E040FB;">Stem Anatomy:</b> Ring Open Bundles with Collenchyma (Dicot) vs Scattered Closed Bundles with Water Cavity (Monocot).</li>
      <li><b style="color: #E040FB;">Leaf Anatomy:</b> Dorsiventral Palisade/Spongy Mesophyll (Dicot) vs Isobilateral Bulliform Motor Cells (Monocot).</li>
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
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q1. Dumbbell-shaped guard cells in stomata are characteristic of:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Dicotyledons &nbsp;&nbsp;&nbsp;&nbsp; (B) Monocotyledons (Grasses)<br>
      (C) Gymnosperms &nbsp;&nbsp;&nbsp;&nbsp; (D) Bryophytes
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Monocotyledons (Grasses)</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Monocot grasses possess dumbbell-shaped guard cells, whereas dicots possess kidney-shaped guard cells.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q2. Unicellular root hairs absorbing water develop from which epidermal region?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Cuticle &nbsp;&nbsp;&nbsp;&nbsp; (B) Epiblema (Piliferous layer)<br>
      (C) Hypodermis &nbsp;&nbsp;&nbsp;&nbsp; (D) Endodermis
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Epiblema (Piliferous layer)</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Unicellular root hairs are tubular extensions originating from epidermal epiblema cells in roots.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q3. Exarch primary xylem condition (protoxylem towards periphery) is found in:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Dicot Stem &nbsp;&nbsp;&nbsp;&nbsp; (B) Monocot Stem<br>
      (C) All Roots &nbsp;&nbsp;&nbsp;&nbsp; (D) Dicot Leaf
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (C) All Roots</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> In all roots (dicot and monocot), primary xylem is exarch (protoxylem faces outer periphery).</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q4. Endarch primary xylem condition (protoxylem towards center/pith) is characteristic of:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Roots &nbsp;&nbsp;&nbsp;&nbsp; (B) Stems<br>
      (C) Leaves &nbsp;&nbsp;&nbsp;&nbsp; (D) Casparian strips
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Stems</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> In stems, primary xylem is endarch (protoxylem lies towards inner center/pith).</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q5. Suberin-thickened waterproof bands present in root endodermis cells are called:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Casparian Strips &nbsp;&nbsp;&nbsp;&nbsp; (B) Starch sheath<br>
      (C) Bundle sheath &nbsp;&nbsp;&nbsp;&nbsp; (D) Bulliform cells
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (A) Casparian Strips</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Casparian strips are band-like suberin deposits on radial and transverse walls of root endodermal cells.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q6. Vascular bundles arranged in a characteristic RING surrounding central pith are found in:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Monocot Stem &nbsp;&nbsp;&nbsp;&nbsp; (B) Dicot Stem<br>
      (C) Dicot Root &nbsp;&nbsp;&nbsp;&nbsp; (D) Monocot Root
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Dicot Stem</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Dicot stems feature vascular bundles arranged in a distinct ring around central pith.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q7. Scattered vascular bundles embedded in ground tissue are characteristic of:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Dicot Stem &nbsp;&nbsp;&nbsp;&nbsp; (B) Monocot Stem (Maize)<br>
      (C) Dicot Root &nbsp;&nbsp;&nbsp;&nbsp; (D) Monocot Root
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Monocot Stem (Maize)</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Monocot stems contain numerous vascular bundles scattered randomly throughout ground tissue.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q8. Open vascular bundles are defined by the presence of:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Pericycle &nbsp;&nbsp;&nbsp;&nbsp; (B) Intrafascicular Cambium<br>
      (C) Endodermis &nbsp;&nbsp;&nbsp;&nbsp; (D) Trichomes
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Intrafascicular Cambium</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Open vascular bundles possess a layer of meristematic vascular cambium between xylem and phloem, enabling secondary growth.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q9. Lysigenous water cavities inside vascular bundles are found in:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Dicot Root &nbsp;&nbsp;&nbsp;&nbsp; (B) Dicot Stem<br>
      (C) Monocot Stem &nbsp;&nbsp;&nbsp;&nbsp; (D) Monocot Leaf
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (C) Monocot Stem</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Monocot stem vascular bundles contain a water-filled cavity formed by dissolution of protoxylem vessels.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q10. Polyarch vascular bundle condition (more than 6 xylem patches) is found in:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Dicot Root &nbsp;&nbsp;&nbsp;&nbsp; (B) Monocot Root<br>
      (C) Dicot Stem &nbsp;&nbsp;&nbsp;&nbsp; (D) Monocot Stem
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Monocot Root</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Monocot roots possess polyarch radial vascular bundles with more than 6 xylem and phloem strands.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q11. Large, empty, colorless adaxial epidermal cells in grass leaves that roll leaves during drought are:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Guard cells &nbsp;&nbsp;&nbsp;&nbsp; (B) Subsidiary cells<br>
      (C) Bulliform Cells (Motor Cells) &nbsp;&nbsp;&nbsp;&nbsp; (D) Bundle sheath cells
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (C) Bulliform Cells (Motor Cells)</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Bulliform cells lose turgor during water stress, causing leaf rolling to reduce transpiration in grasses.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q12. Dorsiventral leaf mesophyll is differentiated into:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Parenchyma and Sclerenchyma &nbsp;&nbsp;&nbsp;&nbsp; (B) Palisade and Spongy Parenchyma<br>
      (C) Cortex and Pith &nbsp;&nbsp;&nbsp;&nbsp; (D) Xylem and Phloem
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Palisade and Spongy Parenchyma</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Dicot dorsiventral leaves feature upper columnar palisade parenchyma and lower loose spongy parenchyma.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q13. Stomata present almost equally on both upper and lower leaf epidermal surfaces is termed:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Hypostomatous &nbsp;&nbsp;&nbsp;&nbsp; (B) Epistomatous<br>
      (C) Amphistomatous &nbsp;&nbsp;&nbsp;&nbsp; (D) Astomatous
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (C) Amphistomatous</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Isobilateral monocot leaves possess stomata on both adaxial and abaxial surfaces (amphistomatous).</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q14. Collenchymatous hypodermis providing mechanical flexibility is found in:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Dicot Stem &nbsp;&nbsp;&nbsp;&nbsp; (B) Monocot Stem<br>
      (C) Dicot Root &nbsp;&nbsp;&nbsp;&nbsp; (D) Monocot Root
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (A) Dicot Stem</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Dicot stems possess a hypodermis made of pectin-thickened collenchyma cells.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q15. Sclerenchymatous hypodermis providing rigid strength is found in:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Dicot Stem &nbsp;&nbsp;&nbsp;&nbsp; (B) Monocot Stem<br>
      (C) Dicot Root &nbsp;&nbsp;&nbsp;&nbsp; (D) Monocot Root
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Monocot Stem</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Monocot stems contain a hypodermis composed of lignified dead sclerenchyma cells.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q16. All tissues present inside the endodermis (pericycle, vascular bundles, pith) constitute the:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Cortex &nbsp;&nbsp;&nbsp;&nbsp; (B) Epidermis<br>
      (C) Stele &nbsp;&nbsp;&nbsp;&nbsp; (D) Mesophyll
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (C) Stele</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Stele comprises all tissues located internal to the endodermis layer.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q17. Starch sheath is another name given to the endodermis layer of:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Dicot Root &nbsp;&nbsp;&nbsp;&nbsp; (B) Dicot Stem<br>
      (C) Monocot Stem &nbsp;&nbsp;&nbsp;&nbsp; (D) Monocot Leaf
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Dicot Stem</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> In dicot stems, endodermal cells are rich in starch grains and termed the starch sheath.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q18. Which tissue tissue system forms the leaf mesophyll?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Epidermal tissue system &nbsp;&nbsp;&nbsp;&nbsp; (B) Ground tissue system<br>
      (C) Vascular tissue system &nbsp;&nbsp;&nbsp;&nbsp; (D) Secretory system
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Ground tissue system</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Leaf mesophyll (palisade and spongy parenchyma) belongs to the ground tissue system.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q19. Conjoint collateral closed vascular bundles lack:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Xylem &nbsp;&nbsp;&nbsp;&nbsp; (B) Phloem<br>
      (C) Vascular Cambium &nbsp;&nbsp;&nbsp;&nbsp; (D) Bundle sheath
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (C) Vascular Cambium</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Closed vascular bundles lack vascular cambium and cannot perform secondary growth.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q20. Radial vascular bundles are characterized by:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Xylem and phloem on same radius &nbsp;&nbsp;&nbsp;&nbsp; (B) Xylem and phloem on separate alternating radii<br>
      (C) Xylem surrounding phloem &nbsp;&nbsp;&nbsp;&nbsp; (D) Phloem surrounding xylem
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Xylem and phloem on separate alternating radii</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Radial bundles feature xylem and phloem strands alternating along different radii.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q21. Kidney-shaped guard cells are characteristic of:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Dicotyledons &nbsp;&nbsp;&nbsp;&nbsp; (B) Monocotyledons<br>
      (C) Gymnosperms &nbsp;&nbsp;&nbsp;&nbsp; (D) Grasses
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (A) Dicotyledons</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Dicot stomata possess reniform (kidney-shaped) guard cells containing chloroplasts.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q22. Pith is large and well-developed in:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Dicot Root and Monocot Root &nbsp;&nbsp;&nbsp;&nbsp; (B) Dicot Stem and Monocot Root<br>
      (C) Monocot Stem and Dicot Root &nbsp;&nbsp;&nbsp;&nbsp; (D) Dicot Root and Monocot Stem
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Dicot Stem and Monocot Root</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Central pith is prominent in dicot stems and monocot roots.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q23. Hypostomatous leaf condition refers to stomata present predominantly on:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Adaxial (upper) epidermis &nbsp;&nbsp;&nbsp;&nbsp; (B) Abaxial (lower) epidermis<br>
      (C) Both surfaces equally &nbsp;&nbsp;&nbsp;&nbsp; (D) Margins only
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Abaxial (lower) epidermis</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Dorsiventral dicot leaves bear stomata mainly on the abaxial (lower) surface.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q24. Multicellular epidermal hair on stems preventing water loss is called:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Root hair &nbsp;&nbsp;&nbsp;&nbsp; (B) Trichome<br>
      (C) Bulliform cell &nbsp;&nbsp;&nbsp;&nbsp; (D) Stoma
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Trichome</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Trichomes are multicellular stem epidermal hairs that reduce transpiration.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q25. In a dicot root, lateral roots originate from which specific cell layer?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Epidermis &nbsp;&nbsp;&nbsp;&nbsp; (B) Cortex<br>
      (C) Endodermis &nbsp;&nbsp;&nbsp;&nbsp; (D) Pericycle
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (D) Pericycle</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Pericycle parenchymatous cells become meristematic to give rise to lateral root branches.</span>
    </div>
  </div>
  <!-- SECTION B: VERY SHORT ANSWER QUESTIONS (Q26 to Q55) -->
  <div style="background: rgba(224, 64, 251, 0.12); border: 1.5px solid #E040FB; border-radius: 10px; padding: 14px; margin-top: 30px; margin-bottom: 20px;">
    <h2 style="color: #E040FB; margin: 0 0 6px 0; font-size: 19px; font-weight: bold;">SECTION B: Very Short Answer Questions (Q26 to Q55)</h2>
    <p style="color: #E040FB; margin: 0; font-size: 14px;">30 Expected VSA Questions • 2 Marks Each (22 Conceptual Theory + 8 Anatomical Audits)</p>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q26. Define Plant Anatomy and state its importance.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Study of internal cellular structure of plant organs.<br>Helps understand structural adaptations, taxonomy, and evolutionary relationships.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q27. Name 3 master tissue systems present in flowering plants.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      1. Epidermal Tissue System, 2. Ground (Fundament) Tissue System, 3. Vascular Tissue System.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q28. Differentiate Guard cells in Dicots and Monocots.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      <b style='color: #E040FB;'>Dicots:</b> Kidney-shaped (reniform) guard cells.<br><b style='color: #E040FB;'>Monocots:</b> Dumbbell-shaped guard cells.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q29. Differentiate Root Hairs and Trichomes.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      <b style='color: #E040FB;'>Root Hairs:</b> Unicellular tubular extensions of epiblema absorbing water.<br><b style='color: #E040FB;'>Trichomes:</b> Multicellular stem epidermal hairs preventing transpiration.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q30. What are Casparian Strips? Mention their composition and location.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Band-like suberin deposits on radial and transverse walls of root endodermis cells creating a waterproof barrier.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q31. Define Endarch and Exarch primary xylem.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      <b style='color: #E040FB;'>Endarch:</b> Protoxylem inside towards center (Stems).<br><b style='color: #E040FB;'>Exarch:</b> Protoxylem outside towards periphery (Roots).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q32. Differentiate Open and Closed Vascular Bundles.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      <b style='color: #E040FB;'>Open Bundle:</b> Possesses intrafascicular cambium between xylem and phloem (Dicot stem).<br><b style='color: #E040FB;'>Closed Bundle:</b> Lacks cambium (Monocot stem).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q33. Define Radial Vascular Bundle and state where it is found.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Vascular bundle where xylem and phloem lie on separate alternating radii.<br>Found in all Roots (dicot & monocot).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q34. Define Stele and list its components.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      All tissues present inside the endodermis.<br>Components: Pericycle, Vascular Bundles, and Pith.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q35. Differentiate Dicot Root and Monocot Root based on xylem bundle number.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      <b style='color: #E040FB;'>Dicot Root:</b> Diarch to Tetrarch (2 to 4 xylem bundles).<br><b style='color: #E040FB;'>Monocot Root:</b> Polyarch (more than 6 xylem bundles).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q36. Why is Pith small in Dicot root but large in Monocot root?</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Dicot root allocates space for secondary growth cambium, rendering pith small/inconspicuous, whereas monocot root maintains a large central parenchymatous pith.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q37. Differentiate Hypodermis of Dicot stem and Monocot stem.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      <b style='color: #E040FB;'>Dicot Stem:</b> Collenchymatous hypodermis.<br><b style='color: #E040FB;'>Monocot Stem:</b> Sclerenchymatous hypodermis.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q38. What is Starch Sheath in Dicot stem?</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Innermost layer of cortex (endodermis) containing abundant starch grains.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q39. Why are Vascular Bundles in Dicot stem arranged in a ring?</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Ring arrangement allows formation of continuous inter- and intra-fascicular cambium for secondary growth.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q40. Explain Lysigenous Water Cavity in Monocot stem.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Cavity inside vascular bundle formed by dissolution of inner protoxylem vessels storing water.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q41. Differentiate Dorsiventral Leaf and Isobilateral Leaf.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      <b style='color: #E040FB;'>Dorsiventral:</b> Dicot leaf with distinct adaxial/abaxial surfaces and palisade/spongy mesophyll.<br><b style='color: #E040FB;'>Isobilateral:</b> Monocot leaf with similar surfaces and uniform mesophyll.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q42. What are Bulliform Cells? State their function in grasses.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Large, empty, colorless epidermal cells in grass leaves.<br>Function: Flaccidity during drought causes inward leaf rolling to reduce transpiration.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q43. Differentiate Hypostomatous and Amphistomatous leaves.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      <b style='color: #E040FB;'>Hypostomatous:</b> Stomata mainly on lower abaxial surface (Dicots).<br><b style='color: #E040FB;'>Amphistomatous:</b> Stomata equal on both surfaces (Monocots).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q44. Define Bundle Sheath in leaves.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Layer of parenchymatous cells enclosing vascular bundles in leaf veins regulating transport.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q45. State 2 anatomical differences between Dicot and Monocot stems.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      1. Dicot stem has ring open bundles; Monocot stem has scattered closed bundles.<br>2. Dicot stem hypodermis is collenchymatous; Monocot stem hypodermis is sclerenchymatous.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q46. State 2 anatomical differences between Dicot and Monocot leaves.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      1. Dicot leaf mesophyll is differentiated into palisade/spongy; Monocot leaf is undifferentiated.<br>2. Monocot grass leaves possess bulliform cells; Dicot leaves lack bulliform cells.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q47. Why is Cuticle absent in root epiblema?</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Cuticle is a waterproof waxy layer; its absence in root epiblema allows unimpeded water absorption.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q48. Define Passage Cells in root endodermis.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Thin-walled unsuberized endodermal cells opposite protoxylem allowing radial flow of water into xylem.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q49. What is Intrafascicular Cambium?</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Primary meristematic strip present between primary xylem and primary phloem in open vascular bundles.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q50. Explain Medullary Rays in Dicot stem.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Radial parenchymatous strips extending from central pith to cortex between vascular bundles.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q51. State function of Palisade Parenchyma in Dicot leaf.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Vertically elongated cells packed with chloroplasts optimized for light absorption and photosynthesis.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q52. State function of Spongy Parenchyma in Dicot leaf.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Loosely arranged cells with air spaces facilitating gaseous exchange ($\text{CO}_2$, $\text{O}_2$) and transpiration.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q53. Why do vascular bundles in dicot leaf vary in size?</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Reticulate venation features veins of varying diameters; main midrib vein has largest bundle.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q54. Why are vascular bundles nearly equal in monocot leaf?</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Parallel venation features parallel veins of uniform size running across leaf blade.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q55. Define Pericycle and state its function in roots.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Layer inside endodermis; gives rise to lateral root branches and secondary vascular cambium.
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
      Plant tissues form Epidermal, Ground, and Vascular systems regulating protection, support, and transport.<br><br><div style='text-align: center; margin: 10px 0;'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NjAgNTYwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYTAwMjIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMzYjAwNGQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMWEwMDIyIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGZpbHRlciBpZD0iZ2xvdyI+CiAgICAgIDxmZURyb3BTaGFkb3cgZHg9IjAiIGR5PSI0IiBzdGREZXZpYXRpb249IjYiIGZsb29kLWNvbG9yPSIjRTA0MEZCIiBmbG9vZC1vcGFjaXR5PSIwLjYiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNzYwIiBoZWlnaHQ9IjU2MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDEpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjM4MCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPlBsYW50IFRpc3N1ZSBTeXN0ZW1zIEFyY2hpdGVjdHVyZSAoQW5hdG9teSk8L3RleHQ+CgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLCA2NSkiPgogICAgPCEtLSAxLiBFcGlkZXJtYWwgVGlzc3VlIFN5c3RlbSAtLT4KICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMjYiIGhlaWdodD0iNDEwIiByeD0iMTQiIGZpbGw9InJnYmEoMCwyMzAsMTE4LDAuMDgpIiBzdHJva2U9IiMwMEU2NzYiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMTEzIiB5PSIzMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNjc2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xLiBFUElERVJNQUwgU1lTVEVNPC90ZXh0PgogICAgCiAgICA8cmVjdCB4PSIxMiIgeT0iNTUiIHdpZHRoPSIyMDIiIGhlaWdodD0iMTAwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjMDBFNjc2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjIyIiB5PSI3OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjlGMEFFIj7igKIgT3V0ZXIgRXBpZGVybWlzIExheWVyPC90ZXh0PgogICAgPHRleHQgeD0iMjIiIHk9IjEwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPlNpbmdsZS1sYXllcmVkLCBDdXRpY2xlIGNvYXQ8L3RleHQ+CiAgICA8dGV4dCB4PSIyMiIgeT0iMTIwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+UHJldmVudHMgdHJhbnNwaXJhdGlvbjwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSIxNDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5QYXJlbmNoeW1hdG91cyBjZWxsczwvdGV4dD4KCiAgICA8cmVjdCB4PSIxMiIgeT0iMTcwIiB3aWR0aD0iMjAyIiBoZWlnaHQ9IjExMCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iIzAwRTY3NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8dGV4dCB4PSIyMiIgeT0iMTkzIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2OUYwQUUiPuKAoiBTdG9tYXRhICZhbXA7IEd1YXJkIENlbGxzPC90ZXh0PgogICAgPHRleHQgeD0iMjIiIHk9IjIxNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPktpZG5leS1zaGFwZWQgKERpY290cyk8L3RleHQ+CiAgICA8dGV4dCB4PSIyMiIgeT0iMjM1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+RHVtYmJlbGwtc2hhcGVkIChNb25vY290cyk8L3RleHQ+CiAgICA8dGV4dCB4PSIyMiIgeT0iMjU1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+U3Vic2lkaWFyeSBjZWxscyBzdXJyb3VuZDwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSIyNzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5SZWd1bGF0ZXMgZ2FzIGV4Y2hhbmdlPC90ZXh0PgoKICAgIDxyZWN0IHg9IjEyIiB5PSIyOTUiIHdpZHRoPSIyMDIiIGhlaWdodD0iMTAwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjMDBFNjc2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjIyIiB5PSIzMTgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzY5RjBBRSI+4oCiIEVwaWRlcm1hbCBBcHBlbmRhZ2VzPC90ZXh0PgogICAgPHRleHQgeD0iMjIiIHk9IjM0MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPlJvb3QgSGFpcnM6IFVuaWNlbGx1bGFyPC90ZXh0PgogICAgPHRleHQgeD0iMjIiIHk9IjM2MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPlRyaWNob21lczogTXVsdGljZWxsdWxhcjwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSIzODAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5TZWNyZXRvcnkgLyBQcm90ZWN0aXZlPC90ZXh0PgoKICAgIDwhLS0gMi4gR3JvdW5kIFRpc3N1ZSBTeXN0ZW0gLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNDcsIDApIj4KICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjIyNiIgaGVpZ2h0PSI0MTAiIHJ4PSIxNCIgZmlsbD0icmdiYSgyNTUsMTQ1LDAsMC4wOCkiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICAgIDx0ZXh0IHg9IjExMyIgeT0iMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGOTEwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Mi4gR1JPVU5EIFNZU1RFTTwvdGV4dD4KCiAgICAgIDxyZWN0IHg9IjEyIiB5PSI1NSIgd2lkdGg9IjIwMiIgaGVpZ2h0PSIxMDAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSIyMiIgeT0iNzgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRDE4MCI+4oCiIFBhcmVuY2h5bWE8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5UaGluIGNlbGx1bG9zaWMgd2FsbHM8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIxMjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5MaXZpbmcgY2VsbHMgd2l0aCB2YWN1b2xlczwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjE0MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPlBob3Rvc3ludGhlc2lzICZhbXA7IFN0b3JhZ2U8L3RleHQ+CgogICAgICA8cmVjdCB4PSIxMiIgeT0iMTcwIiB3aWR0aD0iMjAyIiBoZWlnaHQ9IjExMCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIxOTMiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRDE4MCI+4oCiIENvbGxlbmNoeW1hPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMjE1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+UGVjdGluL0NlbGx1bG9zZSBjb3JuZXJzPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMjM1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+TWVjaGFuaWNhbCBlbGFzdGljaXR5PC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMjU1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+Rm91bmQgaW4gaHlwb2Rlcm1pczwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjI3MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPkxpdmluZyBtZWNoYW5pY2FsIHRpc3N1ZTwvdGV4dD4KCiAgICAgIDxyZWN0IHg9IjEyIiB5PSIyOTUiIHdpZHRoPSIyMDIiIGhlaWdodD0iMTAwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRkY5MTAwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPHRleHQgeD0iMjIiIHk9IjMxOCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZEMTgwIj7igKIgU2NsZXJlbmNoeW1hPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMzQwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+VGhpY2sgbGlnbmlmaWVkIGRlYWQgd2FsbHM8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIzNjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5GaWJlcnMgJmFtcDsgU2NsZXJlaWRzIChncml0dHkpPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMzgwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+UmlnaWQgc3RydWN0dXJhbCBzdXBwb3J0PC90ZXh0PgogICAgPC9nPgoKICAgIDwhLS0gMy4gVmFzY3VsYXIgVGlzc3VlIFN5c3RlbSAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ5NCwgMCkiPgogICAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMjI2IiBoZWlnaHQ9IjQxMCIgcng9IjE0IiBmaWxsPSJyZ2JhKDIyNCw2NCwyNTEsMC4wOCkiIHN0cm9rZT0iI0UwNDBGQiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICAgIDx0ZXh0IHg9IjExMyIgeT0iMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0UwNDBGQiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+My4gVkFTQ1VMQVIgU1lTVEVNPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMTIiIHk9IjU1IiB3aWR0aD0iMjAyIiBoZWlnaHQ9IjEwMCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iI0UwNDBGQiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSI3OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRUE4MEZDIj7igKIgWHlsZW0gVmVzc2VscyAmYW1wOyBUcmFjaGVpZHM8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5Db25kdWN0cyB3YXRlciAmYW1wOyBtaW5lcmFsczwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjEyMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPkVuZGFyY2g6IFN0ZW0gKFByb3RvIGluc2lkZSk8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIxNDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5FeGFyY2g6IFJvb3QgKFByb3RvIG91dHNpZGUpPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMTIiIHk9IjE3MCIgd2lkdGg9IjIwMiIgaGVpZ2h0PSIxMTAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSIyMiIgeT0iMTkzIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNFQTgwRkMiPuKAoiBQaGxvZW0gRWxlbWVudHM8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIyMTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5TaWV2ZSBUdWJlcyAmYW1wOyBDb21wYW5pb248L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIyMzUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5UcmFuc2xvY2F0ZXMgb3JnYW5pYyBmb29kPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMjU1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+UGhsb2VtIFBhcmVuY2h5bWEvRmliZXJzPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMjcyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+U2lldmUgcGxhdGVzIHdpdGggcG9yZXM8L3RleHQ+CgogICAgICA8cmVjdCB4PSIxMiIgeT0iMjk1IiB3aWR0aD0iMjAyIiBoZWlnaHQ9IjEwMCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iI0UwNDBGQiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIzMTgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0VBODBGQyI+4oCiIEJ1bmRsZSBUeXBlczwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjM0MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPlJhZGlhbDogQWx0ZXJuYXRlIHJhZGlpIChSb290KTwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjM2MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPkNvbmpvaW50IE9wZW46IERpY290IFN0ZW08L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIzODAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5Db25qb2ludCBDbG9zZWQ6IE1vbm9jb3Q8L3RleHQ+CiAgICA8L2c+CiAgPC9nPgoKICA8IS0tIEJvdHRvbSBCYXIgLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDQ5NSkiPgogICAgPHJlY3Qgd2lkdGg9IjcyMCIgaGVpZ2h0PSI1MCIgcng9IjEwIiBmaWxsPSJyZ2JhKDIyNCw2NCwyNTEsMC4xNSkiIHN0cm9rZT0iI0UwNDBGQiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz4KICAgIDx0ZXh0IHg9IjM2MCIgeT0iMzEiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRUE4MEZDIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QbGFudCBCb2R5ID0gT3V0ZXIgUHJvdGVjdGl2ZSBFcGlkZXJtaXMgKyBJbnRlcm5hbCBTdHJ1Y3R1cmFsIEdyb3VuZCArIFRyYW5zcG9ydGluZyBWYXNjdWxhciBCdW5kbGVzPC90ZXh0PgogIDwvZz4KPC9zdmc+' style='width: 100%; max-width: 580px; height: auto; border-radius: 10px; border: 1.5px solid #E040FB;' alt='Tissue Systems' /><p style='color: #E040FB; font-size: 13px; margin-top: 4px; font-weight: bold;'>Figure Q56: 3D Plant Tissue Systems Architecture</p></div>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q57. Compare Dicot & Monocot Root & Stem Anatomy with 3D diagram.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Roots feature exarch radial bundles; Dicot stem has ring open bundles, Monocot stem has scattered closed bundles.<br><br><div style='text-align: center; margin: 10px 0;'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NjAgNTgwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYTAwMjIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMzYjAwNGQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMWEwMDIyIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNzYwIiBoZWlnaHQ9IjU4MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDIpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjM4MCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BbmF0b215ICZhbXA7IEludGVybmFsIFN0cnVjdHVyZSBvZiBSb290cyAmYW1wOyBTdGVtczwvdGV4dD4KCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDY1KSI+CiAgICA8IS0tIDEuIERpY290IFJvb3QgdnMgTW9ub2NvdCBSb290IC0tPgogICAgPHJlY3Qgd2lkdGg9IjM1MCIgaGVpZ2h0PSI0MjAiIHJ4PSIxNCIgZmlsbD0icmdiYSgyMjQsNjQsMjUxLDAuMDYpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMTc1IiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTciIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRUE4MEZDIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EaWNvdCBSb290IHZzIE1vbm9jb3QgUm9vdDwvdGV4dD4KCiAgICA8cmVjdCB4PSIxNSIgeT0iNDgiIHdpZHRoPSIzMjAiIGhlaWdodD0iMTcwIiByeD0iMTAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iI0UwNDBGQiIgc3Ryb2tlLXdpZHRoPSIxLjIiLz4KICAgIDx0ZXh0IHg9IjI4IiB5PSI3NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIj5EaWNvdCBSb290IChlLmcuIFN1bmZsb3dlci9QZWEpOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI4IiB5PSI5OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZmlsbD0iI0ZGRiI+4oCiIEVwaWJsZW1hIHdpdGggdW5pY2VsbHVsYXIgcm9vdCBoYWlyczwvdGV4dD4KICAgIDx0ZXh0IHg9IjI4IiB5PSIxMTgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZpbGw9IiNGRkYiPuKAoiBFbmRvZGVybWlzIHdpdGggU3ViZXJpbiBDYXNwYXJpYW4gU3RyaXBzPC90ZXh0PgogICAgPHRleHQgeD0iMjgiIHk9IjEzOCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZmlsbD0iI0ZGRiI+4oCiIFZhc2N1bGFyIEJ1bmRsZXM6IERpYXJjaCB0byBUZXRyYXJjaCAoMi00KTwvdGV4dD4KICAgIDx0ZXh0IHg9IjI4IiB5PSIxNTgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZpbGw9IiNGRkYiPuKAoiBYeWxlbSBFeGFyY2g7IFNtYWxsL2luY29uc3BpY3VvdXMgUGl0aDwvdGV4dD4KICAgIDx0ZXh0IHg9IjI4IiB5PSIxNzgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZpbGw9IiNGRkYiPuKAoiBVbmRlcmdvZXMgc2Vjb25kYXJ5IGdyb3d0aCB2aWEgY2FtYml1bTwvdGV4dD4KCiAgICA8cmVjdCB4PSIxNSIgeT0iMjMyIiB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE3MCIgcng9IjEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMS4yIi8+CiAgICA8dGV4dCB4PSIyOCIgeT0iMjU4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNFMDQwRkIiPk1vbm9jb3QgUm9vdCAoZS5nLiBNYWl6ZS9XaGVhdCk6PC90ZXh0PgogICAgPHRleHQgeD0iMjgiIHk9IjI4MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZmlsbD0iI0ZGRiI+4oCiIEVwaWJsZW1hICZhbXA7IFBhcmVuY2h5bWF0b3VzIENvcnRleDwvdGV4dD4KICAgIDx0ZXh0IHg9IjI4IiB5PSIzMDIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZpbGw9IiNGRkYiPuKAoiBFbmRvZGVybWlzIHdpdGggdGhpY2sgQ2FzcGFyaWFuIFN0cmlwczwvdGV4dD4KICAgIDx0ZXh0IHg9IjI4IiB5PSIzMjIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZpbGw9IiNGRkYiPuKAoiBWYXNjdWxhciBCdW5kbGVzOiBQb2x5YXJjaCAoJmd0OzYgYnVuZGxlcyk8L3RleHQ+CiAgICA8dGV4dCB4PSIyOCIgeT0iMzQyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmaWxsPSIjRkZGIj7igKIgTGFyZ2UsIHdlbGwtZGV2ZWxvcGVkIGNlbnRyYWwgUGl0aDwvdGV4dD4KICAgIDx0ZXh0IHg9IjI4IiB5PSIzNjIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZpbGw9IiNGRkYiPuKAoiBOTyBzZWNvbmRhcnkgZ3Jvd3RoIChubyBjYW1iaXVtKTwvdGV4dD4KCiAgICA8IS0tIDIuIERpY290IFN0ZW0gdnMgTW9ub2NvdCBTdGVtIC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzcwLCAwKSI+CiAgICAgIDxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iNDIwIiByeD0iMTQiIGZpbGw9InJnYmEoMjI0LDY0LDI1MSwwLjA2KSIgc3Ryb2tlPSIjRTA0MEZCIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgICAgPHRleHQgeD0iMTc1IiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTciIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRUE4MEZDIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EaWNvdCBTdGVtIHZzIE1vbm9jb3QgU3RlbTwvdGV4dD4KCiAgICAgIDxyZWN0IHg9IjE1IiB5PSI0OCIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxNzAiIHJ4PSIxMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRTA0MEZCIiBzdHJva2Utd2lkdGg9IjEuMiIvPgogICAgICA8dGV4dCB4PSIyOCIgeT0iNzQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0UwNDBGQiI+RGljb3QgU3RlbSAoZS5nLiBTdW5mbG93ZXIpOjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjgiIHk9Ijk4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmaWxsPSIjRkZGIj7igKIgQ29sbGVuY2h5bWF0b3VzIEh5cG9kZXJtaXMgZm9yIGZsZXhpYmlsaXR5PC90ZXh0PgogICAgICA8dGV4dCB4PSIyOCIgeT0iMTE4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmaWxsPSIjRkZGIj7igKIgRW5kb2Rlcm1pcyBmb3JtcyBzdGFyY2ggc2hlYXRoPC90ZXh0PgogICAgICA8dGV4dCB4PSIyOCIgeT0iMTM4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmaWxsPSIjRkZGIj7igKIgVmFzY3VsYXIgQnVuZGxlcyBpbiBhIFJJTkcgYXJyYW5nZW1lbnQ8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI4IiB5PSIxNTgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZpbGw9IiNGRkYiPuKAoiBDb25qb2ludCwgQ29sbGF0ZXJhbCwgT1BFTiAoSW50cmFmYXNjaWN1bGFyIENhbWJpdW0pPC90ZXh0PgogICAgICA8dGV4dCB4PSIyOCIgeT0iMTc4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmaWxsPSIjRkZGIj7igKIgTGFyZ2UgY2VudHJhbCBQaXRoICZhbXA7IE1lZHVsbGFyeSBSYXlzPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMTUiIHk9IjIzMiIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxNzAiIHJ4PSIxMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRTA0MEZCIiBzdHJva2Utd2lkdGg9IjEuMiIvPgogICAgICA8dGV4dCB4PSIyOCIgeT0iMjU4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNFMDQwRkIiPk1vbm9jb3QgU3RlbSAoZS5nLiBNYWl6ZSk6PC90ZXh0PgogICAgICA8dGV4dCB4PSIyOCIgeT0iMjgyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmaWxsPSIjRkZGIj7igKIgU2NsZXJlbmNoeW1hdG91cyBIeXBvZGVybWlzPC90ZXh0PgogICAgICA8dGV4dCB4PSIyOCIgeT0iMzAyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmaWxsPSIjRkZGIj7igKIgVW5kaWZmZXJlbnRpYXRlZCBwYXJlbmNoeW1hdG91cyBHcm91bmQgdGlzc3VlPC90ZXh0PgogICAgICA8dGV4dCB4PSIyOCIgeT0iMzIyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmaWxsPSIjRkZGIj7igKIgVmFzY3VsYXIgQnVuZGxlcyBTQ0FUVEVSRUQgKHBlcmlwaGVyYWwgc21hbGwpPC90ZXh0PgogICAgICA8dGV4dCB4PSIyOCIgeT0iMzQyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmaWxsPSIjRkZGIj7igKIgQ29uam9pbnQsIENvbGxhdGVyYWwsIENMT1NFRCAobm8gY2FtYml1bSk8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI4IiB5PSIzNjIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZpbGw9IiNGRkYiPuKAoiBMeXNpZ2Vub3VzIFdhdGVyIENhdml0eSBpbnNpZGUgYnVuZGxlczwvdGV4dD4KICAgIDwvZz4KICA8L2c+CgogIDwhLS0gQm90dG9tIEJhciAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwgNTA1KSI+CiAgICA8cmVjdCB3aWR0aD0iNzIwIiBoZWlnaHQ9IjU1IiByeD0iMTAiIGZpbGw9InJnYmEoMjI0LDY0LDI1MSwwLjE1KSIgc3Ryb2tlPSIjRTA0MEZCIiBzdHJva2Utd2lkdGg9IjEuOCIvPgogICAgPHRleHQgeD0iMzYwIiB5PSIyNCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNFQTgwRkMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPktleSBBdWRpdHM6IFJvb3QgWHlsZW0gPSBFeGFyY2ggfCBTdGVtIFh5bGVtID0gRW5kYXJjaDwvdGV4dD4KICAgIDx0ZXh0IHg9IjM2MCIgeT0iNDQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RGljb3QgU3RlbSA9IFJpbmcgT3BlbiBCdW5kbGVzIHwgTW9ub2NvdCBTdGVtID0gU2NhdHRlcmVkIENsb3NlZCBCdW5kbGVzPC90ZXh0PgogIDwvZz4KPC9zdmc+' style='width: 100%; max-width: 580px; height: auto; border-radius: 10px; border: 1.5px solid #E040FB;' alt='Root & Stem Anatomy' /><p style='color: #E040FB; font-size: 13px; margin-top: 4px; font-weight: bold;'>Figure Q57: 3D Dicot vs Monocot Root & Stem Cross-Sectional Anatomy</p></div>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q58. Compare Dicot (Dorsiventral) & Monocot (Isobilateral) Leaf Anatomy with 3D diagram.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Dicot leaf has palisade/spongy mesophyll; Monocot leaf has uniform mesophyll and bulliform cells.<br><br><div style='text-align: center; margin: 10px 0;'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NjAgNTYwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYTAwMjIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMzYjAwNGQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMWEwMDIyIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGZpbHRlciBpZD0iZ2xvdyI+CiAgICAgIDxmZURyb3BTaGFkb3cgZHg9IjAiIGR5PSI0IiBzdGREZXZpYXRpb249IjYiIGZsb29kLWNvbG9yPSIjRTA0MEZCIiBmbG9vZC1vcGFjaXR5PSIwLjYiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNzYwIiBoZWlnaHQ9IjU2MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDMpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjM4MCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPkRpY290IChEb3JzaXZlbnRyYWwpIHZzIE1vbm9jb3QgKElzb2JpbGF0ZXJhbCkgTGVhZiBBbmF0b215PC90ZXh0PgoKICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwgNjUpIj4KICAgIDwhLS0gTGVmdCBCb3g6IERvcnNpdmVudHJhbCBEaWNvdCBMZWFmIC0tPgogICAgPHJlY3Qgd2lkdGg9IjM1MCIgaGVpZ2h0PSI0MTUiIHJ4PSIxNCIgZmlsbD0icmdiYSgyMjQsNjQsMjUxLDAuMDYpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMTc1IiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTciIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRUE4MEZDIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xLiBEaWNvdCAoRG9yc2l2ZW50cmFsKSBMZWFmPC90ZXh0PgoKICAgIDxyZWN0IHg9IjE1IiB5PSI1MCIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIzNDUiIHJ4PSIxMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRTA0MEZCIiBzdHJva2Utd2lkdGg9IjEuMiIvPgogICAgPHRleHQgeD0iMzAiIHk9Ijc4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNFMDQwRkIiPktleSBBbmF0b21pY2FsIEZlYXR1cmVzOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxMDUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjRUE4MEZDIj5FcGlkZXJtaXM6PC90c3Bhbj4gRGlzdGluY3QgQWRheGlhbCAodXBwZXIpICZhbXA7IEFiYXhpYWwgKGxvd2VyKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjRUE4MEZDIj5IeXBvc3RvbWF0b3VzOjwvdHNwYW4+IFN0b21hdGEgbWFpbmx5IG9uIGxvd2VyIHN1cmZhY2U8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iMTU5IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iIzY5RjBBRSI+TWVzb3BoeWxsIERpZmZlcmVudGlhdGlvbjo8L3RzcGFuPjwvdGV4dD4KICAgIDx0ZXh0IHg9IjQ1IiB5PSIxODQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZpbGw9IiNEREQiPjEuIDx0c3BhbiBmaWxsPSIjRkZEMTgwIj5QYWxpc2FkZSBQYXJlbmNoeW1hOjwvdHNwYW4+IFZlcnRpY2FsIGNvbHVtbmFyIGNlbGxzPC90ZXh0PgogICAgPHRleHQgeD0iNDUiIHk9IjIwNCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNBQUEiPiAgICB3aXRoIGFidW5kYW50IGNobG9yb3BsYXN0cyBmYWNpbmcgdXBwZXIgc2lkZS48L3RleHQ+CiAgICA8dGV4dCB4PSI0NSIgeT0iMjI4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmaWxsPSIjREREIj4yLiA8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+U3Bvbmd5IFBhcmVuY2h5bWE6PC90c3Bhbj4gTG9vc2Ugcm91bmRlZCBjZWxsczwvdGV4dD4KICAgIDx0ZXh0IHg9IjQ1IiB5PSIyNDgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjQUFBIj4gICAgd2l0aCBsYXJnZSBpbnRlcmNlbGx1bGFyIGFpciBzcGFjZXMgJmFtcDsgc3Vic3RvbWF0YWwgY2F2aXR5LjwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIyNzgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjRUE4MEZDIj5WYXNjdWxhciBTeXN0ZW06PC90c3Bhbj4gQ29uam9pbnQsIENvbGxhdGVyYWwsIENsb3NlZDwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIzMDMiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZpbGw9IiNEREQiPiAgU3Vycm91bmRlZCBieSBwYXJlbmNoeW1hdG91cyA8dHNwYW4gZmlsbD0iIzgwRDhGRiI+QnVuZGxlIFNoZWF0aDwvdHNwYW4+LjwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIzMjgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZpbGw9IiNEREQiPiAgUmV0aWN1bGF0ZSB2ZW5hdGlvbiDinpQgVmFyaWFibGUgYnVuZGxlIHNpemVzLjwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIzNTMiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZpbGw9IiNEREQiPiAgRXhhbXBsZTogU3VuZmxvd2VyICZhbXA7IE1hbmdvIGxlYXZlcy48L3RleHQ+CgogICAgPCEtLSBSaWdodCBCb3g6IElzb2JpbGF0ZXJhbCBNb25vY290IExlYWYgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNzAsIDApIj4KICAgICAgPHJlY3Qgd2lkdGg9IjM1MCIgaGVpZ2h0PSI0MTUiIHJ4PSIxNCIgZmlsbD0icmdiYSgyMjQsNjQsMjUxLDAuMDYpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgICA8dGV4dCB4PSIxNzUiIHk9IjMwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNFQTgwRkMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjIuIE1vbm9jb3QgKElzb2JpbGF0ZXJhbCkgTGVhZjwvdGV4dD4KCiAgICAgIDxyZWN0IHg9IjE1IiB5PSI1MCIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIzNDUiIHJ4PSIxMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRTA0MEZCIiBzdHJva2Utd2lkdGg9IjEuMiIvPgogICAgICA8dGV4dCB4PSIzMCIgeT0iNzgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0UwNDBGQiI+S2V5IEFuYXRvbWljYWwgRmVhdHVyZXM6PC90ZXh0PgogICAgICA8dGV4dCB4PSIzMCIgeT0iMTA1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0VBODBGQyI+RXBpZGVybWlzOjwvdHNwYW4+IFNpbWlsYXIgYWRheGlhbCAmYW1wOyBhYmF4aWFsIHN1cmZhY2VzPC90ZXh0PgogICAgICA8dGV4dCB4PSIzMCIgeT0iMTMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0VBODBGQyI+QW1waGlzdG9tYXRvdXM6PC90c3Bhbj4gU3RvbWF0YSBlcXVhbCBvbiBib3RoIHN1cmZhY2VzPC90ZXh0PgogICAgICA8dGV4dCB4PSIzMCIgeT0iMTU5IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2OUYwQUUiPuKAoiA8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+VW5kaWZmZXJlbnRpYXRlZCBNZXNvcGh5bGw6PC90c3Bhbj48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjQ1IiB5PSIxODQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZpbGw9IiNEREQiPiAgTm8gcGFsaXNhZGUgb3Igc3Bvbmd5IHBhcmVuY2h5bWEgZGlzdGluY3Rpb24uPC90ZXh0PgogICAgICA8dGV4dCB4PSI0NSIgeT0iMjA0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0FBQSI+ICBVbmlmb3JtIHJvdW5kZWQgcGhvdG9zeW50aGV0aWMgZ3JlZW4gY2VsbHMuPC90ZXh0PgogICAgICA8dGV4dCB4PSIzMCIgeT0iMjM0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM4MEQ4RkYiPuKAoiBCdWxsaWZvcm0gQ2VsbHMgKE1vdG9yIENlbGxzKTo8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjQ1IiB5PSIyNTgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZpbGw9IiNEREQiPiAgTGFyZ2UsIGVtcHR5LCBjb2xvcmxlc3MgZXBpZGVybWFsIGNlbGxzIGluIGdyYXNzZXMuPC90ZXh0PgogICAgICA8dGV4dCB4PSI0NSIgeT0iMjc4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0FBQSI+ICBUdXJnaWQg4p6UIExlYWYgb3BlbnM7IEZsYWNjaWQg4p6UIElud2FyZCBsZWFmIHJvbGxpbmc8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjQ1IiB5PSIyOTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjQUFBIj4gIGR1cmluZyB3YXRlciBzdHJlc3MgdG8gcmVkdWNlIHRyYW5zcGlyYXRpb24hPC90ZXh0PgogICAgICA8dGV4dCB4PSIzMCIgeT0iMzI1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0VBODBGQyI+VmFzY3VsYXIgU3lzdGVtOjwvdHNwYW4+IFBhcmFsbGVsIHZlbmF0aW9uIOKelDwvdGV4dD4KICAgICAgPHRleHQgeD0iNDUiIHk9IjM0OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZmlsbD0iI0RERCI+ICBOZWFybHkgZXF1YWwgc2l6ZWQgdmFzY3VsYXIgYnVuZGxlcyAoZXhjZXB0IG1haW4gdmVpbikuPC90ZXh0PgogICAgICA8dGV4dCB4PSI0NSIgeT0iMzY4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmaWxsPSIjREREIj4gIEV4YW1wbGU6IEdyYXNzZXMsIE1haXplICZhbXA7IFdoZWF0IGxlYXZlcy48L3RleHQ+CiAgICA8L2c+CiAgPC9nPgoKICA8IS0tIEJvdHRvbSBCYXIgLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDQ5NSkiPgogICAgPHJlY3Qgd2lkdGg9IjcyMCIgaGVpZ2h0PSI1MCIgcng9IjEwIiBmaWxsPSJyZ2JhKDIyNCw2NCwyNTEsMC4xNSkiIHN0cm9rZT0iI0UwNDBGQiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz4KICAgIDx0ZXh0IHg9IjM2MCIgeT0iMzEiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRUE4MEZDIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EaWNvdCBMZWFmID0gUGFsaXNhZGUgKyBTcG9uZ3kgTWVzb3BoeWxsIHwgTW9ub2NvdCBMZWFmID0gQnVsbGlmb3JtIENlbGxzICZhbXA7IFVuaWZvcm0gTWVzb3BoeWxsPC90ZXh0PgogIDwvZz4KPC9zdmc+' style='width: 100%; max-width: 580px; height: auto; border-radius: 10px; border: 1.5px solid #E040FB;' alt='Leaf Anatomy' /><p style='color: #E040FB; font-size: 13px; margin-top: 4px; font-weight: bold;'>Figure Q58: 3D Dicot vs Monocot Leaf Anatomy</p></div>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q59. Detail Epidermal Tissue System components (Epidermis, Stomata, Trichomes, Root hairs).</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Epidermis forms outer protective barrier with cuticle; Stomata with guard cells regulate gas exchange; Trichomes and root hairs act as specialized appendages.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q60. Detail Ground Tissue System organization into Parenchyma, Collenchyma, and Sclerenchyma.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Parenchyma provides bulk storage/photosynthesis; Collenchyma provides flexible mechanical support; Sclerenchyma provides rigid structural strength.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q61. Explain Vascular Tissue System: Radial vs Conjoint (Open vs Closed) bundles with diagrams.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Radial (alternating radii in roots); Conjoint Open (cambium present in dicot stem); Conjoint Closed (no cambium in monocot stem).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q62. Compare Dicot Root and Monocot Root in tabular format.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      • <b style='color: #E040FB;'>Dicot Root:</b> Diarch-Tetrarch, small pith, secondary growth present.<br>• <b style='color: #E040FB;'>Monocot Root:</b> Polyarch (&gt;6), large pith, no secondary growth.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q63. Detail role of Casparian Strips in Root Endodermis.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Suberin deposits block apoplastic water flow, forcing water into symplastic path across plasma membrane into xylem.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q64. Compare Dicot Stem and Monocot Stem in tabular format.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      • <b style='color: #E040FB;'>Dicot Stem:</b> Ring open bundles, collenchymatous hypodermis, large pith.<br>• <b style='color: #E040FB;'>Monocot Stem:</b> Scattered closed bundles, sclerenchymatous hypodermis, lysigenous water cavity.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q65. Explain anatomy of Dicot Stem detailing Cortex, Starch Sheath, Pericycle, and Medullary Rays.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Epidermis ➔ Collenchymatous Hypodermis ➔ Parenchymatous Cortex ➔ Starch Sheath Endodermis ➔ Sclerenchymatous Pericycle ➔ Ring Bundles ➔ Pith.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q66. Explain anatomy of Monocot Stem detailing Sclerenchymatous Hypodermis, Ground Tissue, and Lysigenous Cavities.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Epidermis ➔ Sclerenchymatous Hypodermis ➔ Continuous parenchymatous Ground Tissue ➔ Scattered Closed Vascular Bundles with lysigenous water cavity.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q67. Compare Dorsiventral Dicot Leaf and Isobilateral Monocot Leaf in tabular format.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      • <b style='color: #E040FB;'>Dicot Leaf:</b> Hypostomatous, Palisade/Spongy mesophyll, reticulate venation.<br>• <b style='color: #E040FB;'>Monocot Leaf:</b> Amphistomatous, uniform mesophyll, bulliform cells, parallel venation.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q68. Detail structure and function of Bulliform Cells in Grass leaves.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Large empty epidermal cells absorb water to expand leaf blade or lose water during drought to roll leaves inward, minimizing transpiration.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q69. Explain Stomatal Apparatus: Guard cells, Stomatal pore, and Subsidiary cells.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Stomatal pore flanked by 2 guard cells containing chloroplasts, surrounded by specialized subsidiary cells regulating pore opening/closing.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q70. Explain Endarch vs Exarch primary xylem development.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Endarch (protoxylem develops first towards center/pith in stems); Exarch (protoxylem develops first towards outer periphery in roots).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q71. Detail structure and function of Xylem elements (Tracheids, Vessels, Parenchyma, Fibers).</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Tracheids and perforated Vessels transport water passively under tension; Parenchyma stores food; Fibers provide mechanical support.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q72. Detail structure and function of Phloem elements (Sieve Tubes, Companion Cells, Parenchyma, Fibers).</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Sieve tube elements connected via sieve plates translocate sugars, aided by nucleated Companion Cells.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q73. Explain anatomy of Dicot Root from Epiblema to Pith.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Epiblema ➔ Parenchymatous Cortex ➔ Endodermis with Casparian strips ➔ Pericycle ➔ Radial Exarch Bundles ➔ Inconspicuous Pith.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q74. Explain anatomy of Monocot Root from Epiblema to Pith.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Epiblema ➔ Cortex ➔ Endodermis ➔ Pericycle ➔ Polyarch Exarch Bundles ➔ Large central Pith.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q75. Detail anatomy of Dorsiventral Leaf Mesophyll (Palisade vs Spongy).</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Palisade parenchyma consists of upper columnar cells packed with chloroplasts; Spongy parenchyma consists of lower loose rounded cells with air cavities.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q76. Explain anatomy of Isobilateral Leaf Mesophyll and Bundle Sheath.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Mesophyll is homogeneous without palisade/spongy distinction; vascular bundles surrounded by sclerenchymatous/parenchymatous bundle sheath.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q77. Differentiate Collenchyma and Sclerenchyma tissues.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      <b style='color: #E040FB;'>Collenchyma:</b> Living cells thickened at corners with pectin/cellulose.<br><b style='color: #E040FB;'>Sclerenchyma:</b> Dead cells with uniformly lignified thick walls and pits.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q78. Differentiate Parenchyma and Collenchyma tissues.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      <b style='color: #E040FB;'>Parenchyma:</b> Thin cellulosic walls, active in storage/photosynthesis.<br><b style='color: #E040FB;'>Collenchyma:</b> Pectin-thickened corners, flexible mechanical support.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q79. Explain why Monocot stems do NOT show secondary growth.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Monocot stem vascular bundles are closed (lacking vascular cambium between xylem and phloem).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q80. Explain why Dicot stems undergo secondary growth.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Dicot stem vascular bundles are open (possess intrafascicular cambium) which forms a continuous cambial ring.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q81. Describe structure and function of Pericycle in Dicot Stem vs Dicot Root.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      In stem, pericycle forms semilunar sclerenchyma patches above phloem; in root, parenchymatous pericycle gives rise to lateral roots.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q82. Detail anatomical adaptations of leaves to minimize transpiration.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Thick waxy cuticle, sunken stomata, trichome hairs, and bulliform motor cell rolling in grasses.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q83. Detail anatomical adaptations of roots for efficient water absorption.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Unicellular root hairs expanding surface area, thin epiblema without cuticle, and endodermal Casparian strips.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q84. Compare Vascular Bundles of Dicot Stem, Monocot Stem, Dicot Root, Monocot Root.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Dicot Stem (Ring, Conjoint Open); Monocot Stem (Scattered, Conjoint Closed); Dicot Root (Radial Diarch-Tetrarch); Monocot Root (Radial Polyarch).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q85. Explain significance of Bundle Sheath Cells in C4 plant leaves.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Large chlorophyllous cells surrounding vascular bundles in C4 plants (Kranz Anatomy) performing Calvin cycle efficiently.
    </div>
  </div>
  <!-- SECTION D: LONG ANSWER QUESTIONS (Q86 to Q100) -->
  <div style="background: rgba(224, 64, 251, 0.12); border: 1.5px solid #E040FB; border-radius: 10px; padding: 14px; margin-top: 30px; margin-bottom: 20px;">
    <h2 style="color: #E040FB; margin: 0 0 6px 0; font-size: 19px; font-weight: bold;">SECTION D: Long Answer Questions (Q86 to Q100)</h2>
    <p style="color: #E040FB; margin: 0; font-size: 14px;">15 Advanced Conceptual & Analytical Questions • 5 Marks Each (Roman Subparts: (i) Theory + (ii) Step Numerical/Anatomical Audits)</p>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q86: Master Plant Tissue Systems Classification</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Detail Epidermal, Ground, and Vascular Tissue Systems with cell types, functions, and anatomical locations.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Epidermal system (outer protection, cuticle, stomata); Ground system (cortex, pith, mesophyll); Vascular system (xylem & phloem conduction).
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Explain Xylem and Phloem primary development: Endarch vs Exarch protoxylem orientation.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      Endarch (protoxylem inside in stems); Exarch (protoxylem outside in roots).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q87: Dicot vs Monocot Root Anatomical Audit</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Detail internal cross-sectional anatomy of Dicot Root (Epiblema, Cortex, Endodermis, Pericycle, Radial Exarch Bundles, Pith).</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Diarch to tetrarch exarch radial bundles, suberin Casparian strips, small/inconspicuous central pith.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Detail internal cross-sectional anatomy of Monocot Root and compare 5 key anatomical differences.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      Polyarch (>6) bundles, large central pith, lacks secondary growth.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q88: Dicot vs Monocot Stem Anatomical Audit</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Detail internal cross-sectional anatomy of Dicot Stem (Epidermis, Hypodermis, Cortex, Starch Sheath, Pericycle, Ring Open Bundles, Pith).</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Collenchymatous hypodermis, ring of conjoint collateral open bundles with cambium, large central pith.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Detail internal cross-sectional anatomy of Monocot Stem and explain Lysigenous Water Cavity formation.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      Sclerenchymatous hypodermis, scattered conjoint collateral closed bundles with lysigenous water cavity.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q89: Dicot vs Monocot Leaf Anatomical Audit</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Detail internal anatomy of Dorsiventral Dicot Leaf (Adaxial/Abaxial Epidermis, Hypostomatous, Palisade & Spongy Mesophyll, Bundle Sheath).</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Hypostomatous, mesophyll differentiated into upper columnar palisade and lower loose spongy parenchyma.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Detail internal anatomy of Isobilateral Monocot Leaf and explain Bulliform Motor Cells mechanism.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      Amphistomatous, uniform mesophyll, bulliform motor cells roll leaves during drought.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q90: Vascular Bundle Types & Secondary Growth Potential</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Classify Vascular Bundles into Radial, Conjoint Collateral (Open & Closed), and Bicollateral with diagrams.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Radial (roots); Conjoint Open (dicot stem); Conjoint Closed (monocot stem); Bicollateral (Solanaceae).
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Explain why Open bundles permit secondary growth whereas Closed bundles prevent secondary growth.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      Open bundles possess vascular cambium strips that undergo periclinal cell divisions forming secondary xylem & phloem.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q91: Casparian Strips & Root Transport Physiology</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Detail chemical composition, cellular location, and waterproof mechanism of Casparian Strips.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Suberin bands on radial/transverse endodermal walls block apoplastic solute leakage.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Explain Apoplastic vs Symplastic pathways of water movement across root cortex into xylem.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      Apoplast (through cell walls until blocked by Casparian strip); Symplast (through cytoplasm & plasmodesmata).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q92: Stomatal Architecture & Transpiration Control</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Detail structure of Stomatal Apparatus (Guard cells, Stomatal Pore, Subsidiary cells) in Dicots vs Monocots.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Kidney-shaped guard cells in dicots; Dumbbell-shaped guard cells in monocots.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Explain potassium ion (K+) pump hypothesis of stomatal opening and closing.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      Active K+ influx into guard cells decreases osmotic potential, drawing water to make cells turgid and open pore.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q93: Anatomical Modifications for Mechanical Support</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Compare Collenchyma and Sclerenchyma tissues based on wall thickening, cell viability, and location.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Collenchyma (living pectin-thickened corners in young stems); Sclerenchyma (dead lignified walls in fibers/sclereids).
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Explain role of Hypodermis, Pericycle, and Bundle Sheath in providing mechanical strength to stems and leaves.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      Collenchymatous/sclerenchymatous hypodermis and pericycle patches prevent stem bending and breakage.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q94: Comparative Master Anatomy of Plant Organs</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Construct master comparative table comparing Dicot Root, Monocot Root, Dicot Stem, Monocot Stem, Dicot Leaf, Monocot Leaf.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Comprehensive 6-organ anatomical matrix comparing epidermis, hypodermis, cortex, vascular bundles, pith, and mesophyll.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Explain how internal tissue arrangements reflect physiological functions of absorption, conduction, and photosynthesis.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      Root hairs maximize absorption; endodermis filters solutes; ring bundles optimize cambial growth; palisade optimizes photosynthesis.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q95: Mesophyll Specialization & Photosynthetic Efficiency</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Detail structural organization of Palisade and Spongy Parenchyma in dorsiventral leaves.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Palisade columnar cells optimize photon capture; spongy air cavities optimize CO2 diffusion.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Explain Kranz Anatomy in C4 plant leaves and compare with C3 leaf anatomy.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      Kranz anatomy features large chloroplastic bundle sheath cells surrounding vascular bundles in C4 plants.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q96: Root Secondary Growth Foundations</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Explain origin and formation of Vascular Cambium Ring in Dicot Roots.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Wavy cambial ring originates from parenchyma below phloem and pericycle above protoxylem.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Explain origin and activity of Cork Cambium (Phellogen) forming Periderm (Phellem & Phelloderm).</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      Outer pericycle cells form phellogen producing protective cork (phellem) externally.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q97: Stem Secondary Growth Foundations</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Detail formation of continuous Cambial Ring in Dicot Stems via Intrafascicular and Interfascicular Cambium.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Intrafascicular cambium inside bundles joins interfascicular cambium between bundles to form complete ring.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Explain formation of Secondary Xylem (Wood), Secondary Phloem, and Medullary Rays.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      Cambium cuts off secondary xylem inward and secondary phloem outward, creating growth rings.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q98: Anatomical Audits of Epidermal Appendages</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Detail origin, structure, and functions of Root Hairs in absorption.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Unicellular tubular epiblema outgrowths expanding surface area for passive and active water intake.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Detail origin, structure, types (glandular vs non-glandular), and functions of Stem Trichomes.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      Multicellular epidermal appendages reducing air movement and transpiration.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q99: Anatomical Adaptations to Drought (Xerophytic Anatomy)</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Detail anatomical features of xerophytic stems and leaves (thick cuticle, sunken stomata, sclerenchyma, bulliform cells).</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Thick cuticle and sunken stomata reduce transpiration; sclerenchyma prevents wilting.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Explain mechanism of Leaf Rolling in grasses driven by Bulliform Motor Cells flaccidity.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      Water stress causes bulliform cells to lose water and collapse, rolling leaf blade inward.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q100: Master Synthesis: Unified Plant Anatomy Framework</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Synthesize complete unified plant anatomy framework connecting Tissue Systems (Epidermal, Ground, Vascular) ⟶ Organ Anatomies (Roots, Stems, Leaves) ⟶ Physiological Functions (Absorption, Conduction, Photosynthesis).</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Integrated structural hierarchy showing how cellular differentiation into tissue systems establishes organ anatomy for terrestrial plant survival.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Provide step-by-step diagnostic anatomical key to identify an unknown plant slide into Dicot/Monocot Root, Stem, or Leaf.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      1. Presence of root hairs & radial bundles = Root (Exarch). 2. Ring open bundles = Dicot Stem. 3. Scattered closed bundles = Monocot Stem. 4. Palisade mesophyll = Dicot Leaf. 5. Bulliform cells = Monocot Leaf.
    </div>
  </div>
</div>
`;
