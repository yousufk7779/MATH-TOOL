import os
import re

# Theme colors for Class 9 chapters (extracted from chapters.ts)
THEMES = {
    "c9-math-1": "#FFB74D",
    "c9-math-2": "#FF4081",
    "c9-math-3": "#AB47BC",
    "c9-math-4": "#42A5F5",
    "c9-math-5": "#66BB6A",
    "c9-math-6": "#FF4081",
    "c9-math-7": "#FFA726",
    "c9-math-8": "#FF8A65",
    "c9-math-9": "#00C6FF",
    "c9-math-10": "#FFA726",
    "c9-math-11": "#FF4DA6",
}

def rgb_to_rgba(hex_color, alpha):
    hex_color = hex_color.lstrip('#')
    if len(hex_color) == 6:
        r, g, b = tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))
        return f"rgba({r}, {g}, {b}, {alpha})"
    return "rgba(255, 255, 255, 0.05)"

def upgrade_html_content(html, theme_color):
    bg_color = rgb_to_rgba(theme_color, 0.05)
    
    # 1. Update fractions
    # <span class="fraction"><span class="numerator">p</span><span>q</span></span> -> <span class='frac'><span class='num'>p</span><span class='den'>q</span></span>
    html = re.sub(r'class="fraction"', "class='frac'", html)
    html = re.sub(r"class='fraction'", "class='frac'", html)
    html = re.sub(r'class="numerator"', "class='num'", html)
    html = re.sub(r"class='numerator'", "class='num'", html)
    html = re.sub(r"<span class='frac'>\s*<span class='num'>(.*?)</span>\s*<span>(.*?)</span>\s*</span>", r"<span class='frac'><span class='num'>\1</span><span class='den'>\2</span></span>", html, flags=re.DOTALL)
    
    # 2. Add structural Q-card wrapping if it uses the old sibling structure
    # Old structure: <div class="question">...</div> \n <div class="solution">...</div>
    # We will just style .question and .solution to look premium!
    # Instead of wrapping in DOM, we can inject a premium CSS block.
    
    css_template = f"""      <style>
        .frac {{ display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }}
        .frac .num {{ border-bottom: 1px solid currentColor; padding: 0 2px; }}
        .frac .den {{ padding: 0 2px; }}
        .container {{ padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }}
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        
        .question {{ color: {theme_color}; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }}
        .solution {{ border-left: 3px solid {theme_color}; padding-left: 15px; margin-top: 15px; background: {bg_color}; padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }}
        .subpart {{ color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }}
        
        /* Overview styles */
        .section-title {{ color: {theme_color} !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }}
        .sub-header {{ color: {theme_color} !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }}
        .formula-box {{ background: {bg_color} !important; border-left: 4px solid {theme_color} !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }}
        h2 {{ color: {theme_color} !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }}
        h3 {{ color: {theme_color} !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }}
        .highlight {{ color: {theme_color} !important; font-weight: 700; }}
        strong {{ color: {theme_color} !important; font-weight: 600; }}
        
        /* Utility classes for step-by-step */
        .step {{ margin-bottom: 8px; font-size: 16px; line-height: 1.8; }}
        .sol-step {{ margin-bottom: 8px; font-size: 16px; line-height: 1.8; }}
        .ans-highlight {{ color: {theme_color}; font-weight: 700; }}
        .svg-container {{ display: flex; justify-content: center; margin: 15px 0; width: 100%; }}
        
        /* Table styles */
        table {{ width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }}
        th {{ background: {bg_color}; color: {theme_color}; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }}
        td {{ padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }}
        
        /* Bar graph styles */
        svg rect {{ stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }}
      </style>"""

    # Remove old style block completely
    html = re.sub(r'<style>.*?</style>', '', html, flags=re.DOTALL)
    
    # Insert new style block at the beginning
    html = css_template + "\n" + html.strip()
    
    # Optional: If the file already had .q-card structure, don't break it. 
    # Just ensure fonts are 16px and line-height 1.8
    # We will add those to the global css anyway.

    return html

def process_file(filepath, theme_color):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the htmlExercises dictionary
    # It usually looks like: htmlExercises: { "ex1-1": `...`, ... }
    
    # We will find all occurrences of backtick strings that contain <style>
    def replacer(match):
        raw_html = match.group(1)
        if '<style>' in raw_html or 'class="container"' in raw_html or 'class="ex-container"' in raw_html:
            new_html = upgrade_html_content(raw_html, theme_color)
            return '`' + new_html + '`'
        return match.group(0)

    # Use regex to find all backtick strings
    new_content = re.sub(r'`(.*?)`', replacer, content, flags=re.DOTALL)

    # Update summary array strings if they have fractions
    new_content = new_content.replace('class="fraction"', "class='frac'")
    new_content = new_content.replace("class='fraction'", "class='frac'")
    new_content = new_content.replace('class="numerator"', "class='num'")
    new_content = new_content.replace("class='numerator'", "class='num'")
    new_content = re.sub(r"<span class='frac'>\s*<span class='num'>(.*?)</span>\s*<span>(.*?)</span>\s*</span>", r"<span class='frac'><span class='num'>\1</span><span class='den'>\2</span></span>", new_content, flags=re.DOTALL)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

def main():
    directory = r"d:\All NCERT SOLUTIONS\client\data\content"
    
    for filename in os.listdir(directory):
        if filename.startswith("c9-math-") and filename.endswith(".ts"):
            chapter_id = filename.replace(".ts", "")
            # For template files or unknown ids, skip or use a default
            theme_color = THEMES.get(chapter_id, "#FF9800")
            
            filepath = os.path.join(directory, filename)
            print(f"Processing {filename} with theme {theme_color}...")
            updated = process_file(filepath, theme_color)
            if updated:
                print(f"  -> Updated {filename}")
            else:
                print(f"  -> No changes needed for {filename}")

if __name__ == "__main__":
    main()
