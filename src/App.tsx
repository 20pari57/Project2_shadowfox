/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { TreatmentsView } from './components/TreatmentsView';
import { FaqView } from './components/FaqView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { TreatmentDetailModal } from './components/TreatmentDetailModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { Language, PageTab, Treatment } from './types';
import { getTreatments, CLINIC_INFO } from './data/clinicData';
import { Calendar, MessageSquare, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<PageTab>('home');
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('sakthi_clinic_lang');
      return (saved === 'ta' || saved === 'en') ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [appointmentService, setAppointmentService] = useState<string>('');
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleToggleLanguage = (newLang: Language) => {
    setLanguage(newLang);
    try {
      localStorage.setItem('sakthi_clinic_lang', newLang);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenAppointment = (service?: string) => {
    setAppointmentService(service || '');
    setAppointmentModalOpen(true);
  };

  const handleSelectTreatmentById = (id: string) => {
    const currentTreatments = getTreatments(language);
    const t = currentTreatments.find((item) => item.id === id);
    if (t) {
      setSelectedTreatment(t);
    } else {
      setCurrentTab('treatments');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 selection:bg-sky-100 selection:text-sky-900">
      {/* Top Navigation with Language Switcher */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAppointment={handleOpenAppointment}
        lang={language}
        onToggleLanguage={handleToggleLanguage}
      />

      {/* Main Dynamic View */}
      <main className="flex-grow">
        {currentTab === 'home' && (
          <HomeView
            onSelectTab={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenAppointment={handleOpenAppointment}
            onSelectTreatment={handleSelectTreatmentById}
            lang={language}
          />
        )}

        {currentTab === 'about' && (
          <AboutView 
            onOpenAppointment={handleOpenAppointment} 
            lang={language}
          />
        )}

        {currentTab === 'treatments' && (
          <TreatmentsView
            onOpenAppointment={handleOpenAppointment}
            onOpenDetailModal={(treatment) => setSelectedTreatment(treatment)}
            lang={language}
          />
        )}

        {currentTab === 'faqs' && (
          <FaqView
            onOpenAppointment={() => handleOpenAppointment()}
            onSelectTab={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            lang={language}
          />
        )}

        {currentTab === 'contact' && (
          <ContactView lang={language} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenPrivacyPolicy={() => setPrivacyModalOpen(true)}
        onOpenAppointment={handleOpenAppointment}
        lang={language}
      />

      {/* Floating Action Buttons for Easy Mobile/Patient Access */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-2.5 items-end">
        {/* Back to top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="p-3 rounded-full bg-white text-slate-700 shadow-lg border border-sky-100 hover:bg-sky-50 transition-all cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5 text-sky-700" />
          </button>
        )}

        {/* Quick WhatsApp appointment link */}
        <a
          href={`https://wa.me/919862890897?text=${encodeURIComponent(
            language === 'ta'
              ? 'வணக்கம் சக்தி பல் மருத்துவமனை ஓசூர், நான் ஆலோசனை முன்பதிவு செய்ய விரும்புகிறேன்.'
              : 'Hello Sakthi Dental Clinic Hosur, I would like to book a consultation.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          aria-label="Chat on WhatsApp"
          className="p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/25 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer"
        >
          <MessageSquare className="w-5 h-5" />
        </a>

        {/* Floating Fix Appointment Pill (Mobile Friendly) */}
        <button
          onClick={() => handleOpenAppointment()}
          id="floating-fix-appointment-btn"
          className="sm:hidden flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-xs shadow-xl shadow-sky-600/30 active:scale-95 transition-all cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>{language === 'ta' ? 'பதிவு செய்க' : 'Fix Appointment'}</span>
        </button>
      </div>

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        defaultService={appointmentService}
        lang={language}
      />

      {/* Treatment Detail Modal */}
      <TreatmentDetailModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
        onBookTreatment={(treatmentName) => handleOpenAppointment(treatmentName)}
        lang={language}
      />

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
        lang={language}
      />
    </div>
  );
}
