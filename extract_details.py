
import docx
import os

def extract_details(docx_path):
    doc = docx.Document(docx_path)
    for i, p in enumerate(doc.paragraphs):
        text = p.text.strip()
        has_image = False
        for run in p.runs:
            if 'pic' in run._element.xml:
                has_image = True
        
        if text or has_image:
            img_tag = " [IMAGE]" if has_image else ""
            print(f"P{i}: {text}{img_tag}")

extract_details(r"d:\All NCERT SOLUTIONS\source_docs\science\physics\chapter3.docx")
