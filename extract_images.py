import zipfile
import os

docx_path = r'D:\All NCERT SOLUTIONS\source_docs\science\physics\chapter3.docx'
extract_path = r'D:\All NCERT SOLUTIONS\extracted_media'

if not os.path.exists(extract_path):
    os.makedirs(extract_path)

with zipfile.ZipFile(docx_path, 'r') as zip_ref:
    for file in zip_ref.namelist():
        if file.startswith('word/media/'):
            zip_ref.extract(file, extract_path)

print(f"Extracted media to {extract_path}")
