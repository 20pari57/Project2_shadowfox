import React from 'react';
import { 
  Award, 
  Calendar, 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  Target, 
  Eye, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight,
  Stethoscope,
  Building,
  Users
} from 'lucide-react';
import { getDoctors, CLINIC_INFO } from '../data/clinicData';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types';
import { ClinicLogo } from './ClinicLogo';

interface AboutViewProps {
  onOpenAppointment: (doctorName?: string) => void;
  lang: Language;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenAppointment, lang }) => {
  const t = TRANSLATIONS[lang].about;
  const allDoctors = getDoctors(lang);
  const founder = allDoctors.find((d) => d.id === 'dr-anupriya') || allDoctors[0];
  const specialistDoctors = allDoctors.filter((d) => d.id !== 'dr-anupriya');

  return (
    <div className="space-y-16 sm:space-y-20 py-8 sm:py-12">
      {/* 1. HERO / DOCTOR ANUPRIYA SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-sky-100 shadow-sm p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Portrait Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm rounded-3xl bg-gradient-to-br from-sky-500 via-blue-600 to-cyan-500 p-1 shadow-xl">
                <div className="bg-white rounded-[22px] p-6 text-center space-y-4">
                  <div className="flex justify-center mb-1">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center p-1">
                      <ClinicLogo size="sm" id="about-founder-logo" />
                    </div>
                  </div>
                  <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-tr from-sky-100 to-blue-100 border-4 border-white shadow-md flex items-center justify-center text-3xl font-extrabold text-sky-800">
                    DA
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-full border border-sky-200/70">
                      <Award className="w-3.5 h-3.5 text-sky-600" />
                      {t.founderRole}
                    </span>
                    <h2 className="text-2xl font-extrabold text-slate-900 mt-2">
                      {lang === 'ta' ? 'டாக்டர் அனுப்பிரியா' : 'Dr. Anupriya'}
                    </h2>
                    <p className="text-xs text-slate-500 font-medium">
                      {t.founderQual}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100 text-left text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-sky-600 flex-shrink-0" />
                      <span>{t.milestones.graduated}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>{t.milestones.mathura}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Stethoscope className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <span>{t.milestones.hospital}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-sky-600 flex-shrink-0" />
                      <span>{t.milestones.founded}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenAppointment(founder.name)}
                    id="founder-consult-btn"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{t.consultFounder}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Narrative Content */}
            <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-sky-600">
                  {t.eyebrow}
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                  {t.heading}
                </h1>
                <p className="text-sm font-semibold text-sky-700 mt-0.5">
                  {t.subheading}
                </p>
              </div>

              <p className="text-sm sm:text-base leading-relaxed">
                {t.bioP1}
              </p>

              <p className="text-sm sm:text-base leading-relaxed">
                {t.bioP2}
              </p>

              <p className="text-sm sm:text-base leading-relaxed">
                {t.bioP3}
              </p>

              <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 text-xs sm:text-sm text-sky-950 font-medium leading-relaxed">
                <p>{t.bioHighlight}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR VISION & OUR MISSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div 
            id="mission-card"
            className="p-8 sm:p-10 rounded-3xl bg-white border border-sky-100 shadow-sm relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              {t.missionTag}
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-1 mb-4">
              {t.missionTitle}
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              {t.missionText}
            </p>
          </div>

          {/* Vision Card */}
          <div 
            id="vision-card"
            className="p-8 sm:p-10 rounded-3xl bg-white border border-blue-100 shadow-sm relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              {t.visionTag}
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-1 mb-4">
              {t.visionTitle}
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              {t.visionText}
            </p>
          </div>
        </div>
      </section>

      {/* 3. OUR TEAM OF DOCTORS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold border border-sky-200/70">
            <ClinicLogo size="xs" id="team-logo" />
            <span className="uppercase tracking-widest">{t.teamEyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.teamTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.teamSubtext}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialistDoctors.map((doc) => (
            <div
              key={doc.id}
              id={`doctor-card-${doc.id}`}
              className="p-6 rounded-3xl bg-white border border-sky-100 shadow-xs hover:shadow-md hover:border-sky-200 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-50 to-blue-100 flex items-center justify-center text-sky-700 font-bold text-base group-hover:scale-105 transition-transform">
                    {doc.name.split(' ')[1]?.slice(0, 2) || 'Dr'}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                      {doc.name}
                    </h3>
                    <span className="inline-block text-xs font-bold text-sky-700 mt-0.5">
                      {doc.role}
                    </span>
                  </div>
                </div>

                <div className="mb-3">
                  <span className="text-[11px] font-semibold text-slate-600 bg-sky-50/70 px-2.5 py-1 rounded-md border border-sky-100">
                    {doc.qualification}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {doc.description}
                </p>

                {/* Specialties Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {doc.specialties.map((spec, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 border border-slate-200/80"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenAppointment(doc.name)}
                  id={`book-with-doc-${doc.id}`}
                  className="w-full py-2.5 px-3 rounded-xl bg-sky-50 hover:bg-sky-600 text-sky-700 hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{t.bookWithDoctor} {doc.name.split(' ')[1]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CLINIC REASSURANCE FOOTER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-sky-900 via-blue-900 to-sky-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 flex items-center justify-center p-1.5 shrink-0 shadow-xs">
              <ClinicLogo size="md" id="about-reassurance-logo" />
            </div>
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {t.comfortHeading}
              </h3>
              <p className="text-sky-100/90 text-xs sm:text-sm max-w-2xl">
                {t.comfortSubtext}
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenAppointment()}
            id="about-cta-appointment-btn"
            className="flex-shrink-0 px-6 py-3.5 rounded-xl bg-white text-sky-900 font-bold text-sm hover:bg-sky-50 shadow-md transition-colors cursor-pointer"
          >
            {t.comfortButton}
          </button>
        </div>
      </section>
    </div>
  );
};
