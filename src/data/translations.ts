import { Language } from '../types';

export interface TranslationStrings {
  nav: {
    home: string;
    about: string;
    treatments: string;
    faqs: string;
    contact: string;
    fixAppointment: string;
    specializedCare: string;
    doctorsDaily: string;
    callUs: string;
    locationText: string;
    emergencySupport: string;
  };
  hero: {
    badge: string;
    badgeYear: string;
    headlinePart1: string;
    headlineHighlight: string;
    subtext: string;
    fixAppointment: string;
    emergencySupport: string;
    starRating: string;
    clinicalExperience: string;
    clinicHours: string;
    founderBadge: string;
    founderExperience: string;
    readStory: string;
    specialityLabel: string;
    specialityVal: string;
    techLabel: string;
    techVal: string;
    alignmentLabel: string;
    alignmentVal: string;
    restorationsLabel: string;
    restorationsVal: string;
    verifiedReview: string;
  };
  assuranceBanner: {
    badge: string;
    quote: string;
    subtext: string;
    fixAppointment: string;
    callClinic: string;
  };
  whyChooseUs: {
    eyebrow: string;
    title: string;
    subtext: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  coreTreatments: {
    eyebrow: string;
    title: string;
    subtext: string;
    viewAllTreatments: string;
    learnDetails: string;
    bookNow: string;
    viewAllButton: string;
    items: {
      id: string;
      title: string;
      description: string;
      badge: string;
    }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    subtext: string;
    items: {
      id: string;
      quote: string;
      author: string;
      tagline: string;
    }[];
  };
  submitTestimonial: {
    eyebrow: string;
    title: string;
    subtext: string;
    nameLabel: string;
    namePlaceholder: string;
    ratingLabel: string;
    ratingDesc: string[];
    commentLabel: string;
    commentPlaceholder: string;
    treatmentLabel: string;
    treatmentPlaceholder: string;
    submitBtn: string;
    successTitle: string;
    successSub: string;
    submitAnother: string;
    validationName: string;
    validationComment: string;
  };
  amenities: {
    eyebrow: string;
    title: string;
    subtext: string;
    items: {
      id: string;
      title: string;
      description: string;
    }[];
  };
  faqTeaser: {
    title: string;
    subtext: string;
    browseFaqs: string;
    fixAppointment: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    subheading: string;
    founderRole: string;
    founderQual: string;
    consultFounder: string;
    milestones: {
      graduated: string;
      mathura: string;
      hospital: string;
      founded: string;
    };
    bioP1: string;
    bioP2: string;
    bioP3: string;
    bioHighlight: string;
    missionTitle: string;
    missionTag: string;
    missionText: string;
    visionTitle: string;
    visionTag: string;
    visionText: string;
    teamEyebrow: string;
    teamTitle: string;
    teamSubtext: string;
    bookWithDoctor: string;
    comfortHeading: string;
    comfortSubtext: string;
    comfortButton: string;
  };
  treatmentsPage: {
    eyebrow: string;
    heading: string;
    subtext: string;
    searchPlaceholder: string;
    allCategory: string;
    noResults: string;
    resetFilters: string;
    readDetails: string;
    fixAppointment: string;
    helpHeading: string;
    helpSubtext: string;
    bookConsultation: string;
  };
  faqsPage: {
    eyebrow: string;
    heading: string;
    subtext: string;
    searchPlaceholder: string;
    expandAll: string;
    collapseAll: string;
    noResults: string;
    viewAll: string;
    stillHaveQuestions: string;
    stillHaveQuestionsSub: string;
    callUs: string;
    contactClinic: string;
  };
  contactPage: {
    eyebrow: string;
    heading: string;
    subtext: string;
    formEyebrow: string;
    formTitle: string;
    formSubtext: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    messageLabel: string;
    messageOptional: string;
    messagePlaceholder: string;
    submitButton: string;
    thankYouTitle: string;
    thankYouSub: string;
    sendAnother: string;
    reachUsEyebrow: string;
    reachUsTitle: string;
    addressLabel: string;
    getDirections: string;
    emailContactLabel: string;
    phoneLabelSection: string;
    timingsLabel: string;
    timingsValue: string;
    doctorAvailabilityNote: string;
    nearbyCardTitle: string;
    nearbyCardSub: string;
    mapsButton: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    keyTreatments: string;
    addressContact: string;
    allRightsReserved: string;
    craftedWithLove: string;
    privacyPolicy: string;
  };
  appointmentModal: {
    title: string;
    subtext: string;
    patientCategory: string;
    patientTypes: {
      Woman: string;
      Child: string;
      Adult: string;
      Senior: string;
    };
    patientName: string;
    phoneNumber: string;
    treatmentService: string;
    preferredDoctor: string;
    preferredDate: string;
    preferredTimeSlot: string;
    notes: string;
    notesPlaceholder: string;
    submit: string;
    noPrepayment: string;
    orCall: string;
    requestedTitle: string;
    referenceCode: string;
    whatsappConfirm: string;
    done: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationStrings> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      treatments: 'Treatments',
      faqs: 'FAQs',
      contact: 'Contact Us',
      fixAppointment: 'Fix an Appointment',
      specializedCare: 'Specialized Care for Women & Children',
      doctorsDaily: 'Doctors available daily (9 AM - 9 PM)',
      callUs: 'Call',
      locationText: 'Hosur, Tamil Nadu',
      emergencySupport: 'Emergency Support',
    },
    hero: {
      badge: 'Hosur’s Premier Clinic for Women & Kids',
      badgeYear: 'Since 2004',
      headlinePart1: 'Specialized Dental Care for ',
      headlineHighlight: 'Women, Children & Families',
      subtext: 'Experience compassionate, expert-led dental services tailored to your needs, all in a modern and welcoming environment.',
      fixAppointment: 'Fix an Appointment',
      emergencySupport: 'Emergency Dental Support',
      starRating: '5.0 Star Rated',
      clinicalExperience: '20+ Years Clinical Expertise',
      clinicHours: 'Open Daily 9 AM - 7 PM',
      founderBadge: 'Founder & Chief Dentist',
      founderExperience: 'BDS • 20+ Years Excellence in Hosur',
      readStory: 'Read Dr. Anupriya\'s Story',
      specialityLabel: 'Speciality',
      specialityVal: 'Women & Kids Care',
      techLabel: 'Technology',
      techVal: 'Laser Dentistry',
      alignmentLabel: 'Smile Alignment',
      alignmentVal: 'Braces & Aligners',
      restorationsLabel: 'Restorations',
      restorationsVal: 'Implants & Dentures',
      verifiedReview: 'Verified Patient Review',
    },
    assuranceBanner: {
      badge: 'Our Assurance to You',
      quote: 'You are always in safe hands. We are ready to help, anytime.',
      subtext: 'Whether you need a quick consultation, urgent pain relief, or orthodontic guidance for your child, our clinic provides gentle, transparent, and respectful dental care.',
      fixAppointment: 'Fix an Appointment',
      callClinic: 'Call Clinic',
    },
    whyChooseUs: {
      eyebrow: 'The Sakthi Difference',
      title: 'Why Choose Sakthi Dental Clinic?',
      subtext: 'Our clinic’s philosophy is rooted in compassionate patient care, specialized expertise, and a gentle environment where patients of all generations feel completely safe.',
      items: [
        {
          title: 'All-in-One Care',
          description: 'From general dentistry to specialized treatments, everything under one roof.',
        },
        {
          title: 'Experienced Doctors',
          description: 'Our dentists are professionally trained and committed to personalized patient care.',
        },
        {
          title: 'Patient-Centric Approach',
          description: 'We prioritize comfort, safety, and transparency in every treatment we offer.',
        },
        {
          title: 'Technology-Driven Services',
          description: 'Modern tools and equipment ensure precision and safety.',
        },
      ],
    },
    coreTreatments: {
      eyebrow: 'Comprehensive Dental Solutions',
      title: 'Explore Our Services',
      subtext: 'From gentle tooth extractions to advanced aligners and cosmetic teeth whitening, discover our specialized treatments tailored for your entire family.',
      viewAllTreatments: 'View Full List of 15 Treatments',
      learnDetails: 'Learn Details',
      bookNow: 'Book Now',
      viewAllButton: 'View Full List of Treatments',
      items: [
        {
          id: 'tooth-extraction',
          title: 'Tooth Extraction',
          description: 'Safe and painless removal of impacted or decayed teeth.',
          badge: 'Gentle Care',
        },
        {
          id: 'artificial-complete-denture',
          title: 'Artificial Complete Denture',
          description: 'Full mouth replacement to restore confidence and function.',
          badge: 'Restorative',
        },
        {
          id: 'tooth-filling',
          title: 'Tooth Filling',
          description: 'Composite fillings for cavity treatment and tooth restoration.',
          badge: 'Seamless Fit',
        },
        {
          id: 'teeth-cleaning-scaling',
          title: 'Teeth Cleaning or Scaling',
          description: 'Preventive care to remove plaque and protect gums.',
          badge: 'Laser Technology',
        },
        {
          id: 'teeth-whitening-bleaching',
          title: 'Bleaching',
          description: 'Cosmetic whitening treatments for a brighter smile.',
          badge: 'Cosmetic',
        },
        {
          id: 'orthodontic-braces',
          title: 'Orthodontic Treatment',
          description: 'Braces and aligners to straighten and align teeth.',
          badge: 'All Ages',
        },
      ],
    },
    testimonials: {
      eyebrow: 'Social Proof & Trust',
      title: 'What Our Patients Say',
      subtext: 'Genuine experiences from patients who entrusted their smiles to Dr. Anupriya and our dedicated team.',
      items: [
        {
          id: '1',
          quote: '“The doctors are extremely kind and attentive. My braces treatment is progressing really well. 5/5.”',
          author: 'Manisha M',
          tagline: 'Orthodontics Patient',
        },
        {
          id: '2',
          quote: '“I got my teeth cleaned and whitened here, and the results were amazing. The staff is so humble and professional. I’ve recommended Sakthi Dental Clinic to my entire family.”',
          author: 'Mr. Arun Kumar',
          tagline: 'Teeth Cleaning & Whitening',
        },
        {
          id: '3',
          quote: '“Their attention to detail is outstanding. My daughter needed braces and the entire process from consultation to regular follow ups has been so smooth. Really grateful for their care.”',
          author: 'Mrs. Revathi S.',
          tagline: 'Parent of Pediatric Orthodontics Patient',
        },
      ],
    },
    submitTestimonial: {
      eyebrow: 'Patient Experience',
      title: 'Submit Your Testimonial',
      subtext: 'Visited Sakthi Dental Clinic recently? We would love to hear your thoughts and treatment feedback.',
      nameLabel: 'Your Name',
      namePlaceholder: 'e.g. Meenakshi Sundaram',
      ratingLabel: 'Your Rating',
      ratingDesc: ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent 5-Star Care'],
      commentLabel: 'Your Review / Comments',
      commentPlaceholder: 'Share details about your dental treatment, gentle doctor care, pain relief, and clinic experience...',
      treatmentLabel: 'Treatment Received (Optional)',
      treatmentPlaceholder: 'e.g. Root Canal, Teeth Cleaning, Braces',
      submitBtn: 'Submit Testimonial',
      successTitle: 'Thank You for Your Review!',
      successSub: 'Your feedback has been received and added to our patient testimonials. We appreciate your trust in Sakthi Dental Clinic.',
      submitAnother: 'Submit Another Feedback',
      validationName: 'Please enter your name.',
      validationComment: 'Please share a brief comment about your experience.',
    },
    amenities: {
      eyebrow: 'Patient Convenience First',
      title: 'Clinic Facilities',
      subtext: 'Thoughtfully designed to make every visit stress-free for pregnant mothers, young kids, working adults, and senior citizens alike.',
      items: [
        {
          id: 'central-location',
          title: 'Convenient central location',
          description: 'Easily accessible at SBM Layout, Anthivadi with major road connectivity.',
        },
        {
          id: 'parking',
          title: 'Hassle-free parking',
          description: 'Dedicated parking spaces for two-wheelers and four-wheelers.',
        },
        {
          id: 'doctors-daily',
          title: 'Doctors available daily (9 AM - 9 PM)',
          description: 'Continuous availability including extended evening slots for working families.',
        },
        {
          id: 'pickup-drop',
          title: 'Pickup & drop-off support',
          description: 'Assisted transport services upon advance request for elderly and urgent visits.',
        },
        {
          id: 'wheelchair',
          title: 'Wheelchair access',
          description: 'Ramped entryways, spacious doors, and accessible treatment bays for seniors.',
        },
      ],
    },
    faqTeaser: {
      title: 'Have questions regarding treatments or pain relief?',
      subtext: 'Check our extensive FAQ library answering queries on braces, root canal, teeth whitening, milk teeth, and implants.',
      browseFaqs: 'Browse 14 FAQs',
      fixAppointment: 'Fix an Appointment',
    },
    about: {
      eyebrow: 'Leader in Modern Dentistry at Hosur',
      heading: 'Get to Know Dr. Anupriya',
      subheading: 'Your Trusted Partner in Dental Care',
      founderRole: 'Founder & Chief Dentist',
      founderQual: 'BDS • 20+ Years Clinical Practice',
      consultFounder: 'Consult with Dr. Anupriya',
      milestones: {
        graduated: 'Graduated 2000 (20+ Years Expertise)',
        mathura: '6 Years Impact at Mathura Clinic',
        hospital: 'Consultant, PHC at Chandara Hospital (10+ Yrs)',
        founded: 'Established Sakthi Dental Clinic (2004)',
      },
      bioP1: 'Bringing over 20 years of expertise, Dr. Anupriya stands as a leading figure in modern dentistry at Hosur. She began her professional journey after graduating in 2000. Her passion for delivering exceptional dental care was further nurtured during six impactful years at Mathura Clinic, where she refined her clinical skills and deepened her commitment to patient wellbeing.',
      bioP2: 'In 2004, Dr. Anupriya established Sakthi Dental Clinic in Hosur with a clear vision to make high-quality dental care accessible to all. Her dedication extends beyond private practice, reflected in her long-standing service with the Primary Health Center at Chandara Hospital, where she has been a trusted dental consultant for over a decade.',
      bioP3: 'At Sakthi Dental Clinic, we believe that a healthy smile is a gateway to confidence and wellbeing. Our clinic blends advanced dental technology with a warm, patient-friendly environment to ensure every visit is comfortable and stress-free. From routine check-ups to specialized treatments, we prioritize personalized care tailored to your unique dental needs.',
      bioHighlight: 'Whether you\'re looking for preventive care, cosmetic enhancements, or restorative solutions, Dr. Anupriya and her team are committed to delivering excellence at every step. Because here, your smile isn’t just treated — it’s celebrated.',
      missionTitle: 'Our Mission',
      missionTag: 'Purpose & Dedication',
      missionText: 'At Sakthi Dental Clinic, our mission is to redefine oral healthcare by delivering personalized, compassionate, and advanced dental services. We are committed to creating a welcoming environment where patients feel comfortable and confident in taking charge of their dental health. By integrating state-of-the-art technology with patient-centric care, we ensure that every treatment enhances not only your smile but also your overall well-being. Continuous learning and innovation drive us to provide comprehensive solutions, from preventive care to complex dental procedures, all designed to promote long-lasting oral health.',
      visionTitle: 'Our Vision',
      visionTag: 'Future & Impact',
      visionText: 'Our vision is to be a leading force in modern dentistry, known for setting new standards in patient care, innovation, and community engagement. At Sakthi Dental Clinic, we believe that building trust, encouraging preventive practices, and fostering a culture of excellence are key to making a lasting impact. We aspire to not only deliver exceptional dental outcomes but also to contribute positively to the community through awareness initiatives and outreach programs. With a focus on holistic care and a passion for brightening lives, we are dedicated to ensuring that every smile we treat reflects confidence, health, and happiness.',
      teamEyebrow: 'Multidisciplinary Dental Board',
      teamTitle: 'Our Team of Doctors',
      teamSubtext: 'From specialized pediatric dentistry and orthodontics to complex implantology and laser surgery, our qualified panel brings comprehensive expertise under one roof.',
      bookWithDoctor: 'Book Appointment with',
      comfortHeading: 'Dedicated to Women, Children & Elderly Comfort',
      comfortSubtext: 'Our clinic is equipped with wheelchair accessibility, gentle sterilization protocols, kid-friendly consultation spaces, and quiet, stress-free operatory suites.',
      comfortButton: 'Fix an Appointment with Our Team',
    },
    treatmentsPage: {
      eyebrow: 'Advanced Dental Care in Hosur',
      heading: 'Our Dental Treatments',
      subtext: 'From preventive hygiene and painless extractions to state-of-the-art laser surgeries, pediatric visits, and clear aligners.',
      searchPlaceholder: 'Search treatments (e.g. Braces, Implants, Whitening)...',
      allCategory: 'All Treatments (15)',
      noResults: 'No dental treatments found matching your search.',
      resetFilters: 'Reset Filters',
      readDetails: 'Read Full Details',
      fixAppointment: 'Fix Appointment',
      helpHeading: 'Need Help Deciding on the Right Treatment?',
      helpSubtext: 'Book an initial comprehensive dental checkup. Dr. Anupriya and our specialist doctors will examine your condition and guide you with transparent options.',
      bookConsultation: 'Book Initial Consultation',
    },
    faqsPage: {
      eyebrow: 'Patient Guidance & Clarifications',
      heading: 'Frequently Asked Questions',
      subtext: 'Clear, medically grounded answers to common questions about teeth scaling, root canal crowns, braces for kids, implants, and pain relief.',
      searchPlaceholder: 'Search by keyword (e.g. pain, braces, crown)...',
      expandAll: 'Expand All',
      collapseAll: 'Collapse All',
      noResults: 'No questions found matching your search.',
      viewAll: 'View all 14 questions',
      stillHaveQuestions: 'Still have a specific dental query?',
      stillHaveQuestionsSub: 'Our clinical team at Hosur is happy to provide guidance over phone or in-person.',
      callUs: 'Call Us',
      contactClinic: 'Contact Clinic',
    },
    contactPage: {
      eyebrow: 'Patient Support & Inquiries',
      heading: 'Contact Sakthi Dental Clinic',
      subtext: 'We are located at Anthivadi, Hosur. Reach out to schedule appointments, consult regarding treatments, or ask any question.',
      formEyebrow: 'Direct Inquiries',
      formTitle: 'We would love to hear from you',
      formSubtext: 'Send us a message and our team will get back to you promptly.',
      nameLabel: 'Name',
      namePlaceholder: 'Enter your full name',
      emailLabel: 'Email',
      emailPlaceholder: 'yourname@domain.com',
      phoneLabel: 'Phone Number',
      phonePlaceholder: 'e.g. 9862890897',
      messageLabel: 'Your Message',
      messageOptional: '(Optional)',
      messagePlaceholder: 'Share your dental concern, treatment query, or convenient visiting hours...',
      submitButton: 'Submit',
      thankYouTitle: 'Thank You!',
      thankYouSub: 'Your message has been received. Our clinical support team will review your inquiry and get back to you shortly.',
      sendAnother: 'Send Another Message',
      reachUsEyebrow: 'Clinic Details',
      reachUsTitle: 'Reach us',
      addressLabel: 'Clinic Address',
      getDirections: 'Get Directions on Google Maps',
      emailContactLabel: 'Email Address',
      phoneLabelSection: 'Phone Numbers',
      timingsLabel: 'Consultation Timings',
      timingsValue: 'Sunday to Saturday: 9am to 7pm',
      doctorAvailabilityNote: '(Doctors available daily 9 AM - 9 PM for emergencies)',
      nearbyCardTitle: 'Visiting from Hosur or nearby?',
      nearbyCardSub: 'Centrally situated near Anthivadi Circle with ample parking.',
      mapsButton: 'Maps',
    },
    footer: {
      tagline: 'Specialized dental care tailored especially for women, children, and families. Led by Dr. Anupriya with 20+ years of compassionate clinical excellence.',
      quickLinks: 'Quick Links',
      keyTreatments: 'Key Treatments',
      addressContact: 'Address & Contact',
      allRightsReserved: 'All rights reserved. Hosur, Tamil Nadu.',
      craftedWithLove: 'Crafted for healthy smiles',
      privacyPolicy: 'Privacy Policy',
    },
    appointmentModal: {
      title: 'Fix an Appointment',
      subtext: 'Care for Women, Children & Families. We are ready to help, anytime.',
      patientCategory: 'Patient Category',
      patientTypes: {
        Woman: 'Woman',
        Child: 'Child',
        Adult: 'Adult',
        Senior: 'Senior',
      },
      patientName: 'Patient Name',
      phoneNumber: 'Phone Number',
      treatmentService: 'Treatment / Service',
      preferredDoctor: 'Preferred Doctor',
      preferredDate: 'Preferred Date',
      preferredTimeSlot: 'Preferred Time Slot',
      notes: 'Brief Note or Symptoms (Optional)',
      notesPlaceholder: 'e.g. Tooth sensitivity while drinking water, braces consultation for child...',
      submit: 'Confirm Appointment Request',
      noPrepayment: 'No prepayments required',
      orCall: 'Or Call:',
      requestedTitle: 'Appointment Requested!',
      referenceCode: 'Reference Code',
      whatsappConfirm: 'Send details on WhatsApp',
      done: 'Done',
    },
  },
  ta: {
    nav: {
      home: 'முகப்பு',
      about: 'எங்களை பற்றி',
      treatments: 'சிகிச்சைகள்',
      faqs: 'கேள்விகள் & பதில்கள்',
      contact: 'தொடர்புக்கு',
      fixAppointment: 'முன்பதிவு செய்ய',
      specializedCare: 'பெண்கள் & குழந்தைகளுக்கான சிறப்பு பல் சிகிச்சை',
      doctorsDaily: 'தினமும் மருத்துவர்கள் உள்ளனர் (காலை 9 - இரவு 9)',
      callUs: 'அழைக்க',
      locationText: 'ஓசூர், தமிழ்நாடு',
      emergencySupport: 'அவசர சிகிச்சை',
    },
    hero: {
      badge: 'ஓசூரில் பெண்கள் & குழந்தைகளுக்கான முன்னணி பல் மையம்',
      badgeYear: '2004 முதல்',
      headlinePart1: 'பெண்கள், குழந்தைகள் & குடும்பங்களுக்கான ',
      headlineHighlight: 'சிறப்பு பல் சிகிச்சை மையம்',
      subtext: 'உங்கள் தேவைகளுக்கு ஏற்ப கனிவான, நிபுணத்துவம் வாய்ந்த பல் மருத்துவ சேவைகளை நவீன மற்றும் அமைதியான சூழலில் அனுபவியுங்கள்.',
      fixAppointment: 'முன்பதிவு செய்ய',
      emergencySupport: 'அவசர பல் சிகிச்சை உதவி',
      starRating: '5.0 நட்சத்திர மதிப்பீடு',
      clinicalExperience: '20+ ஆண்டுகள் மருத்துவ அனுபவம்',
      clinicHours: 'தினமும் காலை 9 - இரவு 7 வரை',
      founderBadge: 'நிறுவனர் & தலைமை பல் மருத்துவர்',
      founderExperience: 'BDS • ஓசூரில் 20+ ஆண்டுகள் சிறந்த சேவை',
      readStory: 'டாக்டர் அனுப்பிரியாவின் பயணம்',
      specialityLabel: 'சிறப்பு',
      specialityVal: 'பெண்கள் & குழந்தைகள் நலன்',
      techLabel: 'தொழில்நுட்பம்',
      techVal: 'லேசர் பல் மருத்துவம்',
      alignmentLabel: 'பல் வரிசை சீரமைப்பு',
      alignmentVal: 'கிளிப் & அலைனர்கள்',
      restorationsLabel: 'செயற்கை பற்கள்',
      restorationsVal: 'இம்ப்ளான்ட் & டென்ச்சர்',
      verifiedReview: 'உறுதிப்படுத்தப்பட்ட கருத்து',
    },
    assuranceBanner: {
      badge: 'எங்களின் உறுதிமொழி',
      quote: 'நீங்கள் எப்போதும் பாதுகாப்பான கைகளில் உள்ளீர்கள். நாங்கள் எந்த நேரத்திலும் உதவத் தயாராக இருக்கிறோம்.',
      subtext: 'பொதுவான பல் ஆலோசனை, கடுமையான பல் வலி நிவாரணம் அல்லது குழந்தைகளுக்கு பல் சீரமைப்பு என எதுவாக இருந்தாலும், நாங்கள் மென்மையான, வெளிப்படையான சிகிச்சையை வழங்குகிறோம்.',
      fixAppointment: 'முன்பதிவு செய்ய',
      callClinic: 'மருத்துவமனைக்கு அழைக்க',
    },
    whyChooseUs: {
      eyebrow: 'சக்தியின் சிறப்பம்சம்',
      title: 'சக்தி பல் மருத்துவமனையை ஏன் தேர்வு செய்ய வேண்டும்?',
      subtext: 'அன்பான நோயாளி கவனிப்பு, அனுபவமிக்க நிபுணர்கள் மற்றும் அனைத்து வயதினரும் பாதுகாப்பாக உணரும் அமைதியான சூழலே எங்கள் மருத்துவமனையின் தத்துவம்.',
      items: [
        {
          title: 'அனைத்தும் ஒரே கூரையின் கீழ்',
          description: 'பொதுவான பல் சிகிச்சை முதல் உயர் சிறப்பு அறுவை சிகிச்சை வரை அனைத்தும் ஒரே இடத்தில்.',
        },
        {
          title: 'அனுபவம் வாய்ந்த மருத்துவர்கள்',
          description: 'முறையான பயிற்சி பெற்ற, நோயாளியின் நலனில் அக்கறை கொண்ட மருத்துவர்கள்.',
        },
        {
          title: 'நோயாளி மைய அணுகுமுறை',
          description: 'ஒவ்வொரு சிகிச்சையிலும் உங்கள் சௌகரியம், பாதுகாப்பு மற்றும் வெளிப்படைத்தன்மைக்கு முன்னுரிமை.',
        },
        {
          title: 'நவீன தொழில்நுட்ப சேவைகள்',
          description: 'துல்லியமான மற்றும் வலியற்ற சிகிச்சைக்காக மேம்பட்ட நவீன மருத்துவ உபகரணங்கள்.',
        },
      ],
    },
    coreTreatments: {
      eyebrow: 'முழுமையான பல் சிகிச்சை தீர்வுகள்',
      title: 'எங்கள் சிகிச்சை சேவைகள்',
      subtext: 'வலியற்ற பல் எடுத்தல் முதல் நவீன கிளிப்புகள், வெண்மையாக்குதல் வரை குடும்பத்தினர் அனைவருக்கும் ஏற்ற தனித்துவமான சிகிச்சைகள்.',
      viewAllTreatments: 'அனைத்து 15 சிகிச்சைகளையும் காண்க',
      learnDetails: 'விவரங்கள் அறிய',
      bookNow: 'பதிவு செய்ய',
      viewAllButton: 'முழு சிகிச்சைப் பட்டியலைக் காண்க',
      items: [
        {
          id: 'tooth-extraction',
          title: 'பல் அகற்றுதல் (Tooth Extraction)',
          description: 'சிதைந்த அல்லது பாதிக்கப்பட்ட பற்களை பாதுகாப்பாகவும் வலியின்றியும் அகற்றுதல்.',
          badge: 'மென்மையான சிகிச்சை',
        },
        {
          id: 'artificial-complete-denture',
          title: 'முழு செயற்கை பல் செட் (Complete Denture)',
          description: 'இயல்பான தோற்றம் மற்றும் உணவை நன்றாக மெல்ல உதவும் முழு பல் செட்.',
          badge: 'மறுசீரமைப்பு',
        },
        {
          id: 'tooth-filling',
          title: 'பல் அடைத்தல் (Tooth Filling)',
          description: 'சொத்தை பற்களை சுத்தம் செய்து தரமான காம்போசிட் கலவையால் அடைத்தல்.',
          badge: 'இயற்கையான பொருத்தம்',
        },
        {
          id: 'teeth-cleaning-scaling',
          title: 'பல் சுத்தம் செய்தல் (Scaling)',
          description: 'காரை மற்றும் கறைகளை அகற்றி ஈறுகளை ஆரோக்கியமாக பராமரித்தல்.',
          badge: 'லேசர் தொழில்நுட்பம்',
        },
        {
          id: 'teeth-whitening-bleaching',
          title: 'பல் வெண்மையாக்குதல் (Bleaching)',
          description: 'பற்களின் மஞ்சள் கறைகளை நீக்கி பளபளப்பான புன்னகை தரும் சிகிச்சை.',
          badge: 'அழகு சிகிச்சை',
        },
        {
          id: 'orthodontic-braces',
          title: 'பல் வரிசை சீரமைப்பு (Orthodontics)',
          description: 'முன்னுக்குப் பின் உள்ள பற்களை நேராக்கும் கிளிப்புகள் மற்றும் அலைனர்கள்.',
          badge: 'அனைத்து வயதினருக்கும்',
        },
      ],
    },
    testimonials: {
      eyebrow: 'நம்பகத்தன்மை & மதிப்புரைகள்',
      title: 'எங்கள் நோயாளிகள் கூறுவது',
      subtext: 'டாக்டர் அனுப்பிரியா மற்றும் எங்கள் குழுவிடம் சிகிச்சை பெற்ற நோயாளிகளின் உண்மையான அனுபவங்கள்.',
      items: [
        {
          id: '1',
          quote: '“மருத்துவர்கள் மிகவும் கனிவாகவும் கவனமாகவும் இருக்கிறார்கள். எனது பல் கிளிப் சிகிச்சை மிகச் சிறப்பாக நடைபெறுகிறது. 5/5.”',
          author: 'மனிஷா எம்',
          tagline: 'பல் சீரமைப்பு நோயாளி',
        },
        {
          id: '2',
          quote: '“நான் இங்கே பல் சுத்தம் மற்றும் வெண்மையாக்கும் சிகிச்சை செய்தேன். முடிவுகள் ஆச்சரியமாக இருந்தது. ஊழியர்கள் மிகவும் பணிவானவர்கள். எனது குடும்பம் முழுவதற்கும் சக்தி மருத்துவமனையை பரிந்துரைத்துள்ளேன்.”',
          author: 'திரு. அருண் குமார்',
          tagline: 'பல் சுத்தம் & வெண்மையாக்குதல்',
        },
        {
          id: '3',
          quote: '“அவர்களின் கவனிப்பும் நுணுக்கமும் அற்புதமானது. என் மகளுக்கு கிளிப் போட வேண்டியிருந்தது, ஆலோசனை முதல் தொடர் பரிசோதனைகள் வரை மிக அமைதியாக அமைந்தது. மிக்க நன்றி.”',
          author: 'திருமதி. ரேவதி எஸ்.',
          tagline: 'குழந்தைகள் சிகிச்சை பெற்ற பெற்றோர்',
        },
      ],
    },
    submitTestimonial: {
      eyebrow: 'நோயாளி கருத்து',
      title: 'உங்கள் சிகிச்சை அனுபவத்தை பகிருங்கள்',
      subtext: 'சக்தி பல் மருத்துவமனையில் நீங்கள் பெற்ற சிகிச்சை அனுபவத்தை எங்களுடன் பகிர்ந்து கொள்ளுங்கள்!',
      nameLabel: 'உங்கள் பெயர்',
      namePlaceholder: 'உ.ம். மீனாட்சி சுந்தரம்',
      ratingLabel: 'உங்கள் மதிப்பீடு',
      ratingDesc: ['மோசம்', 'சுமாரானது', 'நல்லது', 'மிக நன்று', 'சிறப்பான 5-நட்சத்திர சிகிச்சை'],
      commentLabel: 'உங்கள் கருத்து / அனுபவம்',
      commentPlaceholder: 'உங்கள் பல் சிகிச்சை முறை, மருத்துவர் அணுகுமுறை, வலி நிவாரணம் மற்றும் ஆறுதல் பற்றி பகிருங்கள்...',
      treatmentLabel: 'பெற்ற சிகிச்சை (விருப்பத்தேர்வு)',
      treatmentPlaceholder: 'உ.ம். ரூட் கெனால், பல் சுத்தம், கிளிப் சிகிச்சை',
      submitBtn: 'கருத்தை சமர்ப்பிக்கவும்',
      successTitle: 'உங்கள் கருத்துக்கு மிக்க நன்றி!',
      successSub: 'உங்கள் அனுபவப் பதிவு வெற்றிகரமாக பெறப்பட்டது. சக்தி பல் மருத்துவமனை மீதான உங்கள் நம்பிக்கைக்கு நன்றி.',
      submitAnother: 'மற்றொரு கருத்தை பதிவு செய்ய',
      validationName: 'தயவுசெய்து உங்கள் பெயரை உள்ளிடவும்.',
      validationComment: 'தயவுசெய்து உங்கள் சிகிச்சை அனுபவத்தை சுருக்கமாக பகிரவும்.',
    },
    amenities: {
      eyebrow: 'நோயாளி வசதியே முதன்மை',
      title: 'மருத்துவமனை வசதிகள்',
      subtext: 'கர்ப்பிணித் தாய்மார்கள், சிறு குழந்தைகள், மற்றும் முதியவர்கள் சிரமமின்றி வரக்கூடிய வகையில் வடிவமைக்கப்பட்டுள்ளது.',
      items: [
        {
          id: 'central-location',
          title: 'மையமான சுலப இடம்',
          description: 'அந்திவாடி, SBM லேஅவுட்டில் முக்கிய சாலை இணைப்புடன் எளிதாக அடையலாம்.',
        },
        {
          id: 'parking',
          title: 'எளிதான பார்க்கிங் வசதி',
          description: 'இருசக்கர மற்றும் நான்கு சக்கர வாகனங்களுக்கான தாராளமான பார்க்கிங்.',
        },
        {
          id: 'doctors-daily',
          title: 'தினமும் மருத்துவர்கள் (காலை 9 - இரவு 9)',
          description: 'பணிக்குச் செல்வோர் மாலையிலும் வரக்கூடிய வகையில் விரிவான நேரம்.',
        },
        {
          id: 'pickup-drop',
          title: 'பிக்-அப் & டிராப் உதவி',
          description: 'முதியவர்கள் மற்றும் அவசரத் தேவைக்கு முன்கூட்டியே கோரினால் பயண உதவி.',
        },
        {
          id: 'wheelchair',
          title: 'சக்கர நாற்காலி (Wheelchair) வசதி',
          description: 'முதியவர்கள் எளிதாக வர சாய்வு தளம் மற்றும் அகலமான கதவுகள்.',
        },
      ],
    },
    faqTeaser: {
      title: 'சிகிச்சை அல்லது பல் வலி குறித்த சந்தேகங்கள் உள்ளதா?',
      subtext: 'பல் கிளிப், ரூட் கெனால், பால் பற்கள் மற்றும் இம்ப்ளான்ட் பற்றிய 14 முக்கிய பதில்களை எங்கள் பக்கத்தில் படியுங்கள்.',
      browseFaqs: '14 கேள்விகளைப் பார்க்க',
      fixAppointment: 'முன்பதிவு செய்ய',
    },
    about: {
      eyebrow: 'ஓசூரில் நவீன பல் மருத்துவத்தில் முன்னணி',
      heading: 'டாக்டர் அனுப்பிரியா பற்றி அறிய',
      subheading: 'உங்கள் புன்னகைக்கான நம்பிக்கையான மருத்துவர்',
      founderRole: 'நிறுவனர் & தலைமை பல் மருத்துவர்',
      founderQual: 'BDS • 20+ ஆண்டுகள் மருத்துவ அனுபவம்',
      consultFounder: 'டாக்டர் அனுப்பிரியாவிடம் ஆலோசனை',
      milestones: {
        graduated: '2000-ல் பட்டம் பெற்றார் (20+ ஆண்டுகள் அனுபவம்)',
        mathura: 'மதுரா கிளினிக்கில் 6 ஆண்டுகள் முக்கியப் பணி',
        hospital: 'சந்தாரா மருத்துவமனை PHC-ல் 10+ ஆண்டுகள் ஆலோசகர்',
        founded: 'சக்தி பல் மருத்துவமனை தொடக்கம் (2004)',
      },
      bioP1: '20 ஆண்டுகளுக்கும் மேலான மருத்துவ அனுபவத்துடன், டாக்டர் அனுப்பிரியா அவர்கள் ஓசூரில் நவீன பல் மருத்துவத்தின் முன்னோடியாகத் திகழ்கிறார். 2000 ஆம் ஆண்டு பட்டம் பெற்ற பிறகு தனது மருத்துவப் பயணத்தைத் தொடங்கினார். மதுரா கிளினிக்கில் 6 ஆண்டுகள் பணியாற்றி தனது மருத்துவத் திறனை மெருகேற்றி நோயாளிகள் நலனில் அக்கறை செலுத்தினார்.',
      bioP2: '2004 ஆம் ஆண்டில், அனைவருக்கும் உயர்தர பல் சிகிச்சை கிடைக்க வேண்டும் என்ற தெளிவான நோக்கத்துடன் ஓசூரில் சக்தி பல் மருத்துவமனையைத் தொடங்கினார். மேலும் சந்தாரா மருத்துவமனையின் ஆரம்ப சுகாதார நிலையத்தில் பத்தாண்டுகளுக்கும் மேலாக கௌரவப் பல் மருத்துவ ஆலோசகராக மக்கள் சேவை ஆற்றி வருகிறார்.',
      bioP3: 'சக்தி பல் மருத்துவமனையில், ஆரோக்கியமான புன்னகையே தன்னம்பிக்கை மற்றும் மகிழ்ச்சியின் திறவுகோல் என்று நாங்கள் நம்புகிறோம். நவீன தொழில்நுட்பமும், அமைதியான நோயாளி நட்பு சூழலும் இங்கு ஒன்றிணைகிறது. வழக்கமான பரிசோதனைகள் முதல் சிறப்பு சிகிச்சைகள் வரை தனிப்பயனாக்கப்பட்ட சேவையை வழங்குகிறோம்.',
      bioHighlight: 'தடுப்பு சிகிச்சை, அழகு புன்னகை சிகிச்சை அல்லது செயற்கை பற்கள் என எதுவாக இருந்தாலும், டாக்டர் அனுப்பிரியா மற்றும் அவரது மருத்துவக் குழுவினர் அர்ப்பணிப்புடன் செயல்படுகிறார்கள். ஏனெனில் இங்கே உங்கள் புன்னகை வெறும் சிகிச்சை மட்டுமல்ல — கொண்டாடப்படுகிறது.',
      missionTitle: 'எங்கள் நோக்கம் (Mission)',
      missionTag: 'நோக்கமும் அர்ப்பணிப்பும்',
      missionText: 'அன்பான, தனிப்பயனாக்கப்பட்ட மற்றும் அதிநவீன பல் மருத்துவ சேவைகளை வழங்குவதன் மூலம் வாய்வழி சுகாதாரத்தை மறுவரையறை செய்வதே சக்தி பல் மருத்துவமனையின் நோக்கமாகும். நோயாளிகள் தங்கள் பல் ஆரோக்கியத்தில் நம்பிக்கையுடன் ஈடுபடும் சூழலை உருவாக்குகிறோம். நவீன தொழில்நுட்பம் மற்றும் நோயாளி நல அணுகுமுறை மூலம் வாழ்நாள் முழுவதும் ஆரோக்கியமான புன்னகையை உறுதி செய்கிறோம்.',
      visionTitle: 'எங்கள் தொலைநோக்கு (Vision)',
      visionTag: 'எதிர்காலத் திட்டம்',
      visionText: 'நோயாளி கவனிப்பு, புத்தாக்கம் மற்றும் சமுதாய விழிப்புணர்வில் புதிய தரநிலைகளை அமைத்து நவீன பல் மருத்துவத்தில் முன்னணியில் இருப்பதே எங்கள் தொலைநோக்கு பார்வை. நம்பிக்கையை வளர்ப்பது, விழிப்புணர்வு ஏற்படுத்துவது மற்றும் பொதுமக்களுக்கு சேவை செய்வதன் மூலம் சமுதாயத்திற்கு நேர்மறையான பங்களிப்பை வழங்குகிறோம்.',
      teamEyebrow: 'சிறப்பு மருத்துவர்கள் குழு',
      teamTitle: 'எங்கள் மருத்துவர்கள் குழு',
      teamSubtext: 'குழந்தைகள் பல் மருத்துவம், கிளிப் சிகிச்சை, இம்ப்ளான்ட் மற்றும் லேசர் அறுவை சிகிச்சை என அனைத்து துறைகளிலும் தேர்ந்த 9 மருத்துவர்கள் அடங்கிய குழு.',
      bookWithDoctor: 'மருத்துவரிடம் பதிவு செய்ய',
      comfortHeading: 'பெண்கள், குழந்தைகள் & முதியோர் வசதிக்கான ஏற்பாடுகள்',
      comfortSubtext: 'சக்கர நாற்காலி அணுகல், கிருமி நீக்கம் செய்யப்பட்ட நவீன கருவிகள், குழந்தைகளுக்கு பிடித்த அமைதியான சூழல் ஆகியவை எங்கள் மருத்துவமனையில் உறுதி செய்யப்பட்டுள்ளன.',
      comfortButton: 'மருத்துவர் குழுவிடம் முன்பதிவு செய்ய',
    },
    treatmentsPage: {
      eyebrow: 'ஓசூரில் அதிநவீன பல் சிகிச்சைகள்',
      heading: 'எங்கள் பல் சிகிச்சைகள்',
      subtext: 'பல் சுத்தம் மற்றும் வலியற்ற பல் எடுத்தல் முதல் லேசர் அறுவை சிகிச்சை, குழந்தைகள் பல் மருத்துவம் மற்றும் அலைனர்கள் வரை.',
      searchPlaceholder: 'சிகிச்சையைத் தேடுங்கள் (எ.கா: கிளிப், இம்ப்ளான்ட், சுத்தம்)...',
      allCategory: 'அனைத்து சிகிச்சைகள் (15)',
      noResults: 'தேடலுக்குரிய சிகிச்சைகள் எதுவும் கிடைக்கவில்லை.',
      resetFilters: 'மீட்டமைக்க',
      readDetails: 'முழு விவரம்',
      fixAppointment: 'முன்பதிவு செய்ய',
      helpHeading: 'சரியான சிகிச்சையைத் தேர்வு செய்வதில் வழிகாட்டல் தேவையா?',
      helpSubtext: 'ஒரு ஆரம்ப பல் பரிசோதனையை பதிவு செய்யுங்கள். டாக்டர் அனுப்பிரியா மற்றும் சிறப்பு மருத்துவர்கள் உங்கள் பற்களை பரிசோதித்து தெளிவான வழிகாட்டுதலை வழங்குவார்கள்.',
      bookConsultation: 'ஆரம்ப பரிசோதனை முன்பதிவு',
    },
    faqsPage: {
      eyebrow: 'நோயாளிகளுக்கான வழிகாட்டல்',
      heading: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
      subtext: 'பல் சுத்தம் செய்வதால் எனாமல் தேயுமா, ரூட் கெனாலுக்கு கேப் தேவையா, பால் பற்களுக்கு சிகிச்சை தேவையா போன்ற 14 முக்கிய சந்தேகங்களுக்கான மருத்துவ பதில்கள்.',
      searchPlaceholder: 'வார்த்தை மூலம் தேடுங்கள் (எ.கா: வலி, கிளிப், கேப்)...',
      expandAll: 'அனைத்தையும் விரிக்க',
      collapseAll: 'அனைத்தையும் சுருக்க',
      noResults: 'கேள்விகள் எதுவும் கிடைக்கவில்லை.',
      viewAll: '14 கேள்விகளையும் பார்க்க',
      stillHaveQuestions: 'வேறு ஏதேனும் சந்தேகங்கள் உள்ளதா?',
      stillHaveQuestionsSub: 'ஓசூரில் உள்ள எங்கள் மருத்துவக் குழுவினர் தொலைபேசி அல்லது நேரில் உங்களுக்கு உதவ தயாராக உள்ளனர்.',
      callUs: 'அழைக்க',
      contactClinic: 'தொடர்பு கொள்ள',
    },
    contactPage: {
      eyebrow: 'நோயாளிகள் உதவி & விசாரணைகள்',
      heading: 'சக்தி பல் மருத்துவமனை தொடர்பு',
      subtext: 'நாங்கள் அந்திவாடி, ஓசூரில் அமைந்துள்ளோம். முன்பதிவு செய்ய அல்லது சந்தேகங்கள் கேட்க தொடர்பு கொள்ளுங்கள்.',
      formEyebrow: 'நேரடி தகவல்',
      formTitle: 'உங்கள் தகவல்களை பகிருங்கள்',
      formSubtext: 'உங்கள் செய்தியை அனுப்புங்கள்; எங்கள் குழுவினர் விரைவில் உங்களைத் தொடர்பு கொள்வார்கள்.',
      nameLabel: 'பெயர்',
      namePlaceholder: 'உங்கள் முழு பெயரை உள்ளிடவும்',
      emailLabel: 'மின்னஞ்சல்',
      emailPlaceholder: 'yourname@domain.com',
      phoneLabel: 'தொலைபேசி எண்',
      phonePlaceholder: 'எ.கா: 9862890897',
      messageLabel: 'உங்கள் செய்தி',
      messageOptional: '(விருப்பத்தேர்வு)',
      messagePlaceholder: 'உங்கள் பல் பிரச்சனை, கேட்க விரும்பும் கேள்விகள்...',
      submitButton: 'சமர்ப்பிக்க',
      thankYouTitle: 'மிக்க நன்றி!',
      thankYouSub: 'உங்கள் செய்தி பெறப்பட்டது. எங்கள் மருத்துவக் குழுவினர் விரைவில் உங்களைத் தொடர்பு கொள்வார்கள்.',
      sendAnother: 'மறு செய்தி அனுப்ப',
      reachUsEyebrow: 'முகவரி & விபரம்',
      reachUsTitle: 'எங்களை தொடர்பு கொள்ள',
      addressLabel: 'மருத்துவமனை முகவரி',
      getDirections: 'கூகிள் மேப்பில் வழியைக் காண்க',
      emailContactLabel: 'மின்னஞ்சல் முகவரி',
      phoneLabelSection: 'தொலைபேசி எண்கள்',
      timingsLabel: 'பார்வை நேரம்',
      timingsValue: 'ஞாயிறு முதல் சனிக்கிழமை: காலை 9 மணி முதல் இரவு 7 மணி வரை',
      doctorAvailabilityNote: '(அவசர சிகிச்சைக்கு மருத்துவர்கள் காலை 9 - இரவு 9 வரை உள்ளனர்)',
      nearbyCardTitle: 'ஓசூர் அல்லது சுற்றுப்புறத்தில் இருந்து வருகிறீர்களா?',
      nearbyCardSub: 'அந்திவாடி சர்க்கிள் அருகில் வசதியான பார்க்கிங் இடத்துடன் அமைந்துள்ளது.',
      mapsButton: 'வரைபடம்',
    },
    footer: {
      tagline: 'பெண்கள், குழந்தைகள் மற்றும் குடும்பங்களுக்கான சிறப்பு பல் சிகிச்சை மையம். டாக்டர் அனுப்பிரியா தலைமையில் 20+ ஆண்டுகள் மருத்துவ சேவை.',
      quickLinks: 'விரைவு இணைப்புகள்',
      keyTreatments: 'முக்கிய சிகிச்சைகள்',
      addressContact: 'முகவரி & தொடர்பு',
      allRightsReserved: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. ஓசூர், தமிழ்நாடு.',
      craftedWithLove: 'ஆரோக்கியமான புன்னகைக்காக உருவாக்கப்பட்டது',
      privacyPolicy: 'தனியுரிமைக் கொள்கை (Privacy Policy)',
    },
    appointmentModal: {
      title: 'முன்பதிவு செய்ய',
      subtext: 'பெண்கள், குழந்தைகள் & குடும்பங்களுக்கான கனிவான சிகிச்சை. நாங்கள் உதவ எப்போதும் தயார்.',
      patientCategory: 'நோயாளி பிரிவு',
      patientTypes: {
        Woman: 'பெண்',
        Child: 'குழந்தை',
        Adult: 'பெரியவர்',
        Senior: 'முதியவர்',
      },
      patientName: 'நோயாளி பெயர்',
      phoneNumber: 'தொலைபேசி எண்',
      treatmentService: 'சிகிச்சை / சேவை',
      preferredDoctor: 'விருப்பமான மருத்துவர்',
      preferredDate: 'விருப்பமான தேதி',
      preferredTimeSlot: 'விருப்பமான நேரம்',
      notes: 'சுருக்கமான குறிப்பு அல்லது அறிகுறிகள் (விருப்பத்தேர்வு)',
      notesPlaceholder: 'எ.கா: தண்ணீர் குடிக்கும் போது கூச்சம், குழந்தைக்கு கிளிப் ஆலோசனை...',
      submit: 'முன்பதிவை உறுதி செய்ய',
      noPrepayment: 'முன்பணம் தேவையில்லை',
      orCall: 'அல்லது அழைக்கவும்:',
      requestedTitle: 'முன்பதிவு கோரிக்கை பெறப்பட்டது!',
      referenceCode: 'குறிப்பு எண் (Reference Code)',
      whatsappConfirm: 'வாட்ஸ்அப்பில் விபரம் அனுப்ப',
      done: 'முடிந்தது',
    },
  },
};
