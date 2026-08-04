import fitz

doc = fitz.open('/Users/bigmac/Downloads/Accueil page Dr Samia Mrabat.pdf')

text_pages = [doc[p].get_text() for p in range(44, 52)]
full = '\n'.join(text_pages)

# Let's inspect headings and paragraphs
lines = [l.strip() for l in full.split('\n') if l.strip()]

sections = []
current_h2 = None
current_paras = []

i = 0
while i < len(lines):
    line = lines[i]
    if line == 'H2':
        if current_h2 and current_paras:
            sections.append((current_h2, current_paras))
            current_paras = []
        if i + 1 < len(lines):
            current_h2 = lines[i+1]
            i += 2
            continue
    elif current_h2:
        current_paras.append(line)
    i += 1

if current_h2 and current_paras:
    sections.append((current_h2, current_paras))

for h2, paras in sections:
    print('### H2:', h2)
    print('Paras count:', len(paras))
    print('First 2 lines:', paras[:2])
    print()
