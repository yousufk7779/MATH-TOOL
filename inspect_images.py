
import zipfile
import xml.etree.ElementTree as ET
import base64
import os

def extract_images_details(path):
    document = zipfile.ZipFile(path)
    
    rels_xml = document.read('word/_rels/document.xml.rels')
    rels_tree = ET.fromstring(rels_xml)
    rels = {}
    for rel in rels_tree.findall('{http://schemas.openxmlformats.org/package/2006/relationships}Relationship'):
        rels[rel.get('Id')] = rel.get('Target')

    xml_content = document.read('word/document.xml')
    tree = ET.fromstring(xml_content)
    
    results = []
    
    for i, p in enumerate(tree.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p')):
        p_text = "".join(t.text for t in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if t.text)

        images = []
        for blip in p.iter('{http://schemas.openxmlformats.org/drawingml/2006/main}blip'):
            rel_id = blip.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed')
            if rel_id in rels:
                img_path = 'word/' + rels[rel_id].replace('../', '')
                if img_path in document.namelist():
                    img_data = document.read(img_path)
                    img_b64 = base64.b64encode(img_data).decode('utf-8')
                    ext = os.path.splitext(img_path)[1][1:]
                    if ext == 'jpg': ext = 'jpeg'
                    images.append(f"data:image/{ext};base64,{img_b64}")

        if images:
            results.append({"index": i, "text": p_text, "images": images})

    document.close()
    return results

image_data = extract_images_details(r"d:\All NCERT SOLUTIONS\source_docs\science\physics\chapter3.docx")

for item in image_data:
    print(f"--- PARAGRAPH P{item['index']} ---")
    print(f"TEXT: {item['text'][:100]}...")
    print(f"NUM_IMAGES: {len(item['images'])}")
    for j, img in enumerate(item['images']):
        print(f"IMAGE_{j}_B64_START: {img[:100]}...")
        print(f"IMAGE_{j}_B64_END: {img[-100:]}")
