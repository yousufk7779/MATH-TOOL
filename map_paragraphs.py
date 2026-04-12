
import zipfile
import xml.etree.ElementTree as ET
import base64
import os
import json

def extract_content(path):
    document = zipfile.ZipFile(path)
    
    # Get relations
    rels_xml = document.read('word/_rels/document.xml.rels')
    rels_tree = ET.fromstring(rels_xml)
    rels = {}
    for rel in rels_tree.findall('{http://schemas.openxmlformats.org/package/2006/relationships}Relationship'):
        rels[rel.get('Id')] = rel.get('Target')

    xml_content = document.read('word/document.xml')
    tree = ET.fromstring(xml_content)
    
    ns = {
        'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
        'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
        'v': 'urn:schemas-microsoft-com:vml'
    }

    content = []
    p_idx = 0
    for p in tree.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
        p_idx += 1
        p_text = "".join(t.text for t in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if t.text)
        
        images = []
        # Check for drawing (DML)
        for blip in p.iter('{http://schemas.openxmlformats.org/drawingml/2006/main}blip'):
            rel_id = blip.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed')
            if rel_id in rels:
                img_path = 'word/' + rels[rel_id].replace('../', '')
                if img_path in document.namelist():
                    img_data = document.read(img_path)
                    img_b64 = base64.b64encode(img_data).decode('utf-8')
                    ext = os.path.splitext(img_path)[1][1:].lower()
                    if ext == 'jpg': ext = 'jpeg'
                    images.append(f"data:image/{ext};base64,{img_b64}")

        # Check for pict (VML)
        for imagedata in p.iter('{urn:schemas-microsoft-com:vml}imagedata'):
            rel_id = imagedata.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id')
            if rel_id in rels:
                img_path = 'word/' + rels[rel_id].replace('../', '')
                if img_path in document.namelist():
                    img_data = document.read(img_path)
                    img_b64 = base64.b64encode(img_data).decode('utf-8')
                    ext = os.path.splitext(img_path)[1][1:].lower()
                    if ext == 'jpg': ext = 'jpeg'
                    images.append(f"data:image/{ext};base64,{img_b64}")

        if p_text or images:
            content.append({'p_idx': p_idx, 'text': p_text, 'images': images})

    document.close()
    return content

results = extract_content(r"d:\All NCERT SOLUTIONS\source_docs\science\physics\chapter3.docx")
with open("p_map.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)

print(f"Mapped {len(results)} paragraphs. Images found: {sum(len(p['images']) for p in results)}")
