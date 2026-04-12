
import zipfile
import xml.etree.ElementTree as ET
import base64
import os

def extract_summary(path):
    document = zipfile.ZipFile(path)
    
    rels_xml = document.read('word/_rels/document.xml.rels')
    rels_tree = ET.fromstring(rels_xml)
    rels = {}
    for rel in rels_tree.findall('{http://schemas.openxmlformats.org/package/2006/relationships}Relationship'):
        rels[rel.get('Id')] = rel.get('Target')

    xml_content = document.read('word/document.xml')
    tree = ET.fromstring(xml_content)
    
    content_summary = []
    for i, p in enumerate(tree.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p')):
        p_text = "".join(t.text for t in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if t.text)
        
        images = []
        for blip in p.iter('{http://schemas.openxmlformats.org/drawingml/2006/main}blip'):
            rel_id = blip.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed')
            if rel_id in rels:
                images.append(rels[rel_id])

        if p_text or images:
            content_summary.append(f"P{i}: [{len(images)} images] {p_text[:200]}")

    document.close()
    return content_summary

summary = extract_summary(r"d:\All NCERT SOLUTIONS\source_docs\science\physics\chapter3.docx")
with open('docx_summary.txt', 'w', encoding='utf-8') as f:
    for line in summary:
        f.write(line + '\n')
print('Summary written to docx_summary.txt')
