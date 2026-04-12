
import zipfile

path = r"d:\All NCERT SOLUTIONS\source_docs\science\physics\chapter3.docx"
document = zipfile.ZipFile(path)
for name in document.namelist():
    if 'rels' in name:
        print(name)
document.close()
