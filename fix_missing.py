import os
import re
import shutil

app_jsx_path = '/Volumes/Stockage/Siteweb-samia2/src/App.jsx'
pages_dir = '/Volumes/Stockage/Siteweb-samia2/src/pages'
source_dir = '/Users/bigmac/Downloads/all_articles'
public_articles_dir = '/Volumes/Stockage/Siteweb-samia2/public/articles'

with open(app_jsx_path, 'r', encoding='utf-8') as f:
    app_jsx = f.read()

route_pattern = re.compile(r'<Route\s+path="(.*?)"\s+element=\{<(.*?) />\}\s*/>')
routes = route_pattern.findall(app_jsx)
path_to_comp = {path: comp for path, comp in routes}

comp_to_file = {}
for root, dirs, files in os.walk(pages_dir):
    for file in files:
        if file.endswith('.jsx'):
            comp_name = file[:-4]
            comp_to_file[comp_name] = os.path.join(root, file)

for i in [2, 11, 12, 16]:
    print(f"Starting article{i}...")
    article_dir = os.path.join(source_dir, f'article{i}')
    html_file = os.path.join(article_dir, 'index.html')
    if not os.path.exists(html_file):
        print(f"File {html_file} not found")
        continue
        
    with open(html_file, 'r', encoding='utf-8') as f:
        html = f.read()
    
    # Try to extract the path using a more generic regex for the URL
    url_match = re.search(r'https://drsamiamrabatdermatologue\.com(/([a-z0-9\-]+/[a-z0-9\-]+))', html, re.IGNORECASE)
    if url_match:
        path = url_match.group(1).strip()
    else:
        print(f"Skipping article{i}, no URL found")
        continue
    
    print(f"Resolved path for article{i}: {path}")
    
    if path not in path_to_comp:
        print(f"Path {path} not found in App.jsx for article{i}")
        continue
        
    comp_name = path_to_comp[path]
    if comp_name not in comp_to_file:
        print(f"Component file for {comp_name} not found")
        continue
        
    target_file = comp_to_file[comp_name]
    
    # Copy images
    src_images = os.path.join(article_dir, 'images')
    dest_images = os.path.join(public_articles_dir, f'article{i}', 'images')
    if os.path.exists(src_images):
        os.makedirs(dest_images, exist_ok=True)
        for img in os.listdir(src_images):
            shutil.copy2(os.path.join(src_images, img), os.path.join(dest_images, img))
            
    # Extract title
    title_match = re.search(r'<h1>(.*?)</h1>', html, re.DOTALL)
    title_raw = title_match.group(1).strip() if title_match else ""
    
    # Extract intro
    intro_match = re.search(r'<div class="intro">(.*?)</div>', html, re.DOTALL)
    intro_content = intro_match.group(1).strip() if intro_match else ""
    
    intro_content = intro_content.replace('class="', 'className="')
    intro_content = re.sub(r'<img([^>]+?)(?<!/)>', r'<img\1 />', intro_content)
    
    subtitle_paras = []
    for p_match in re.finditer(r'<p(.*?)>(.*?)</p>', intro_content, re.DOTALL):
        if 'className="caption"' not in p_match.group(1):
            subtitle_paras.append(p_match.group(2).strip())
            
    subtitle_raw = '\n'.join([f'<p>{p}</p>' for p in subtitle_paras])
    
    # Extract Article Body
    idx_intro = html.find('<div class="intro">')
    idx_intro_end = html.find('</div>', idx_intro)
    idx_cta = html.find('<div class="cta-container">')
    
    if idx_intro_end != -1 and idx_cta != -1:
        article_body = html[idx_intro_end+6 : idx_cta].strip()
    else:
        if idx_intro_end != -1:
            article_body = html[idx_intro_end+6 : ].strip()
            idx_body = article_body.rfind('</div>')
            if idx_body != -1:
                article_body = article_body[:idx_body].strip()
        else:
            article_body = ""
            
    article_body = article_body.replace('class="', 'className="')
    article_body = re.sub(r'<img([^>]+?)(?<!/)>', r'<img\1 />', article_body)
    article_body = re.sub(r'src="images/([^"]+)"', rf'src="/articles/article{i}/images/\1"', article_body)
    article_body = article_body.replace('<br>', '<br />')
    
    with open(target_file, 'r', encoding='utf-8') as f:
        existing_jsx = f.read()
        
    existing_jsx = re.sub(r'<h1 className="subpage-title">.*?</h1>', f'<h1 className="subpage-title">{title_raw}</h1>', existing_jsx, flags=re.DOTALL)
    existing_jsx = re.sub(r'<div className="subpage-subtitle">.*?</div>', f'<div className="subpage-subtitle">\n{subtitle_raw}\n</div>', existing_jsx, flags=re.DOTALL)
    existing_jsx = re.sub(r"import LightboxImage from '\.\./\.\./components/Lightbox';\n", "", existing_jsx)
    
    new_article_content = f"""<article className="medical-article">
{article_body}
                <div className="cta-container">
                  <a href="https://wa.me/212689270924" target="_blank" rel="noopener noreferrer" className="cta-button">Je prends mon rendez-vous</a>
                  <span className="cta-subtext">Contactez le cabinet via WhatsApp pour fixer votre consultation</span>
                </div>
              </article>"""
              
    existing_jsx = re.sub(r'<article className="medical-article">.*?</article>', new_article_content, existing_jsx, flags=re.DOTALL)
    
    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(existing_jsx)
        
    print(f"Processed article{i}: {comp_name}")
