with open(r'd:\All NCERT SOLUTIONS\apply_log.txt', 'rb') as f:
    data = f.read()
    # Try different encodings
    for encoding in ['utf-16', 'utf-16le', 'utf-16be', 'utf-8']:
        try:
            text = data.decode(encoding)
            print(f"--- Decoded with {encoding} ---")
            print(text)
            break
        except:
            continue
