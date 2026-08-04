#!/usr/bin/env python3
import json
import os
import sys

CONFIG_PATH = '/Volumes/Stockage/Siteweb-samia2/src/data/articleImagesConfig.json'
PUBLIC_DIR = '/Volumes/Stockage/Siteweb-samia2/public'

def check_images():
    if not os.path.exists(CONFIG_PATH):
        print(f"❌ Error: Config file not found at {CONFIG_PATH}")
        sys.exit(1)

    with open(CONFIG_PATH, 'r', encoding='utf-8') as f:
        articles = json.load(f)

    print(f"🔍 Analyzing image configuration for {len(articles)} articles...\n")

    total_images = 0
    missing_images = 0

    for art in articles:
        print(f"📖 Article: [{art['category']}] {art['title']}")
        images = art.get('images', [])
        if not images:
            print("   ⚠️  No images assigned to this article!")
            continue

        for img in images:
            total_images += 1
            rel_src = img['src'].lstrip('/')
            full_path = os.path.join(PUBLIC_DIR, rel_src)
            exists = os.path.exists(full_path)

            if exists:
                size_kb = os.path.getsize(full_path) / 1024.0
                print(f"   ✅ [{img['section']}] {img['src']} ({size_kb:.1f} KB)")
            else:
                missing_images += 1
                print(f"   ❌ [{img['section']}] MISSING FILE: {img['src']} (Path: {full_path})")
        print()

    print("=" * 60)
    print(f"📊 SUMMARY: {total_images} total images checked.")
    if missing_images == 0:
        print("🎉 PERFECT! All images exist and are properly mapped.")
    else:
        print(f"⚠️ ATTENTION: {missing_images} image file(s) are missing!")

if __name__ == '__main__':
    check_images()
