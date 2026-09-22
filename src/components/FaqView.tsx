import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  HelpCircle, 
  PhoneCall,
  Calendar,
  Stethoscope,
  X,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getFaqs, CLINIC_INFO } from '../data/clinicData';
import { TRANSLATIONS } from '../data/translations';
import { Language, PageTab } from '../types';
import { ClinicLogo } from './ClinicLogo';

interface FaqViewProps {
  onOpenAppointment: () => void;
  onSelectTab: (tab: PageTab) => void;
  lang: Language;
}

export const FaqView: React.FC<FaqViewProps> = ({
  onOpenAppointment,
  onSelectTab,
  lang,
}) => {
  // Start with the first two FAQs open for gentle discovery
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-2': false,
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const t = TRANSLATIONS[lang].faqsPage;
  const faqsList = getFaqs(lang);

  const categories = [
    { key: 'All', label: lang === 'ta' ? 'அனைத்தும்' : 'All' },
    { key: 'Pain', label: lang === 'ta' ? 'பல் வலி & அவசரம்' : 'Pain & Emergencies' },
    { key: 'Cleaning', label: lang === 'ta' ? 'சுத்தம் செய்தல்' : 'Cleaning & Scaling' },
    { key: 'Root Canal', label: lang === 'ta' ? 'ரூட் கெனால்' : 'Root Canal Therapy' },
    { key: 'Orthodontics', label: lang === 'ta' ? 'கிளிப் & பிரேஸ்கள்' : 'Orthodontics & Braces' },
    { key: 'Pediatric', label: lang === 'ta' ? 'குழந்தைகள்' : 'Pediatric Care' },
    { key: 'Implants', label: lang === 'ta' ? 'இம்ப்ளான்ட்' : 'Implants' },
  ];

  const getCategoryCount = (catKey: string) => {
    if (catKey === 'All') return faqsList.length;
    return faqsList.filter(f => f.category.toLowerCase().includes(catKey.toLowerCase())).length;
  };

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    filteredFaqs.forEach((f) => {
      all[f.id] = true;
    });
    setOpenIds(all);
  };

  const collapseAll = () => {
    setOpenIds({});
  };

  const filteredFaqs = faqsList.filter((faq) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      faq.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openCount = filteredFaqs.filter(f => !!openIds[f.id]).length;

  return (
    <div className="space-y-12 sm:space-y-16 py-8 sm:py-12">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-2xl bg-white border border-sky-200/90 shadow-md flex items-center justify-center p-2">
            <ClinicLogo size="lg" id="faq-header-logo" />
          </div>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-bold mb-3 border border-sky-200/70">
          <ClinicLogo size="xs" id="faq-pill-logo" />
          <span>{t.eyebrow}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          {t.heading}
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
          {t.subtext}
        </p>
      </section>

      {/* Search & Filter Toolbar */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-sky-100 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-sky-600 absolute left-3.5 top-3.5" />
            <input
              type="text"
              id="faq-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-10 pr-9 py-2.5 text-sm rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 p-0.5 text-slate-400 hover:text-slate-600 cursor-pointer"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Accordion Batch Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto text-xs">
            <span className="text-slate-400 font-medium hidden md:inline">
              {openCount} / {filteredFaqs.length} {lang === 'ta' ? 'திறந்துள்ளது' : 'expanded'}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={expandAll}
                id="faq-expand-all-btn"
                className="px-3.5 py-2 rounded-xl border border-sky-200 bg-sky-50/50 hover:bg-sky-100/80 text-sky-800 font-semibold cursor-pointer transition-colors shadow-2xs"
              >
                {t.expandAll}
              </button>
              <button
                onClick={collapseAll}
                id="faq-collapse-all-btn"
                className="px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold cursor-pointer transition-colors shadow-2xs"
              >
                {t.collapseAll}
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const count = getCategoryCount(cat.key);
            const isSelected = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                id={`faq-cat-${cat.key.toLowerCase()}`}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-sky-600 text-white shadow-xs scale-102'
                    : 'bg-white text-slate-700 border border-slate-200/80 hover:bg-sky-50/80 hover:border-sky-200'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isSelected ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Accordion List Container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-dashed border-slate-200 p-8 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mx-auto mb-3">
              <HelpCircle className="w-6 h-6" />
            </div>
            <p className="text-base font-semibold text-slate-800">
              {t.noResults}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              {lang === 'ta' ? 'மற்றொரு வகையை தேர்ந்தெடுக்கவும் அல்லது தேடலை அழிக்கவும்' : 'Try adjusting your search or selecting another category'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              id="faq-reset-btn"
              className="mt-4 px-4 py-2 rounded-xl bg-sky-50 text-sky-700 border border-sky-200 text-xs font-bold hover:bg-sky-100 transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.viewAll}</span>
            </button>
          </div>
        ) : (
          <div className="space-y-3.5" id="faq-accordion-group">
            {filteredFaqs.map((faq, index) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div
                  key={faq.id}
                  id={`faq-accordion-item-${faq.id}`}
                  className={`rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-2 border-sky-300 shadow-md shadow-sky-500/5'
                      : 'bg-white border border-slate-200/80 hover:border-sky-300/80 hover:shadow-xs'
                  }`}
                >
                  {/* Accordion Trigger Header */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    id={`faq-toggle-btn-${faq.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-inset transition-colors"
                  >
                    <div className="flex items-start gap-3.5 sm:gap-4 flex-1">
                      {/* Numeric Question Index Badge */}
                      <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                        isOpen 
                          ? 'bg-sky-600 text-white shadow-xs' 
                          : 'bg-sky-50 text-sky-700 border border-sky-100'
                      }`}>
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </span>

                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50/90 px-2.5 py-0.5 rounded-full border border-sky-200/60">
                            {faq.category}
                          </span>
                        </div>
                        <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                          {faq.question}
                        </h2>
                      </div>
                    </div>

                    {/* Circular Expanding Chevron Button */}
                    <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 mt-0.5 ${
                      isOpen
                        ? 'bg-sky-600 text-white rotate-180 shadow-xs'
                        : 'bg-sky-50 text-sky-700 hover:bg-sky-100'
                    }`}>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                    </div>
                  </button>

                  {/* Accordion Collapsible Body with Smooth Motion Animation */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key={`content-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div 
                          id={`faq-answer-${faq.id}`}
                          className="px-5 sm:px-6 pb-6 pt-2 border-t border-sky-100/80 bg-gradient-to-b from-sky-50/30 via-sky-50/10 to-white"
                        >
                          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                            {faq.answer}
                          </p>

                          {/* Action note inside answer */}
                          <div className="mt-4 pt-3 border-t border-sky-100/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                            <span className="text-slate-500 flex items-center gap-1.5 font-medium">
                              <Stethoscope className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                              <span>
                                {lang === 'ta' 
                                  ? 'சக்தி பல் மருத்துவமனையில் ஆலோசனை பெறலாம்' 
                                  : 'Expert personalized care available at Sakthi Dental Clinic'}
                              </span>
                            </span>

                            <button
                              onClick={() => onOpenAppointment()}
                              id={`faq-book-btn-${faq.id}`}
                              className="inline-flex items-center gap-1.5 font-bold text-sky-700 hover:text-sky-900 transition-colors cursor-pointer self-start sm:self-auto bg-sky-50 hover:bg-sky-100 px-3 py-1.5 rounded-lg border border-sky-200/80"
                            >
                              <Calendar className="w-3.5 h-3.5" />
                              <span>
                                {lang === 'ta' ? 'பரிசோதனைக்கு பதிவு செய்க' : 'Book a consultation'}
                              </span>
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Still Have Questions CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-sky-900 via-blue-900 to-sky-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 flex items-center justify-center p-1.5 shrink-0 shadow-xs">
              <ClinicLogo size="md" id="faq-still-have-questions-logo" />
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {t.stillHaveQuestions}
              </h3>
              <p className="text-sky-200 text-xs sm:text-sm">
                {t.stillHaveQuestionsSub}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.phoneNumbers[0]}`}
              id="faq-call-clinic-btn"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{t.callUs}</span>
            </a>
            <button
              onClick={() => onSelectTab('contact')}
              id="faq-contact-us-btn"
              className="px-5 py-3 rounded-xl bg-white text-sky-900 font-bold text-xs hover:bg-sky-50 shadow-md transition-all cursor-pointer"
            >
              {t.contactClinic}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
