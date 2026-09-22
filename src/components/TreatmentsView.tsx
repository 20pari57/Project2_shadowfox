import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  Smile, 
  Sun, 
  Zap, 
  HeartPulse, 
  AlertCircle, 
  Layers, 
  EyeOff, 
  Grid, 
  Baby, 
  Stethoscope, 
  Anchor
} from 'lucide-react';
import { getTreatments } from '../data/clinicData';
import { TRANSLATIONS } from '../data/translations';
import { Language, Treatment } from '../types';
import { ClinicLogo } from './ClinicLogo';
import { TreatmentCardSkeleton } from './SkeletonCards';

interface TreatmentsViewProps {
  onOpenAppointment: (serviceName?: string) => void;
  onOpenDetailModal: (treatment: Treatment) => void;
  lang: Language;
}

export const TreatmentsView: React.FC<TreatmentsViewProps> = ({
  onOpenAppointment,
  onOpenDetailModal,
  lang,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const t = TRANSLATIONS[lang].treatmentsPage;
  const treatmentsList = getTreatments(lang);

  const categories = [
    { key: 'All', label: lang === 'ta' ? 'அனைத்தும் (15)' : 'All (15)' },
    { key: 'Preventive', label: lang === 'ta' ? 'தடுப்பு சிகிச்சை' : 'Preventive' },
    { key: 'Restorative', label: lang === 'ta' ? 'மறுசீரமைப்பு' : 'Restorative' },
    { key: 'Orthodontics', label: lang === 'ta' ? 'பல் சீரமைப்பு' : 'Orthodontics' },
    { key: 'Cosmetic', label: lang === 'ta' ? 'அழகு புன்னகை' : 'Cosmetic' },
    { key: 'Pediatric', label: lang === 'ta' ? 'குழந்தைகள்' : 'Pediatric' },
    { key: 'Surgical', label: lang === 'ta' ? 'அறுவை சிகிச்சை' : 'Surgical' },
  ];

  const filteredTreatments = treatmentsList.filter((treatment) => {
    const matchesCategory =
      selectedCategory === 'All' || treatment.category === selectedCategory;
    const matchesSearch =
      treatment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      treatment.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      treatment.fullDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getTreatmentIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 text-sky-600";
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-cyan-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-teal-600" />;
      case 'Activity': return <Activity className="w-6 h-6 text-sky-600" />;
      case 'Smile': return <Smile className="w-6 h-6 text-blue-600" />;
      case 'Anchor': return <Anchor className="w-6 h-6 text-blue-700" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-500" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-rose-500" />;
      case 'AlertCircle': return <AlertCircle className="w-6 h-6 text-orange-500" />;
      case 'Layers': return <Layers className="w-6 h-6 text-indigo-600" />;
      case 'Sun': return <Sun className="w-6 h-6 text-amber-500" />;
      case 'Sparkle': return <Sparkles className="w-6 h-6 text-cyan-500" />;
      case 'Baby': return <Baby className="w-6 h-6 text-sky-500" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-teal-600" />;
      case 'Grid': return <Grid className="w-6 h-6 text-blue-600" />;
      case 'EyeOff': return <EyeOff className="w-6 h-6 text-sky-700" />;
      default: return <Sparkles className={iconClass} />;
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16 py-8 sm:py-12">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-2xl bg-white border border-sky-200/90 shadow-md flex items-center justify-center p-2">
            <ClinicLogo size="lg" id="treatments-header-logo" />
          </div>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-bold mb-3 border border-sky-200/70">
          <ClinicLogo size="xs" id="treatments-pill-logo" />
          <span>{t.eyebrow}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          {t.heading}
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
          {t.subtext}
        </p>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-sky-100 shadow-xs flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              id="treatments-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  id={`category-filter-${cat.key.toLowerCase()}`}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'bg-slate-50 text-slate-600 hover:bg-sky-50 hover:text-sky-700'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Treatments Grid or Loading Skeletons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="treatments-view-skeletons">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <TreatmentCardSkeleton key={idx} id={`treatment-view-skeleton-${idx}`} />
            ))}
          </div>
        ) : filteredTreatments.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-200">
            <p className="text-base text-slate-500">
              {t.noResults}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              id="reset-treatment-filters-btn"
              className="mt-3 text-sm font-semibold text-sky-700 hover:underline cursor-pointer"
            >
              {t.resetFilters}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTreatments.map((treatment) => (
              <div
                key={treatment.id}
                id={`treatment-card-${treatment.id}`}
                className="p-6 rounded-3xl bg-white border border-sky-100 shadow-xs hover:shadow-md hover:border-sky-200 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 group-hover:bg-sky-100/70 flex items-center justify-center transition-colors">
                      {getTreatmentIcon(treatment.iconName)}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-100">
                        {treatment.category}
                      </span>
                      {treatment.badge && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                          {treatment.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
                    {treatment.title}
                  </h3>
                  
                  <p className="text-xs text-slate-500 font-medium mb-3 italic">
                    {treatment.shortDesc}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-4">
                    {treatment.fullDesc}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onOpenDetailModal(treatment)}
                    id={`treatment-read-more-${treatment.id}`}
                    className="text-xs font-semibold text-sky-700 hover:text-blue-900 flex items-center gap-1 cursor-pointer"
                  >
                    <span>{t.readDetails}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenAppointment(treatment.title)}
                    id={`treatment-book-btn-${treatment.id}`}
                    className="py-2 px-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold text-xs shadow-xs transition-all cursor-pointer flex items-center gap-1"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{t.fixAppointment}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Reassurance Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-sky-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200/80 flex items-center justify-center p-1.5 shrink-0 shadow-xs">
              <ClinicLogo size="md" id="treatments-reassurance-logo" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900">
                {t.helpHeading}
              </h3>
              <p className="text-sm text-slate-600 max-w-xl">
                {t.helpSubtext}
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenAppointment(lang === 'ta' ? 'பொது ஆலோசனை & பரிசோதனை' : 'General Consultation & Checkup')}
            id="treatments-book-consult-btn"
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-sm transition-colors cursor-pointer"
          >
            {t.bookConsultation}
          </button>
        </div>
      </section>
    </div>
  );
};
