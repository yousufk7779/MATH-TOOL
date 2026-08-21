import glob
import re

for path in sorted(glob.glob('client/data/content/c11-zoo-*.ts')):
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()
    print('=== File:', path, '===')
    
    # Search for img tags
    imgs = re.findall(r'<img[^>]+>', text)
    print('Found img tags:', len(imgs))
    for i, img in enumerate(imgs):
        alt_match = re.search(r'alt=["\']([^"\']+)["\']', img)
        alt = alt_match.group(1) if alt_match else "No alt"
        is_3d = '3d' in img.lower() or '3d' in alt.lower()
        is_b64 = 'data:image' in img
        print(f'  Img {i+1}: 3D={is_3d}, b64={is_b64}, alt="{alt}"')
        
    # Search for figure titles/captions or p tags near images
    captions = re.findall(r'Figure[^<]*', text, re.IGNORECASE)
    print('Captions count:', len(captions))
    for cap in captions[:10]:
        print('  Caption:', cap)

    # Search for svg tags
    svgs = re.findall(r'<svg[^>]+>', text)
    print('Found svg tags:', len(svgs))
