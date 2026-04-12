import zipfile
import xml.etree.ElementTree as ET
import os

docx_path = r'D:\All NCERT SOLUTIONS\source_docs\science\physics\chapter3.docx'
wp_ns = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
r_ns = '{http://schemas.openxmlformats.org/officeDocument/2006/relationships}'

def scan_document(path):
    with zipfile.ZipFile(path) as docx:
        doc_xml = docx.read('word/document.xml')
        tree = ET.fromstring(doc_xml)
        
        rels_xml = docx.read('word/_rels/document.xml.rels')
        rels_tree = ET.fromstring(rels_xml)
        rels = {}
        for rel in rels_tree.iter('{http://schemas.openxmlformats.org/package/2006/relationships}Relationship'):
            rels[rel.attrib['Id']] = rel.attrib['Target']

        # Find all tags that might contain text or images
        body = tree.find(f'{wp_ns}body')
        for child in body:
            if child.tag == f'{wp_ns}p':
                text = "".join(node.text for node in child.iter(f'{wp_ns}t') if node.text)
                images = [rels.get(blip.get(f'{r_ns}embed'), "Unknown") for blip in child.iter('{http://schemas.openxmlformats.org/drawingml/2006/main}blip')]
                if text or images:
                    print(f"P: {text[:80]} | Images: {images}")
            elif child.tag == f'{wp_ns}tbl':
                print("--- START TABLE ---")
                rows = child.findall(f'.//{wp_ns}tr')
                for r in rows:
                    cells = r.findall(f'.//{wp_ns}tc')
                    cell_texts = []
                    cell_images = []
                    for c in cells:
                        t = "".join(node.text for node in c.iter(f'{wp_ns}t') if node.text)
                        cell_texts.append(t)
                        cell_images.extend([rels.get(blip.get(f'{r_ns}embed'), "Unknown") for blip in c.iter('{http://schemas.openxmlformats.org/drawingml/2006/main}blip')])
                    print(f"ROW: {cell_texts} | Images: {cell_images}")
                print("--- END TABLE ---")

scan_document(docx_path)
