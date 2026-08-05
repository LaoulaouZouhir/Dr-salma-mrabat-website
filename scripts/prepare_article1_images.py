import os
import re
import urllib.request
import urllib.parse
import ssl
from PIL import Image

def download_unsplash_image(query, output_path):
    print(f"Searching Unsplash for: {query}")
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
    }
    url = f"https://unsplash.com/s/photos/{urllib.parse.quote(query)}"
    
    # Disable SSL verification context
    ctx = ssl._create_unverified_context()
    
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ctx) as response:
            html = response.read().decode('utf-8')
        
        # Look for photo URLs like https://images.unsplash.com/photo-1234567890?ixlib=...
        matches = re.findall(r'https://images.unsplash.com/(photo-[a-zA-Z0-9\-]+)', html)
        if not matches:
            matches = re.findall(r'images\.unsplash\.com/(photo-[a-zA-Z0-9\-]+)', html)
            
        if matches:
            unique_ids = list(dict.fromkeys(matches))
            print(f"Found {len(unique_ids)} image candidates.")
            # Let's pick the first one
            photo_id = unique_ids[0]
            img_url = f"https://images.unsplash.com/{photo_id}?auto=format&fit=crop&w=800&q=80"
            print(f"Downloading image from: {img_url}")
            
            img_req = urllib.request.Request(img_url, headers=headers)
            with urllib.request.urlopen(img_req, context=ctx) as img_resp:
                with open(output_path, 'wb') as f:
                    f.write(img_resp.read())
            print(f"Successfully downloaded to {output_path}")
            return True
        else:
            print("No image candidates found in Unsplash search page.")
            return False
    except Exception as e:
        print(f"Error downloading from Unsplash: {e}")
        return False

def main():
    target_dir = '/Volumes/Stockage/Siteweb-samia2/public/articles/article1/images'
    os.makedirs(target_dir, exist_ok=True)
    
    # 1. Image 1: Acne Skin Anatomy
    src1 = '/Volumes/Stockage/Siteweb-samia2/public/images/acne_skin_anatomy.jpg'
    dest1 = os.path.join(target_dir, 'img-001.png')
    if os.path.exists(src1):
        print(f"Converting {src1} to {dest1}")
        with Image.open(src1) as img:
            img.save(dest1, 'PNG')
        print("✅ img-001.png created successfully.")
    else:
        print(f"❌ Source image not found: {src1}")
        
    # 2. Image 2: Rosacea Facial Redness
    src2 = '/Volumes/Stockage/Siteweb-samia2/public/images/rosacea_facial_redness.jpg'
    dest2 = os.path.join(target_dir, 'img-002.png')
    if os.path.exists(src2):
        print(f"Converting {src2} to {dest2}")
        with Image.open(src2) as img:
            img.save(dest2, 'PNG')
        print("✅ img-002.png created successfully.")
    else:
        print(f"❌ Source image not found: {src2}")
        
    # 3. Image 3: Woman checking skin/pimple in mirror
    dest3 = os.path.join(target_dir, 'img-003.png')
    
    # Direct image download using a specific high-quality skincare/mirror Unsplash ID
    direct_ids = ["photo-1616683693504-3ea7e9ad6fec", "photo-1522337360788-8b13dee7a37e"]
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
    }
    ctx = ssl._create_unverified_context()
    success = False
    
    for photo_id in direct_ids:
        img_url = f"https://images.unsplash.com/{photo_id}?auto=format&fit=crop&w=800&q=80"
        print(f"Trying to download direct skincare photo: {img_url}")
        try:
            img_req = urllib.request.Request(img_url, headers=headers)
            with urllib.request.urlopen(img_req, context=ctx) as img_resp:
                # Open with Pillow, convert/save as PNG
                with Image.open(img_resp) as img:
                    img.save(dest3, 'PNG')
            print(f"✅ img-003.png downloaded and saved successfully.")
            success = True
            break
        except Exception as e:
            print(f"Failed downloading {photo_id}: {e}")
            
    if not success:
        src_fallback = '/Volumes/Stockage/Siteweb-samia2/public/images/aesthetic-dermatology.jpg'
        if os.path.exists(src_fallback):
            print(f"Fallback: Converting local {src_fallback} to {dest3}")
            with Image.open(src_fallback) as img:
                img.save(dest3, 'PNG')
            print("✅ img-003.png fallback created successfully.")
        else:
            print("❌ Fallback source image not found.")
            
    # 4. Image 4: Dermatologist office
    src4 = '/Volumes/Stockage/Siteweb-samia2/public/images/cabinet/espace-soins.jpg'
    dest4 = os.path.join(target_dir, 'img-004.png')
    if os.path.exists(src4):
        print(f"Converting {src4} to {dest4}")
        with Image.open(src4) as img:
            img.save(dest4, 'PNG')
        print("✅ img-004.png created successfully.")
    else:
        src4_fallback = '/Volumes/Stockage/Siteweb-samia2/public/images/dermatology_cabinet.jpg'
        if os.path.exists(src4_fallback):
            print(f"Fallback: Converting local {src4_fallback} to {dest4}")
            with Image.open(src4_fallback) as img:
                img.save(dest4, 'PNG')
            print("✅ img-004.png fallback created successfully.")
        else:
            print("❌ Cabinet source image not found.")

if __name__ == '__main__':
    main()
