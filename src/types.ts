export type PageTab = 'home' | 'about' | 'treatments' | 'faqs' | 'contact';
export type Language = 'en' | 'ta';

export interface Doctor {
  id: string;
  name: string;
  role: string;
  qualification?: string;
  experience?: string;
  description: string;
  specialties: string[];
}

export interface Treatment {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'Preventive' | 'Restorative' | 'Orthodontics' | 'Cosmetic' | 'Surgical' | 'Pediatric';
  badge?: string;
  iconName: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  tagline: string;
  rating: number;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface AppointmentFormData {
  name: string;
  phone: string;
  email?: string;
  patientType: 'Adult' | 'Child' | 'Woman' | 'Senior' | 'Other';
  service: string;
  preferredDoctor?: string;
  preferredDate?: string;
  preferredTimeSlot?: 'Morning (9 AM - 1 PM)' | 'Afternoon (1 PM - 5 PM)' | 'Evening (5 PM - 7 PM)';
  notes?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
