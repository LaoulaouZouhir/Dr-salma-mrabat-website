import os
import re

app_jsx_path = '/Volumes/Stockage/Siteweb-samia2/src/App.jsx'
pages_dir = '/Volumes/Stockage/Siteweb-samia2/src/pages'
public_dir = '/Volumes/Stockage/Siteweb-samia2/public'

# 1. Parse App.jsx
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

print("🔍 VERIFICATION START 🔍\n")

missing_in_jsx = []
missing_in_public = []

for i in range(1, 21):
    # Determine the component for article i by matching slug in URL
    # (Since we know slug matches from our earlier script)
    # Let's map it manually from paths for 100% precision
    found_comp_name = None
    for path, comp in path_to_comp.items():
        # Check if the jsx file has article{i} inside it
        if comp in comp_to_file:
            file_path = comp_to_file[comp]
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            if f"/articles/article{i}/" in content:
                found_comp_name = comp
                break
                
    if not found_comp_name:
        print(f"⚠️ Article {i}: Component not found referencing /articles/article{i}/")
        continue
        
    file_path = comp_to_file[found_comp_name]
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Check if JSX has img-000
    has_jsx_ref = f"/articles/article{i}/images/img-000.png" in content
    if has_jsx_ref:
        print(f"✅ Article {i} ({found_comp_name}): JSX contains img-000.png reference")
    else:
        print(f"❌ Article {i} ({found_comp_name}): JSX IS MISSING img-000.png reference")
        missing_in_jsx.append(i)
        
    # Check if physical image exists
    img_path = os.path.join(public_dir, f"articles/article{i}/images/img-000.png")
    exists = os.path.exists(img_path)
    if exists:
        size_kb = os.path.getsize(img_path) / 1024.0
        print(f"✅ Article {i} ({found_comp_name}): Physical file exists: {img_path} ({size_kb:.1f} KB)")
    else:
        print(f"❌ Article {i} ({found_comp_name}): Physical file IS MISSING: {img_path}")
        missing_in_public.append(i)
        
    print()

print("=" * 60)
if not missing_in_jsx and not missing_in_public:
    print("🎉 PERFECT! All 20 articles successfully verified with hero image reference and physical asset.")
else:
    print(f"⚠️ WARNING: {len(missing_in_jsx)} JSX reference errors and {len(missing_in_public)} missing asset errors.")
