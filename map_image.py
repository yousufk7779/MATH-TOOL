import zipfile
import xml.etree.ElementTree as ET
import os

docx_path = r'D:\All NCERT SOLUTIONS\source_docs\science\physics\chapter3.docx'
wp_ns = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
r_ns = '{http://schemas.openxmlformats.org/officeDocument/2006/relationships}'
a_ns = '{http://schemas.openxmlformats.org/drawingml/2006/main}'
pic_ns = '{http://schemas.openxmlformats.org/drawingml/2006/picture}'

def find_image_for_q5(path):
    with zipfile.ZipFile(path) as docx:
        # Read document.xml
        doc_xml = docx.read('word/document.xml')
        tree = ET.fromstring(doc_xml)
        
        # Read rels
        rels_xml = docx.read('word/_rels/document.xml.rels')
        rels_tree = ET.fromstring(rels_xml)
        rels = {}
        for rel in rels_tree.iter('{http://schemas.openxmlformats.org/package/2006/relationships}Relationship'):
            rels[rel.attrib['Id']] = rel.attrib['Target']

        # Iterate paragraphs
        paragraphs = tree.findall(f'.//{wp_ns}p')
        for i, p in enumerate(paragraphs):
            text = "".join(node.text for node in p.iter(f'{wp_ns}t') if node.text)
            if "Table 12.2" in text and ("iron and mercury" in text or "better conductor" in text or "Which material" in text):
                print(f"Found Q5 text: {text}")
                # Look for images in this or next few paragraphs
                for j in range(i, i + 5):
                    if j < len(paragraphs):
                        curr_p = paragraphs[j]
                        for blip in curr_p.iter('{http://schemas.openxmlformats.org/drawingml/2006/main}blip'):
                            rid = blip.get(f'{r_ns}embed')
                            if rid in rels:
                                image_path = rels[rid]
                                print(f"Found image for Q5: {image_path} (rId: {rid})")
                                return image_path
    return None

image_internal_path = find_image_for_q5(docx_path)
if image_internal_path:
    # Need to clean up the path (it's often media/imageX.png)
    image_name = os.path.basename(image_internal_path)
    print(f"FINAL_IMAGE_NAME: {image_name}")
else:
    print("Image not found")
