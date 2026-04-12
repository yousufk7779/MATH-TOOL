
import zipfile
import xml.etree.ElementTree as ET
import base64
import os
import json

def extract_content(path):
    document = zipfile.ZipFile(path)
    
    # Get relations to match image IDs with filenames
    rels_xml = document.read('word/_rels/document.xml.rels')
    rels_tree = ET.fromstring(rels_xml)
    rels = {}
    for rel in rels_tree.findall('{http://schemas.openxmlformats.org/package/2006/relationships}Relationship'):
        rels[rel.get('Id')] = rel.get('Target')

    xml_content = document.read('word/document.xml')
    tree = ET.fromstring(xml_content)
    
    # Namespace for 'embed'
    r_ns = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'
    embed_attr = f'{{{r_ns}}}embed'

    results = {}
    # Iterate through paragraphs
    for i, p in enumerate(tree.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p')):
        p_text = "".join(t.text for t in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if t.text)
        
        images = []
        # Search for any element with 'embed' attribute (blip, pict, etc.)
        for el in p.iter():
            rel_id = el.get(embed_attr)
            if rel_id and rel_id in rels:
                img_path = 'word/' + rels[rel_id].replace('../', '')
                if img_path in document.namelist():
                    img_data = document.read(img_path)
                    img_b64 = base64.b64encode(img_data).decode('utf-8')
                    ext = os.path.splitext(img_path)[1][1:].lower()
                    if ext == 'jpg': ext = 'jpeg'
                    images.append(f"data:image/{ext};base64,{img_b64}")

        if images:
            results[f"P{i}"] = {
                'text': p_text[:100],
                'images': images
            }

    document.close()
    return results

if __name__ == "__main__":
    results = extract_content(r"d:\All NCERT SOLUTIONS\source_docs\science\physics\chapter3.docx")
    with open(r"d:\All NCERT SOLUTIONS\full_images.json", "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2)
    print(f"Extracted images for {len(results)} paragraphs.")
