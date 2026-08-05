import os
import re
import json

app_jsx_path = '/Volumes/Stockage/Siteweb-samia2/src/App.jsx'
pages_dir = '/Volumes/Stockage/Siteweb-samia2/src/pages'
source_dir = '/Users/bigmac/Downloads/all_articles'

# 1. Parse App.jsx to map path -> Component
with open(app_jsx_path, 'r', encoding='utf-8') as f:
    app_jsx = f.read()

route_pattern = re.compile(r'<Route\s+path="(.*?)"\s+element=\{<(.*?) />\}\s*/>')
routes = route_pattern.findall(app_jsx)
path_to_comp = {path: comp for path, comp in routes}

# 2. Find paths to all components
comp_to_file = {}
for root, dirs, files in os.walk(pages_dir):
    for file in files:
        if file.endswith('.jsx'):
            comp_name = file[:-4]
            comp_to_file[comp_name] = os.path.join(root, file)

print(f"Loaded {len(comp_to_file)} components.")

for i in range(1, 21):
    html_file = os.path.join(source_dir, f'article{i}', 'index.html')
    if not os.path.exists(html_file):
        print(f"Article {i}: HTML not found at {html_file}")
        continue
        
    with open(html_file, 'r', encoding='utf-8') as f:
        html = f.read()
        
    # Extract URL or Slug to map to component
    url_match = re.search(r'<strong>URL\s*:\s*</strong>\s*(?:<a[^>]*>)?(.*?)(?:</a>)?</p>', html, re.IGNORECASE)
    path = None
    if url_match:
        full_url = url_match.group(1).strip()
        path = full_url.replace('https://drsamiamrabatdermatologue.com', '').strip()
    else:
        slug_match = re.search(r'<strong>SLUG\s*:\s*</strong>(.*?)</p>', html, re.IGNORECASE)
        if slug_match:
            slug = slug_match.group(1).strip()
            for p in path_to_comp.keys():
                if p.endswith(slug):
                    path = p
                    break
        else:
            # Try parsing a general link or path
            url_match_fallback = re.search(r'https://drsamiamrabatdermatologue\.com(/([a-z0-9\-]+/[a-z0-9\-]+))', html, re.IGNORECASE)
            if url_match_fallback:
                path = url_match_fallback.group(1).strip()
                
    if not path or path not in path_to_comp:
        print(f"Article {i}: Could not resolve path '{path}' to component")
        continue
        
    comp_name = path_to_comp[path]
    if comp_name not in comp_to_file:
        print(f"Article {i}: Component file for '{comp_name}' not found")
        continue
        
    target_file = comp_to_file[comp_name]
    
    # Extract img-000 alt and caption
    img_match = re.search(r'<img\s+([^>]*img-000\.png[^>]*)>', html, re.IGNORECASE)
    if not img_match:
        print(f"Article {i}: No img-000.png found in HTML")
        continue
        
    tag = img_match.group(0)
    alt_match = re.search(r'alt=\x22([^\x22]*)\x22', tag) or re.search(r'alt=\x27([^\x27]*)\x27', tag)
    alt_val = alt_match.group(1).strip() if alt_match else ""
    
    caption_match = re.search(r'<p\s+class=[\x22\x27]caption[\x22\x27]>(.*?)</p>', html[img_match.end():img_match.end()+500], re.DOTALL)
    caption_val = caption_match.group(1).strip() if caption_match else ""
    
    # Format caption for JSX
    caption_jsx = caption_val.replace('class="', 'className="').replace("class='", "className='").replace('<br>', '<br />')
    
    # Load JSX file
    with open(target_file, 'r', encoding='utf-8') as f:
        jsx = f.read()
        
    # Check if already has img-000
    if f'images/img-000.png' in jsx:
        print(f"Article {i}: img-000 already present in {comp_name}.jsx")
        continue
        
    # Find the article tag
    article_tag = '<article className="medical-article">'
    idx = jsx.find(article_tag)
    if idx == -1:
        print(f"Article {i}: Could not find <article className=\"medical-article\"> in {comp_name}.jsx")
        continue
        
    # Construct injection
    img_src = f"/articles/article{i}/images/img-000.png"
    img_tag = f'<img src="{img_src}" alt={json.dumps(alt_val)} className="hero-image" />'
    
    if caption_jsx:
        caption_tag = f'\n<p className="caption">{caption_jsx}</p>'
    else:
        caption_tag = ''
        
    injection = f"{article_tag}\n{img_tag}{caption_tag}"
    
    # Inject
    new_jsx = jsx[:idx] + injection + jsx[idx + len(article_tag):]
    
    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(new_jsx)
        
    print(f"✅ Article {i} ({comp_name}.jsx): Successfully injected hero image and caption.")

print("All done!")
