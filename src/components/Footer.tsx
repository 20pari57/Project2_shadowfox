import React from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  ShieldCheck, 
  Instagram, 
  Facebook, 
  Youtube, 
  Heart
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { TRANSLATIONS } from '../data/translations';
import { Language, PageTab } from '../types';
import { ClinicLogo } from './ClinicLogo';

interface FooterProps {
  onSelectTab: (tab: PageTab) => void;
  onOpenPrivacyPolicy: () => void;
  onOpenAppointment: (service?: string) => void;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onOpenPrivacyPolicy,
  onOpenAppointment,
  lang,
}) => {
  const t = TRANSLATIONS[lang];
  const tFooter = t.footer;

  const quickLinks: { id: PageTab; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'treatments', label: t.nav.treatments },
    { id: 'faqs', label: t.nav.faqs },
    { id: 'contact', label: t.nav.contact },
  ];

  const keyTreatments = lang === 'ta' ? [
    'பல் சுத்தம் செய்தல் & ஸ்கேலிங்',
    'பல் அடைத்தல் (Tooth Filling)',
    'பல் அகற்றுதல் (Tooth Extraction)',
    'முழு செயற்கை பல் செட்',
    'பல் இம்ப்ளான்ட் (Dental Implants)',
    'பல் வரிசை சீரமைப்பு கிளிப்',
    'கண்ணுக்கு தெரியாத அலைனர்கள்',
    'குழந்தைகளுக்கான பல் மருத்துவம்',
    'லேசர் பல் மருத்துவம்',
    'பல் வெண்மையாக்குதல் (Bleaching)',
  ] : [
    'Teeth Cleaning & Scaling',
    'Tooth Filling',
    'Tooth Extraction',
    'Artificial Complete Denture',
    'Dental Implants',
    'Orthodontic Braces',
    'Clear Aligners',
    'Pediatric Dentistry',
    'Laser Dentistry',
    'Teeth Whitening (Bleaching)',
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-sky-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Clinic Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white border border-sky-400/40 shadow-md flex items-center justify-center p-1">
                <ClinicLogo size="md" id="footer-logo" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">
                  {lang === 'ta' ? 'சக்தி' : 'Sakthi'}{' '}
                  <span className="text-sky-400">{lang === 'ta' ? 'பல் மையம்' : 'Dental'}</span>
                </span>
                <p className="text-[11px] font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1">
                  <span>DENTAL CARE</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-400 font-normal">{lang === 'ta' ? 'ஓசூர் • தமிழ்நாடு' : 'Hosur • Tamil Nadu'}</span>
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {tFooter.tagline}
            </p>

            {/* Social Media Icons */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                {lang === 'ta' ? 'இணைந்திருங்கள்' : 'Connect With Us'}
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="social-instagram"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-sky-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="social-facebook"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="social-youtube"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-200">
              {tFooter.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onSelectTab(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    id={`footer-nav-${link.id}`}
                    className="hover:text-sky-400 transition-colors text-slate-400 hover:underline cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenPrivacyPolicy}
                  id="footer-nav-privacy-policy"
                  className="hover:text-sky-400 transition-colors text-slate-400 hover:underline cursor-pointer"
                >
                  {tFooter.privacyPolicy}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Treatments (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-200">
              {tFooter.keyTreatments}
            </h3>
            <ul className="grid grid-cols-1 gap-1.5 text-xs text-slate-400">
              {keyTreatments.map((treatment, i) => (
                <li key={i}>
                  <button
                    onClick={() => onOpenAppointment(treatment)}
                    id={`footer-treatment-${i}`}
                    className="hover:text-sky-300 transition-colors text-left truncate max-w-full cursor-pointer hover:underline"
                  >
                    • {treatment}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Address Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-200">
              {tFooter.addressContact}
            </h3>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {CLINIC_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  id="footer-email-link"
                  className="hover:text-white transition-colors"
                >
                  {CLINIC_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a
                    href={`tel:${CLINIC_INFO.phoneNumbers[0]}`}
                    id="footer-phone-1"
                    className="hover:text-white font-semibold transition-colors"
                  >
                    {CLINIC_INFO.phoneNumbers[0]}
                  </a>
                  <a
                    href={`tel:${CLINIC_INFO.phoneNumbers[1]}`}
                    id="footer-phone-2"
                    className="hover:text-white transition-colors"
                  >
                    {CLINIC_INFO.phoneNumbers[1]}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-200">
                    {t.contactPage.timingsValue}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {t.contactPage.doctorAvailabilityNote}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Sakthi Dental Clinic. {tFooter.allRightsReserved}
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPrivacyPolicy}
              id="footer-bottom-privacy-btn"
              className="hover:text-slate-200 hover:underline cursor-pointer"
            >
              {tFooter.privacyPolicy}
            </button>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 text-sky-400 fill-current" />
              <span>{tFooter.craftedWithLove}</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
