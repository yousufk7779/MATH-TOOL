
import zipfile
import xml.etree.ElementTree as ET
import base64
import os

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
    
    ns = {
        'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
        'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
        'wp': 'http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing',
        'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
        'pic': 'http://schemas.openxmlformats.org/drawingml/2006/picture'
    }

    content = []
    # Iterate through paragraphs
    for p in tree.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
        p_text = ""
        for t in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t'):
            if t.text:
                p_text += t.text
        
        # Look for images in this paragraph
        images = []
        for drawing in p.iter('{http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing}drawing'):
            for blip in drawing.iter('{http://schemas.openxmlformats.org/drawingml/2006/main}blip'):
                rel_id = blip.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed')
                if rel_id in rels:
                    img_path = 'word/' + rels[rel_id].replace('../', '')
                    if img_path in document.namelist():
                        img_data = document.read(img_path)
                        img_b64 = base64.b64encode(img_data).decode('utf-8')
                        ext = os.path.splitext(img_path)[1][1:]
                        if ext == 'jpg': ext = 'jpeg'
                        images.append(f"data:image/{ext};base64,{img_b64}")

        if p_text or images:
            content.append({'text': p_text, 'images': images})

    document.close()
    return content

results = extract_content(r"d:\All NCERT SOLUTIONS\source_docs\science\physics\chapter3.docx")
for item in results:
    if item['images']:
        print(f"TEXT: {item['text'][:100]}... [HAS {len(item['images'])} IMAGE(S)]")
        # For debugging, print just a bit of b64
        for img in item['images']:
            print(f"IMAGE: {img[:50]}...")
    else:
        if item['text']:
            print(f"TEXT: {item['text']}")
