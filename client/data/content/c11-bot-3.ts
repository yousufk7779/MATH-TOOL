// Class 11 Botany Chapter 3: Plant Anatomy
// Gold Standard Reference Textbook & 3-Tab Architecture
// Subject: Botany | Class: 11 | Code: c11-bot-3

export const c11Bot3HtmlOverview = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- Quick Glossary Card with Chapter Subtitle -->
  <div style="background: linear-gradient(135deg, rgba(224, 64, 251, 0.12), rgba(156, 39, 176, 0.12)); border: 1.5px solid rgba(224, 64, 251, 0.35); border-radius: 12px; padding: 18px 20px; margin-bottom: 26px; box-shadow: 0 4px 20px rgba(0,0,0,0.25);">
    <h2 style="color: #E040FB; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center;">📖 Quick Glossary &amp; Basic Definitions</h2>
    <p style="color: #E040FB; margin: 0 0 16px 0; font-size: 14.5px; text-align: center; font-weight: 500;">Essential Core Concepts &amp; Key Definitions &bull; Chapter 3: Plant Anatomy</p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #E040FB;">Plant Anatomy:</b> The study of the internal structural organization and tissue systems of plants pioneered by Nehemiah Grew (Father of Plant Anatomy).
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #E040FB;">Casparian Strip:</b> An impermeable, suberized and lignified band found in the radial and transverse walls of endodermal cells in roots, blocking the apoplastic pathway.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #E040FB;">Stele:</b> The entire central cylinder of primary vascular plants comprising pericycle, vascular bundles, medullary rays, and pith.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #E040FB;">Open Vascular Bundle:</b> A conjoint vascular bundle containing an active strip of intrafascicular cambium between xylem and phloem, capable of secondary growth (Dicots).
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #E040FB;">Bulliform Cells:</b> Large, empty, colorless hygroscopic epidermal cells present on the adaxial surface of grass leaves that roll the leaf inward to prevent water loss during drought.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #E040FB;">Dendrochronology:</b> The scientific method of dating and estimating the age of woody trees by counting the concentric annual growth rings in secondary xylem.
      </div>
    </div>
  </div>

  <!-- MAIN SECTION -->
  <h2 style="color: #E040FB; border-bottom: 2px solid #E040FB; padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    Tissue systems in plants – Epidermal, ground and vascular tissue systems; Anatomy and functions of dicot and monocot root, stem and leaves
  </h2>

  <!-- PRESERVED IMAGE 1 -->
  <div style="text-align: center; margin: 24px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NjAgNTYwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYzAwMmIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMzYjAwNTQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMWMwMDJiIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGZpbHRlciBpZD0iZ2xvdyI+CiAgICAgIDxmZURyb3BTaGFkb3cgZHg9IjAiIGR5PSI0IiBzdGREZXZpYXRpb249IjYiIGZsb29kLWNvbG9yPSIjRTA0MEZCIiBmbG9vZC1vcGFjaXR5PSIwLjYiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNzYwIiBoZWlnaHQ9IjU2MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDEpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjM4MCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPlBsYW50IFRpc3N1ZSBTeXN0ZW1zIEFyY2hpdGVjdHVyZSAoM0QgU3RydWN0dXJlKTwvdGV4dD4KCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDY1KSI+CiAgICA8IS0tIDEuIEVwaWRlcm1hbCBUaXNzdWUgU3lzdGVtIC0tPgogICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjIyNiIgaGVpZ2h0PSI0MTAiIHJ4PSIxNCIgZmlsbD0icmdiYSgyMjQsNjQsMjUxLDAuMDgpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMTEzIiB5PSIzMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xLiBFUElERVJNQUwgU1lTVEVNPC90ZXh0PgoKICAgIDxyZWN0IHg9IjEyIiB5PSI1NSIgd2lkdGg9IjIwMiIgaGVpZ2h0PSIxMDAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMjIiIHk9Ijc4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGOEJCRDAiPuKAoiBPdXRlciBQcm90ZWN0aXZlIExheWVyPC90ZXh0PgogICAgPHRleHQgeD0iMjIiIHk9IjEwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPlNpbmdsZSBsYXllciBwYXJlbmNoeW1hdG91czwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSIxMjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5XYXh5IEN1dGljbGUgb24gb3V0ZXIgd2FsbDwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSIxNDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5QcmV2ZW50cyB3YXRlciB0cmFuc3BpcmF0aW9uPC90ZXh0PgoKICAgIDxyZWN0IHg9IjEyIiB5PSIxNzAiIHdpZHRoPSIyMDIiIGhlaWdodD0iMTEwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRTA0MEZCIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjIyIiB5PSIxOTMiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0Y4QkJEMCI+4oCiIFN0b21hdGFsIEFwcGFyYXR1czwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSIyMTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5HdWFyZCBDZWxsczogS2lkbmV5IChEaWNvdCk8L3RleHQ+CiAgICA8dGV4dCB4PSIyMiIgeT0iMjM1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+R3VhcmQgQ2VsbHM6IER1bWJiZWxsIChNb25vY290KTwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSIyNTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5TdWJzaWRpYXJ5IGNlbGxzIGFyb3VuZDwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSIyNzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjNjlGMEFFIj5SZWd1bGF0ZXMgdHJhbnNwaXJhdGlvbiAmYW1wOyBnYXM8L3RleHQ+CgogICAgPHJlY3QgeD0iMTIiIHk9IjI5NSIgd2lkdGg9IjIwMiIgaGVpZ2h0PSIxMDAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMjIiIHk9IjMxOCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRjhCQkQwIj7igKIgQXBwZW5kYWdlczwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSIzNDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5UcmljaG9tZXM6IFN0ZW0gaGFpcnMgKG11bHRpKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSIzNjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5Sb290IEhhaXJzOiBVbmljZWxsdWxhciBleHRlbmQ8L3RleHQ+CiAgICA8dGV4dCB4PSIyMiIgeT0iMzgwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+U2VjcmV0b3J5IC8gU2VjcmV0aW9uIGZ1bmN0aW9uPC90ZXh0PgoKICAgIDwhLS0gMi4gR3JvdW5kIFRpc3N1ZSBTeXN0ZW0gLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNDcsIDApIj4KICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjIyNiIgaGVpZ2h0PSI0MTAiIHJ4PSIxNCIgZmlsbD0icmdiYSgyNTUsMTQ1LDAsMC4wOCkiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICAgIDx0ZXh0IHg9IjExMyIgeT0iMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGOTEwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Mi4gR1JPVU5EIFNZU1RFTTwvdGV4dD4KCiAgICAgIDxyZWN0IHg9IjEyIiB5PSI1NSIgd2lkdGg9IjIwMiIgaGVpZ2h0PSIxMDAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSIyMiIgeT0iNzgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRDE4MCI+4oCiIFBhcmVuY2h5bWE8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5UaGluIGNlbGx1bG9zaWMgcHJpbWFyeSB3YWxsPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMTIwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+SXNvZGlhbWV0cmljIGxpdmluZyBjZWxsczwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjE0MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPlN0b3JhZ2UsIGFzc2ltaWxhdGlvbiwgcGhvdG9zeW50aGVzaXM8L3RleHQ+CgogICAgICA8cmVjdCB4PSIxMiIgeT0iMTcwIiB3aWR0aD0iMjAyIiBoZWlnaHQ9IjExMCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIxOTMiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRDE4MCI+4oCiIENvbGxlbmNoeW1hPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMjE1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+UGVjdGluIHRoaWNrIGNvcm5lciB3YWxsczwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjIzNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPk1lY2hhbmljYWwgZmxleGliaWxpdHk8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIyNTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5IeXBvZGVybWlzIG9mIGRpY290IHN0ZW1zPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMjcyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzY5RjBBRSI+TGl2aW5nIG1lY2hhbmljYWwgc3VwcG9ydDwvdGV4dD4KCiAgICAgIDxyZWN0IHg9IjEyIiB5PSIyOTUiIHdpZHRoPSIyMDIiIGhlaWdodD0iMTAwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRkY5MTAwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPHRleHQgeD0iMjIiIHk9IjMxOCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZEMTgwIj7igKIgU2NsZXJlbmNoeW1hPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMzQwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+SGlnaGx5IGxpZ25pZmllZCBkZWFkIGNlbGxzPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMzYwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+RmliZXJzICZhbXA7IFNjbGVyZWlkcyAoZ3JpdHR5KTwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjM4MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPlJpZ2lkIHN0cnVjdHVyYWwgc3VwcG9ydDwvdGV4dD4KICAgIDwvZz4KCiAgICA8IS0tIDMuIFZhc2N1bGFyIFRpc3N1ZSBTeXN0ZW0gLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0OTQsIDApIj4KICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjIyNiIgaGVpZ2h0PSI0MTAiIHJ4PSIxNCIgZmlsbD0icmdiYSgwLDIzMCwxMTgsMC4wOCkiIHN0cm9rZT0iIzAwRTY3NiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICAgIDx0ZXh0IHg9IjExMyIgeT0iMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwRTY3NiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+My4gVkFTQ1VMQVIgU1lTVEVNPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMTIiIHk9IjU1IiB3aWR0aD0iMjAyIiBoZWlnaHQ9IjEwMCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iIzAwRTY3NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSI3OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjlGMEFFIj7igKIgWHlsZW0gJmFtcDsgUGhsb2VtPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMTAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+WHlsZW06IFRyYWNoZWlkcyAmYW1wOyBWZXNzZWxzPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMTIwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+UGhsb2VtOiBTaWV2ZSBUdWJlICZhbXA7IENvbXBhbmlvbjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjE0MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPldhdGVyICZhbXA7IGZvb2QgdHJhbnNsb2NhdGlvbjwvdGV4dD4KCiAgICAgIDxyZWN0IHg9IjEyIiB5PSIxNzAiIHdpZHRoPSIyMDIiIGhlaWdodD0iMTEwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjMDBFNjc2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPHRleHQgeD0iMjIiIHk9IjE5MyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjlGMEFFIj7igKIgQnVuZGxlIFR5cGVzPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMjE1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+UmFkaWFsOiBTZXBhcmF0ZSByYWRpaSAoUm9vdHMpPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMjM1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+Q29uam9pbnQgT3BlbjogQ2FtYml1bSAoU3RlbSk8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIyNTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5Db25qb2ludCBDbG9zZWQ6IE5vIGNhbWJpdW08L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIyNzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjNjlGMEFFIj5Nb25vY290IHN0ZW0gPSBTY2F0dGVyZWQgY2xvc2VkPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMTIiIHk9IjI5NSIgd2lkdGg9IjIwMiIgaGVpZ2h0PSIxMDAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiMwMEU2NzYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSIyMiIgeT0iMzE4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2OUYwQUUiPuKAoiBYeWxlbSBPcmllbnRhdGlvbjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjM0MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPkVuZGFyY2g6IFByb3RveHlsZW0gaW5zaWRlIChTdGVtKTwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjM2MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPkV4YXJjaDogUHJvdG94eWxlbSBvdXRzaWRlIChSb290KTwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjM4MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPkRldmVsb3BtZW50YWwgZGlyZWN0aW9uPC90ZXh0PgogICAgPC9nPgogIDwvZz4KCiAgPCEtLSBCb3R0b20gQmFyIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLCA0OTUpIj4KICAgIDxyZWN0IHdpZHRoPSI3MjAiIGhlaWdodD0iNTAiIHJ4PSIxMCIgZmlsbD0icmdiYSgyMjQsNjQsMjUxLDAuMTUpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMS44Ii8+CiAgICA8dGV4dCB4PSIzNjAiIHk9IjMxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0Y4QkJEMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UGxhbnQgQW5hdG9teSDinpQgRXBpZGVybWFsICsgR3JvdW5kICsgVmFzY3VsYXIgVGlzc3VlIFN5c3RlbXMgRm9ybSBDb21wbGV0ZSBQbGFudCBBeGlzPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 650px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 6px 22px rgba(224, 64, 251, 0.4); border: 2px solid #E040FB;" alt="3D Plant Tissue Systems Architecture" /><p style="color: #E040FB; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 3.1: 3D Plant Tissue Systems Architecture (Epidermal, Ground &amp; Vascular Tissue Systems)</p></div>

  

  <p>
    Plants possess tissues grouped into specialized tissue systems that perform coordinated physiological functions. Julius von Sachs (1875) classified plant tissues into three fundamental systems based on their location: Epidermal Tissue System, Ground (Fundamental) Tissue System, and Vascular (Conducting) Tissue System.
  </p>

  <h3 style="color: #E040FB; margin-top: 18px; font-size: 16.5px;">(i) Tissue Systems in Plants: Epidermal, Ground, and Vascular Tissue Systems</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(224, 64, 251, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #E040FB;">1. Epidermal Tissue System:</b> Outermost protective boundary:
        <br/>- <b style="color: #E040FB;">Epidermis:</b> Single continuous layer of parenchymatous cells with waxy <b>Cuticle</b> (prevents transpiration; absent in roots).
        <br/>- <b style="color: #E040FB;">Stomatal Apparatus:</b> Stomatal pore flanked by two specialized <b>Guard Cells</b> (bean-shaped in dicots; dumbbell-shaped in grasses) possessing chloroplasts and differential wall thickening (thick inner wall, thin elastic outer wall) and surrounded by <b>Subsidiary cells</b>.
        <br/>- <b style="color: #E040FB;">Epidermal Appendages:</b> Unicellular <b>Root Hairs</b> (absorb water) vs Multicellular <b>Trichomes</b> on stems (secretory or water-loss preventive).
      </li>
      <li><b style="color: #E040FB;">2. Ground (Fundamental) Tissue System:</b> Forms bulk of plant body between epidermis and vascular cylinder:
        <br/>- <b style="color: #E040FB;">Cortex:</b> Parenchyma, Collenchyma (hypodermis providing mechanical tensile strength in dicot stems), and Endodermis.
        <br/>- <b style="color: #E040FB;">Pericycle:</b> Outermost layer of stele giving rise to lateral roots and vascular cambium.
        <br/>- <b style="color: #E040FB;">Pith &amp; Medullary Rays:</b> Central parenchymatous core and radial cellular strands.
        <br/>- <b style="color: #E040FB;">Mesophyll:</b> Ground tissue of leaves containing chloroplasts, differentiated into upper columnar <b>Palisade</b> and lower loose <b>Spongy</b> parenchyma in dicots.
      </li>
      <li><b style="color: #E040FB;">3. Vascular Tissue System:</b> Complex conducting tissues (Xylem &amp; Phloem):
        <br/>- <b style="color: #E040FB;">Radial:</b> Xylem and phloem occur in separate bundles arranged alternately on different radii (Characteristic of <b>all Roots</b>).
        <br/>- <b style="color: #E040FB;">Conjoint:</b> Xylem and phloem lie along the same radius in a single bundle (Stems &amp; Leaves):
        <br/>&nbsp;&nbsp;&bull; <i>Open:</i> Active cambium present between xylem and phloem (<b>Dicot Stem</b>; allows secondary growth).
        <br/>&nbsp;&nbsp;&bull; <i>Closed:</i> Cambium completely absent (<b>Monocot Stem</b>; no secondary growth).
      </li>
    </ul>
  </div>

  <!-- NEW STANDALONE SVG CARD FOR VASCULAR BUNDLES & STOMATA -->
  
<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(224, 64, 251, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 500px;">
    <svg viewBox="0 0 500 280" style="width: 100%; max-width: 470px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="280" rx="8" fill="#0F172A"/>

      <!-- Title -->
      <text x="250" y="26" fill="#E040FB" font-size="14" font-weight="bold" text-anchor="middle">
        Types of Vascular Bundles &amp; Stomatal Apparatus
      </text>

      <!-- Row 1: 3 Major Vascular Bundle Architectures -->
      <g transform="translate(20, 42)">
        <!-- Radial -->
        <rect x="0" y="0" width="140" height="110" rx="6" fill="rgba(38, 198, 218, 0.15)" stroke="#26C6DA" stroke-width="1.2"/>
        <text x="70" y="20" fill="#26C6DA" font-size="11" font-weight="bold" text-anchor="middle">1. Radial</text>
        <text x="70" y="38" fill="#FFFFFF" font-size="9" text-anchor="middle">Separate Radii</text>
        <circle cx="70" cy="65" r="20" fill="none" stroke="#26C6DA" stroke-width="1.5"/>
        <circle cx="70" cy="55" r="4" fill="#69F0AE"/>
        <circle cx="70" cy="75" r="4" fill="#69F0AE"/>
        <circle cx="60" cy="65" r="4" fill="#FF8A65"/>
        <circle cx="80" cy="65" r="4" fill="#FF8A65"/>
        <text x="70" y="96" fill="#80DEEA" font-size="8.5" text-anchor="middle">Xylem &amp; Phloem alternate</text>
        <text x="70" y="106" fill="#FFE082" font-size="8" font-weight="bold" text-anchor="middle">All Roots (Dicot &amp; Monocot)</text>

        <!-- Conjoint Open -->
        <rect x="160" y="0" width="140" height="110" rx="6" fill="rgba(224, 64, 251, 0.15)" stroke="#E040FB" stroke-width="1.2"/>
        <text x="230" y="20" fill="#E040FB" font-size="11" font-weight="bold" text-anchor="middle">2. Conjoint Open</text>
        <text x="230" y="38" fill="#FFFFFF" font-size="9" text-anchor="middle">Cambium Present</text>
        <rect x="205" y="48" width="50" height="14" rx="2" fill="#FF8A65"/>
        <line x1="205" y1="65" x2="255" y2="65" stroke="#FFE082" stroke-width="2"/>
        <rect x="205" y="68" width="50" height="16" rx="2" fill="#69F0AE"/>
        <text x="230" y="96" fill="#EA80FC" font-size="8.5" text-anchor="middle">Phloem / Cambium / Xylem</text>
        <text x="230" y="106" fill="#FFE082" font-size="8" font-weight="bold" text-anchor="middle">Dicot Stem (Secondary Growth)</text>

        <!-- Conjoint Closed -->
        <rect x="320" y="0" width="140" height="110" rx="6" fill="rgba(255, 145, 0, 0.15)" stroke="#FF9100" stroke-width="1.2"/>
        <text x="390" y="20" fill="#FF9100" font-size="11" font-weight="bold" text-anchor="middle">3. Conjoint Closed</text>
        <text x="390" y="38" fill="#FFFFFF" font-size="9" text-anchor="middle">Cambium Absent</text>
        <rect x="365" y="48" width="50" height="16" rx="2" fill="#FF8A65"/>
        <rect x="365" y="66" width="50" height="18" rx="2" fill="#69F0AE"/>
        <text x="390" y="96" fill="#FFB74D" font-size="8.5" text-anchor="middle">No Secondary Growth</text>
        <text x="390" y="106" fill="#FFE082" font-size="8" font-weight="bold" text-anchor="middle">Monocot Stem &amp; All Leaves</text>
      </g>

      <!-- Row 2: Stomatal Guard Cell Types -->
      <g transform="translate(20, 162)">
        <rect width="460" height="100" rx="6" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(224, 64, 251, 0.3)"/>
        <text x="230" y="18" fill="#E040FB" font-size="11" font-weight="bold" text-anchor="middle">
          Stomatal Apparatus: Dicot vs Monocot Guard Cells
        </text>

        <!-- Left: Bean-shaped Dicots -->
        <g transform="translate(40, 26)">
          <ellipse cx="60" cy="35" rx="16" ry="24" fill="none" stroke="#69F0AE" stroke-width="3"/>
          <ellipse cx="78" cy="35" rx="16" ry="24" fill="none" stroke="#69F0AE" stroke-width="3"/>
          <ellipse cx="69" cy="35" rx="4" ry="12" fill="#0F172A"/>
          <text x="70" y="70" fill="#FFFFFF" font-size="9.5" font-weight="bold" text-anchor="middle">Kidney / Bean Shaped</text>
          <text x="70" y="82" fill="#CBD5E1" font-size="8.5" text-anchor="middle">Dicot Leaves (Dorsiventral)</text>
        </g>

        <!-- Right: Dumbbell-shaped Monocots -->
        <g transform="translate(260, 26)">
          <!-- Dumbbell sketch -->
          <circle cx="50" cy="35" r="8" fill="#FF8A65"/>
          <circle cx="90" cy="35" r="8" fill="#FF8A65"/>
          <rect x="56" y="32" width="28" height="6" fill="#FF8A65"/>
          <text x="70" y="70" fill="#FFFFFF" font-size="9.5" font-weight="bold" text-anchor="middle">Dumbbell Shaped</text>
          <text x="70" y="82" fill="#CBD5E1" font-size="8.5" text-anchor="middle">Grasses &amp; Monocots (Isobilateral)</text>
        </g>
      </g>
    </svg>
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 Figure 3.4: Architectural Classification of Plant Vascular Bundles (Radial, Conjoint Open/Closed) &amp; Stomatal Apparatus Morphology
  </div>
</div>


  <!-- PRESERVED IMAGE 2 -->
  <div style="text-align: center; margin: 24px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NjAgNTYwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYzAwMmIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMzYjAwNTQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMWMwMDJiIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNzYwIiBoZWlnaHQ9IjU2MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDIpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjM4MCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EaWNvdCB2cyBNb25vY290IFJvb3QgJmFtcDsgU3RlbSBDcm9zcy1TZWN0aW9uYWwgQW5hdG9teTwvdGV4dD4KCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDY1KSI+CiAgICA8IS0tIDEuIERpY290IHZzIE1vbm9jb3QgUm9vdCAtLT4KICAgIDxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iNDIwIiByeD0iMTQiIGZpbGw9InJnYmEoMjI0LDY0LDI1MSwwLjA2KSIgc3Ryb2tlPSIjRTA0MEZCIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDx0ZXh0IHg9IjE3NSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE3IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0Y4QkJEMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MS4gUm9vdCBBbmF0b215IChEaWNvdCB2cyBNb25vY290KTwvdGV4dD4KCiAgICA8cmVjdCB4PSIxNSIgeT0iNTAiIHdpZHRoPSIzMjAiIGhlaWdodD0iMTc1IiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRTA0MEZCIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjI1IiB5PSI3MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNFMDQwRkIiPkRpY290IFJvb3QgKGUuZy4gU3VuZmxvd2VyKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iOTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj7igKIgRXBpYmxlbWEgd2l0aCB1bmljZWxsdWxhciByb290IGhhaXJzLjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIxMTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj7igKIgRW5kb2Rlcm1pcyB3aXRoIHN1YmVyaW4gQ2FzcGFyaWFuIFN0cmlwcy48L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMTM0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+4oCiIERpYXJjaCB0byBUZXRyYXJjaCAoMi00KSBSYWRpYWwgRXhhcmNoIGJ1bmRsZXMuPC90ZXh0PgogICAgPHRleHQgeD0iMjUiIHk9IjE1NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPuKAoiBJbmNvbnNwaWN1b3VzIHNtYWxsIGNlbnRyYWwgUGl0aC48L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMTc0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzY5RjBBRSI+4oCiIFBlcmljeWNsZSBnaXZlcyByaXNlIHRvIGxhdGVyYWwgcm9vdHMgJmFtcDsgY2FtYml1bS48L3RleHQ+CgogICAgPHJlY3QgeD0iMTUiIHk9IjIzNSIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMjUiIHk9IjI1NyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNFMDQwRkIiPk1vbm9jb3QgUm9vdCAoZS5nLiBNYWl6ZSk6PC90ZXh0PgogICAgPHRleHQgeD0iMjUiIHk9IjI3OSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPuKAoiBQb2x5YXJjaCAoJmd0OzYpIFJhZGlhbCBFeGFyY2ggVmFzY3VsYXIgQnVuZGxlcy48L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMjk5IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+4oCiIExhcmdlLCB3ZWxsLWRldmVsb3BlZCBjZW50cmFsIFBpdGguPC90ZXh0PgogICAgPHRleHQgeD0iMjUiIHk9IjMxOSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPuKAoiBDYXNwYXJpYW4gc3RyaXBzIHByZXNlbnQgaW4gZW5kb2Rlcm1pcy48L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMzM5IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+4oCiIE5PIGNhbWJpdW0gZm9ybWF0aW9uIOKelCBOTyBzZWNvbmRhcnkgZ3Jvd3RoLjwvdGV4dD4KCiAgICA8IS0tIDIuIERpY290IHZzIE1vbm9jb3QgU3RlbSAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM3MCwgMCkiPgogICAgICA8cmVjdCB3aWR0aD0iMzUwIiBoZWlnaHQ9IjQyMCIgcng9IjE0IiBmaWxsPSJyZ2JhKDIyNCw2NCwyNTEsMC4wNikiIHN0cm9rZT0iI0UwNDBGQiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICAgIDx0ZXh0IHg9IjE3NSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE3IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0Y4QkJEMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Mi4gU3RlbSBBbmF0b215IChEaWNvdCB2cyBNb25vY290KTwvdGV4dD4KCiAgICAgIDxyZWN0IHg9IjE1IiB5PSI1MCIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxNzUiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSIyNSIgeT0iNzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIj5EaWNvdCBTdGVtIChlLmcuIFN1bmZsb3dlcik6PC90ZXh0PgogICAgICA8dGV4dCB4PSIyNSIgeT0iOTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj7igKIgQ29sbGVuY2h5bWF0b3VzIEh5cG9kZXJtaXMuPC90ZXh0PgogICAgICA8dGV4dCB4PSIyNSIgeT0iMTE0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+4oCiIEVuZG9kZXJtaXMgZm9ybXMgU3RhcmNoIFNoZWF0aC48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIxMzQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj7igKIgUmluZyBBcnJhbmdlbWVudCBvZiBDb25qb2ludCBDb2xsYXRlcmFsIE9wZW4gYnVuZGxlcy48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIxNTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj7igKIgTGFyZ2UgY2VudHJhbCBQaXRoICZhbXA7IE1lZHVsbGFyeSBSYXlzLjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjUiIHk9IjE3NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM2OUYwQUUiPuKAoiBJbnRyYWZhc2NpY3VsYXIgQ2FtYml1bSBwcmVzZW50IChzZWNvbmRhcnkgZ3Jvd3RoKS48L3RleHQ+CgogICAgICA8cmVjdCB4PSIxNSIgeT0iMjM1IiB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE3MCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iI0UwNDBGQiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIyNTciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIj5Nb25vY290IFN0ZW0gKGUuZy4gTWFpemUpOjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjUiIHk9IjI3OSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPuKAoiBTY2xlcmVuY2h5bWF0b3VzIEh5cG9kZXJtaXMuPC90ZXh0PgogICAgICA8dGV4dCB4PSIyNSIgeT0iMjk5IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+4oCiIFVuZGlmZmVyZW50aWF0ZWQgR3JvdW5kIFRpc3N1ZSAobm8gY29ydGV4L3BpdGggc3BsaXQpLjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjUiIHk9IjMxOSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPuKAoiBTY2F0dGVyZWQgQ29uam9pbnQgQ29sbGF0ZXJhbCBDbG9zZWQgYnVuZGxlcy48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIzMzkiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj7igKIgTHlzaWdlbm91cyBXYXRlciBDYXZpdGllcyBpbnNpZGUgYnVuZGxlcy48L3RleHQ+CiAgICA8L2c+CiAgPC9nPgoKICA8IS0tIEJvdHRvbSBCYXIgLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDQ5NSkiPgogICAgPHJlY3Qgd2lkdGg9IjcyMCIgaGVpZ2h0PSI1MCIgcng9IjEwIiBmaWxsPSJyZ2JhKDIyNCw2NCwyNTEsMC4xNSkiIHN0cm9rZT0iI0UwNDBGQiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz4KICAgIDx0ZXh0IHg9IjM2MCIgeT0iMzEiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRjhCQkQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Sb290czogUmFkaWFsIEV4YXJjaCB8IERpY290IFN0ZW06IFJpbmcgT3BlbiBFbmRhcmNoIHwgTW9ub2NvdCBTdGVtOiBTY2F0dGVyZWQgQ2xvc2VkPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 650px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 6px 22px rgba(224, 64, 251, 0.4); border: 2px solid #E040FB;" alt="3D Dicot vs Monocot Root and Stem Anatomy" /><p style="color: #E040FB; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 3.2: 3D Dicot vs Monocot Root &amp; Stem Cross-Sectional Anatomy</p></div>

  

  <h3 style="color: #E040FB; margin-top: 22px; font-size: 16.5px;">(ii) Anatomy and Functions of Dicot and Monocot Roots</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(224, 64, 251, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Roots absorb water/minerals and provide subterranean anchorage:
      <br/>&bull; <b style="color: #E040FB;">Dicot Root (e.g., Sunflower, Gram):</b>
        <br/>- Epiblema (Piliferous layer) with unicellular root hairs; cuticle absent.
        <br/>- Massive multi-layered parenchymatous cortex with intercellular spaces.
        <br/>- <b style="color: #E040FB;">Endodermis:</b> Barrel-shaped cells with suberized <b>Casparian strips</b> on radial/tangential walls; forces water symplastically into vascular cylinder.
        <br/>- Pericycle gives origin to lateral roots and portions of secondary vascular cambium.
        <br/>- Vascular bundles: <b>Diarch to Hexarch (2 to 6 xylem bundles)</b>; xylem is <b>Exarch</b> (protoxylem points outward toward periphery, metaxylem inward).
        <br/>- Pith is extremely small or completely absent.
      <br/>&bull; <b style="color: #E040FB;">Monocot Root (e.g., Maize):</b>
        <br/>- Similar epiblema, cortex, and endodermis with Casparian strips.
        <br/>- Vascular bundles: <b>Polyarch (more than 6, often 20-30 xylem bundles)</b>.
        <br/>- <b>Pith is large, conspicuous, and well-developed</b>.
        <br/>- Completely lacks secondary growth (cambium never develops).
    </p>
  </div>

  <h3 style="color: #E040FB; margin-top: 22px; font-size: 16.5px;">(iii) Anatomy and Functions of Dicot and Monocot Stems</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(224, 64, 251, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Stems bear leaves, flowers, fruits, and conduct fluids:
      <br/>&bull; <b style="color: #E040FB;">Dicot Stem (e.g., Sunflower):</b>
        <br/>- Epidermis with cuticular cover and multicellular trichomes.
        <br/>- <b style="color: #E040FB;">Hypodermis:</b> 3-5 layers of <b>Collenchyma</b> providing tensile mechanical flexibility to young stems.
        <br/>- Endodermis rich in starch grains (termed <b>Starch Sheath</b>).
        <br/>- Pericycle: Sclerenchymatous patches forming hard semilunar caps over vascular bundles.
        <br/>- Vascular bundles: Arranged in a neat <b>broken ring (Eustele)</b>; <b>Conjoint, Collateral, Open</b> with active cambium strip; <b>Endarch xylem</b> (protoxylem faces center, metaxylem faces periphery).
        <br/>- Large central parenchymatous Pith with radiating Medullary Rays.
      <br/>&bull; <b style="color: #E040FB;">Monocot Stem (e.g., Maize):</b>
        <br/>- Epidermis without trichomes.
        <br/>- <b>Hypodermis is Sclerenchymatous</b> (thick-walled dead cells).
        <br/>- Ground tissue is undifferentiated, mass of parenchyma extending from hypodermis to center.
        <br/>- Vascular bundles: <b>Numerous, scattered throughout ground tissue (Atactostele)</b>; smaller and crowded toward periphery, larger toward center; each bundle enclosed in a <b>Sclerenchymatous Bundle Sheath</b>; <b>Conjoint, Collateral, Closed</b>; xylem vessels arranged in 'Y' or 'V' shape enclosing a <b>Lysigenous water cavity</b>.
    </p>
  </div>

  <!-- NEW STANDALONE SVG CARD FOR SECONDARY GROWTH -->
  
<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(224, 64, 251, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 500px;">
    <svg viewBox="0 0 500 280" style="width: 100%; max-width: 470px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="280" rx="8" fill="#0F172A"/>

      <!-- Title -->
      <text x="250" y="26" fill="#E040FB" font-size="14" font-weight="bold" text-anchor="middle">
        Secondary Growth in Dicot Stem &amp; Annual Rings Formation
      </text>

      <!-- Left Box: Cambial Ring Activity -->
      <g transform="translate(25, 45)">
        <rect width="210" height="135" rx="6" fill="rgba(224, 64, 251, 0.15)" stroke="#E040FB" stroke-width="1.2"/>
        <text x="105" y="20" fill="#E040FB" font-size="11" font-weight="bold" text-anchor="middle">Vascular Cambium Activity</text>
        <text x="105" y="38" fill="#FFFFFF" font-size="9.5" text-anchor="middle">Fascicular + Interfascicular Cambium</text>
        <text x="105" y="52" fill="#CBD5E1" font-size="8.5" text-anchor="middle">forms a continuous meristematic ring</text>
        <text x="105" y="74" fill="#69F0AE" font-size="9" font-weight="bold" text-anchor="middle">&bull; Inside: Secondary Xylem (Wood)</text>
        <text x="105" y="90" fill="#CBD5E1" font-size="8.5" text-anchor="middle">(Produced 8-10x more vigorously)</text>
        <text x="105" y="110" fill="#FF8A65" font-size="9" font-weight="bold" text-anchor="middle">&bull; Outside: Secondary Phloem (Bast)</text>
        <text x="105" y="126" fill="#FFE082" font-size="8" text-anchor="middle">Crushes primary tissues over time</text>
      </g>

      <!-- Right Box: Annual Rings (Spring vs Autumn Wood) -->
      <g transform="translate(260, 45)">
        <rect width="215" height="135" rx="6" fill="rgba(255, 145, 0, 0.15)" stroke="#FF9100" stroke-width="1.2"/>
        <text x="107" y="20" fill="#FF9100" font-size="11" font-weight="bold" text-anchor="middle">Annual Rings (Dendrochronology)</text>
        <text x="107" y="40" fill="#69F0AE" font-size="9.5" font-weight="bold" text-anchor="middle">1. Spring Wood (Early Wood):</text>
        <text x="107" y="54" fill="#CBD5E1" font-size="8.5" text-anchor="middle">Active cambium; wider vessels, low density</text>
        <text x="107" y="76" fill="#FFAB91" font-size="9.5" font-weight="bold" text-anchor="middle">2. Autumn Wood (Late Wood):</text>
        <text x="107" y="90" fill="#CBD5E1" font-size="8.5" text-anchor="middle">Less active; narrow vessels, high density</text>
        <text x="107" y="112" fill="#FFE082" font-size="9" font-weight="bold" text-anchor="middle">1 Spring + 1 Autumn = 1 Annual Ring</text>
        <text x="107" y="126" fill="#FFFFFF" font-size="8" text-anchor="middle">Counts tree age in temperate zones</text>
      </g>

      <!-- Bottom: Periderm & Cork Cambium -->
      <g transform="translate(25, 192)">
        <rect width="450" height="75" rx="6" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(255,255,255,0.2)"/>
        <text x="225" y="20" fill="#E040FB" font-size="11" font-weight="bold" text-anchor="middle">
          Periderm Formation (Secondary Protective Cover)
        </text>
        <text x="225" y="38" fill="#FFFFFF" font-size="9.5" text-anchor="middle">
          <b>Phellogen (Cork Cambium)</b> develops in outer cortex:
        </text>
        <text x="120" y="58" fill="#FF8A65" font-size="9" text-anchor="middle">Outside: <b>Phellem (Cork)</b> with Suberin</text>
        <text x="330" y="58" fill="#69F0AE" font-size="9" text-anchor="middle">Inside: <b>Phelloderm (Secondary Cortex)</b></text>
        <text x="225" y="70" fill="#FFE082" font-size="8" font-weight="bold" text-anchor="middle">Phellogen + Phellem + Phelloderm = Periderm (with aerating Lenticels)</text>
      </g>
    </svg>
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 Figure 3.5: Secondary Growth Mechanics in Dicot Stems: Cambial Ring Activity, Annual Rings (Dendrochronology) &amp; Periderm Architecture
  </div>
</div>


  <!-- PRESERVED IMAGE 3 -->
  <div style="text-align: center; margin: 24px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NjAgNTYwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYzAwMmIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMzYjAwNTQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMWMwMDJiIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNzYwIiBoZWlnaHQ9IjU2MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDMpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjM4MCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EaWNvdCAoRG9yc2l2ZW50cmFsKSB2cyBNb25vY290IChJc29iaWxhdGVyYWwpIExlYWYgQW5hdG9teTwvdGV4dD4KCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDY1KSI+CiAgICA8IS0tIDEuIERvcnNpdmVudHJhbCBEaWNvdCBMZWFmIC0tPgogICAgPHJlY3Qgd2lkdGg9IjM1MCIgaGVpZ2h0PSI0MjAiIHJ4PSIxNCIgZmlsbD0icmdiYSgyMjQsNjQsMjUxLDAuMDYpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMTc1IiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTciIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRjhCQkQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xLiBEaWNvdCAoRG9yc2l2ZW50cmFsKSBMZWFmPC90ZXh0PgoKICAgIDxyZWN0IHg9IjE1IiB5PSI1MCIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIzNTAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMjUiIHk9Ijc1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0UwNDBGQiI+4oCiIEVwaWRlcm1pcyAmYW1wOyBTdG9tYXRhOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSI5NyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPiAgRGlzdGluY3QgVXBwZXIgKEFkYXhpYWwpICZhbXA7IExvd2VyIChBYmF4aWFsKSBlcGlkZXJtaXMuPC90ZXh0PgogICAgPHRleHQgeD0iMjUiIHk9IjExNyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPiAgSHlwb3N0b21hdG91czogU3RvbWF0YSBwcmVzZW50IG1vc3RseSBvbiBsb3dlciBzdXJmYWNlLjwvdGV4dD4KCiAgICA8dGV4dCB4PSIyNSIgeT0iMTQ1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0UwNDBGQiI+4oCiIERpZmZlcmVudGlhdGVkIE1lc29waHlsbDo8L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMTY3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+ICAxLiBQYWxpc2FkZSBQYXJlbmNoeW1hOiBFbG9uZ2F0ZWQgY29sdW1uYXIgY2VsbHMgb248L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMTg3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+ICAgICBhZGF4aWFsIHNpZGUgd2l0aCBhYnVuZGFudCBjaGxvcm9wbGFzdHMuPC90ZXh0PgogICAgPHRleHQgeD0iMjUiIHk9IjIwNyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPiAgMi4gU3Bvbmd5IFBhcmVuY2h5bWE6IExvb3NlIHNwaGVyaWNhbCBjZWxscyB3aXRoPC90ZXh0PgogICAgPHRleHQgeD0iMjUiIHk9IjIyNyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPiAgICAgbGFyZ2UgYWlyIGNhdml0aWVzIGZvciBnYXMgZXhjaGFuZ2UuPC90ZXh0PgoKICAgIDx0ZXh0IHg9IjI1IiB5PSIyNTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIj7igKIgVmFzY3VsYXIgU3lzdGVtICZhbXA7IFZlbmF0aW9uOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIyNzciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj4gIFZhc2N1bGFyIGJ1bmRsZXMgZW5jbG9zZWQgYnkgcGFyZW5jaHltYXRvdXM8L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMjk3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+ICBCdW5kbGUgU2hlYXRoLjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIzMTciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj4gIFJldGljdWxhdGUgVmVuYXRpb24g4p6UIFZhcmlhYmxlIGJ1bmRsZSBzaXplcy48L3RleHQ+CgogICAgPCEtLSAyLiBJc29iaWxhdGVyYWwgTW9ub2NvdCBMZWFmIC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzcwLCAwKSI+CiAgICAgIDxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iNDIwIiByeD0iMTQiIGZpbGw9InJnYmEoMjI0LDY0LDI1MSwwLjA2KSIgc3Ryb2tlPSIjRTA0MEZCIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgICAgPHRleHQgeD0iMTc1IiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTciIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRjhCQkQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yLiBNb25vY290IChJc29iaWxhdGVyYWwpIExlYWY8L3RleHQ+CgogICAgICA8cmVjdCB4PSIxNSIgeT0iNTAiIHdpZHRoPSIzMjAiIGhlaWdodD0iMzUwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRTA0MEZCIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPHRleHQgeD0iMjUiIHk9Ijc1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0UwNDBGQiI+4oCiIEVwaWRlcm1pcyAmYW1wOyBTdG9tYXRhOjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjUiIHk9Ijk3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+ICBTdG9tYXRhIGVxdWFsIG9uIGJvdGggYWRheGlhbCBhbmQgYWJheGlhbCBzdXJmYWNlczwvdGV4dD4KICAgICAgPHRleHQgeD0iMjUiIHk9IjExNyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPiAgKEFtcGhpc3RvbWF0b3VzKS48L3RleHQ+CgogICAgICA8dGV4dCB4PSIyNSIgeT0iMTQ1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0UwNDBGQiI+4oCiIFVuZGlmZmVyZW50aWF0ZWQgTWVzb3BoeWxsOjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjUiIHk9IjE2NyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPiAgTWVzb3BoeWxsIG5vdCBkaWZmZXJlbnRpYXRlZCBpbnRvIHBhbGlzYWRlL3Nwb25neS48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIxODciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj4gIFVuaWZvcm0gcm91bmRlZCBjaGxvcmVuY2h5bWF0b3VzIGNlbGxzLjwvdGV4dD4KCiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIyMTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIj7igKIgQnVsbGlmb3JtIE1vdG9yIENlbGxzIChHcmFzc2VzKTo8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIyMzciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj4gIExhcmdlLCBlbXB0eSwgY29sb3JsZXNzIGVwaWRlcm1hbCBjZWxscyBvbiBhZGF4aWFsIHNpZGUuPC90ZXh0PgogICAgICA8dGV4dCB4PSIyNSIgeT0iMjU3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+ICBUdXJnb3IgbG9zcyBkdXJpbmcgZHJvdWdodCBjYXVzZXMgbGVhZiByb2xsaW5nIHRvPC90ZXh0PgogICAgICA8dGV4dCB4PSIyNSIgeT0iMjc3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzY5RjBBRSI+ICBtaW5pbWl6ZSB0cmFuc3BpcmF0aW9uIHdhdGVyIGxvc3MhPC90ZXh0PgoKICAgICAgPHRleHQgeD0iMjUiIHk9IjMwNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNFMDQwRkIiPuKAoiBQYXJhbGxlbCBWZW5hdGlvbjo8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIzMjciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj4gIE5lYXJseSBzaW1pbGFyLXNpemVkIHZhc2N1bGFyIGJ1bmRsZXMuPC90ZXh0PgogICAgPC9nPgogIDwvZz4KCiAgPCEtLSBCb3R0b20gQmFyIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLCA0OTUpIj4KICAgIDxyZWN0IHdpZHRoPSI3MjAiIGhlaWdodD0iNTAiIHJ4PSIxMCIgZmlsbD0icmdiYSgyMjQsNjQsMjUxLDAuMTUpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMS44Ii8+CiAgICA8dGV4dCB4PSIzNjAiIHk9IjMxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0Y4QkJEMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RGljb3QgTGVhZjogUGFsaXNhZGUvU3Bvbmd5IE1lc29waHlsbCB8IE1vbm9jb3QgTGVhZjogQnVsbGlmb3JtIENlbGxzICZhbXA7IFBhcmFsbGVsIFZlaW5zPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 650px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 6px 22px rgba(224, 64, 251, 0.4); border: 2px solid #E040FB;" alt="3D Dicot vs Monocot Leaf Anatomy" /><p style="color: #E040FB; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 3.3: 3D Dicot (Dorsiventral) vs Monocot (Isobilateral) Leaf Anatomy &amp; Bulliform Cells</p></div>

  

  <h3 style="color: #E040FB; margin-top: 22px; font-size: 16.5px;">(iv) Anatomy and Functions of Dicot (Dorsiventral) and Monocot (Isobilateral) Leaves</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(224, 64, 251, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #E040FB;">Dicot Leaf (Dorsiventral Leaf, e.g., Mango, Sunflower):</b>
        <br/>- Upper (Adaxial) epidermis has a thicker cuticle and fewer stomata (or hypostomatic: stomata restricted to lower abaxial epidermis).
        <br/>- <b>Mesophyll is differentiated</b> into two distinct layers:
        <br/>1. <i>Palisade Parenchyma:</i> Upper layer of elongated, columnar cells oriented vertically, packed tightly with chloroplasts for maximum light capture.
        <br/>2. <i>Spongy Parenchyma:</i> Lower layer of loosely arranged, oval/irregular cells with large air cavities facilitating rapid respiratory and photosynthetic gas exchange.
        <br/>- Vascular bundles are reticulate, variable in size, surrounded by parenchymatous bundle sheath.
      </li>
      <li><b style="color: #E040FB;">Monocot Leaf (Isobilateral Leaf, e.g., Grasses, Maize):</b>
        <br/>- Both adaxial and abaxial surfaces receive equal illumination; stomata distributed equally on both surfaces (<b>Amphistomatic</b>).
        <br/>- <b>Mesophyll is undifferentiated</b> (homogeneous spongy-like chlorenchyma without distinct palisade layer).
        <br/>- Vascular bundles are of nearly equal size due to parallel venation.
        <br/>- <b style="color: #E040FB;">Bulliform (Motor) Cells:</b> In grasses, large, empty, thin-walled, colorless cells occur along the upper epidermis. When turgid with water, they keep the leaf lamina flat and exposed; during water stress, they lose turgor and turn flaccid, causing the leaf to <b>curl inward</b> to reduce evaporative surface area.
      </li>
    </ul>
  </div>

  <!-- MASTER REVISION CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(123, 31, 162, 0.85)); border: 2px solid #E040FB; border-radius: 12px; padding: 20px; margin-top: 35px; box-shadow: 0 6px 25px rgba(0,0,0,0.4);">
    <h3 style="color: #E040FB; margin: 0 0 14px 0; font-size: 18px; text-align: center; font-weight: bold;">
      ⚡ Master Chapter 3 Plant Anatomy Cheat Sheet
    </h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13.5px;">
        <thead>
          <tr style="background: rgba(224, 64, 251, 0.25); color: #E040FB; font-weight: bold;">
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Organ / Structure</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Diagnostic Anatomical Features</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Xylem Position &amp; Special Structures</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #E040FB;">Dicot Root:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Diarch to hexarch (2-6 bundles); Casparian strips; tiny/absent pith</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #E040FB;">Exarch Xylem</b>; lateral roots from pericycle</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #E040FB;">Monocot Root:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Polyarch (&gt;6 bundles); large prominent pith; no secondary growth</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #E040FB;">Exarch Xylem</b>; Casparian endodermis</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #E040FB;">Dicot Stem:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Collenchymatous hypodermis; ring-arranged bundles (Eustele); starch sheath</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #E040FB;">Endarch Xylem</b>; Conjoint, Collateral, Open</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #E040FB;">Monocot Stem:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Sclerenchymatous hypodermis; scattered bundles; bundle sheath</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #E040FB;">Endarch Xylem</b>; Conjoint, Closed; Lysigenous cavity</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #E040FB;">Dicot Leaf:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Dorsiventral; palisade + spongy mesophyll; bean-shaped guard cells</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Hypostomatic; reticulate venation</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #E040FB;">Monocot Leaf:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Isobilateral; undifferentiated mesophyll; dumbbell guard cells</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #E040FB;">Bulliform Cells</b>; amphistomatic; parallel veins</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #E040FB;">Secondary Growth:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Vascular cambium &rarr; Sec. Xylem (wood) + Sec. Phloem; Cork cambium (Phellogen)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Annual rings (Spring + Autumn wood); Lenticels</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`;

export const c11Bot3HtmlSolutions = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- SECTION A -->
  <div style="background: linear-gradient(135deg, rgba(224, 64, 251, 0.15), rgba(156, 39, 176, 0.15)); border: 1.5px solid rgba(224, 64, 251, 0.4); border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;">
    <h2 style="color: #E040FB; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION A: Very Short Answer (VSA) Questions (1 Mark Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q1 to Q40 &bull; Plant Tissue Systems, Casparian Strips, Vascular Bundle Ranks, Stomatal Types &amp; Secondary Meristems</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q1: Who is known as the 'Father of Plant Anatomy'?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Nehemiah Grew.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q2: Who classified plant tissue systems into Epidermal, Ground, and Vascular systems?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Julius von Sachs (1875).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q3: What is the waxy water-impermeable layer covering the outer surface of the epidermis?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Cuticle.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q4: Is cuticle present in root epidermis (epiblema)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      No, cuticle is absent in roots to permit water absorption.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q5: What is the shape of guard cells in the stomata of Dicot leaves?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Kidney-shaped (bean-shaped).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q6: What is the shape of guard cells in the stomata of Monocots (Grasses)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Dumbbell-shaped.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q7: Name the epidermal appendages responsible for absorbing water in roots.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Root hairs (unicellular epidermal outgrowths).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q8: What are Trichomes?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Multicellular epidermal hair-like outgrowths present on stems.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q9: Name the plant tissue system that forms the main bulk of the plant body.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Ground (Fundamental) Tissue System.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q10: What type of tissue constitutes the hypodermis of a Dicot stem?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Collenchyma.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q11: What type of tissue constitutes the hypodermis of a Monocot stem?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Sclerenchyma.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q12: What is the Casparian strip?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A band of suberin and lignin deposition found on the radial and transverse walls of root endodermal cells.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q13: What is the function of the Casparian strip in roots?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Blocks the passive apoplastic movement of water and ions, forcing them into the symplastic pathway.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q14: From which tissue layer do lateral roots originate in plants?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Pericycle.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q15: Define a Radial Vascular Bundle.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A bundle where xylem and phloem lie on separate, alternating radii (characteristic of all roots).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q16: Define a Conjoint Vascular Bundle.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A bundle where xylem and phloem lie together along the same radius (characteristic of stems and leaves).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q17: What is an 'Open' vascular bundle?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A conjoint vascular bundle containing an active strip of intrafascicular cambium between xylem and phloem.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q18: What is a 'Closed' vascular bundle?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A conjoint vascular bundle lacking cambium, incapable of secondary growth.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q19: What is Exarch xylem?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Condition where protoxylem lies toward the periphery and metaxylem lies toward the center (characteristic of roots).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q20: What is Endarch xylem?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Condition where protoxylem lies toward the center and metaxylem lies toward the periphery (characteristic of stems).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q21: How many vascular bundles are found in a typical Dicot Root?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Diarch to Hexarch (2 to 6 vascular bundles).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q22: What is the condition of vascular bundles in a Monocot Root?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Polyarch (more than 6, usually 20-30 bundles).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q23: In which root is Pith large and well-developed: Dicot or Monocot?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Monocot Root.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q24: What is the Starch Sheath in a Dicot stem?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The innermost layer of cortex (endodermis) containing abundant starch grains.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q25: How are vascular bundles arranged in a Dicot Stem?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In a neat, orderly concentric ring (Eustele).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q26: How are vascular bundles arranged in a Monocot Stem?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Scattered irregularly throughout the parenchymatous ground tissue (Atactostele).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q27: Name the sclerenchymatous sheath surrounding vascular bundles in a monocot stem.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Bundle Sheath.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q28: What is a Lysigenous Water Cavity? Where is it found?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A water-storing cavity formed by disintegration of protoxylem vessels in monocot stem vascular bundles.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q29: Differentiate between Dorsiventral and Isobilateral leaves.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Dorsiventral leaves have distinct upper and lower surfaces with differentiated mesophyll (Dicots); Isobilateral leaves have identical surfaces with undifferentiated mesophyll (Monocots).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q30: Name the two layers of Mesophyll in a Dicot leaf.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Palisade parenchyma and Spongy parenchyma.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q31: What are Bulliform (Motor) Cells?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Large, empty, colorless, bubble-shaped hygroscopic epidermal cells found in grass leaves.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q32: What is the function of Bulliform cells in grasses during drought?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      They lose turgor and become flaccid, causing the leaf to roll inward to minimize transpiration.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q33: Define Secondary Growth in plants.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The increase in stem or root girth (thickness) resulting from the activity of lateral meristems (vascular cambium and cork cambium).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q34: Name the two lateral meristems responsible for secondary growth in dicots.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Vascular Cambium and Cork Cambium (Phellogen).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q35: What is Interfascicular Cambium?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The strip of cambium that develops from medullary ray parenchyma cells between adjacent vascular bundles.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q36: Which tissue is produced by the vascular cambium toward the inside of the stem?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Secondary Xylem (Wood).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q37: Which tissue is produced by the vascular cambium toward the outside of the stem?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Secondary Phloem (Bast).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q38: What is an Annual Ring (Growth Ring)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A concentric ring of secondary xylem consisting of one Spring wood ring and one Autumn wood ring formed in a single year.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q39: What is Dendrochronology?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The science of determining the age of a tree by counting annual growth rings.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q40: What is Periderm?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The composite protective tissue replacing the epidermis, comprising Phellogen (cork cambium), Phellem (cork), and Phelloderm (secondary cortex).
    </div>
  </div>

  <!-- SECTION B -->
  <div style="background: linear-gradient(135deg, rgba(224, 64, 251, 0.15), rgba(156, 39, 176, 0.15)); border: 1.5px solid rgba(224, 64, 251, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #E040FB; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION B: Short Answer (SA) Questions (2 &amp; 3 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q41 to Q80 &bull; Dicot vs Monocot Anatomical Comparisons, Bulliform Cell Mechanics, Heartwood vs Sapwood &amp; Periderm</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q41: Differentiate between Exarch and Endarch xylem with diagrammatic descriptions.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #E040FB;">Exarch Xylem (Centripetal development):</b> Protoxylem develops toward the outer periphery (hypodermis/cortex) while metaxylem develops toward the center. Characteristic of <b>all roots</b>.<br/>2. <b style="color: #E040FB;">Endarch Xylem (Centrifugal development):</b> Protoxylem lies toward the center (pith) while metaxylem develops toward the periphery. Characteristic of <b>all stems</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q42: Explain the structure and functioning of the Stomatal Apparatus.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The stomatal apparatus consists of:<br/>1. <b style="color: #E040FB;">Stomatal Pore:</b> Microscopic aperture through which transpiration and gas exchange occur.<br/>2. <b style="color: #E040FB;">Guard Cells:</b> Two specialized epidermal cells with chloroplasts flanking the pore. The inner wall facing the pore is thick and inelastic, while the outer wall is thin and flexible.<br/>3. <b style="color: #E040FB;">Subsidiary Cells:</b> Specialized epidermal cells surrounding guard cells.<br/><i>Mechanism:</i> Influx of K<sup>+</sup> ions increases turgor; the thin outer wall balloons outward, pulling the thick inner wall open.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q43: Differentiate between Dicot Root and Monocot Root in four anatomical aspects.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #E040FB;">Xylem Bundles:</b> Dicot root is diarch to hexarch (2 to 6 bundles); Monocot root is polyarch (more than 6, often 20-30 bundles).<br/>2. <b style="color: #E040FB;">Pith:</b> Dicot root pith is extremely small, inconspicuous, or absent; Monocot root pith is large and well-developed.<br/>3. <b style="color: #E040FB;">Cambium &amp; Secondary Growth:</b> Dicot root develops vascular cambium and shows secondary growth; Monocot root lacks cambium and never exhibits secondary growth.<br/>4. <b style="color: #E040FB;">Pericycle:</b> In dicot root, pericycle gives rise to lateral roots and cork cambium; in monocot root, it produces only lateral roots.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q44: Differentiate between Dicot Stem and Monocot Stem in four anatomical aspects.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #E040FB;">Hypodermis:</b> Dicot stem hypodermis is collenchymatous; Monocot stem hypodermis is sclerenchymatous.<br/>2. <b style="color: #E040FB;">Vascular Bundle Arrangement:</b> Dicot stem bundles are arranged in a neat concentric ring (Eustele); Monocot stem bundles are scattered throughout ground tissue (Atactostele).<br/>3. <b style="color: #E040FB;">Bundle Type:</b> Dicot stem bundles are Conjoint, Collateral, <b>Open</b> (with cambium); Monocot stem bundles are Conjoint, Collateral, <b>Closed</b>.<br/>4. <b style="color: #E040FB;">Pith &amp; Cortex:</b> Dicot stem has distinct cortex, endodermis, pericycle, and large pith; Monocot stem ground tissue is completely undifferentiated.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q45: Explain the anatomical significance of the Casparian Strip in the root endodermis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The Casparian strip is a continuous ribbon of impermeable <b>suberin and lignin</b> embedded in the radial and transverse walls of endodermal cells.<br/>1. <b style="color: #E040FB;">Apoplast Blockade:</b> Water traveling through porous cell walls (apoplast) cannot cross the suberized strip.<br/>2. <b style="color: #E040FB;">Symplastic Checkpoint:</b> Forces water and dissolved minerals to cross the selectively permeable plasma membrane into the living cytoplasm (symplast), giving the plant strict biochemical control over mineral absorption.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q46: Differentiate between Palisade Parenchyma and Spongy Parenchyma in a dorsiventral leaf.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #E040FB;">Position:</b> Palisade parenchyma lies immediately beneath the upper adaxial epidermis; Spongy parenchyma lies adjacent to the lower abaxial epidermis.<br/>2. <b style="color: #E040FB;">Cell Shape &amp; Arrangement:</b> Palisade cells are elongated, columnar, and tightly packed without intercellular spaces; Spongy cells are rounded or irregular and loosely arranged.<br/>3. <b style="color: #E040FB;">Function:</b> Palisade cells contain numerous chloroplasts specialized for <b>maximal light absorption and photosynthesis</b>; Spongy parenchyma has extensive air chambers specialized for <b>gas exchange and transpiration</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q47: Explain the structure and physiological role of Bulliform Cells in monocot grass leaves.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Bulliform (motor) cells are large, bubble-like, thin-walled, colorless epidermal cells containing large water-filled vacuoles situated on the adaxial surface of grass leaves.<br/>1. <b style="color: #E040FB;">During Water Abundance:</b> They absorb water, become turgid, and push the leaf blade open and flat to maximize sunlight interception.<br/>2. <b style="color: #E040FB;">During Drought / Water Stress:</b> They rapidly lose water via transpiration and become flaccid, causing the leaf margin to <b>curl inward into a tube</b>, drastically reducing exposed surface area and minimizing transpirational water loss.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q48: Differentiate between Spring Wood (Early Wood) and Autumn Wood (Late Wood).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #E040FB;">Cambial Activity:</b> Spring wood is formed during favorable spring seasons when cambium is highly active; Autumn wood is formed in autumn when cambium activity slows down.<br/>2. <b style="color: #E040FB;">Vessel Lumen:</b> Spring wood contains numerous wide vessels with broad cavities; Autumn wood contains fewer, narrower vessels with thick lignified walls.<br/>3. <b style="color: #E040FB;">Color &amp; Density:</b> Spring wood is lighter in color with lower density; Autumn wood is darker in color with higher density.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q49: Differentiate between Heartwood (Duramen) and Sapwood (Alburnum).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #E040FB;">Position &amp; Color:</b> Heartwood is the central, non-functional dark brown region of secondary xylem; Sapwood is the peripheral, functional light-colored outer wood.<br/>2. <b style="color: #E040FB;">Chemical Deposition:</b> Heartwood tracheary elements are clogged with <b>Tyloses</b> and impregnated with aromatic tannins, resins, oils, and gums, rendering it durable, heavy, and rot-resistant.<br/>3. <b style="color: #E040FB;">Function:</b> Heartwood provides purely <b>mechanical support</b>; Sapwood is actively involved in the <b>conduction of water and sap</b> from roots to leaves.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q50: Explain the formation of the Vascular Cambium Ring in a Dicot Stem.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. In primary dicot stem, the vascular cambium exists only as isolated strips between primary xylem and phloem, called <b>Intrafascicular Cambium</b>.<br/>2. During secondary growth, parenchymatous cells of the medullary rays adjacent to the intrafascicular cambium become dedifferentiated (meristematic), forming <b>Interfascicular Cambium</b>.<br/>3. The intrafascicular and interfascicular strips fuse edge-to-edge to form a continuous, wavy, cylindrical <b>Vascular Cambium Ring</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q51: Explain the structure of the Periderm: Phellogen, Phellem, and Phelloderm.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      As secondary xylem increases stem girth, the outer cortex and epidermis rupture. A secondary lateral meristem develops to form the <b>Periderm</b>:<br/>1. <b style="color: #E040FB;">Phellogen (Cork Cambium):</b> Secondary meristem arising from outer cortical parenchyma cells.<br/>2. <b style="color: #E040FB;">Phellem (Cork):</b> Layers of dead, compactly arranged cells cut off toward the outside, heavily impregnated with suberin (impermeable to water and gases).<br/>3. <b style="color: #E040FB;">Phelloderm (Secondary Cortex):</b> Living parenchymatous cells cut off toward the inside containing chloroplasts.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q52: What are Lenticels? Describe their structure and function in woody stems.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Lenticels are lens-shaped aerating pores formed in the periderm of woody stems and roots.<br/>1. <b style="color: #E040FB;">Structure:</b> Phellogen cuts off closely packed, thin-walled, non-suberized parenchymatous cells called <b>Complementary Cells</b> toward the outside instead of cork. These cells expand and rupture the overlying epidermis, forming a raised pore.<br/>2. <b style="color: #E040FB;">Function:</b> Permits vital <b>gaseous exchange (O<sub>2</sub> and CO<sub>2</sub>)</b> between the living internal tissues of the bark and the external atmosphere, and allows minimal lenticular transpiration.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q53: Explain why annual rings are distinct in temperate trees but indistinct in tropical trees.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In temperate regions, climatic seasons are sharply differentiated (warm, moist spring followed by harsh, cold winter), producing alternating bands of wide light spring wood and narrow dense autumn wood (visible annual rings).<br/>In tropical rainforests, temperature, rainfall, and photoperiod remain nearly uniform throughout the entire year. The cambium remains continuously and uniformly active, so growth rings are not clearly demarcated.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q54: Describe the components of Xylem and their respective functions.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #E040FB;">Tracheids:</b> Elongated, dead, lignified cells with tapering ends and bordered pits; conduct water in gymnosperms and angiosperms.<br/>2. <b style="color: #E040FB;">Vessels:</b> Long cylindrical tubes formed of vessel members with perforated end plates; primary rapid water-conducting conduits in angiosperms.<br/>3. <b style="color: #E040FB;">Xylem Fibres:</b> Highly thickened lignified dead sclerenchyma providing mechanical support.<br/>4. <b style="color: #E040FB;">Xylem Parenchyma:</b> Living thin-walled cells that store food (starch/fats) and conduct water radially (ray parenchyma).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q55: Describe the components of Phloem and their respective functions.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #E040FB;">Sieve Tube Elements:</b> Living elongated tubular cells connected end-to-end via perforated <b>Sieve Plates</b>; mature cells lack nuclei and tonoplasts.<br/>2. <b style="color: #E040FB;">Companion Cells:</b> Specialized parenchymatous cells with prominent nuclei connected to sieve tubes via pit fields; regulate sieve tube metabolism and pressure-flow loading.<br/>3. <b style="color: #E040FB;">Phloem Parenchyma:</b> Elongated living cells storing food and resins; absent in most monocots.<br/>4. <b style="color: #E040FB;">Phloem Fibres (Bast Fibres):</b> Dead sclerenchymatous fibres providing mechanical strength (source of commercial jute, flax, hemp).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q56: Explain the difference between Collenchyma and Sclerenchyma.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #E040FB;">Living Status:</b> Collenchyma consists of living cells with protoplasts; Sclerenchyma consists of dead cells lacking protoplasts at maturity.<br/>2. <b style="color: #E040FB;">Wall Thickening:</b> Collenchyma walls are unevenly thickened at corners with <b>pectin, cellulose, and hemicellulose</b> (no lignin); Sclerenchyma walls are uniformly and heavily impregnated with hard, impermeable <b>Lignin</b>.<br/>3. <b style="color: #E040FB;">Function:</b> Collenchyma provides flexible mechanical support to growing organs (petioles, young stems); Sclerenchyma provides rigid structural strength.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q57: Explain what Sclereids are and give three examples where they are found.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Sclereids (Stone cells) are short, isodiametric, or irregular sclerenchymatous dead cells with extremely thick, lignified walls and narrow branched lumens.<br/>Found in:<br/>1. The gritty pulp of fruits like <b>Guava, Pear, and Sapota (Chikoo)</b>.<br/>2. The hard seed coats of legumes (e.g., Pea, Bean).<br/>3. The endocarp of stone fruits (e.g., Coconut, Walnut) and tea leaves.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q58: Explain the structure of an Isobilateral (Monocot) Leaf with a neat labeled sketch description.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #E040FB;">Epidermis:</b> Upper and lower epidermises have nearly equal cuticle thickness and equal stomatal frequency (amphistomatic). Upper epidermis of grasses contains <b>Bulliform cells</b>.<br/>2. <b style="color: #E040FB;">Mesophyll:</b> Compact, homogeneous green chlorenchymatous tissue containing chloroplasts, not differentiated into palisade and spongy layers.<br/>3. <b style="color: #E040FB;">Vascular Bundles:</b> Arranged in parallel rows, each enclosed in a parenchymatous or sclerenchymatous bundle sheath; xylem faces adaxial (upper) side, phloem faces abaxial (lower) side.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q59: Explain why monocotyledonous stems do not show secondary growth.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Monocot stems possess <b>Closed Vascular Bundles</b> where xylem and phloem lie in direct physical contact with no intervening strip of intrafascicular cambium. Furthermore, the ground tissue does not form a secondary lateral meristem (cork cambium), meaning no new secondary xylem, phloem, or bark can ever be generated.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q60: Explain the anatomical features of a typical Dicot Stem that distinguish it from a Dicot Root.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #E040FB;">Xylem:</b> Stem has <b>Endarch xylem</b> (protoxylem inward); Root has <b>Exarch xylem</b> (protoxylem outward).<br/>2. <b style="color: #E040FB;">Bundle Type:</b> Stem has Conjoint, Collateral, Open bundles in a ring; Root has Radial bundles on separate radii.<br/>3. <b style="color: #E040FB;">Outer Surface:</b> Stem has cuticular epidermis with multicellular trichomes; Root has non-cuticular epiblema with unicellular root hairs.<br/>4. <b style="color: #E040FB;">Hypodermis:</b> Stem has collenchymatous hypodermis; Root has no hypodermis (cortex directly beneath epiblema).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q61: Explain the anatomical features of a typical Dicot Root that distinguish it from a Monocot Root.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Dicot root has 2-6 (diarch-hexarch) xylem bundles; Monocot root has more than 6 (polyarch) xylem bundles.<br/>2. Dicot root pith is extremely small or absent; Monocot root pith is large and conspicuous.<br/>3. Dicot root undergoes secondary growth via secondary cambium; Monocot root never undergoes secondary growth.<br/>4. Dicot root vessels are somewhat polygonal; Monocot root vessels are rounded or oval.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q62: What is Tylosis? Explain its significance in the conversion of sapwood to heartwood.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Tyloses are balloon-like outgrowths of axial or ray xylem parenchyma cells that push through pits into the lumen of adjacent xylem vessels when vessels lose conduction capacity. They seal off the vessel lumens and accumulate aromatic phenolic resins, tannins, and gums, transforming light, perishable sapwood into dark, decay-resistant <b>Heartwood</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q63: Describe the structure of a Dicot Leaf in vertical cross-section.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #E040FB;">Upper Epidermis:</b> Covered with a distinct thick waxy cuticle; lacks chloroplasts; stomata are rare or absent (hypostomatic).<br/>2. <b style="color: #E040FB;">Mesophyll:</b> Differentiated into upper Palisade layer (columnar cells rich in chloroplasts) and lower Spongy layer (loosely arranged with wide substomatal chambers).<br/>3. <b style="color: #E040FB;">Lower Epidermis:</b> Thinner cuticle; bears numerous stomata for gas exchange.<br/>4. <b style="color: #E040FB;">Vascular System:</b> Embedded within mesophyll, surrounded by bundle sheath; xylem on upper side and phloem on lower side.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q64: Explain the concept of 'Bark' in woody trees. Name the tissues included in bark.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Bark is a non-technical comprehensive term referring to <b>all tissues exterior to the vascular cambium</b> in woody stems:<br/>Bark = <b>Secondary Phloem + Primary Phloem + Cortex + Periderm (Phelloderm + Phellogen + Phellem)</b>.<br/>- <i>Early / Soft Bark:</i> Formed early in season (contains secondary phloem).<br/>- <i>Late / Hard Bark:</i> Formed late in season (contains dead corky layers).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q65: Explain the term 'Stele' and differentiate between Protostele, Siphonostele, and Eustele.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The stele is the entire central vascular cylinder of primary plants lying internal to the endodermis:<br/>1. <b style="color: #E040FB;">Protostele:</b> Solid central core of xylem surrounded by phloem, lacking a central pith (primitive; in <i>Psilotum</i>, <i>Selaginella</i>).<br/>2. <b style="color: #E040FB;">Siphonostele:</b> Tubular vascular cylinder enclosing a central parenchymatous pith (in ferns).<br/>3. <b style="color: #E040FB;">Eustele:</b> Vascular system split into distinct longitudinal vascular strands arranged in a ring around pith (characteristic of <b>Dicot Stems</b>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q66: Explain the mechanism of Secondary Growth in Dicot Roots.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Cells of parenchyma located immediately below the phloem bundles become meristematic, forming wavy strips of cambium.<br/>2. Cells of the pericycle outside the protoxylem also dedifferentiate and join these strips, producing a complete continuous wavy <b>vascular cambium ring</b>.<br/>3. The cambium cuts off secondary xylem toward the inside and secondary phloem toward the outside.<br/>4. The ring pushes outward, rapidly becoming completely circular.<br/>5. Pericycle also produces cork cambium (phellogen), which cuts off phellem (cork) outside and phelloderm inside.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q67: What is Albuminous Cell and Sieve Cell? In which plants are they found?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In Gymnosperms and Pteridophytes:<br/>1. <b style="color: #E040FB;">Sieve Cells:</b> Primitive conducting phloem elements with narrow pores distributed over lateral walls, lacking specialized end-wall sieve plates.<br/>2. <b style="color: #E040FB;">Albuminous Cells (Strasburger cells):</b> Specialized ray/phloem parenchyma cells functionally equivalent to angiosperm companion cells, regulating sieve cell translocation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q68: Explain the role of Medullary Rays in woody dicot stems.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Medullary rays (pith rays) are radial ribbons of living parenchymatous cells extending between the central pith and the cortex:<br/>1. <b style="color: #E040FB;">Radial Conduction:</b> Transport water, organic food, and gases horizontally across the diameter of the stem.<br/>2. <b style="color: #E040FB;">Storage:</b> Store reserves of starch, proteins, and lipids.<br/>3. <b style="color: #E040FB;">Cambium Formation:</b> Undergo dedifferentiation to produce interfascicular cambium during secondary growth.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q69: Explain why the wood of Gymnosperms is called 'Softwood' and that of Angiosperms 'Hardwood'.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #E040FB;">Gymnosperm Wood (Softwood):</b> Consists predominantly of tracheids (~90-95%) and lacks true xylem vessels and wood fibres (non-porous wood).<br/>2. <b style="color: #E040FB;">Angiosperm Wood (Hardwood):</b> Contains abundant, large-diameter xylem vessels and heavily lignified, tough xylem fibres (porous wood), rendering it denser, heavier, and harder.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q70: Describe the structure of a Trichome and state three of its functions.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A trichome is a multicellular epidermal hair arising from the shoot epidermis:<br/>1. Forms a physical barrier against insect herbivory and oviposition.<br/>2. Forms a boundary layer trapping humid air over the shoot surface, <b>minimizing evaporative water loss</b>.<br/>3. Secretes volatile essential oils, resins, or defensive stinging chemicals (e.g., in stinging nettle).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q71: Explain the anatomical basis of Guttation in plants (Hydathodes).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Guttation is the exudation of liquid water droplets from leaf margins during periods of high root pressure and low transpiration (early morning). Occurs through specialized microscopic pores called <b>Hydathodes</b> located at the ends of vascular veinlets. Hydathodes consist of a permanent open pore lined with loosely arranged, non-chlorophyllous parenchyma cells called <b>Epithem</b> connected directly to xylem tracheids.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q72: Explain the term 'Anomalous Secondary Growth' with an example.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Secondary growth that deviates from the normal dicot pattern (single circular cambium ring producing xylem inside and phloem outside).<br/>Examples:<br/>1. <i>Dracaena</i> (Monocot): Meristematic zone in cortex produces secondary vascular bundles embedded in parenchyma.<br/>2. <i>Boerhaavia</i> / <i>Bougainvillea</i>: Successive concentric rings of accessory cambia develop in the pericycle, producing alternating rings of vascular bundles and conjunctive tissue.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q73: Differentiate between Porous Wood and Non-Porous Wood.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #E040FB;">Porous Wood:</b> Contains xylem vessels that appear as conspicuous open pores in transverse section (characteristic of <b>Dicotyledonous Angiosperms</b>). Divided into ring-porous and diffuse-porous wood.<br/>2. <b style="color: #E040FB;">Non-Porous Wood:</b> Completely lacks xylem vessels; conduction occurs exclusively through narrow tracheids without open pore cavities (characteristic of <b>Gymnosperms</b>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q74: Explain the difference between Ring-Porous Wood and Diffuse-Porous Wood.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #E040FB;">Ring-Porous Wood:</b> Vessels formed in spring wood are distinctly larger than those in autumn wood, creating a conspicuous ring of large pores (e.g., Oak, Ash).<br/>2. <b style="color: #E040FB;">Diffuse-Porous Wood:</b> Vessels are of nearly uniform diameter and distributed evenly throughout the entire annual growth ring (e.g., Birch, Maple).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q75: Explain why the center of an old tree trunk is often hollowed out without killing the tree.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The central region of an old tree trunk is <b>Heartwood (Duramen)</b>, which is composed of dead, non-functional, clogged tracheary elements that do not conduct water or minerals. Fungal decay can rot away this central heartwood without affecting the living, water-conducting <b>Sapwood</b> and nutrient-conducting <b>Phloem</b> located near the periphery, allowing the tree to continue normal photosynthesis and growth.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q76: Describe the histological structure of the Cork Cambium (Phellogen).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Phellogen is a secondary lateral meristem composed of a single layer of rectangular, radially flattened, thin-walled isodiametric cells with dense protoplasts. It develops by dedifferentiation of collenchyma or parenchyma cells in the outer cortex or pericycle, cutting off dead suberized phellem (cork) cells externally and living phelloderm cells internally.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q77: Explain why cut branches of dicot trees heal and form Callus tissue.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      When a branch is pruned or wounded, living parenchyma cells in the adjacent cortex, medullary rays, and cambium undergo rapid dedifferentiation and enter active mitotic division, forming a protective mass of unorganized, thin-walled proliferating wound tissue called <b>Callus</b>. The callus subsequently differentiates into a protective wound periderm sealing the injury.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q78: Explain the term 'Siphonogamy' and 'Zooidogamy' in seed plant evolution.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #E040FB;">Zooidogamy:</b> Primitive fertilization requiring water for flagellated motile spermatozoids to swim to the egg (Algae, Bryophytes, Pteridophytes, and primitive gymnosperms like <i>Cycas</i>).<br/>2. <b style="color: #E040FB;">Siphonogamy:</b> Advanced fertilization where non-motile male gametes are carried directly to the female egg cell inside an ovule via a <b>Pollen Tube</b>, liberating reproduction entirely from dependence on water (Conifers and Angiosperms).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q79: Describe the function and location of Epithem in plant leaves.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Epithem is a mass of thin-walled, loosely arranged parenchymatous cells with abundant intercellular spaces located at the tips of leaf vein endings, positioned between the terminal xylem tracheids and the water pore of a <b>Hydathode</b>. When root pressure forces water through xylem, epithem allows water to filter out freely onto the leaf margin during guttation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q80: Explain the difference between Primary Growth and Secondary Growth in plants.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #E040FB;">Primary Growth:</b> Driven by apical meristems (root and shoot apices) and intercalary meristems; increases plant length and forms the primary plant body.<br/>2. <b style="color: #E040FB;">Secondary Growth:</b> Driven by lateral meristems (vascular cambium and phellogen); increases plant diameter (girth) and forms secondary tissues (wood, bark, periderm) in gymnosperms and dicotyledonous angiosperms.
    </div>
  </div>

  <!-- SECTION C -->
  <div style="background: linear-gradient(135deg, rgba(224, 64, 251, 0.15), rgba(156, 39, 176, 0.15)); border: 1.5px solid rgba(224, 64, 251, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #E040FB; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION C: Long Answer (LA) Questions (5 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q81 to Q100 &bull; Complete Secondary Growth Proofs, Dendrochronology Mechanics, Organ Monographs &amp; Master Synthesis Matrix</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q81: Discuss the Plant Tissue Systems in exhaustive depth: Epidermal, Ground, and Vascular Tissue Systems with complete structural and functional details.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Foundations:</b> Established by Julius von Sachs (1875) based on spatial position and physiological roles.<br/><br/><b style="color: #E040FB;">2. Epidermal System:</b> Continuous outer protective boundary. Single-layered parenchymatous epidermis with waxy cuticle (absent in roots). Stomatal apparatus with guard cells (kidney-shaped in dicots; dumbbell-shaped in grasses) and subsidiary cells regulating transpiration. Outgrowths: unicellular root hairs (absorption) and multicellular stem trichomes (protection/secretion).<br/><br/><b style="color: #E040FB;">3. Ground (Fundamental) System:</b> Bulk tissue between epidermis and vascular core. Outer cortex (parenchyma, collenchymatous/sclerenchymatous hypodermis), endodermis with Casparian suberized strips, pericycle, pith, medullary rays, and leaf mesophyll (palisade + spongy).<br/><br/><b style="color: #E040FB;">4. Vascular System:</b> Conducting tissues (xylem and phloem). Radial (alternating on separate radii, in roots); Conjoint Collateral Open (with cambium, in dicot stems); Conjoint Collateral Closed (no cambium, in monocot stems and leaves); Bicollateral (phloem on both sides of xylem, in Cucurbitaceae).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q82: Provide an Exhaustive Anatomical Comparison of Dicot Root vs Monocot Root with histological layers, vascular bundle numbers, and diagrams.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Epiblema (Piliferous Layer):</b> Single-layered, thin-walled cells producing unicellular root hairs; cuticle absent in both.<br/><br/><b style="color: #E040FB;">2. Cortex:</b> Broad multi-layered parenchymatous tissue with intercellular spaces.<br/><br/><b style="color: #E040FB;">3. Endodermis:</b> Barrel-shaped cells with suberized Casparian strips on radial/tangential walls; passage cells opposite protoxylem.<br/><br/><b style="color: #E040FB;">4. Pericycle:</b> Uniseriate layer inside endodermis.<br/>&bull; Dicot root: Gives rise to lateral roots and portions of vascular cambium and cork cambium.<br/>&bull; Monocot root: Gives rise only to lateral roots.<br/><br/><b style="color: #E040FB;">5. Vascular Architecture:</b><br/>&bull; <i>Dicot Root:</i> <b>Diarch to Hexarch (2 to 6 xylem bundles)</b>; xylem is <b>Exarch</b>; small/inconspicuous pith; secondary growth occurs.<br/>&bull; <i>Monocot Root:</i> <b>Polyarch (&gt;6, usually 20-30 xylem bundles)</b>; xylem is <b>Exarch</b>; <b>large, conspicuous parenchymatous pith</b>; secondary growth completely absent.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q83: Provide an Exhaustive Anatomical Comparison of Dicot Stem vs Monocot Stem with detailed histological zonation, bundle architecture, and diagrams.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Epidermis:</b> Cuticularized single layer; multicellular trichomes in dicot stem; trichomes absent in monocot stem.<br/><br/><b style="color: #E040FB;">2. Hypodermis:</b><br/>&bull; Dicot stem: 3-5 layers of <b>Collenchyma</b> (living mechanical support with pectin corners).<br/>&bull; Monocot stem: 2-3 layers of <b>Sclerenchyma</b> (dead mechanical support with lignified walls).<br/><br/><b style="color: #E040FB;">3. Ground Tissue &amp; Cortex:</b><br/>&bull; Dicot stem: Differentiated into general parenchymatous cortex, endodermis (starch sheath), pericycle, and large central pith with medullary rays.<br/>&bull; Monocot stem: Undifferentiated parenchymatous mass from hypodermis to center (no cortex, endodermis, pericycle, or pith).<br/><br/><b style="color: #E040FB;">4. Vascular Bundles:</b><br/>&bull; <i>Dicot Stem:</i> Arranged in a neat <b>broken ring (Eustele)</b>; <b>Conjoint, Collateral, Open</b> with active cambium strip; <b>Endarch xylem</b>; uniform bundle size.<br/>&bull; <i>Monocot Stem:</i> <b>Scattered throughout ground tissue (Atactostele)</b>; <b>Conjoint, Collateral, Closed</b>; smaller crowded bundles near periphery, larger in center; enclosed in sclerenchymatous bundle sheath; Y-shaped xylem with <b>Lysigenous water cavity</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q84: Provide an Exhaustive Anatomical Comparison of Dicot (Dorsiventral) Leaf vs Monocot (Isobilateral) Leaf with cross-sectional histological analysis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Epidermis &amp; Stomata:</b><br/>&bull; <i>Dicot Leaf:</i> Thick cuticle on adaxial (upper) epidermis; hypostomatic (stomata concentrated on abaxial lower surface); kidney-shaped guard cells.<br/>&bull; <i>Monocot Leaf:</i> Equal cuticle on both surfaces; amphistomatic (equal stomata on both surfaces); dumbbell-shaped guard cells; adaxial epidermis of grasses contains large, empty <b>Bulliform cells</b> for leaf rolling during water stress.<br/><br/><b style="color: #E040FB;">2. Mesophyll Architecture:</b><br/>&bull; <i>Dicot Leaf:</i> Strongly differentiated into upper columnar <b>Palisade parenchyma</b> (light capture, rich in chloroplasts) and lower loose <b>Spongy parenchyma</b> (gas exchange, wide substomatal chambers).<br/>&bull; <i>Monocot Leaf:</i> Completely undifferentiated (homogeneous chlorenchymatous tissue with uniform intercellular spaces).<br/><br/><b style="color: #E040FB;">3. Vascular System:</b><br/>&bull; Dicot: Reticulate venation; main midrib bundle is very large, lateral bundles variable in size.<br/>&bull; Monocot: Parallel venation; vascular bundles nearly equal in size, enclosed in parenchymatous/sclerenchymatous bundle sheaths.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q85: Discuss Secondary Growth in Dicotyledonous Stems in complete step-by-step detail: Formation and Activity of Vascular Cambium Ring and Cork Cambium.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Activation of Vascular Cambium:</b><br/>&bull; Intrafascicular cambium strips within bundles unite with dedifferentiated interfascicular cambium strips formed from medullary ray parenchyma.<br/>&bull; Forms a continuous cylindrical <b>Vascular Cambium Ring</b>.<br/><br/><b style="color: #E040FB;">2. Cambial Ring Activity:</b><br/>&bull; Cambium cuts off cells on both sides: <b>Secondary Xylem (Wood)</b> toward the interior and <b>Secondary Phloem (Bast)</b> toward the exterior.<br/>&bull; The cambium is 8-10 times more active on the inner face; secondary xylem accumulates rapidly, pushing the cambium ring and primary phloem outward, eventually crushing the primary phloem and cortical parenchyma.<br/><br/><b style="color: #E040FB;">3. Periderm Formation (Extrastelar Secondary Growth):</b><br/>&bull; As stem girth expands, outer cortical parenchyma dedifferentiates into <b>Phellogen (Cork Cambium)</b>.<br/>&bull; Phellogen cuts off dead, suberized <b>Phellem (Cork)</b> cells toward the outside and living <b>Phelloderm (Secondary Cortex)</b> cells toward the inside.<br/>&bull; Phellogen, Phellem, and Phelloderm constitute the <b>Periderm</b>, perforated by aerating <b>Lenticels</b> for gas exchange.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q86: Explain Dendrochronology and Annual Rings: Spring Wood vs Autumn Wood, Climatic Influence, Heartwood vs Sapwood, and Tyloses Formation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Annual Ring Formation:</b> In temperate zones, cambial activity fluctuates with seasons:<br/>&bull; <i>Spring Wood (Early Wood):</i> Spring brings high moisture and active growth; cambium produces numerous broad vessels with wide lumens and low density (lighter color).<br/>&bull; <i>Autumn Wood (Late Wood):</i> Autumn brings cooler conditions; cambium produces fewer, narrow, thick-walled vessels with high density (darker color).<br/>&bull; One spring wood ring + one autumn wood ring = <b>One Annual Ring (1 year of age)</b>.<br/><br/><b style="color: #E040FB;">2. Heartwood vs Sapwood:</b><br/>&bull; <i>Heartwood (Duramen):</i> Central dead non-conducting wood; tracheary elements plugged by balloon-like parenchymatous ingrowths called <b>Tyloses</b> and impregnated with tannins, resins, and oils; provides mechanical durability.<br/>&bull; <i>Sapwood (Alburnum):</i> Outer living peripheral wood actively conducting water and minerals from roots to crown.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q87: Detail the Secondary Growth in Dicot Roots and Contrast it with Secondary Growth in Dicot Stems.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Origin of Root Cambium:</b> In dicot roots, cambium is completely secondary in origin:<br/>&bull; Parenchyma cells below phloem bundles dedifferentiate into strips of cambium.<br/>&bull; Pericycle cells opposite protoxylem bundles also dedifferentiate and join these strips.<br/>&bull; Forms a distinct <b>wavy, undulating vascular cambium ring</b>.<br/><br/><b style="color: #E040FB;">2. Activity:</b> Cambium cuts off secondary xylem internally and secondary phloem externally. Xylem production beneath phloem pushes the cambium outward, rapidly transforming the wavy ring into a regular circle.<br/><br/><b style="color: #E040FB;">3. Extrastelar Secondary Growth:</b> Pericycle becomes meristematic to form cork cambium (phellogen), cutting off cork outside and phelloderm inside.<br/><br/><b style="color: #E040FB;">4. Stem vs Root Differences:</b> Root cambium is entirely secondary (stem cambium is partly primary); root cambium is initially wavy (stem is circular); root wood lacks distinct annual rings.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q88: Discuss the Complex Tissues of Plants: Tracheary Elements of Xylem and Sieve Elements of Phloem, Structure, Evolution, and Conduction Mechanics.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Xylem Architecture:</b><br/>&bull; <i>Tracheids:</i> Primitive, imperforate, elongated cells with bordered pits; universal in pteridophytes and gymnosperms.<br/>&bull; <i>Vessels:</i> Advanced, continuous hollow pipelines formed of vessel elements with open perforation plates; exclusive to angiosperms (and Gnetales); reduces hydraulic resistance dramatically.<br/>&bull; <i>Fibers &amp; Parenchyma:</i> Structural support and radial water storage.<br/><br/><b style="color: #E040FB;">2. Phloem Architecture:</b><br/>&bull; <i>Sieve Cells:</i> Primitive, narrow unspecialized sieve areas on lateral walls; in gymnosperms.<br/>&bull; <i>Sieve Tube Elements &amp; Companion Cells:</i> Specialized angiosperm unit; sieve tubes lack nuclei and tonoplasts at maturity, connected end-to-end via perforated sieve plates; companion cells provide metabolic and osmotic loading control via plasmodesmata.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q89: Explain the Anatomy of Grass Stems and Leaves with Focus on Adaptations for Herbivory and Drought.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Stem Adaptations:</b> Sclerenchymatous hypodermis, scattered closed vascular bundles with sclerenchymatous bundle sheaths, and silica-impregnated epidermal walls conferring resistance against chewing insects.<br/><br/><b style="color: #E040FB;">2. Isobilateral Leaf Adaptations:</b> Amphistomatic distribution of dumbbell-shaped guard cells ensuring efficient gas exchange regardless of wind direction.<br/><br/><b style="color: #E040FB;">3. Bulliform Motor Cells:</b> Turgor-sensitive bulliform cells roll the leaf inward into a tight cylinder during water scarcity, creating a humid microclimate inside the roll that reduces transpirational vapor loss by 70-80%.<br/><br/><b style="color: #E040FB;">4. Basal Meristem:</b> Intercalary meristems at nodes allow rapid regrowth after grazing by herbivores.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q90: Discuss the Structure and Functions of Meristematic Tissues: Apical, Intercalary, and Lateral Meristems, and Theories of Shoot and Root Apices.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Classification:</b><br/>&bull; <i>Apical Meristems:</i> Located at tips of roots and shoots; responsible for primary vertical extension.<br/>&bull; <i>Intercalary Meristems:</i> Located between mature permanent tissues (at leaf bases and nodes in grasses); regenerate organs damaged by grazing.<br/>&bull; <i>Lateral Meristems:</i> Cylindrical meristems (vascular cambium, phellogen) dividing periclinally to increase plant girth.<br/><br/><b style="color: #E040FB;">2. Apical Organization Theories:</b><br/>&bull; <i>Histogen Theory (Hanstein):</i> Dermatogen (&rarr; epidermis), Periblem (&rarr; cortex), Plerome (&rarr; stele).<br/>&bull; <i>Tunica-Corpus Theory (Schmidt, Shoot Apex):</i> Tunica (outer layer dividing anticlinally) + Corpus (inner core dividing in all planes).<br/>&bull; <i>Quiescent Centre Theory (Clowes, Root Apex):</i> Central inactive reservoir of stem cells resistant to radiation damage.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q91: Explain the Ecological Anatomy of Hydrophytes, Xerophytes, and Halophytes based on Internal Tissue Modifications.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Hydrophytes (Aquatic Plants):</b> Extensive <b>Aerenchyma</b> with wide air chambers for buoyancy and oxygen transport; poorly developed xylem (tracheids absent or thin); cuticle thin or absent; no mechanical sclerenchyma (e.g., <i>Hydrilla</i>).<br/><br/><b style="color: #E040FB;">2. Xerophytes (Drought Plants):</b> Extremely thick cuticles; multiple epidermises; deeply sunken stomata in stomatal crypts lined with hairs; abundant sclerenchyma fibers; succulent water-storing parenchyma (e.g., <i>Nerium</i>, <i>Pinus</i>, <i>Aloe</i>).<br/><br/><b style="color: #E040FB;">3. Halophytes (Mangrove Plants):</b> Thick leaves with salt-secreting glands; water-storage parenchyma; extensive cortical development; pneumatophore lenticels for root respiration in anoxic saline mud.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q92: Explain the Significance of Vascular Bundles: Open vs Closed, Radial vs Conjoint, Collateral vs Bicollateral, and Concentric Bundles.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Radial:</b> Xylem and phloem on separate radii alternating; characteristic of roots.<br/><b style="color: #E040FB;">2. Conjoint Collateral Open:</b> Xylem and phloem on same radius with cambium between them; allows secondary growth; characteristic of dicot stems.<br/><b style="color: #E040FB;">3. Conjoint Collateral Closed:</b> Xylem and phloem on same radius without cambium; no secondary growth; monocot stems and all leaves.<br/><b style="color: #E040FB;">4. Bicollateral:</b> Xylem in center with outer and inner phloem and outer and inner cambium; characteristic of Cucurbitaceae (Cucumbers, Gourds) and Solanaceae.<br/><b style="color: #E040FB;">5. Concentric:</b> One tissue completely surrounds the other:<br/>&bull; <i>Amphicribral (Hadrocentric):</i> Xylem surrounded by phloem (Ferns).<br/>&bull; <i>Amphivasal (Leptocentric):</i> Phloem surrounded by xylem (<i>Dracaena</i>, <i>Yucca</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q93: Discuss the Cellular Differentiation of Primary Meristems into Primary Permanent Tissues in Roots and Shoots.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Meristematic Initiation:</b> Apical meristems consist of thin-walled, non-vacuolated cells with dense cytoplasm and large nuclei dividing mitotically.<br/><br/><b style="color: #E040FB;">2. Primary Meristem Zones:</b><br/>&bull; <i>Protoderm:</i> Differentiates into Epidermis and root hairs/trichomes.<br/>&bull; <i>Ground Meristem:</i> Differentiates into hypodermis, cortex, endodermis, pericycle, medullary rays, and pith.<br/>&bull; <i>Procambium:</i> Differentiates into primary xylem, primary phloem, and intrafascicular cambium.<br/><br/><b style="color: #E040FB;">3. Cytological Maturation:</b> Cells undergo vacuolation, deposition of secondary cell walls (cellulose, hemicellulose, lignin), and programmed cell death (in tracheids, vessel elements, sclerenchyma fibers).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q94: Explain the Mechanism of Stomatal Movement: Starch-Sugar Hypothesis vs Proton-Potassium (K+) Pump Theory.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Classical Starch-Sugar Hypothesis (Sayre, 1926):</b><br/>In light, photosynthesis consumes CO<sub>2</sub>, raising guard cell pH. High pH activates Phosphorylase enzyme, converting insoluble starch into soluble glucose-1-phosphate. Increased osmotic pressure draws water into guard cells by endosmosis, opening stomata. In darkness, respiration lowers pH, converting sugar back to starch.<br/><br/><b>2. Modern K<sup>+</sup> Influx Hypothesis (Levitt, 1974):</b><br/>In light, blue light activates proton pumps (H<sup>+</sup>-ATPase) on the guard cell plasma membrane, actively pumping H<sup>+</sup> out of the cell. Malic acid dissociates into malate<sup>2-</sup> and H<sup>+</sup>. To balance negative charge, K<sup>+</sup> and Cl<sup>-</sup> ions rapidly flow into the guard cells from subsidiary cells. This massive ion influx dramatically lowers guard cell water potential (&Psi;<sub>w</sub>), causing rapid endosmosis of water. The guard cells swell turgidly, pulling the stomatal pore open.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q95: Describe the Anatomy of Anomalous Monocot Stems (Dracaena and Yucca) and Compare with Normal Dicot Secondary Growth.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. The Anomaly:</b> Monocots normally lack secondary growth. In arborescent monocots like <i>Dracaena</i> and <i>Yucca</i>, tree-like girth expansion occurs.<br/><br/><b style="color: #E040FB;">2. Anatomical Mechanism:</b><br/>&bull; A secondary lateral meristem develops in the parenchymatous outer cortex/pericycle.<br/>&bull; This secondary cambium cuts off cells on its inner side that differentiate into numerous <b>Secondary Vascular Bundles</b> embedded in a lignified parenchymatous ground tissue (conjunctive tissue).<br/>&bull; The secondary vascular bundles are <b>Amphivasal (concentric with xylem surrounding phloem)</b>, completely distinct from normal dicot collateral bundles.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q96: Explain the Origin, Structure, and Fate of the Endodermis and Pericycle in Plants.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Endodermis:</b><br/>&bull; <i>Origin:</i> Innermost layer of the cortex derived from ground meristem.<br/>&bull; <i>Structure:</i> Barrel-shaped cells lacking intercellular spaces; radial walls impregnated with suberin (Casparian strips). In dicot stems, rich in starch grains (starch sheath).<br/>&bull; <i>Fate:</i> Acts as an apoplastic physiological barrier regulating ionic influx into the stele.<br/><br/><b style="color: #E040FB;">2. Pericycle:</b><br/>&bull; <i>Origin:</i> Outermost boundary of the stele derived from procambium/ground meristem.<br/>&bull; <i>Structure:</i> Single or multi-layered parenchymatous or sclerenchymatous tissue.<br/>&bull; <i>Fate:</i> In roots, retains active meristematic pluripotency, generating lateral roots and secondary cambial rings; in stems, forms sclerenchymatous protective caps over phloem.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q97: Discuss the Process of Abscission in Leaves and Fruits: Anatomical Modifications, Separation Layer, and Protective Cork Formation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Definition:</b> The natural physiological shedding of senescent leaves, floral parts, and mature fruits.<br/><br/><b style="color: #E040FB;">2. Anatomical Changes:</b><br/>&bull; <i>Abscission Zone:</i> Develops at the base of the petiole or fruit stalk.<br/>&bull; <i>Separation Layer:</i> Parenchyma cells become rounded; enzymes (cellulase and pectinase) dissolve middle lamella and primary cell walls, weakening mechanical cohesion.<br/>&bull; <i>Protective Layer:</i> Suberized cork cells form immediately beneath the separation layer on the stem side.<br/><br/><b style="color: #E040FB;">3. Separation:</b> Wind or mechanical gravity breaks the vascular bundles, cleanly detaching the leaf without exposing raw vascular conduits to microbial pathogens.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q98: Discuss the Structure and Functions of Secretory Tissues in Plants: Glandular Trichomes, Nectaries, Laticifers, and Resin Ducts.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Glandular Trichomes:</b> Multicellular epidermal structures that synthesize and secrete volatile essential oils (e.g., Lavender, Mint) or digestive proteolytic enzymes (in insectivorous plants like <i>Drosera</i>).<br/><b style="color: #E040FB;">2. Nectaries:</b> Specialized glands located on floral or vegetative parts that exude sugary nectar to attract pollinating insects and birds.<br/><b style="color: #E040FB;">3. Laticifers:</b> Specialized elongated, branched tubes containing milky or colored emulsion called <b>Latex</b> (rich in rubber hydrocarbons, enzymes, and alkaloids, as in <i>Hevea brasiliensis</i> and <i>Papaver somniferum</i>).<br/><b style="color: #E040FB;">4. Resin Ducts:</b> Schizogenous internal cavities lined with secretory epithelial cells that produce protective resins and turpentine (in Conifers/<i>Pinus</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q99: Explain the Importance of Plant Anatomy in Agriculture, Horticulture, Forestry, and Forensic Botany.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Grafting in Horticulture:</b> Successful graft union between scion and stock depends entirely on direct alignment and cellular fusion of their vascular cambia.<br/><b style="color: #E040FB;">2. Plant Pathology &amp; Breeding:</b> Thick cuticles, lignified epidermal cell walls, and dense trichomes impart resistance against fungal penetration and insect feeding.<br/><b style="color: #E040FB;">3. Forestry &amp; Timber Industry:</b> Anatomical identification of wood structure (ring-porous vs diffuse-porous, presence of heartwood and tyloses) determines wood strength, seasoning capability, and resistance to wood-boring termites.<br/><b style="color: #E040FB;">4. Forensic Botany:</b> Microscopic examination of leaf fragments, wood charcoal, and trichome morphology provides vital admissible evidence linking suspects to crime scenes.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q100: Construct an Exhaustive Master Synthesis Matrix correlating Plant Anatomy, Tissue Systems, Dicot vs Monocot Organs, and Secondary Growth.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Tissue Systems:</b> Epidermal (cuticle, trichomes, stomata) &bull; Ground (cortex, collenchyma, endodermis, pericycle, pith, mesophyll) &bull; Vascular (radial in roots; conjoint open in dicot stems; conjoint closed in monocots and leaves).<br/><br/><b style="color: #E040FB;">2. Root Architecture:</b> Dicot root (diarch-hexarch, exarch, Casparian strips, secondary growth) vs Monocot root (polyarch &gt;6, exarch, large pith, no secondary growth).<br/><br/><b style="color: #E040FB;">3. Stem Architecture:</b> Dicot stem (collenchymatous hypodermis, eustele ring, endarch, open bundles, secondary growth) vs Monocot stem (sclerenchymatous hypodermis, scattered atactostele, closed bundles, bundle sheath, lysigenous cavity).<br/><br/><b style="color: #E040FB;">4. Leaf Architecture:</b> Dicot leaf (dorsiventral, differentiated palisade and spongy mesophyll, bean-shaped guard cells) vs Monocot leaf (isobilateral, undifferentiated mesophyll, dumbbell guard cells, bulliform motor cells).<br/><br/><b style="color: #E040FB;">5. Secondary Growth:</b> Vascular cambium (secondary xylem/wood + secondary phloem/bast; annual growth rings) &bull; Phellogen (phellem cork + phelloderm secondary cortex = periderm; lenticels for aeration).
    </div>
  </div>

</div>
`;

export const c11Bot3Mcqs = [
  {
    "id": "c11-bot-3-mcq-1",
    "question": "Julius von Sachs classified plant tissue systems into how many major systems?",
    "options": [
      "A):   Two",
      "B):   Three (Epidermal, Ground, Vascular)",
      "C):   Four",
      "D):   Five"
    ],
    "correctAnswer": "b",
    "explanation": "Julius von Sachs (1875) classified plant tissues into Epidermal, Ground, and Vascular tissue systems."
  },
  {
    "id": "c11-bot-3-mcq-2",
    "question": "The shape of guard cells in the stomata of Grasses and other Monocots is:",
    "options": [
      "A):   Kidney-shaped",
      "B):   Dumbbell-shaped",
      "C):   Spherical",
      "D):   Triangular"
    ],
    "correctAnswer": "b",
    "explanation": "Monocots (especially grasses) have dumbbell-shaped guard cells, whereas dicots possess kidney-shaped guard cells."
  },
  {
    "id": "c11-bot-3-mcq-3",
    "question": "The Casparian strip in root endodermal cells is composed of impermeable depositions of:",
    "options": [
      "A):   Cellulose and pectin",
      "B):   Suberin and Lignin",
      "C):   Chitin",
      "D):   Cutin alone"
    ],
    "correctAnswer": "b",
    "explanation": "Casparian strips consist of suberin and lignin deposited on radial and transverse walls, blocking the apoplast."
  },
  {
    "id": "c11-bot-3-mcq-4",
    "question": "Lateral roots in flowering plants originate endogenously from which internal tissue layer?",
    "options": [
      "A):   Cortex",
      "B):   Epidermis",
      "C):   Pericycle",
      "D):   Endodermis"
    ],
    "correctAnswer": "c",
    "explanation": "In roots, lateral branches arise endogenously from dedifferentiated cells of the pericycle."
  },
  {
    "id": "c11-bot-3-mcq-5",
    "question": "In roots, xylem bundles are described as Exarch because:",
    "options": [
      "A):   Metaxylem lies toward the outside",
      "B):   Protoxylem lies toward the periphery and metaxylem toward the center",
      "C):   Xylem surrounds phloem",
      "D):   Cambium is absent"
    ],
    "correctAnswer": "b",
    "explanation": "Exarch condition indicates that protoxylem is directed outward toward the periphery and metaxylem inward toward the center."
  },
  {
    "id": "c11-bot-3-mcq-6",
    "question": "A Monocot Root is distinguished anatomically from a Dicot Root by having:",
    "options": [
      "A):   Diarch to hexarch xylem bundles",
      "B):   Polyarch xylem bundles (&gt;6) and a large, well-developed pith",
      "C):   Endarch xylem",
      "D):   Active secondary growth"
    ],
    "correctAnswer": "b",
    "explanation": "Monocot roots are polyarch (numerous xylem bundles) and possess a large, conspicuous parenchymatous pith."
  },
  {
    "id": "c11-bot-3-mcq-7",
    "question": "The hypodermis of a Dicot stem is composed of:",
    "options": [
      "A):   Parenchyma",
      "B):   Collenchyma",
      "C):   Sclerenchyma",
      "D):   Chlorenchyma"
    ],
    "correctAnswer": "b",
    "explanation": "Collenchyma forms the hypodermal layer in dicot stems, providing tensile mechanical flexibility."
  },
  {
    "id": "c11-bot-3-mcq-8",
    "question": "The hypodermis of a Monocot stem is composed of:",
    "options": [
      "A):   Collenchyma",
      "B):   Sclerenchyma",
      "C):   Aerenchyma",
      "D):   Parenchyma"
    ],
    "correctAnswer": "b",
    "explanation": "Monocot stems possess a sclerenchymatous hypodermis that confers rigid structural strength."
  },
  {
    "id": "c11-bot-3-mcq-9",
    "question": "Vascular bundles in a Dicot Stem are characterized as:",
    "options": [
      "A):   Radial and exarch",
      "B):   Conjoint, Collateral, Open, and Endarch",
      "C):   Conjoint, Closed, and Exarch",
      "D):   Scattered and closed"
    ],
    "correctAnswer": "b",
    "explanation": "Dicot stems have conjoint collateral open bundles (with cambium) arranged in a ring, with endarch xylem."
  },
  {
    "id": "c11-bot-3-mcq-10",
    "question": "In a Monocot Stem, the vascular bundles are:",
    "options": [
      "A):   Arranged in a regular ring",
      "B):   Scattered throughout ground tissue (Atactostele) and enclosed in a sclerenchymatous sheath",
      "C):   Open with cambium",
      "D):   Radial"
    ],
    "correctAnswer": "b",
    "explanation": "Monocot stem bundles are scattered (atactostele), closed (no cambium), and surrounded by a bundle sheath."
  },
  {
    "id": "c11-bot-3-mcq-11",
    "question": "The presence of a Lysigenous water cavity in vascular bundles is characteristic of:",
    "options": [
      "A):   Dicot root",
      "B):   Monocot stem",
      "C):   Dicot leaf",
      "D):   Gymnosperm needle"
    ],
    "correctAnswer": "b",
    "explanation": "Breakdown of protoxylem vessels produces a lysigenous water-filled cavity in monocot stem bundles."
  },
  {
    "id": "c11-bot-3-mcq-12",
    "question": "Bulliform cells in the leaves of grasses function in:",
    "options": [
      "A):   Photosynthesis",
      "B):   Inward leaf rolling during water stress to reduce transpiration",
      "C):   Attracting insects",
      "D):   Secreting wax"
    ],
    "correctAnswer": "b",
    "explanation": "Bulliform cells lose turgor during drought, causing grass blades to curl inward and reduce transpirational water loss."
  },
  {
    "id": "c11-bot-3-mcq-13",
    "question": "In a Dorsiventral (Dicot) Leaf, the mesophyll is differentiated into:",
    "options": [
      "A):   Phellem and Phelloderm",
      "B):   Palisade parenchyma and Spongy parenchyma",
      "C):   Collenchyma and Sclerenchyma",
      "D):   Endodermis and Pericycle"
    ],
    "correctAnswer": "b",
    "explanation": "The mesophyll comprises upper columnar palisade cells and lower loosely arranged spongy parenchyma."
  },
  {
    "id": "c11-bot-3-mcq-14",
    "question": "Vascular cambium in a dicot stem cuts off more cells toward the interior, forming:",
    "options": [
      "A):   Secondary phloem",
      "B):   Secondary xylem (Wood)",
      "C):   Phelloderm",
      "D):   Phellem"
    ],
    "correctAnswer": "b",
    "explanation": "The vascular cambium is 8-10x more active internally, producing massive amounts of secondary xylem (wood)."
  },
  {
    "id": "c11-bot-3-mcq-15",
    "question": "One Annual Growth Ring in temperate trees consists of:",
    "options": [
      "A):   Two spring wood rings",
      "B):   One Spring wood ring and one Autumn wood ring",
      "C):   One sapwood ring and one heartwood ring",
      "D):   One cork ring and one bark ring"
    ],
    "correctAnswer": "b",
    "explanation": "An annual ring represents one season's growth: early (spring) wood plus late (autumn) wood."
  },
  {
    "id": "c11-bot-3-mcq-16",
    "question": "Spring wood differs from Autumn wood in having:",
    "options": [
      "A):   Narrower vessels with thicker walls",
      "B):   Wider vessel cavities and lower density",
      "C):   Darker color and higher density",
      "D):   No vessels"
    ],
    "correctAnswer": "b",
    "explanation": "Spring wood is produced when cambium is highly active, resulting in wide lumens, thin walls, and low density."
  },
  {
    "id": "c11-bot-3-mcq-17",
    "question": "The non-functional, dark, central wood clogged with tyloses and resins is called:",
    "options": [
      "A):   Sapwood (Alburnum)",
      "B):   Heartwood (Duramen)",
      "C):   Periderm",
      "D):   Softwood"
    ],
    "correctAnswer": "b",
    "explanation": "Heartwood (duramen) is the central non-conducting wood that provides mechanical durability."
  },
  {
    "id": "c11-bot-3-mcq-18",
    "question": "Tyloses are balloon-like ingrowths of which cells into xylem vessel lumens?",
    "options": [
      "A):   Sieve tubes",
      "B):   Ray or axial xylem parenchyma cells",
      "C):   Collenchyma",
      "D):   Companion cells"
    ],
    "correctAnswer": "b",
    "explanation": "Parenchyma cells push through pits into vessel lumens to form tyloses, blocking conduction in heartwood."
  },
  {
    "id": "c11-bot-3-mcq-19",
    "question": "The Periderm in woody plants consists of:",
    "options": [
      "A):   Epidermis, cortex, and endodermis",
      "B):   Phellogen (cork cambium), Phellem (cork), and Phelloderm (secondary cortex)",
      "C):   Xylem and phloem",
      "D):   Pericycle and pith"
    ],
    "correctAnswer": "b",
    "explanation": "Periderm is the composite secondary protective cover comprising Phellogen, Phellem, and Phelloderm."
  },
  {
    "id": "c11-bot-3-mcq-20",
    "question": "Lenticels in woody stems function primarily in:",
    "options": [
      "A):   Food storage",
      "B):   Gaseous exchange between internal tissues and the atmosphere",
      "C):   Water absorption",
      "D):   Mechanical support"
    ],
    "correctAnswer": "b",
    "explanation": "Lenticels are raised aerating pores lined with complementary cells permitting gas exchange through bark."
  },
  {
    "id": "c11-bot-3-mcq-21",
    "question": "Which of the following complex tissues lacks true vessels in its wood?",
    "options": [
      "A):   Mango",
      "B):   Sunflower",
      "C):   Pinus (Gymnosperm)",
      "D):   Mustard"
    ],
    "correctAnswer": "c",
    "explanation": "Gymnosperms (like Pinus) have non-porous softwood composed of tracheids, lacking true xylem vessels."
  },
  {
    "id": "c11-bot-3-mcq-22",
    "question": "Interfascicular cambium in a dicot stem develops by dedifferentiation of:",
    "options": [
      "A):   Endodermis",
      "B):   Medullary ray parenchyma cells",
      "C):   Pericycle fibers",
      "D):   Hypodermis"
    ],
    "correctAnswer": "b",
    "explanation": "Parenchyma cells of medullary rays between vascular bundles dedifferentiate into interfascicular cambium."
  },
  {
    "id": "c11-bot-3-mcq-23",
    "question": "Bark of a tree includes:",
    "options": [
      "A):   Only the cork layer",
      "B):   All tissues exterior to the vascular cambium",
      "C):   Only the secondary xylem",
      "D):   Pith and xylem"
    ],
    "correctAnswer": "b",
    "explanation": "Bark comprises all structural tissues lying external to the vascular cambium ring."
  },
  {
    "id": "c11-bot-3-mcq-24",
    "question": "In roots, the vascular cambium originates:",
    "options": [
      "A):   Entirely from the primary procambium",
      "B):   Entirely as a secondary meristem from parenchyma below phloem and pericycle outside protoxylem",
      "C):   From the epiblema",
      "D):   From the root cap"
    ],
    "correctAnswer": "b",
    "explanation": "In roots, the vascular cambium is 100% secondary in origin, formed from sub-phloem parenchyma and pericycle."
  },
  {
    "id": "c11-bot-3-mcq-25",
    "question": "The science of determining the age of a tree by counting annual growth rings is called:",
    "options": [
      "A):   Palynology",
      "B):   Dendrochronology",
      "C):   Phenology",
      "D):   Pomology"
    ],
    "correctAnswer": "b",
    "explanation": "Dendrochronology uses the pattern and count of annual rings in secondary xylem to determine a tree's exact age."
  }
];
