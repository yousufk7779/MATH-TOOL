import zipfile
import xml.etree.ElementTree as ET
import os

docx_path = r'D:\All NCERT SOLUTIONS\source_docs\science\physics\chapter3.docx'
wp_ns = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
r_ns = '{http://schemas.openxmlformats.org/officeDocument/2006/relationships}'

def extract_image_contexts(path):
    with zipfile.ZipFile(path) as docx:
        doc_xml = docx.read('word/document.xml')
        tree = ET.fromstring(doc_xml)
        
        rels_xml = docx.read('word/_rels/document.xml.rels')
        rels_tree = ET.fromstring(rels_xml)
        rels = {}
        for rel in rels_tree.iter('{http://schemas.openxmlformats.org/package/2006/relationships}Relationship'):
            rels[rel.attrib['Id']] = rel.attrib['Target']

        paragraphs = tree.findall(f'.//{wp_ns}p')
        for i, p in enumerate(paragraphs):
            text = "".join(node.text for node in p.iter(f'{wp_ns}t') if node.text)
            # check for blips in this paragraph
            for blip in p.iter('{http://schemas.openxmlformats.org/drawingml/2006/main}blip'):
                rid = blip.get(f'{r_ns}embed')
                image_path = rels.get(rid, "Unknown")
                print(f"[{i}] Paragraph with image: {text[:50]}...")
                print(f"    Image: {image_path}")
            
            if "iron and mercury" in text or "Table" in text:
                 print(f"[{i}] Text: {text}")

extract_image_contexts(docx_path)
