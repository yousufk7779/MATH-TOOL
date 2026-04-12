
import re
import base64

def fix(svg):
    # Fixed corrupt SVG strings like stroke="stroke=" pink"=""
    svg = re.sub(r'stroke="stroke=" ([^"]+)"=""', r'stroke="\1"', svg)
    svg = re.sub(r'stroke="stroke=" stroke=""', r'stroke="currentColor"', svg)
    svg = re.sub(r' "=""', '', svg)
    return svg

def process(m):
    p, d = m.groups()
    try:
        dec = base64.b64decode(d).decode('utf-8')
        fxd = fix(dec)
        enc = base64.b64encode(fxd.encode('utf-8')).decode('utf-8')
        return p + enc
    except:
        return m.group(0)

path = r"d:\All NCERT SOLUTIONS\client\data\content\math-ch11.ts"
with open(path, "r", encoding="utf-8") as f:
    c = f.read()

fixed = re.sub(r'(src="data:image/svg\+xml;base64,)([^"]+)', process, c)

with open(path, "w", encoding="utf-8") as f:
    f.write(fixed)
print("done")
