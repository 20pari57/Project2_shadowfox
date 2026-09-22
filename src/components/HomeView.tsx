import React, { useState } from 'react';
import { 
  Calendar, 
  PhoneCall, 
  ShieldCheck, 
  Sparkles, 
  HeartHandshake, 
  Award, 
  Layers, 
  Cpu, 
  ArrowRight, 
  Star, 
  MapPin, 
  Car, 
  Clock, 
  Navigation, 
  Accessibility, 
  CheckCircle,
  Activity,
  Smile,
  Sun,
  CheckCircle2,
  Quote,
  Heart
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { TRANSLATIONS } from '../data/translations';
import { Language, PageTab } from '../types';
import { ClinicLogo } from './ClinicLogo';
import { SubmitTestimonial, UserTestimonialItem } from './SubmitTestimonial';
import { TreatmentCardSkeleton, TestimonialCardSkeleton } from './SkeletonCards';

interface HomeViewProps {
  onSelectTab: (tab: PageTab) => void;
  onOpenAppointment: (service?: string) => void;
  onSelectTreatment: (treatmentId: string) => void;
  lang: Language;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectTab,
  onOpenAppointment,
  onSelectTreatment,
  lang,
}) => {
  const t = TRANSLATIONS[lang];

  // Loading states for Treatments and Testimonials (initialized to false so UI is immediately visible)
  const [isLoadingTreatments, setIsLoadingTreatments] = useState(false);
  const [isLoadingTestimonials, setIsLoadingTestimonials] = useState(false);

  // Persistent user-submitted testimonials
  const [userReviews, setUserReviews] = useState<UserTestimonialItem[]>(() => {
    try {
      const saved = localStorage.getItem('sakthi_patient_reviews');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const handleTestimonialSubmitted = (newReview: UserTestimonialItem) => {
    setUserReviews((prev) => {
      const updated = [newReview, ...prev];
      try {
        localStorage.setItem('sakthi_patient_reviews', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  // Map icons for why choose us
  const getFeatureIcon = (index: number) => {
    switch (index) {
      case 0: return <Layers className="w-6 h-6 text-sky-600" />;
      case 1: return <Award className="w-6 h-6 text-blue-600" />;
      case 2: return <HeartHandshake className="w-6 h-6 text-cyan-600" />;
      case 3: return <Cpu className="w-6 h-6 text-indigo-600" />;
      default: return <Sparkles className="w-6 h-6 text-sky-600" />;
    }
  };

  // Map icons for core treatments
  const getTreatmentIcon = (iconName: string) => {
    switch (iconName) {
      case 'tooth-extraction': return <Activity className="w-6 h-6 text-sky-600" />;
      case 'artificial-complete-denture': return <Smile className="w-6 h-6 text-blue-600" />;
      case 'tooth-filling': return <ShieldCheck className="w-6 h-6 text-teal-600" />;
      case 'teeth-cleaning-scaling': return <Sparkles className="w-6 h-6 text-cyan-600" />;
      case 'teeth-whitening-bleaching': return <Sun className="w-6 h-6 text-amber-500" />;
      case 'orthodontic-braces': return <CheckCircle2 className="w-6 h-6 text-blue-600" />;
      default: return <Sparkles className="w-6 h-6 text-sky-600" />;
    }
  };

  // Map icons for amenities
  const getAmenityIcon = (index: number) => {
    switch (index) {
      case 0: return <MapPin className="w-5 h-5 text-sky-600" />;
      case 1: return <Car className="w-5 h-5 text-blue-600" />;
      case 2: return <Clock className="w-5 h-5 text-cyan-600" />;
      case 3: return <Navigation className="w-5 h-5 text-indigo-600" />;
      case 4: return <Accessibility className="w-5 h-5 text-sky-700" />;
      default: return <CheckCircle className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION - Clean White & Light Blue Theme */}
      <section className="relative overflow-hidden pt-6 sm:pt-12 pb-10 sm:pb-16 bg-gradient-to-b from-sky-50/70 via-blue-50/30 to-white">
        {/* Soft atmospheric ambient light blue glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-sky-200/40 blur-3xl pointer-events-none rounded-full -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-sky-200 shadow-xs text-xs font-semibold text-sky-900 mx-auto lg:mx-0">
                <ClinicLogo size="xs" id="hero-trust-logo" />
                <span>{t.hero.badge}</span>
                <span className="text-sky-300">•</span>
                <span className="text-blue-600 font-bold">{t.hero.badgeYear}</span>
              </div>

              {/* Exact Hero Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                {t.hero.headlinePart1}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 block sm:inline">
                  {t.hero.headlineHighlight}
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                {t.hero.subtext}
              </p>

              {/* Primary Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <button
                  onClick={() => onOpenAppointment()}
                  id="hero-fix-appointment-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-base shadow-lg shadow-sky-500/25 hover:shadow-sky-500/35 active:scale-98 transition-all cursor-pointer"
                >
                  <Calendar className="w-5 h-5" />
                  <span>{t.hero.fixAppointment}</span>
                </button>

                <a
                  href={`tel:${CLINIC_INFO.phoneNumbers[0]}`}
                  id="hero-emergency-support-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white border border-sky-200 text-sky-800 hover:bg-sky-50/70 font-semibold text-base shadow-xs transition-colors cursor-pointer"
                >
                  <PhoneCall className="w-5 h-5 text-sky-600" />
                  <span>{t.hero.emergencySupport}</span>
                </a>
              </div>

              {/* Micro Trust Stats */}
              <div className="pt-4 border-t border-sky-100 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-bold text-slate-900">{t.hero.starRating}</span>
                </div>
                <span>•</span>
                <span className="text-slate-700 font-semibold">{t.hero.clinicalExperience}</span>
                <span>•</span>
                <span className="text-slate-700">{t.hero.clinicHours}</span>
              </div>
            </div>

            {/* Right Card Presentation */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-sky-900/5 border border-sky-100">
                {/* Dental Care Clinic Card Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-sky-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center p-0.5">
                      <ClinicLogo size="sm" id="hero-card-logo" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-sky-950 uppercase tracking-wider block leading-none">Sakthi Dental Clinic</span>
                      <span className="text-[10px] font-bold text-sky-600 tracking-wider uppercase">DENTAL CARE • HOSUR</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {lang === 'ta' ? 'திறந்துள்ளது' : 'Open Daily'}
                  </span>
                </div>

                {/* Doctor Avatar Card */}
                <div className="flex items-center gap-4 pb-6 border-b border-sky-100">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-600 via-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-2xl shadow-md">
                    DA
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 text-[11px] font-bold border border-sky-200/70 mb-1">
                      {t.hero.founderBadge}
                    </span>
                    <h2 className="text-xl font-bold text-slate-900 leading-tight">
                      {lang === 'ta' ? 'டாக்டர் அனுப்பிரியா' : 'Dr. Anupriya'}
                    </h2>
                    <p className="text-xs text-slate-500 font-medium">
                      {t.hero.founderExperience}
                    </p>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="py-5 space-y-3.5 text-xs text-slate-600">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-sky-50/60 border border-sky-100">
                    <span className="font-medium text-slate-700">{t.hero.specialityLabel}</span>
                    <span className="font-bold text-sky-700">{t.hero.specialityVal}</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-blue-50/40 border border-blue-100">
                    <span className="font-medium text-slate-700">{t.hero.techLabel}</span>
                    <span className="font-bold text-blue-700">{t.hero.techVal}</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-sky-50/60 border border-sky-100">
                    <span className="font-medium text-slate-700">{t.hero.alignmentLabel}</span>
                    <span className="font-bold text-sky-700">{t.hero.alignmentVal}</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-blue-50/40 border border-blue-100">
                    <span className="font-medium text-slate-700">{t.hero.restorationsLabel}</span>
                    <span className="font-bold text-blue-700">{t.hero.restorationsVal}</span>
                  </div>
                </div>

                {/* Patient Reassurance Quote */}
                <div className="pt-2">
                  <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-3.5 rounded-2xl border border-sky-100 flex items-start gap-2.5">
                    <Quote className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-700 leading-snug italic">
                      "{lang === 'ta' ? 'அனைத்து வயதினரும் பயமின்றி வரக்கூடிய கனிவான நோயாளி-நட்பு சூழல்.' : 'Gentle, transparent dentistry where every patient feels completely safe.'}"
                    </p>
                  </div>

                  <button
                    onClick={() => onSelectTab('about')}
                    id="hero-read-story-btn"
                    className="w-full mt-4 text-xs font-semibold text-sky-700 hover:text-blue-800 flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>{t.hero.readStory}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WELCOME ASSURANCE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-sky-900 via-blue-900 to-sky-950 text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
          {/* Background decorative subtle circles */}
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute left-1/3 -top-12 w-48 h-48 bg-blue-400/10 rounded-full blur-xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
            <div className="flex justify-center mb-2">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 flex items-center justify-center p-2 shadow-lg shadow-sky-950/40">
                <ClinicLogo size="lg" id="assurance-banner-logo" />
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-semibold border border-white/15">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-300" />
              <span>{t.assuranceBanner.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-snug">
              “{t.assuranceBanner.quote}”
            </h2>

            <p className="text-sky-100/90 text-sm sm:text-base leading-relaxed">
              {t.assuranceBanner.subtext}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={() => onOpenAppointment()}
                id="assurance-fix-appointment-btn"
                className="px-6 py-3 rounded-xl bg-white text-sky-900 font-bold text-sm shadow-md hover:bg-sky-50 transition-colors cursor-pointer"
              >
                {t.assuranceBanner.fixAppointment}
              </button>
              <a
                href={`tel:${CLINIC_INFO.phoneNumbers[0]}`}
                id="assurance-call-btn"
                className="px-6 py-3 rounded-xl bg-sky-800/60 hover:bg-sky-800 text-white font-semibold text-sm border border-sky-400/30 transition-colors"
              >
                {t.assuranceBanner.callClinic}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE SAKTHI DENTAL CLINIC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold border border-sky-200/70">
            <ClinicLogo size="xs" id="why-choose-logo" />
            <span className="uppercase tracking-widest">{t.whyChooseUs.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.whyChooseUs.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.whyChooseUs.subtext}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyChooseUs.items.map((item, idx) => (
            <div
              key={idx}
              id={`feature-card-${idx}`}
              className="p-6 rounded-3xl bg-white border border-sky-100 shadow-xs hover:shadow-md hover:border-sky-200 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {getFeatureIcon(idx)}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. OUR CORE TREATMENTS (EXPLORE OUR SERVICES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold border border-sky-200/70">
              <ClinicLogo size="xs" id="core-treatments-logo" />
              <span className="uppercase tracking-widest">{t.coreTreatments.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.coreTreatments.title}
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl">
              {t.coreTreatments.subtext}
            </p>
          </div>

          <button
            onClick={() => onSelectTab('treatments')}
            id="view-all-treatments-top-btn"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-700 hover:text-blue-800 transition-colors self-start md:self-auto cursor-pointer"
          >
            <span>{t.coreTreatments.viewAllTreatments}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6 Highlighted Core Treatments or Loading Skeletons */}
        {isLoadingTreatments ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="core-treatments-skeletons">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <TreatmentCardSkeleton key={idx} id={`core-treatment-skeleton-${idx}`} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.coreTreatments.items.map((treatment) => (
              <div
                key={treatment.id}
                id={`core-treatment-card-${treatment.id}`}
                className="p-6 rounded-3xl bg-white border border-sky-100 shadow-xs hover:shadow-md hover:border-sky-200 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-600 group-hover:scale-105 transition-transform">
                      {getTreatmentIcon(treatment.id)}
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-100">
                      {treatment.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {treatment.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectTreatment(treatment.id)}
                    id={`learn-more-${treatment.id}`}
                    className="text-xs font-semibold text-sky-700 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                  >
                    <span>{t.coreTreatments.learnDetails}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <button
                    onClick={() => onOpenAppointment(treatment.title)}
                    id={`book-core-${treatment.id}`}
                    className="py-1.5 px-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs transition-colors cursor-pointer"
                  >
                    {t.coreTreatments.bookNow}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View Full Treatments Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => onSelectTab('treatments')}
            id="view-all-treatments-bottom-btn"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-sky-50 border border-sky-200 hover:bg-sky-100 text-sky-800 font-bold text-sm transition-colors cursor-pointer"
          >
            <span>{t.coreTreatments.viewAllButton}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold border border-sky-200/70">
            <ClinicLogo size="xs" id="testimonials-logo" />
            <span className="uppercase tracking-widest">{t.testimonials.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.testimonials.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t.testimonials.subtext}
          </p>
        </div>

        {/* Testimonials Grid (Loading Skeletons or User Submitted + Curated) */}
        {isLoadingTestimonials ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="testimonials-skeletons">
            {[1, 2, 3].map((idx) => (
              <TestimonialCardSkeleton key={idx} id={`testimonial-skeleton-${idx}`} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* User Submitted Testimonials first */}
            {userReviews.map((item) => (
              <div
                key={item.id}
                id={`user-testimonial-card-${item.id}`}
                className="p-7 rounded-3xl bg-white border-2 border-sky-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
                    <Sparkles className="w-2.5 h-2.5 text-sky-600" />
                    <span>{lang === 'ta' ? 'புதிய நோயாளி கருத்து' : 'Verified Review'}</span>
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed">
                    {item.quote}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-sky-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-600 to-blue-700 flex items-center justify-center text-white font-bold text-sm shadow-2xs">
                      {item.author.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {item.author}
                      </h4>
                      <p className="text-xs text-sky-600 font-medium">
                        {item.tagline}
                      </p>
                    </div>
                  </div>
                  {item.date && (
                    <span className="text-[11px] text-slate-400 font-medium">
                      {item.date}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Curated Clinic Testimonials */}
            {t.testimonials.items.map((item) => (
              <div
                key={item.id}
                id={`testimonial-card-${item.id}`}
                className="p-7 rounded-3xl bg-white border border-sky-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed">
                    {item.quote}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-sky-50 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {item.author}
                    </h4>
                    <p className="text-xs text-sky-600 font-medium">
                      {item.tagline}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Submit Your Testimonial Form Section */}
        <div className="mt-8">
          <SubmitTestimonial 
            lang={lang} 
            onTestimonialSubmitted={handleTestimonialSubmitted} 
          />
        </div>
      </section>

      {/* 6. CLINIC FACILITIES / AMENITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-sky-50/80 via-white to-blue-50/60 rounded-3xl p-8 sm:p-12 border border-sky-100 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold border border-sky-200/70">
              <ClinicLogo size="xs" id="amenities-logo" />
              <span className="uppercase tracking-widest">{t.amenities.eyebrow}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {t.amenities.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {t.amenities.subtext}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {t.amenities.items.map((amenity, idx) => (
              <div
                key={amenity.id}
                id={`amenity-item-${amenity.id}`}
                className="p-5 rounded-2xl bg-white border border-sky-100 shadow-2xs hover:border-sky-200 transition-colors text-center flex flex-col items-center justify-start"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-50 flex items-center justify-center mb-3">
                  {getAmenityIcon(idx)}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  {amenity.title}
                </h3>
                <p className="text-xs text-slate-500 leading-snug">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ TEASER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-sky-100 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200/80 flex items-center justify-center p-1.5 shrink-0 shadow-xs">
              <ClinicLogo size="md" id="faq-teaser-logo" />
            </div>
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {t.faqTeaser.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                {t.faqTeaser.subtext}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectTab('faqs')}
              id="home-browse-faqs-btn"
              className="px-5 py-2.5 rounded-xl border border-sky-200 text-sky-800 font-semibold text-xs hover:bg-sky-50 transition-colors cursor-pointer"
            >
              {t.faqTeaser.browseFaqs}
            </button>
            <button
              onClick={() => onOpenAppointment()}
              id="home-faq-appointment-btn"
              className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              {t.faqTeaser.fixAppointment}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
