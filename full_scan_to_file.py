import zipfile
import xml.etree.ElementTree as ET
import os

docx_path = r'D:\All NCERT SOLUTIONS\source_docs\science\physics\chapter3.docx'
wp_ns = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
r_ns = '{http://schemas.openxmlformats.org/officeDocument/2006/relationships}'

def scan_document(path):
    output = []
    with zipfile.ZipFile(path) as docx:
        doc_xml = docx.read('word/document.xml')
        tree = ET.fromstring(doc_xml)
        
        rels_xml = docx.read('word/_rels/document.xml.rels')
        rels_tree = ET.fromstring(rels_xml)
        rels = {}
        for rel in rels_tree.iter('{http://schemas.openxmlformats.org/package/2006/relationships}Relationship'):
            rels[rel.attrib['Id']] = rel.attrib['Target']

        body = tree.find(f'{wp_ns}body')
        for child in body:
            if child.tag == f'{wp_ns}p':
                text = "".join(node.text for node in child.iter(f'{wp_ns}t') if node.text)
                images = [rels.get(blip.get(f'{r_ns}embed'), "Unknown") for blip in child.iter('{http://schemas.openxmlformats.org/drawingml/2006/main}blip')]
                if text or images:
                    output.append(f"P: {text} | Images: {images}")
            elif child.tag == f'{wp_ns}tbl':
                output.append("--- START TABLE ---")
                rows = child.findall(f'.//{wp_ns}tr')
                for r in rows:
                    cells = r.findall(f'.//{wp_ns}tc')
                    cell_texts = []
                    cell_images = []
                    for c in cells:
                        t = "".join(node.text for node in c.iter(f'{wp_ns}t') if node.text)
                        cell_texts.append(t)
                        cell_images.extend([rels.get(blip.get(f'{r_ns}embed'), "Unknown") for blip in c.iter('{http://schemas.openxmlformats.org/drawingml/2006/main}blip')])
                    output.append(f"ROW: {cell_texts} | Images: {cell_images}")
                output.append("--- END TABLE ---")
    
    with open('full_scan_report.txt', 'w', encoding='utf-8') as f:
        f.write("\n".join(output))

scan_document(docx_path)
print("Report generated: full_scan_report.txt")
