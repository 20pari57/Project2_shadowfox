import { Amenity, Doctor, FAQ, Language, Testimonial, Treatment } from '../types';
import { ALL_TREATMENTS_TA, DOCTORS_LIST_TA, FAQS_LIST_TA } from './tamilClinicData';

export const CLINIC_INFO = {
  name: 'Sakthi Dental Clinic',
  tagline: 'Specialized Dental Care for Women, Children & Families',
  founder: 'Dr. Anupriya',
  foundedYear: 2004,
  location: 'Hosur, Tamil Nadu',
  address: 'B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India',
  phoneNumbers: ['+91 9862890897', '+91 9363298118'],
  email: 'info@sakthidentalclinic.in',
  timings: 'Sunday to Saturday: 9am to 7pm',
  doctorAvailability: 'Doctors available daily (9 AM - 9 PM)',
  googleMapsUrl: 'https://maps.google.com/?q=B2/8,+SBM+Layout,+Anthivadi,+Hosur,+Tamil+Nadu+635109',
  heroSubtext: 'Experience compassionate, expert-led dental services tailored to your needs, all in a modern and welcoming environment.',
  welcomeBanner: 'You are always in safe hands. We are ready to help, anytime.',
};

export const WHY_CHOOSE_US = [
  {
    title: 'All-in-One Care',
    description: 'From general dentistry to specialized treatments, everything under one roof.',
    icon: 'Layers',
  },
  {
    title: 'Experienced Doctors',
    description: 'Our dentists are professionally trained and committed to personalized patient care.',
    icon: 'Award',
  },
  {
    title: 'Patient-Centric Approach',
    description: 'We prioritize comfort, safety, and transparency in every treatment we offer.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Technology-Driven Services',
    description: 'Modern tools and equipment ensure precision and safety.',
    icon: 'Cpu',
  },
];

export const CORE_HOME_TREATMENTS = [
  {
    id: 'tooth-extraction',
    title: 'Tooth Extraction',
    description: 'Safe and painless removal of impacted or decayed teeth.',
    iconName: 'Activity',
    badge: 'Gentle Care',
  },
  {
    id: 'artificial-complete-denture',
    title: 'Artificial Complete Denture',
    description: 'Full mouth replacement to restore confidence and function.',
    iconName: 'Smile',
    badge: 'Restorative',
  },
  {
    id: 'tooth-filling',
    title: 'Tooth Filling',
    description: 'Composite fillings for cavity treatment and tooth restoration.',
    iconName: 'ShieldCheck',
    badge: 'Seamless Fit',
  },
  {
    id: 'teeth-cleaning-scaling',
    title: 'Teeth Cleaning or Scaling',
    description: 'Preventive care to remove plaque and protect gums.',
    iconName: 'Sparkles',
    badge: 'Laser Technology',
  },
  {
    id: 'teeth-whitening-bleaching',
    title: 'Bleaching',
    description: 'Cosmetic whitening treatments for a brighter smile.',
    iconName: 'Sun',
    badge: 'Cosmetic',
  },
  {
    id: 'orthodontic-braces',
    title: 'Orthodontic Treatment',
    description: 'Braces and aligners to straighten and align teeth.',
    iconName: 'CheckCircle2',
    badge: 'All Ages',
  },
];

export const AMENITIES: Amenity[] = [
  {
    id: 'central-location',
    title: 'Convenient central location',
    description: 'Easily accessible at SBM Layout, Anthivadi with major road connectivity.',
    iconName: 'MapPin',
  },
  {
    id: 'parking',
    title: 'Hassle-free parking',
    description: 'Dedicated parking spaces for two-wheelers and four-wheelers.',
    iconName: 'Car',
  },
  {
    id: 'doctors-daily',
    title: 'Doctors available daily (9 AM - 9 PM)',
    description: 'Continuous availability including extended evening slots for working families.',
    iconName: 'Clock',
  },
  {
    id: 'pickup-drop',
    title: 'Pickup & drop-off support',
    description: 'Assisted transport services upon advance request for elderly and urgent visits.',
    iconName: 'Navigation',
  },
  {
    id: 'wheelchair',
    title: 'Wheelchair access',
    description: 'Ramped entryways, spacious doors, and accessible treatment bays for seniors.',
    iconName: 'Accessibility',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'The doctors are extremely kind and attentive. My braces treatment is progressing really well. 5/5.',
    author: 'Manisha M',
    tagline: 'Orthodontics Patient',
    rating: 5,
  },
  {
    id: '2',
    quote: 'I got my teeth cleaned and whitened here, and the results were amazing. The staff is so humble and professional. I’ve recommended Sakthi Dental Clinic to my entire family.',
    author: 'Mr. Arun Kumar',
    tagline: 'Teeth Cleaning & Whitening',
    rating: 5,
  },
  {
    id: '3',
    quote: 'Their attention to detail is outstanding. My daughter needed braces and the entire process from consultation to regular follow ups has been so smooth. Really grateful for their care.',
    author: 'Mrs. Revathi S.',
    tagline: 'Parent of Pediatric Orthodontics Patient',
    rating: 5,
  },
];

export const DOCTOR_TEAM: Doctor[] = [
  {
    id: 'dr-anupriya',
    name: 'Dr. Anupriya',
    role: 'Founder & Chief Dental Specialist',
    qualification: 'BDS, Senior Dental Consultant',
    experience: '20+ Years Experience',
    description: 'With over 20 years of clinical excellence since graduating in 2000, Dr. Anupriya refined her practice over 6 impactful years at Mathura Clinic before founding Sakthi Dental Clinic in 2004. Over a decade of dedicated service as Dental Consultant at Chandara Hospital Primary Health Center.',
    specialties: ['General & Family Dentistry', 'Pediatric Dental Care', 'Specialized Care for Women', 'Cosmetic Restorations'],
  },
  {
    id: 'dr-ananya-iyer',
    name: 'Dr. Ananya Iyer',
    role: 'Prosthodontist',
    qualification: 'MDS (Prosthodontics & Crown Bridge)',
    experience: 'Specialist Consultant',
    description: 'Expert in tooth replacements, full mouth reconstructions, complete dentures, and aesthetic crowns and bridges.',
    specialties: ['Artificial Complete Dentures', 'Fixed Partial Dentures (Bridges)', 'Smile Rehabilitation'],
  },
  {
    id: 'dr-meera-subramanian',
    name: 'Dr. Meera Subramanian',
    role: 'Endodontist',
    qualification: 'MDS (Conservative Dentistry & Endodontics)',
    experience: 'Specialist Consultant',
    description: 'Specializes in painless root canal therapies, complex pulp management, and natural tooth preservation.',
    specialties: ['Root Canal Therapy', 'Micro-Endodontics', 'Pulp Preservation'],
  },
  {
    id: 'dr-arvind-kumar',
    name: 'Dr. Arvind Kumar',
    role: 'Dental Surgeon',
    qualification: 'BDS, Dental Surgeon',
    experience: 'Resident Surgeon',
    description: 'Expertise in general dental surgeries, painless tooth extractions, and trauma management with patient comfort.',
    specialties: ['Tooth Extractions', 'Surgical Extractions', 'Preventive Treatments'],
  },
  {
    id: 'dr-sneha-n',
    name: 'Dr. Sneha N',
    role: 'Orthodontist',
    qualification: 'MDS (Orthodontics & Dentofacial Orthopedics)',
    experience: 'Specialist Consultant',
    description: 'Dedicated to correcting misalignments, crowding, and bite issues in children, teens, and adults.',
    specialties: ['Metal & Ceramic Braces', 'Lingual Braces', 'Preventive Pediatric Orthodontics'],
  },
  {
    id: 'dr-srinivas-rohit',
    name: 'Dr. Srinivas Rohit Ramanujam',
    role: 'Implantologist',
    qualification: 'MDS, Fellowship in Oral Implantology',
    experience: 'Senior Implant Specialist',
    description: 'Performs precision titanium root placement, single-tooth to full-arch dental implants with high success rates.',
    specialties: ['Dental Implants', 'Bone Grafting', 'Immediate Implants'],
  },
  {
    id: 'dr-balu',
    name: 'Dr. Balu',
    role: 'Laser Surgeon',
    qualification: 'MDS, Certified Dental Laser Specialist',
    experience: 'Laser Surgery Expert',
    description: 'Provides minimally invasive gum care, bloodless soft tissue surgeries, and rapid-healing laser therapies.',
    specialties: ['Laser Gum Surgeries', 'Pocket Therapy', 'Frenectomy & Cosmetic Contouring'],
  },
  {
    id: 'dr-vikram-raj-kishore',
    name: 'Dr. Vikram Raj Kishore',
    role: 'Aligners Partner',
    qualification: 'BDS, Certified Clear Aligner Specialist',
    experience: 'Clear Aligner Specialist',
    description: 'Pioneers customized digital 3D treatment setups for transparent, removable clear aligner therapies.',
    specialties: ['Clear Aligners', 'Invisible Orthodontics', 'Digital Smile Design'],
  },
  {
    id: 'dr-ajay-jumar',
    name: 'Dr. Ajay Jumar',
    role: 'Oral & Maxillofacial Surgeon',
    qualification: 'MDS (Oral & Maxillofacial Surgery)',
    experience: 'Senior Consultant Surgeon',
    description: 'Handles complex impacted wisdom teeth removals, facial trauma, corrective jaw procedures, and surgical care.',
    specialties: ['Wisdom Tooth Extraction', 'Maxillofacial Surgery', 'Flap Surgeries'],
  },
];

export const ALL_TREATMENTS: Treatment[] = [
  {
    id: 'teeth-cleaning-scaling',
    title: 'Teeth Cleaning & Scaling',
    category: 'Preventive',
    badge: 'LASER Assisted',
    iconName: 'Sparkles',
    shortDesc: 'Advanced, non-surgical gum care using modern LASER technology for precise, pain-free cleaning.',
    fullDesc: 'At Sakthi Dental Clinic, we offer advanced, non-surgical gum care using modern LASER technology for precise and effective treatment. Whether you\'re dealing with early signs of gum disease or a more advanced condition, our skilled professionals ensure thorough cleaning to restore gum health. Scaling is advised for moderate cases to remove plaque and tartar buildup, while more severe periodontal issues may require deep cleaning procedures like root planing, supported by LASER treatment. This approach not only treats existing problems but also serves as a crucial preparatory step before any surgical intervention.',
  },
  {
    id: 'tooth-filling',
    title: 'Tooth Filling',
    category: 'Restorative',
    badge: 'Composite Care',
    iconName: 'ShieldCheck',
    shortDesc: 'Tooth-colored composite fillings for cavity repair, wear protection, and aesthetic preservation.',
    fullDesc: 'At Sakthi Dental Clinic, we specialize in restoring smiles through expert tooth filling services. Whether tooth damage is caused by cavities, trauma, or wear from habits like teeth grinding or nail-biting, our team uses high-quality materials and the latest techniques to repair and protect your teeth. We focus on sealing gaps effectively to prevent future decay and ensure long-term oral health. Our goal is to preserve your natural tooth structure while enhancing both function and appearance, giving you a healthier, more confident smile.',
  },
  {
    id: 'tooth-extraction',
    title: 'Tooth Extraction',
    category: 'Surgical',
    badge: 'Painless Gentle Care',
    iconName: 'Activity',
    shortDesc: 'Safe, stress-free, and painless removal of non-restorable or severely damaged teeth.',
    fullDesc: 'When a tooth is beyond repair, Sakthi Dental Clinic ensures that the extraction process is handled with the utmost care and comfort. Our experienced dental team evaluates every option before recommending removal, but when necessary, we perform extractions using gentle techniques to minimize discomfort. We prioritize creating a stress-free environment, explaining each step to our patients. Your health and comfort are always our focus, and we aim to make tooth extraction as smooth and painless as possible, supporting you through every stage of recovery.',
  },
  {
    id: 'artificial-complete-denture',
    title: 'Artificial Complete Denture',
    category: 'Restorative',
    badge: 'Full Arch Comfort',
    iconName: 'Smile',
    shortDesc: 'Custom-crafted precision full mouth dentures to restore youthful confidence and chewing function.',
    fullDesc: 'At Sakthi Dental Clinic, we craft high-quality complete dentures to restore both function and aesthetics for patients with missing teeth. Our dentures are designed with precision using durable materials, providing a natural look and a comfortable fit. Whether you\'re replacing several teeth or a full arch, our customized solutions help you regain confidence and improve daily functionality. We focus on delivering practical, long-lasting dentures that enhance your smile and overall oral health.',
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    category: 'Restorative',
    badge: 'Permanent Solution',
    iconName: 'Anchor',
    shortDesc: 'Titanium artificial tooth roots providing permanent, natural-feeling tooth replacements.',
    fullDesc: 'Dental implants at Sakthi Dental Clinic offer a modern and reliable solution for replacing missing teeth. Using biocompatible materials like titanium, we securely place artificial roots into the jawbone, creating a stable foundation for prosthetic teeth. Our advanced implant procedures restore both the appearance and strength of your smile, ensuring a natural feel and long-lasting results. Trust our experienced team to help you regain optimal oral function and confidence with cutting-edge implant technology.',
  },
  {
    id: 'laser-dentistry',
    title: 'Laser Dentistry',
    category: 'Surgical',
    badge: 'Minimally Invasive',
    iconName: 'Zap',
    shortDesc: 'State-of-the-art dental laser equipment for fast healing, reduced discomfort, and precision soft tissue care.',
    fullDesc: 'At Sakthi Dental Clinic, we utilize advanced laser technology to perform precise, minimally invasive dental treatments. From soft tissue surgeries to gum care, laser procedures offer faster healing, reduced discomfort, and enhanced accuracy. Whether you\'re undergoing gum reshaping or other corrective treatments, our state-of-the-art laser equipment ensures efficient, safe, and comfortable care tailored to your needs.',
  },
  {
    id: 'root-canal-therapy',
    title: 'Root Canal Therapy',
    category: 'Restorative',
    badge: 'Single Sitting Option',
    iconName: 'HeartPulse',
    shortDesc: 'Relieves acute dental infection, removes diseased pulp tissue, and seals the tooth permanently.',
    fullDesc: 'When tooth infections reach deep into the pulp, root canal treatment becomes essential. At Sakthi Dental Clinic, we carefully remove infected tissue, clean the area thoroughly, and seal the tooth to prevent future issues. Our focus is on relieving pain, eliminating infection, and preserving your natural tooth structure for long-term dental health.',
  },
  {
    id: 'wisdom-tooth-extraction',
    title: 'Wisdom Tooth Extraction',
    category: 'Surgical',
    badge: 'Maxillofacial Care',
    iconName: 'AlertCircle',
    shortDesc: 'Gentle, modern removal of impacted third molars with comprehensive post-operative comfort care.',
    fullDesc: 'If impacted or problematic, wisdom teeth can cause discomfort and oral health risks. At Sakthi Dental Clinic, we specialize in gentle and effective wisdom tooth removal, using modern techniques and anesthesia options to ensure a smooth, pain-free experience. We also provide comprehensive post-operative care to support quick recovery and lasting comfort.',
  },
  {
    id: 'fixed-partial-denture',
    title: 'Fixed Partial Denture (Bridge)',
    category: 'Restorative',
    badge: 'Custom Bridges',
    iconName: 'Layers',
    shortDesc: 'Secure prosthetic tooth bridging anchored to adjacent teeth or implants for stable chewing.',
    fullDesc: 'Our expertly crafted fixed partial dentures offer a secure solution for replacing missing teeth by anchoring prosthetic teeth to adjacent natural teeth or implants. At Sakthi Dental Clinic, we focus on custom-made dental bridges that restore your smile’s appearance while improving chewing function and maintaining oral stability.',
  },
  {
    id: 'teeth-whitening-bleaching',
    title: 'Teeth Whitening (Bleaching)',
    category: 'Cosmetic',
    badge: 'Radiant Smile',
    iconName: 'Sun',
    shortDesc: 'Professional whitening solutions treating extrinsic and intrinsic stains safely by several shades.',
    fullDesc: 'Brighten your smile with professional teeth whitening services at Sakthi Dental Clinic. We treat both external and internal stains, using safe bleaching agents to lighten your teeth by several shades. Whether addressing discoloration from food, beverages, or age, our whitening treatments restore your smile\'s natural radiance and boost your confidence.',
  },
  {
    id: 'veneers',
    title: 'Veneers',
    category: 'Cosmetic',
    badge: 'Flawless Smile',
    iconName: 'Sparkle',
    shortDesc: 'Ultra-thin, custom-made ceramic shells correcting chips, stubborn gaps, and discolorations.',
    fullDesc: 'Transform your smile with dental veneers, thin, custom-made shells designed to cover imperfections such as chips, gaps, or discoloration. At Sakthi Dental Clinic, we offer high-quality veneers that enhance your teeth’s appearance, giving you a flawless and natural-looking smile.',
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    category: 'Pediatric',
    badge: 'Kid-Friendly & Gentle',
    iconName: 'Baby',
    shortDesc: 'Warm, fun, and fear-free dental visits for infants, toddlers, and young children.',
    fullDesc: 'At Sakthi Dental Clinic, we provide gentle and comprehensive dental care for children. Our friendly team creates a welcoming environment, ensuring young patients feel safe and comfortable during their visits. From routine check-ups to preventive treatments, we focus on building healthy dental habits for a lifetime of bright smiles.',
  },
  {
    id: 'flap-surgery',
    title: 'Flap Surgery',
    category: 'Surgical',
    badge: 'Periodontal Care',
    iconName: 'Stethoscope',
    shortDesc: 'Deep periodontal therapy for advanced gum conditions to clear deep bacteria and preserve teeth.',
    fullDesc: 'For advanced gum disease, flap surgery may be necessary. Our skilled team at Sakthi Dental Clinic performs this procedure by lifting the gum tissue to remove deep-seated plaque and bacteria, then repositioning it for optimal healing. This treatment helps prevent further periodontal issues and supports gum health.',
  },
  {
    id: 'orthodontic-braces',
    title: 'Orthodontic Braces',
    category: 'Orthodontics',
    badge: 'Metal, Ceramic, Lingual',
    iconName: 'Grid',
    shortDesc: 'Customized braces for proper bite correction, dental alignment, and beautiful harmonious smiles.',
    fullDesc: 'Correct misaligned teeth with customized orthodontic treatments at Sakthi Dental Clinic. We offer a variety of braces, metal, ceramic, or lingual, to suit your preferences. Our goal is to achieve improved alignment, better bite function, and a confident, harmonious smile.',
  },
  {
    id: 'clear-aligners',
    title: 'Clear Aligners',
    category: 'Orthodontics',
    badge: 'Discreet & Removable',
    iconName: 'EyeOff',
    shortDesc: 'Virtually invisible, comfortable removable trays that gently shift teeth into proper position.',
    fullDesc: 'For a discreet alternative to traditional braces, Sakthi Dental Clinic offers clear aligners. These transparent, removable trays gradually shift your teeth into perfect alignment, providing comfort and flexibility throughout your orthodontic journey.',
  },
];

export const FAQS_LIST: FAQ[] = [
  {
    id: 'faq-1',
    category: 'Pain & Emergencies',
    question: 'Can medication completely relieve tooth pain?',
    answer: 'Not entirely. While medications may offer short-term relief, long-lasting relief requires identifying and treating the root cause of the pain through professional dental care.',
  },
  {
    id: 'faq-2',
    category: 'Cleaning & Scaling',
    question: 'Does teeth scaling cause enamel damage, sensitivity, or gaps between teeth?',
    answer: 'No. Scaling safely removes plaque and tartar from teeth and below the gum line. It doesn’t damage enamel or create gaps. Some temporary sensitivity may occur, but it usually subsides as gums heal and reattach to the teeth.',
  },
  {
    id: 'faq-3',
    category: 'Cosmetic & Stains',
    question: 'Can fluorosis stains be removed through scaling?',
    answer: 'Scaling can remove surface (extrinsic) stains but not fluorosis, which is an internal (intrinsic) stain. Fluorosis may require treatments like bleaching, veneers, or crowns for cosmetic improvement.',
  },
  {
    id: 'faq-4',
    category: 'Cavities & Fillings',
    question: 'Can painful teeth be treated with fillings?',
    answer: 'Not always. If the cavity has reached the pulp, the innermost layer of the tooth, simple filling won’t help. In such cases, root canal treatment or tooth extraction might be necessary. Fillings are effective only when the damage is limited to the outer layers (enamel and dentin).',
  },
  {
    id: 'faq-5',
    category: 'Root Canal Therapy',
    question: 'Is placing a cap or crown necessary after root canal treatment (RCT)?',
    answer: 'Yes. A crown is recommended after RCT to protect the treated tooth, which may be weaker due to decay. It prevents fractures and adds durability, especially during chewing.',
  },
  {
    id: 'faq-6',
    category: 'Pediatric Care',
    question: 'Can milk teeth need root canal treatment (RCT)?',
    answer: 'Yes. If a milk tooth has a deep cavity and is likely to remain in the mouth for some time, an RCT can preserve it and prevent infection or early loss.',
  },
  {
    id: 'faq-7',
    category: 'Daily Hygiene',
    question: 'How can I maintain good oral hygiene?',
    answer: 'Brush your teeth twice daily with proper technique, rinse after meals, floss regularly, and schedule routine check-ups with your dentist to maintain healthy teeth and gums.',
  },
  {
    id: 'faq-8',
    category: 'Orthodontics & Braces',
    question: 'What is the best age to get braces?',
    answer: 'Braces are most effective between ages 12 and 14, when the jaw and teeth are still developing. However, some cases may benefit from earlier intervention depending on the condition.',
  },
  {
    id: 'faq-9',
    category: 'Wisdom Teeth & Extraction',
    question: 'Do all wisdom teeth need to be removed?',
    answer: 'No. Wisdom teeth only require removal if they are impacted, infected, or causing pain due to crowding or damage to adjacent teeth.',
  },
  {
    id: 'faq-10',
    category: 'Tooth Replacement',
    question: 'Is it important to replace missing teeth after extraction?',
    answer: 'Yes. Replacing extracted teeth helps maintain proper bite alignment and prevents adjacent teeth from shifting, which can affect chewing and overall oral function.',
  },
  {
    id: 'faq-11',
    category: 'Implants',
    question: 'What are the benefits of dental implants?',
    answer: 'Dental implants restore both the appearance and functionality of missing teeth. They provide a stable, natural-looking solution that can improve confidence and overall quality of life.',
  },
  {
    id: 'faq-12',
    category: 'Oral Hygiene Tools',
    question: 'Which type of toothbrush and toothpaste should I use?',
    answer: 'Use a soft or medium-bristled toothbrush with a small head for better reach. Choose a non-abrasive fluoride toothpaste and replace your toothbrush every three months for optimal hygiene.',
  },
  {
    id: 'faq-13',
    category: 'Sensitivity',
    question: 'What causes tooth sensitivity?',
    answer: 'Tooth sensitivity can result from enamel wear (due to attrition or abrasion), tooth decay, exposed tooth roots, or hairline cracks in the teeth.',
  },
  {
    id: 'faq-14',
    category: 'Routine Check-ups',
    question: 'How often should I see a dentist?',
    answer: 'Visiting your dentist every six months is recommended for routine check-ups, professional cleaning, and preventive care to maintain good oral health.',
  },
];

export const PRIVACY_POLICY_TEXT = `
At Sakthi Dental Clinic, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, store, and disclose information from visitors and users of our website.

Information We Collect
We may collect personal identification information from users in several ways, including when users:
• Visit our website
• Fill out forms (e.g contact or appointment requests)
• Engage with features, services, or resources on our site

Types of information we may collect include:
• Name
• Email address
• Phone number

Users can visit our site anonymously. We only collect personal data when it is voluntarily submitted by users. Refusing to provide certain personal information may limit access to some site features or services.

We may also gather non-personal identification information, such as:
• Browser type
• Device details
• Operating system
• Internet service provider
• Technical data related to user interaction with the site

Cookies
Our website may use “cookies” to enhance the user experience. Cookies are small files stored on a user’s device for record-keeping purposes and to track preferences or site activity.
Users can set their browser to refuse cookies or alert them when cookies are being used. Please note that disabling cookies may affect some site functionality.

How We Use Your Information
Collected information may be used for the following purposes:
• To operate and manage the website: Ensuring content displays properly and services run smoothly.
• To improve customer service: Helping us respond to inquiries more efficiently.
• To enhance the website experience: Feedback provided may help us improve content, usability, and performance.
• To communicate via email: We may use the email address to respond to inquiries, appointments, or service updates.

Data Security
We implement appropriate security measures for data collection, storage, and processing to safeguard your personal information from unauthorized access, alteration, or destruction.

Information Sharing
We do not sell, trade, or rent personal identification information to third parties.
We may share general demographic data (not linked to any personal information) with trusted partners or affiliates to improve service delivery and site performance.

Children’s Privacy
In compliance with the Children’s Online Privacy Protection Act (COPPA), we do not knowingly collect any personal information from children under the age of 13. Our site is not intended to attract users below this age group.

Changes to This Policy
Sakthi Dental Clinic may update this Privacy Policy from time to time. We encourage users to review this page periodically to stay informed about how we protect your information.

Acceptance of Terms
By using this website, you agree to this policy. If you do not accept our Privacy Policy, please do not use our website.
Continued use of the site following any updates will be deemed as your acceptance of the revised policy.

Contact Us
If you have any questions about this Privacy Policy or your interactions with our site, please contact us:
📍 Address: B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India
📧 Email: info@sakthidentalclinic.in
📞 Phone: +91 9862890897/ +91 9363298118
`;

export const getTreatments = (lang: Language): Treatment[] => {
  return lang === 'ta' ? ALL_TREATMENTS_TA : ALL_TREATMENTS;
};

export const getFaqs = (lang: Language): FAQ[] => {
  return lang === 'ta' ? FAQS_LIST_TA : FAQS_LIST;
};

export const getDoctors = (lang: Language): Doctor[] => {
  return lang === 'ta' ? DOCTORS_LIST_TA : DOCTOR_TEAM;
};

