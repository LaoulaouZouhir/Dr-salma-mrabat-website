import fitz
import os
import re

doc = fitz.open('/Users/bigmac/Downloads/Accueil page Dr Samia Mrabat.pdf')

def extract_pdf_section(start_p, end_p):
    text_blocks = []
    for p in range(start_p - 1, end_p):
        text = doc[p].get_text()
        text_blocks.append(text)
    full = '\n'.join(text_blocks)
    return full

pages_data = [
    {
        'file': '/Volumes/Stockage/Siteweb-samia2/src/pages/dermatologie-medicale/ChuteCheveux.jsx',
        'component': 'ChuteCheveux',
        'category': 'Dermatologie Médicale',
        'category_url': '/dermatologie-medicale',
        'badge': 'DERMATOLOGIE MÉDICALE',
        'title': 'Chute de cheveux et maladies du cuir chevelu à Meknès',
        'subtitle': 'Le Dr Samia Mrabat, dermatologue à Meknès, prend en charge la chute de cheveux, les maladies du cuir chevelu et les différentes formes d\'alopécie chez l\'adulte et l\'enfant.',
        'seo_title': 'Chute de cheveux et maladies du cuir chevelu à Meknès | Dr Samia Mrabat',
        'seo_desc': 'Le Dr Samia Mrabat, dermatologue à Meknès, prend en charge la chute de cheveux, les maladies du cuir chevelu et les différentes formes d\'alopécie chez l\'adulte et l\'enfant.',
        'keywords': 'Chute de cheveux Meknès, Alopécie Meknès, Cuir chevelu Meknès, Traitement calvitie Meknès, Dermatologue cuir chevelu Meknès',
        'url': 'https://drsamiamrabatdermatologue.com/dermatologie-medicale/chute-cheveux-maladies-cuir-chevelu',
        'start_page': 45, 'end_page': 52,
        'img1': '/images/pdf_extracted/page_47_img_1.jpeg',
        'img1_alt': 'Infographie : Le cycle de vie du cheveu (Anagène, Catagène, Télogène)',
        'img1_cap': 'Les différentes phases du cycle pilaire et leur rôle dans la chute de cheveux.',
        'img2': '/images/pdf_extracted/page_49_img_1.jpeg',
        'img2_alt': 'Infographie : Les principales maladies du cuir chevelu (Dermatite, Psoriasis, Eczéma, Infections)',
        'img2_cap': 'Les affections dermatologiques les plus fréquentes touchant le cuir chevelu.'
    },
    {
        'file': '/Volumes/Stockage/Siteweb-samia2/src/pages/dermatologie-medicale/AllergiesInfections.jsx',
        'component': 'AllergiesInfections',
        'category': 'Dermatologie Médicale',
        'category_url': '/dermatologie-medicale',
        'badge': 'DERMATOLOGIE MÉDICALE',
        'title': 'Allergies, infections et maladies de la peau à Meknès',
        'subtitle': 'Le Dr Samia Mrabat, dermatologue à Meknès, assure le diagnostic et la prise en charge des allergies cutanées, des infections de la peau et des affections inflammatoires.',
        'seo_title': 'Allergies, infections et maladies de la peau à Meknès | Dr Samia Mrabat',
        'seo_desc': 'Le Dr Samia Mrabat, dermatologue à Meknès, assure le diagnostic et la prise en charge des allergies cutanées, des infections de la peau et des affections dermatologiques.',
        'keywords': 'Allergie cutanée Meknès, Infection peau Meknès, Urticaire Meknès, Mycose Meknès, Dermatologue Meknès',
        'url': 'https://drsamiamrabatdermatologue.com/dermatologie-medicale/allergies-infections-maladies-peau',
        'start_page': 53, 'end_page': 59,
        'img1': '/images/pdf_extracted/page_54_img_1.jpeg',
        'img1_alt': 'Infographie : Comprendre les allergies cutanées et l\'urticaire',
        'img1_cap': 'Déclencheurs et mécanismes des réactions allergiques cutanées.',
        'img2': '/images/pdf_extracted/page_57_img_1.jpeg',
        'img2_alt': 'Infographie : Les infections cutanées bactériennes, fongiques et virales',
        'img2_cap': 'Classification et manifestations des infections de la peau.'
    },
    {
        'file': '/Volumes/Stockage/Siteweb-samia2/src/pages/dermatologie-medicale/DermatologiePediatrique.jsx',
        'component': 'DermatologiePediatrique',
        'category': 'Dermatologie Médicale',
        'category_url': '/dermatologie-medicale',
        'badge': 'DERMATOLOGIE MÉDICALE',
        'title': 'Dermatologie pédiatrique à Meknès : soin de la peau des enfants et bébés',
        'subtitle': 'Le Dr Samia Mrabat, titulaire d\'un diplôme en dermatologie pédiatrique, prend en charge les affections cutanées du nourrisson, de l\'enfant et de l\'adolescent à Meknès.',
        'seo_title': 'Dermatologie pédiatrique à Meknès | Dr Samia Mrabat',
        'seo_desc': 'Le Dr Samia Mrabat, spécialisée en dermatologie pédiatrique à Meknès, prend en charge les problèmes de peau du nourrisson, de l\'enfant et de l\'adolescent.',
        'keywords': 'Dermatologue pédiatrique Meknès, Eczéma bébé Meknès, Verrues enfant Meknès, Peau enfant Meknès',
        'url': 'https://drsamiamrabatdermatologue.com/dermatologie-medicale/dermatologie-pediatrique',
        'start_page': 60, 'end_page': 65,
        'img1': '/images/pdf_extracted/page_61_img_1.jpeg',
        'img1_alt': 'Infographie : Les maladies dermatologiques fréquentes chez l\'enfant',
        'img1_cap': 'Principales affections pédiatriques de la peau du bébé à l\'adolescent.',
        'img2': '/images/pdf_extracted/page_63_img_1.jpeg',
        'img2_alt': 'Infographie : Déroulement et conseils pour la consultation pédiatrique',
        'img2_cap': 'Une approche douce et adaptée aux jeunes patients.'
    }
]

print("Script template ready")
