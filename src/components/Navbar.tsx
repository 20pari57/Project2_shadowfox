import React, { useState } from 'react';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  Sparkles, 
  Calendar, 
  ChevronRight,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { TRANSLATIONS } from '../data/translations';
import { Language, PageTab } from '../types';
import { ClinicLogo } from './ClinicLogo';

interface NavbarProps {
  currentTab: PageTab;
  onSelectTab: (tab: PageTab) => void;
  onOpenAppointment: (service?: string) => void;
  lang: Language;
  onToggleLanguage: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenAppointment,
  lang,
  onToggleLanguage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang].nav;

  const navItems: { id: PageTab; label: string }[] = [
    { id: 'home', label: t.home },
    { id: 'about', label: t.about },
    { id: 'treatments', label: t.treatments },
    { id: 'faqs', label: t.faqs },
    { id: 'contact', label: t.contact },
  ];

  const handleNavClick = (tab: PageTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-sky-100">
      {/* Top Notification / Trust Bar - Light Blue Medical Slate */}
      <div className="bg-gradient-to-r from-sky-950 via-blue-900 to-sky-900 text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-sky-100 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-sky-300" />
              {t.specializedCare}
            </span>
            <span className="hidden md:inline-block text-sky-400/60">|</span>
            <span className="hidden md:inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-sky-300" />
              {t.doctorsDaily}
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            <a 
              href={`tel:${CLINIC_INFO.phoneNumbers[0]}`}
              id="top-emergency-call-btn"
              className="inline-flex items-center gap-1.5 text-sky-200 hover:text-white transition-colors font-medium text-xs sm:text-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{t.callUs}: {CLINIC_INFO.phoneNumbers[0]}</span>
            </a>
            <span className="hidden sm:inline-block text-sky-400/60">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-sky-200 text-xs">
              <MapPin className="w-3.5 h-3.5 text-sky-300" />
              {t.locationText}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Clinic Branding */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
            id="nav-brand-logo"
          >
            <div className="w-12 h-12 rounded-2xl bg-white border border-sky-200/80 shadow-xs flex items-center justify-center p-1 group-hover:scale-105 group-hover:shadow-md transition-all duration-200">
              <ClinicLogo size="md" id="nav-header-logo" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-sky-700 transition-colors">
                  {lang === 'ta' ? 'சக்தி' : 'Sakthi'}
                </span>
                <span className="text-xl sm:text-2xl font-semibold tracking-tight text-sky-600">
                  {lang === 'ta' ? 'பல் மையம்' : 'Dental'}
                </span>
              </div>
              <p className="text-[11px] font-bold tracking-wide text-sky-700 uppercase flex items-center gap-1">
                <span>DENTAL CARE</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500 font-medium">{lang === 'ta' ? 'ஓசூர்' : 'Hosur'}</span>
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'text-sky-700 bg-sky-50 font-bold border border-sky-100'
                      : 'text-slate-600 hover:text-sky-700 hover:bg-sky-50/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTAs & Language Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Toggle */}
            <div 
              id="language-toggle-desktop"
              className="inline-flex items-center bg-sky-50/80 border border-sky-200/80 rounded-xl p-1 gap-1 text-xs font-semibold shadow-2xs"
            >
              <Globe className="w-3.5 h-3.5 text-sky-600 ml-1.5 mr-0.5" />
              <button
                type="button"
                id="lang-toggle-en"
                onClick={() => onToggleLanguage('en')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-white text-sky-800 font-bold shadow-xs'
                    : 'text-slate-600 hover:text-sky-700'
                }`}
              >
                English
              </button>
              <button
                type="button"
                id="lang-toggle-ta"
                onClick={() => onToggleLanguage('ta')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  lang === 'ta'
                    ? 'bg-sky-600 text-white font-bold shadow-xs'
                    : 'text-slate-600 hover:text-sky-700'
                }`}
              >
                தமிழ்
              </button>
            </div>

            {/* Fix an Appointment Button */}
            <button
              onClick={() => onOpenAppointment()}
              id="header-fix-appointment-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-semibold shadow-md shadow-sky-500/20 hover:shadow-lg hover:shadow-sky-500/30 hover:from-sky-600 hover:to-blue-700 active:scale-98 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.fixAppointment}</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Quick Mobile Language Toggle */}
            <button
              type="button"
              id="lang-toggle-mobile-badge"
              onClick={() => onToggleLanguage(lang === 'en' ? 'ta' : 'en')}
              className="px-2.5 py-1.5 rounded-lg border border-sky-200 bg-sky-50 text-sky-800 text-xs font-bold flex items-center gap-1 shadow-2xs cursor-pointer"
              title="Switch Language"
            >
              <Globe className="w-3 h-3 text-sky-600" />
              <span>{lang === 'en' ? 'தமிழ்' : 'EN'}</span>
            </button>

            <button
              onClick={() => onOpenAppointment()}
              id="mobile-header-appointment-btn"
              className="px-3 py-1.5 rounded-lg bg-sky-600 text-white text-xs font-semibold sm:hidden"
            >
              {lang === 'ta' ? 'பதிவு' : 'Book'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-nav-toggle-btn"
              className="p-2.5 rounded-xl text-slate-700 hover:bg-sky-50 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-sky-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
          {/* Mobile Language Switcher row */}
          <div className="flex items-center justify-between px-2 py-1.5 bg-sky-50/70 rounded-xl border border-sky-100">
            <span className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-sky-600" />
              <span>Language / மொழி:</span>
            </span>
            <div className="flex items-center gap-1 text-xs">
              <button
                onClick={() => onToggleLanguage('en')}
                className={`px-3 py-1 rounded-lg font-bold transition-colors ${
                  lang === 'en' ? 'bg-sky-600 text-white' : 'text-slate-700 bg-white border border-sky-200'
                }`}
              >
                English
              </button>
              <button
                onClick={() => onToggleLanguage('ta')}
                className={`px-3 py-1 rounded-lg font-bold transition-colors ${
                  lang === 'ta' ? 'bg-sky-600 text-white' : 'text-slate-700 bg-white border border-sky-200'
                }`}
              >
                தமிழ்
              </button>
            </div>
          </div>

          <div className="grid gap-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-semibold text-left transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-sky-50 text-sky-700 border border-sky-100 font-bold'
                      : 'text-slate-700 hover:bg-sky-50/50'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-sky-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              id="mobile-drawer-appointment-btn"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-sm shadow-md cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.fixAppointment}</span>
            </button>

            <a
              href={`tel:${CLINIC_INFO.phoneNumbers[0]}`}
              id="mobile-drawer-call-btn"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-sky-200 text-slate-700 font-semibold text-sm hover:bg-sky-50"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>{t.callUs} ({CLINIC_INFO.phoneNumbers[0]})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
