
import re
import json

def extract_all_images():
    file_path = r"d:\All NCERT SOLUTIONS\full_image_details.txt"
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by paragraph markers
    paragraphs = re.split(r'--- PARAGRAPH (P\d+) ---', content)
    
    images_map = {}
    
    # paragraphs[0] is everything before the first marker
    # paragraphs[1] is P50, paragraphs[2] is its content, etc.
    for i in range(1, len(paragraphs), 2):
        p_id = paragraphs[i]
        p_content = paragraphs[i+1]
        
        # Find all images in this paragraph
        # Structure: IMAGE_N_B64_START: ... IMAGE_N_B64_END: ...
        num_images_match = re.search(r'NUM_IMAGES: (\d+)', p_content)
        if num_images_match:
            num = int(num_images_match.group(1))
            imgs = []
            for n in range(num):
                start_marker = f'IMAGE_{n}_B64_START: '
                end_marker = f'IMAGE_{n}_B64_END: '
                
                start_idx = p_content.find(start_marker)
                end_idx = p_content.find(end_marker)
                
                if start_idx != -1 and end_idx != -1:
                    b64_start = p_content[start_idx + len(start_marker) : p_content.find('\n', start_idx)].strip()
                    # The full base64 is not actually here because I truncated it when writing full_image_details.txt?
                    # WAIT. I need to check how full_image_details.txt was written.
            
    # Re-reading how I wrote full_image_details.txt in the previous turn.
    # Ah, I see: I didn't truncate it in the turn where I wrote it!
    # Let's check the script that generated it.
    pass

extract_all_images()
