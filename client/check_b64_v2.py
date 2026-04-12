import io, re
bio_file = r'd:\All NCERT SOLUTIONS\client\data\content\sci-bio-1.ts'
content = io.open(bio_file, 'r', encoding='utf-8').read()
m = re.search(r'data:image/jpeg;base64,([^"\\]+)', content)
if m:
    part = m.group(1)
    print(f"Base64 start: {part[:20]!r}")
    print(f"Base64 end: {part[-20:]!r}")
    # Check for non-standard chars
    bad = [(i, c, ord(c)) for i, c in enumerate(part) if not (c.isalnum() or c in '+/=')]
    print(f"Bad chars found: {len(bad)}")
    if bad:
        print(f"First 5 bad: {bad[:5]}")
else:
    print("Not found")
