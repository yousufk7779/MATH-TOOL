
import zipfile
import xml.etree.ElementTree as ET

path = r"d:\All NCERT SOLUTIONS\source_docs\science\physics\chapter3.docx"
document = zipfile.ZipFile(path)

# Get relations
rels_xml = document.read('word/_rels/document.xml.rels')
rels_tree = ET.fromstring(rels_xml)
rels = {rel.get('Id'): rel.get('Target') for rel in rels_tree.findall('{http://schemas.openxmlformats.org/package/2006/relationships}Relationship')}

xml_content = document.read('word/document.xml')
tree = ET.fromstring(xml_content)

# Search for all elements that might contain a relationship ID to an image
# Usually looking for 'embed' attribute in 'blip' tags or 'id' in 'imagedata'
found_rels = []

for elem in tree.iter():
    for attr_name, attr_value in elem.attrib.items():
        if 'embed' in attr_name or 'id' in attr_name:
            if attr_value in rels:
                target = rels[attr_value]
                if 'media/' in target:
                   found_rels.append((elem.tag, attr_name, attr_value, target))

print(f"Found {len(found_rels)} media references.")
for fr in found_rels[:20]:
    print(fr)

# Also check for 'drawing' elements and what they contain
drawings = list(tree.iter('{http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing}drawing'))
print(f"Found {len(drawings)} drawing elements.")

document.close()
