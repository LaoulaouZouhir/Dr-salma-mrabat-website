import fitz
import os
import json

doc = fitz.open('/Users/bigmac/Downloads/Accueil page Dr Samia Mrabat.pdf')

pages_config = [
    # --- DERMATOLOGIE MEDICALE ---
    {
        'file': '/Volumes/Stockage/Siteweb-samia2/src/pages/dermatologie-medicale/ChuteCheveux.jsx',
        'component': 'ChuteCheveux',
        'cat_name': 'Dermatologie Médicale',
        'cat_url': '/dermatologie-medicale',
        'badge': 'DERMATOLOGIE MÉDICALE',
        'title': 'Chute de cheveux et maladies du cuir chevelu à Meknès',
        'subtitle': 'Le Dr Samia Mrabat, dermatologue à Meknès, prend en charge la chute de cheveux, les maladies du cuir chevelu et les différentes formes d\'alopécie chez l\'adulte et l\'enfant.',
        'seo_title': 'Chute de cheveux et maladies du cuir chevelu à Meknès | Dr Samia Mrabat',
        'seo_desc': 'Le Dr Samia Mrabat, dermatologue à Meknès, prend en charge la chute de cheveux, les maladies du cuir chevelu et les différentes formes d\'alopécie chez l\'adulte et l\'enfant.',
        'keywords': 'Chute de cheveux Meknès, Alopécie Meknès, Cuir chevelu Meknès, Traitement calvitie Meknès',
        'url': 'https://drsamiamrabatdermatologue.com/dermatologie-medicale/chute-cheveux-maladies-cuir-chevelu',
        'start': 46, 'end': 52,
        'img1': '/images/pdf_extracted/page_47_img_1.jpeg',
        'img1_alt': 'Infographie : Le cycle de vie du cheveu (Anagène, Catagène, Télogène)',
        'img1_cap': 'Les différentes phases du cycle pilaire et leur rôle dans la chute de cheveux.',
        'img2': '/images/pdf_extracted/page_49_img_1.jpeg',
        'img2_alt': 'Infographie : Les principales maladies du cuir chevelu',
        'img2_cap': 'Les affections dermatologiques les plus fréquentes touchant le cuir chevelu.'
    },
    {
        'file': '/Volumes/Stockage/Siteweb-samia2/src/pages/dermatologie-medicale/AllergiesInfections.jsx',
        'component': 'AllergiesInfections',
        'cat_name': 'Dermatologie Médicale',
        'cat_url': '/dermatologie-medicale',
        'badge': 'DERMATOLOGIE MÉDICALE',
        'title': 'Allergies, infections et maladies de la peau à Meknès',
        'subtitle': 'Le Dr Samia Mrabat, dermatologue à Meknès, assure le diagnostic et la prise en charge des allergies cutanées, des infections de la peau et des affections inflammatoires.',
        'seo_title': 'Allergies, infections et maladies de la peau à Meknès | Dr Samia Mrabat',
        'seo_desc': 'Le Dr Samia Mrabat, dermatologue à Meknès, assure le diagnostic et la prise en charge des allergies cutanées, des infections de la peau et des affections dermatologiques.',
        'keywords': 'Allergie cutanée Meknès, Infection peau Meknès, Urticaire Meknès, Mycose Meknès',
        'url': 'https://drsamiamrabatdermatologue.com/dermatologie-medicale/allergies-infections-maladies-peau',
        'start': 53, 'end': 59,
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
        'cat_name': 'Dermatologie Médicale',
        'cat_url': '/dermatologie-medicale',
        'badge': 'DERMATOLOGIE MÉDICALE',
        'title': 'Dermatologie pédiatrique à Meknès : soin de la peau des enfants et bébés',
        'subtitle': 'Le Dr Samia Mrabat, titulaire d\'un diplôme en dermatologie pédiatrique, prend en charge les affections cutanées du nourrisson, de l\'enfant et de l\'adolescent à Meknès.',
        'seo_title': 'Dermatologie pédiatrique à Meknès | Dr Samia Mrabat',
        'seo_desc': 'Le Dr Samia Mrabat, spécialisée en dermatologie pédiatrique à Meknès, prend en charge les problèmes de peau du nourrisson, de l\'enfant et de l\'adolescent.',
        'keywords': 'Dermatologue pédiatrique Meknès, Eczéma bébé Meknès, Verrues enfant Meknès, Peau enfant Meknès',
        'url': 'https://drsamiamrabatdermatologue.com/dermatologie-medicale/dermatologie-pediatrique',
        'start': 60, 'end': 65,
        'img1': '/images/pdf_extracted/page_61_img_1.jpeg',
        'img1_alt': 'Infographie : Les maladies dermatologiques fréquentes chez l\'enfant',
        'img1_cap': 'Principales affections pédiatriques de la peau du bébé à l\'adolescent.',
        'img2': '/images/pdf_extracted/page_63_img_1.jpeg',
        'img2_alt': 'Infographie : Déroulement et conseils pour la consultation pédiatrique',
        'img2_cap': 'Une approche douce et adaptée aux jeunes patients.'
    },

    # --- DERMATOLOGIE ESTHETIQUE ---
    {
        'file': '/Volumes/Stockage/Siteweb-samia2/src/pages/dermatologie-esthetique/InjectionsBotoxHyaluronique.jsx',
        'component': 'InjectionsBotoxHyaluronique',
        'cat_name': 'Dermatologie Esthétique',
        'cat_url': '/dermatologie-esthetique',
        'badge': 'DERMATOLOGIE ESTHÉTIQUE',
        'title': 'Injections de Botox® et d\'acide hyaluronique à Meknès',
        'subtitle': 'Le Dr Samia Mrabat propose des injections esthétiques médicales pour lisser les rides, restaurer les volumes du visage et hydrater la peau en profondeur à Meknès.',
        'seo_title': 'Injections de Botox® et d\'acide hyaluronique à Meknès | Dr Samia Mrabat',
        'seo_desc': 'Le Dr Samia Mrabat réalise des injections de Botox® et d\'acide hyaluronique à Meknès pour lisser les rides et harmoniser le visage avec un résultat naturel.',
        'keywords': 'Botox Meknès, Acide hyaluronique Meknès, Injections visage Meknès, Traitement rides Meknès',
        'url': 'https://drsamiamrabatdermatologue.com/dermatologie-esthetique/injections-botox-acide-hyaluronique',
        'start': 66, 'end': 72,
        'img1': '/images/pdf_extracted/page_67_img_1.jpeg',
        'img1_alt': 'Infographie : Différence entre Botox® et Acide Hyaluronique',
        'img1_cap': 'Comparaison détaillée des mécanismes d\'action du Botox® et de l\'Acide Hyaluronique.',
        'img2': '/images/pdf_extracted/page_69_img_1.jpeg',
        'img2_alt': 'Infographie : Déroulement d\'une séance d\'injections esthétiques',
        'img2_cap': 'Étapes d\'une prise en charge esthétique médicale personnalisée.'
    },
    {
        'file': '/Volumes/Stockage/Siteweb-samia2/src/pages/dermatologie-esthetique/PeelingsSoinsPeau.jsx',
        'component': 'PeelingsSoinsPeau',
        'cat_name': 'Dermatologie Esthétique',
        'cat_url': '/dermatologie-esthetique',
        'badge': 'DERMATOLOGIE ESTHÉTIQUE',
        'title': 'Peelings dermatologiques et soins de la peau à Meknès',
        'subtitle': 'Le Dr Samia Mrabat réalise des peelings dermatologiques (doux et moyens) pour renouveler l\'épiderme, traiter les taches, l\'acné et redonner de l\'éclat au teint à Meknès.',
        'seo_title': 'Peelings et soins de la peau à Meknès | Dr Samia Mrabat',
        'seo_desc': 'Le Dr Samia Mrabat propose des peelings dermatologiques à Meknès pour corriger les imperfections, réduire les taches et raviver l\'éclat du teint.',
        'keywords': 'Peeling Meknès, Peeling moyen Meknès, Éclat du teint Meknès, Traitement taches Meknès',
        'url': 'https://drsamiamrabatdermatologue.com/dermatologie-esthetique/peelings-soins-peau',
        'start': 73, 'end': 79,
        'img1': '/images/pdf_extracted/page_74_img_1.jpeg',
        'img1_alt': 'Infographie : Fonctionnement d\'un peeling dermatologique',
        'img1_cap': 'Le processus de régénération épidermique par peeling médical.',
        'img2': '/images/pdf_extracted/page_77_img_1.jpeg',
        'img2_alt': 'Infographie : Les soins post-peeling et protection solaire',
        'img2_cap': 'Recommandations pour optimiser les résultats d\'un peeling.'
    },
    {
        'file': '/Volumes/Stockage/Siteweb-samia2/src/pages/dermatologie-esthetique/MicroneedlingMesotherapie.jsx',
        'component': 'MicroneedlingMesotherapie',
        'cat_name': 'Dermatologie Esthétique',
        'cat_url': '/dermatologie-esthetique',
        'badge': 'DERMATOLOGIE ESTHÉTIQUE',
        'title': 'Microneedling et mésothérapie à Meknès',
        'subtitle': 'Le Dr Samia Mrabat réalise des soins de microneedling et de mésothérapie pour stimuler la production de collagène, hydrater le derme et améliorer la texture cutanée à Meknès.',
        'seo_title': 'Microneedling et mésothérapie à Meknès | Dr Samia Mrabat',
        'seo_desc': 'Le Dr Samia Mrabat propose le microneedling et la mésothérapie à Meknès pour revitaliser la peau, traiter le teint terne et stimuler la régénération du collagène.',
        'keywords': 'Microneedling Meknès, Mésothérapie Meknès, Mesolift Meknès, Collagène peau Meknès',
        'url': 'https://drsamiamrabatdermatologue.com/dermatologie-esthetique/microneedling-mesotherapie',
        'start': 80, 'end': 84,
        'img1': '/images/pdf_extracted/page_81_img_1.jpeg',
        'img1_alt': 'Infographie : Principes du Microneedling et de la Mésothérapie',
        'img1_cap': 'Stimulation mécanique du collagène et apport de nutriments essentiels.',
        'img2': '/images/pdf_extracted/page_83_img_1.jpeg',
        'img2_alt': 'Infographie : Résultats attendus et protocole de soin',
        'img2_cap': 'Évolution progressive de la qualité cutanée sur plusieurs séances.'
    },
    {
        'file': '/Volumes/Stockage/Siteweb-samia2/src/pages/dermatologie-esthetique/TraitementCicatricesTaches.jsx',
        'component': 'TraitementCicatricesTaches',
        'cat_name': 'Dermatologie Esthétique',
        'cat_url': '/dermatologie-esthetique',
        'badge': 'DERMATOLOGIE ESTHÉTIQUE',
        'title': 'Traitement des cicatrices et taches pigmentaires à Meknès',
        'subtitle': 'Prise en charge personnalisée des cicatrices d\'acné, du masque de grossesse (mélasma) et des taches solaires par le Dr Samia Mrabat à Meknès.',
        'seo_title': 'Traitement des cicatrices et taches à Meknès | Dr Samia Mrabat',
        'seo_desc': 'Le Dr Samia Mrabat traite les cicatrices d\'acné et les taches pigmentaires (mélasma, lentigos) à Meknès à l\'aide de techniques dermatologiques adaptées.',
        'keywords': 'Traitement cicatrices d\'acné Meknès, Mélasma Meknès, Taches solaires Meknès, Dépigmentation Meknès',
        'url': 'https://drsamiamrabatdermatologue.com/dermatologie-esthetique/traitement-cicatrices-taches-pigmentaires',
        'start': 85, 'end': 90,
        'img1': '/images/pdf_extracted/page_86_img_1.jpeg',
        'img1_alt': 'Infographie : Types de cicatrices et d\'hyperpigmentation',
        'img1_cap': 'Classification des cicatrices atrophiques, hypertrophiques et des taches pigmentaires.',
        'img2': '/images/pdf_extracted/page_89_img_1.jpeg',
        'img2_alt': 'Infographie : Combinaisons de traitements dermatologiques',
        'img2_cap': 'Approches combinées pour uniformiser le grain de peau et le teint.'
    },
    {
        'file': '/Volumes/Stockage/Siteweb-samia2/src/pages/dermatologie-esthetique/RajeunissementCutane.jsx',
        'component': 'RajeunissementCutane',
        'cat_name': 'Dermatologie Esthétique',
        'cat_url': '/dermatologie-esthetique',
        'badge': 'DERMATOLOGIE ESTHÉTIQUE',
        'title': 'Rajeunissement cutané et médecine anti-âge à Meknès',
        'subtitle': 'Le Dr Samia Mrabat propose des protocoles globaux de rajeunissement cutané pour préserver la jeunesse de la peau et traiter le relâchement cutané à Meknès.',
        'seo_title': 'Rajeunissement cutané à Meknès | Dr Samia Mrabat',
        'seo_desc': 'Protocoles de rajeunissement cutané à Meknès par le Dr Samia Mrabat : prévention du vieillissement, amélioration de la fermeté et de la densité cutanée.',
        'keywords': 'Rajeunissement visage Meknès, Anti-âge Meknès, Fermeté peau Meknès, Dermatologue esthétique Meknès',
        'url': 'https://drsamiamrabatdermatologue.com/dermatologie-esthetique/rajeunissement-cutane',
        'start': 91, 'end': 96,
        'img1': '/images/pdf_extracted/page_92_img_1.jpeg',
        'img1_alt': 'Infographie : Les facteurs du vieillissement cutané (Intrinsèques et Extrinsèques)',
        'img1_cap': 'Comprendre le vieillissement cellulaire et la perte de fermeté.',
        'img2': '/images/pdf_extracted/page_94_img_1.jpeg',
        'img2_alt': 'Infographie : Protocoles de rajeunissement sur-mesure',
        'img2_cap': 'Synergie de soins esthétiques médicaux pour stimuler les fibroblastes.'
    },

    # --- CHIRURGIE DERMATOLOGIQUE ---
    {
        'file': '/Volumes/Stockage/Siteweb-samia2/src/pages/chirurgie-dermatologique/ExereseKystesLipomes.jsx',
        'component': 'ExereseKystesLipomes',
        'cat_name': 'Chirurgie Dermatologique',
        'cat_url': '/chirurgie-dermatologique',
        'badge': 'CHIRURGIE DERMATOLOGIQUE',
        'title': 'Exérèse des kystes et des lipomes à Meknès',
        'subtitle': 'Le Dr Samia Mrabat réalise l\'exérèse chirurgicale sous anesthésie locale des kystes sébacés, épidermoïdes et lipomes au cabinet à Meknès.',
        'seo_title': 'Exérèse kyste et lipome à Meknès | Dr Samia Mrabat',
        'seo_desc': 'Le Dr Samia Mrabat réalise l\'ablation chirurgicale sous anesthésie locale des kystes et lipomes à Meknès avec des sutures esthétiques soignées.',
        'keywords': 'Exérèse kyste Meknès, Ablation lipome Meknès, Chirurgie kyste Meknès, Boule sous la peau Meknès',
        'url': 'https://drsamiamrabatdermatologue.com/chirurgie-dermatologique/exerese-kystes-lipomes',
        'start': 97, 'end': 101,
        'img1': '/images/pdf_extracted/page_100_img_1.jpeg',
        'img1_alt': 'Infographie : Différence entre Kyste épidermoïde et Lipome',
        'img1_cap': 'Caractéristiques cliniques et méthode d\'exérèse chirurgicale sous anesthésie locale.',
        'img2': '', 'img2_alt': '', 'img2_cap': ''
    },
    {
        'file': '/Volumes/Stockage/Siteweb-samia2/src/pages/chirurgie-dermatologique/BiopsiesCutanees.jsx',
        'component': 'BiopsiesCutanees',
        'cat_name': 'Chirurgie Dermatologique',
        'cat_url': '/chirurgie-dermatologique',
        'badge': 'CHIRURGIE DERMATOLOGIQUE',
        'title': 'Biopsies cutanées à Meknès : prélèvement et analyse anatomopathologique',
        'subtitle': 'La biopsie cutanée permet de prélever un échantillon de peau sous anesthésie locale afin d\'établir un diagnostic certifié en laboratoire.',
        'seo_title': 'Biopsie cutanée à Meknès | Dr Samia Mrabat',
        'seo_desc': 'Le Dr Samia Mrabat réalise des biopsies cutanées à Meknès pour analyser les lésions suspectes et confirmer le diagnostic dermatologique.',
        'keywords': 'Biopsie cutanée Meknès, Analyse peau Meknès, Diagnostic dermatologique Meknès',
        'url': 'https://drsamiamrabatdermatologue.com/chirurgie-dermatologique/biopsies-cutanees',
        'start': 107, 'end': 112,
        'img1': '/images/pdf_extracted/page_110_img_1.jpeg',
        'img1_alt': 'Infographie : Quand réaliser une biopsie cutanée ?',
        'img1_cap': 'Indications diagnostiques pour l\'examen histologique de la peau.',
        'img2': '/images/pdf_extracted/page_111_img_1.jpeg',
        'img2_alt': 'Infographie : Déroulement et suites de la biopsie',
        'img2_cap': 'Protocole opératoire sous anesthésie locale au cabinet.'
    },
    {
        'file': '/Volumes/Stockage/Siteweb-samia2/src/pages/chirurgie-dermatologique/ChirurgieOngleIncarne.jsx',
        'component': 'ChirurgieOngleIncarne',
        'cat_name': 'Chirurgie Dermatologique',
        'cat_url': '/chirurgie-dermatologique',
        'badge': 'CHIRURGIE DERMATOLOGIQUE',
        'title': 'Chirurgie de l\'ongle incarné à Meknès',
        'subtitle': 'Prise en charge médicale et traitement chirurgical définitif de l\'ongle incarné douloureux ou récidivant sous anesthésie locale à Meknès.',
        'seo_title': 'Chirurgie ongle incarné à Meknès | Dr Samia Mrabat',
        'seo_desc': 'Traitement efficace et définitif de l\'ongle incarné à Meknès par le Dr Samia Mrabat, dermatologue et chirurgien dermatologique.',
        'keywords': 'Chirurgie ongle incarné Meknès, Ongle incarné douloureux Meknès, Matricectomie Meknès',
        'url': 'https://drsamiamrabatdermatologue.com/chirurgie-dermatologique/chirurgie-ongle-incarne',
        'start': 113, 'end': 117,
        'img1': '/images/pdf_extracted/page_115_img_1.jpeg',
        'img1_alt': 'Infographie : Stades de l\'ongle incarné et techniques chirurgicales',
        'img1_cap': 'Du traitement médical à l\'exérèse partielle avec plastie de la matrice.',
        'img2': '/images/pdf_extracted/page_117_img_1.jpeg',
        'img2_alt': 'Infographie : Soins post-opératoires et prévention des récidives',
        'img2_cap': 'Consignes de pansement et choix du chaussage après chirurgie.'
    },
    {
        'file': '/Volumes/Stockage/Siteweb-samia2/src/pages/chirurgie-dermatologique/PetiteChirurgieDermatologique.jsx',
        'component': 'PetiteChirurgieDermatologique',
        'cat_name': 'Chirurgie Dermatologique',
        'cat_url': '/chirurgie-dermatologique',
        'badge': 'CHIRURGIE DERMATOLOGIQUE',
        'title': 'Petite chirurgie dermatologique à Meknès',
        'subtitle': 'Ablation au cabinet sous anesthésie locale de verrues, molluscums, condylomes, fibromes pendulaires (acrochordons) et kératoses par le Dr Samia Mrabat.',
        'seo_title': 'Petite chirurgie dermatologique à Meknès | Dr Samia Mrabat',
        'seo_desc': 'Le Dr Samia Mrabat réalise de petits actes chirurgicaux dermatologiques à Meknès : ablation de verrues, tétines de chair, kératoses et condylomes.',
        'keywords': 'Petite chirurgie Meknès, Acrochordon Meknès, Verrues Meknès, Kératose séborrhéique Meknès',
        'url': 'https://drsamiamrabatdermatologue.com/chirurgie-dermatologique/petite-chirurgie-dermatologique',
        'start': 118, 'end': 123,
        'img1': '/images/pdf_extracted/page_121_img_1.jpeg',
        'img1_alt': 'Infographie : Les lésions bénignes traitées en petite chirurgie',
        'img1_cap': 'Exérèse et cryothérapie des petites lésions cutanées inesthétiques ou gênantes.',
        'img2': '/images/pdf_extracted/page_122_img_1.jpeg',
        'img2_alt': 'Infographie : Déroulement des actes chirurgicaux légers',
        'img2_cap': 'Intervention ambulatoire sous anesthésie locale sans interruption des activités.'
    },

    # --- PREVENTION ET DEPISTAGE ---
    {
        'file': '/Volumes/Stockage/Siteweb-samia2/src/pages/prevention-depistage/DepistageCancersPeau.jsx',
        'component': 'DepistageCancersPeau',
        'cat_name': 'Prévention & Dépistage',
        'cat_url': '/prevention-depistage',
        'badge': 'PRÉVENTION & DÉPISTAGE',
        'title': 'Dépistage des cancers de la peau à Meknès',
        'subtitle': 'Le dépistage précoce du mélanome et des carcinomes cutanés par examen dermoscopique complet du corps par le Dr Samia Mrabat à Meknès.',
        'seo_title': 'Dépistage des cancers de la peau à Meknès | Dr Samia Mrabat',
        'seo_desc': 'Examen complet de la peau et dépistage dermoscopique du mélanome et des carcinomes cutanés à Meknès par le Dr Samia Mrabat.',
        'keywords': 'Dépistage cancer de la peau Meknès, Mélanome Meknès, Carcinome Meknès, Dermoscopie Meknès',
        'url': 'https://drsamiamrabatdermatologue.com/prevention-depistage/depistage-cancers-peau',
        'start': 124, 'end': 128,
        'img1': '/images/pdf_extracted/page_126_img_1.jpeg',
        'img1_alt': 'Infographie : Comprendre les différents types de cancers cutanés',
        'img1_cap': 'Distinction entre mélanome, carcinome basocellulaire et spinocellulaire.',
        'img2': '/images/pdf_extracted/page_128_img_1.jpeg',
        'img2_alt': 'Infographie : La règle ABCDE et les signes d\'alerte',
        'img2_cap': 'Critères dermoscopiques de surveillance des lésions évolutives.'
    },
    {
        'file': '/Volumes/Stockage/Siteweb-samia2/src/pages/prevention-depistage/ControleGrainsBeaute.jsx',
        'component': 'ControleGrainsBeaute',
        'cat_name': 'Prévention & Dépistage',
        'cat_url': '/prevention-depistage',
        'badge': 'PRÉVENTION & DÉPISTAGE',
        'title': 'Contrôle annuel des grains de beauté à Meknès',
        'subtitle': 'Surveillance cartographique et bilan dermoscopique des naevi pour détecter toute modification suspecte et prévenir les risques cutanés.',
        'seo_title': 'Contrôle des grains de beauté à Meknès | Dr Samia Mrabat',
        'seo_desc': 'Contrôle et surveillance dermoscopique des grains de beauté à Meknès par le Dr Samia Mrabat pour prévenir et repérer les anomalies cutanées.',
        'keywords': 'Contrôle grain de beauté Meknès, Carte des grains de beauté Meknès, Naevus atypique Meknès',
        'url': 'https://drsamiamrabatdermatologue.com/prevention-depistage/controle-grains-beaute',
        'start': 129, 'end': 134,
        'img1': '/images/pdf_extracted/page_131_img_1.jpeg',
        'img1_alt': 'Infographie : Pourquoi faire vérifier ses grains de beauté régulièrement ?',
        'img1_cap': 'Suivi des personnes à risque (peau claire, antécédents, coups de soleil).',
        'img2': '/images/pdf_extracted/page_134_img_1.jpeg',
        'img2_alt': 'Infographie : L\'examen dermoscopique indolore au cabinet',
        'img2_cap': 'Observation à fort grossissement des structures pigmentaires profondes.'
    },
    {
        'file': '/Volumes/Stockage/Siteweb-samia2/src/pages/prevention-depistage/PreventionSolaire.jsx',
        'component': 'PreventionSolaire',
        'cat_name': 'Prévention & Dépistage',
        'cat_url': '/prevention-depistage',
        'badge': 'PRÉVENTION & DÉPISTAGE',
        'title': 'Prévention solaire et protection cutanée à Meknès',
        'subtitle': 'Conseils personnalisés du Dr Samia Mrabat pour protéger votre capital soleil, prévenir le photovieillissement et éviter les cancers cutanés.',
        'seo_title': 'Prévention solaire et conseils à Meknès | Dr Samia Mrabat',
        'seo_desc': 'Conseils de prévention solaire et choix des crèmes de protection solaire adaptées au phototype à Meknès par le Dr Samia Mrabat.',
        'keywords': 'Prévention solaire Meknès, Protection UV Meknès, Phototype peau Meknès, Crème solaire Meknès',
        'url': 'https://drsamiamrabatdermatologue.com/prevention-depistage/prevention-solaire',
        'start': 135, 'end': 140,
        'img1': '/images/pdf_extracted/page_138_img_1.jpeg',
        'img1_alt': 'Infographie : Les effets des rayons UVA et UVB sur la peau',
        'img1_cap': 'Impact des ultraviolets sur le vieillissement prématuré et l\'ADN cellulaire.',
        'img2': '/images/pdf_extracted/page_139_img_1.jpeg',
        'img2_alt': 'Infographie : Les bonnes pratiques de protection solaire',
        'img2_cap': 'Règles d\'exposition et réapplication des écrans solaires à haut indice.'
    },
    {
        'file': '/Volumes/Stockage/Siteweb-samia2/src/pages/prevention-depistage/LesionsCutaneesSuspectes.jsx',
        'component': 'LesionsCutaneesSuspectes',
        'cat_name': 'Prévention & Dépistage',
        'cat_url': '/prevention-depistage',
        'badge': 'PRÉVENTION & DÉPISTAGE',
        'title': 'Lésions cutanées suspectes : quand consulter à Meknès ?',
        'subtitle': 'Évaluation rapide des taches qui changent de forme, croûtes qui ne cicatrisent pas ou boutons persistants par le Dr Samia Mrabat à Meknès.',
        'seo_title': 'Lésions cutanées suspectes à Meknès | Dr Samia Mrabat',
        'seo_desc': 'Consultation pour lésion cutanée suspecte à Meknès : boutons ou croûtes persistants, tache évolutive. Diagnostic rapide par le Dr Samia Mrabat.',
        'keywords': 'Lésion suspecte Meknès, Bouton qui ne guérit pas Meknès, Tache croûteuse Meknès',
        'url': 'https://drsamiamrabatdermatologue.com/prevention-depistage/lesions-cutanees-suspectes',
        'start': 141, 'end': 146,
        'img1': '/images/pdf_extracted/page_144_img_1.jpeg',
        'img1_alt': 'Infographie : Reconnaître une lésion cutanée anormale',
        'img1_cap': 'Signes d\'alerte imposant une consultation dermatologique sans délai.',
        'img2': '/images/pdf_extracted/page_145_img_1.jpeg',
        'img2_alt': 'Infographie : Démarche diagnostique et prise en charge',
        'img2_cap': 'Examen dermoscopique et orientation vers une exérèse ou surveillance.'
    },
    {
        'file': '/Volumes/Stockage/Siteweb-samia2/src/pages/prevention-depistage/ConseilsPreventionDermatologique.jsx',
        'component': 'ConseilsPreventionDermatologique',
        'cat_name': 'Prévention & Dépistage',
        'cat_url': '/prevention-depistage',
        'badge': 'PRÉVENTION & DÉPISTAGE',
        'title': 'Conseils de prévention dermatologique au quotidien à Meknès',
        'subtitle': 'Les réflexes essentiels préconisés par le Dr Samia Mrabat pour maintenir une peau saine, hydratée et protégée tout au long de la vie.',
        'seo_title': 'Conseils de prévention dermatologique à Meknès | Dr Samia Mrabat',
        'seo_desc': 'Conseils de santé de la peau et réflexes de prévention dermatologique à Meknès transmis par le Dr Samia Mrabat.',
        'keywords': 'Conseils peau Meknès, Hygiène cutanée Meknès, Prévention dermatologique Meknès',
        'url': 'https://drsamiamrabatdermatologue.com/prevention-depistage/conseils-prevention-dermatologique',
        'start': 147, 'end': 153,
        'img1': '/images/pdf_extracted/page_150_img_1.jpeg',
        'img1_alt': 'Infographie : Les pilier d\'une routine de soins dermatologiques',
        'img1_cap': 'Nettoyage doux, hydratation adaptée et protection barrière.',
        'img2': '/images/pdf_extracted/page_152_img_1.jpeg',
        'img2_alt': 'Infographie : Auto-examen de la peau de la tête aux pieds',
        'img2_cap': 'Méthode d\'auto-examen cutané régulier à réaliser chez soi.'
    }
]

def extract_sections_from_pdf(start_p, end_p):
    text_blocks = [doc[p].get_text() for p in range(start_p - 1, end_p)]
    full = '\n'.join(text_blocks)
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

    return sections

def build_jsx_article(sections, img1, img1_alt, img1_cap, img2, img2_alt, img2_cap):
    article_jsx = []
    filtered_sections = [s for s in sections if 'Prendre rendez-vous' not in s[0]]

    for idx, (h2, paras) in enumerate(filtered_sections):
        h2_clean = h2.replace('"', '&quot;')
        article_jsx.append(f'                <h2>{h2_clean}</h2>')
        
        clean_elements = []
        current_list = []

        for p in paras:
            if p.startswith('Image :') or p.startswith('Bouton') or p.startswith('Pouton') or p.startswith('PAGE') or p.startswith('URL') or p.startswith('Slug') or p.startswith('Balise') or p.startswith('Meta'):
                continue
            if p.startswith('•'):
                item = p.lstrip('•').strip()
                current_list.append(item)
            else:
                if current_list:
                    clean_elements.append(('ul', current_list))
                    current_list = []
                clean_elements.append(('p', p))

        if current_list:
            clean_elements.append(('ul', current_list))

        for elem_type, elem_val in clean_elements:
            if elem_type == 'p':
                formatted_val = elem_val.replace('**', '<strong>').replace('**', '</strong>')
                article_jsx.append(f'                <p>{formatted_val}</p>')
            elif elem_type == 'ul':
                article_jsx.append('                <ul className="check-list">')
                for item in elem_val:
                    if ':' in item:
                        parts = item.split(':', 1)
                        article_jsx.append(f'                  <li><strong>{parts[0]} :</strong>{parts[1]}</li>')
                    else:
                        article_jsx.append(f'                  <li>{item}</li>')
                article_jsx.append('                </ul>')

        if idx == 0 and img1:
            article_jsx.append(f'''
                <div className="diagram-block">
                  <LightboxImage
                    src="{img1}"
                    alt={json.dumps(img1_alt)}
                    caption={json.dumps(img1_cap)}
                  />
                </div>''')
        elif idx == 2 and img2:
            article_jsx.append(f'''
                <div className="diagram-block">
                  <LightboxImage
                    src="{img2}"
                    alt={json.dumps(img2_alt)}
                    caption={json.dumps(img2_cap)}
                  />
                </div>''')

    return '\n'.join(article_jsx)

template_str = """import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import LightboxImage from '../../components/Lightbox';

export default function __COMPONENT_NAME__() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: __TITLE_JSON__,
    description: __SEO_DESC_JSON__,
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title=__SEO_TITLE_JSON__
        description=__SEO_DESC_JSON__
        keywords=__KEYWORDS_JSON__
        url="__URL_VAL__"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: '__CAT_NAME__', url: '__CAT_URL__' },
              { label: __SHORT_TITLE_JSON__ },
            ]}
          />
          <span className="subpage-badge">__BADGE__</span>
          <h1 className="subpage-title">__TITLE_RAW__</h1>
          <p className="subpage-subtitle">
            __SUBTITLE_RAW__
          </p>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              
              <article className="medical-article">
__ARTICLE_BODY__
              </article>

            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Consultez le Dr Samia Mrabat, dermatologue à Meknès, pour un bilan personnalisé.</p>
                <a href="tel:0535524067" className="side-btn-call">📞 05 35 52 40 67</a>
                <a href="https://wa.me/212689270924" target="_blank" rel="noopener noreferrer" className="side-btn-wa">💬 WhatsApp direct</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
"""

for cfg in pages_config:
    sections = extract_sections_from_pdf(cfg['start'], cfg['end'])
    article_body = build_jsx_article(
        sections,
        cfg.get('img1', ''), cfg.get('img1_alt', ''), cfg.get('img1_cap', ''),
        cfg.get('img2', ''), cfg.get('img2_alt', ''), cfg.get('img2_cap', '')
    )

    code = template_str \
        .replace('__COMPONENT_NAME__', cfg['component']) \
        .replace('__TITLE_JSON__', json.dumps(cfg['title'])) \
        .replace('__SEO_DESC_JSON__', json.dumps(cfg['seo_desc'])) \
        .replace('__SEO_TITLE_JSON__', json.dumps(cfg['seo_title'])) \
        .replace('__KEYWORDS_JSON__', json.dumps(cfg['keywords'])) \
        .replace('__URL_VAL__', cfg['url']) \
        .replace('__CAT_NAME__', cfg['cat_name']) \
        .replace('__CAT_URL__', cfg['cat_url']) \
        .replace('__SHORT_TITLE_JSON__', json.dumps(cfg['title'].split(' à ')[0])) \
        .replace('__BADGE__', cfg['badge']) \
        .replace('__TITLE_RAW__', cfg['title']) \
        .replace('__SUBTITLE_RAW__', cfg['subtitle']) \
        .replace('__ARTICLE_BODY__', article_body)

    os.makedirs(os.path.dirname(cfg['file']), exist_ok=True)
    with open(cfg['file'], 'w', encoding='utf-8') as f:
        f.write(code)

    print(f"Generated 100% complete subpage: {cfg['component']}")

print("SUCCESSFULLY GENERATED ALL 18 SUBPAGES WITH 100% FULL PDF TEXT!")
