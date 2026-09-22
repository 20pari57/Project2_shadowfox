import React from 'react';
import { X, Calendar, Sparkles } from 'lucide-react';
import { Language, Treatment } from '../types';
import { ClinicLogo } from './ClinicLogo';

interface TreatmentDetailModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBookTreatment: (treatmentName: string) => void;
  lang: Language;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  treatment,
  onClose,
  onBookTreatment,
  lang,
}) => {
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div 
        id="treatment-detail-modal"
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-sky-100 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
      >
        <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 px-6 py-5 text-white relative">
          <button
            onClick={onClose}
            id="close-treatment-modal-btn"
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-lg bg-white/10 backdrop-blur-xs border border-white/20 flex items-center justify-center p-0.5">
              <ClinicLogo size="xs" id="treatment-modal-logo" />
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 text-sky-100 text-xs font-semibold">
              <Sparkles className="w-3 h-3" />
              <span>{treatment.category}</span>
              {treatment.badge && <span>• {treatment.badge}</span>}
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            {treatment.title}
          </h3>
        </div>

        <div className="p-6 sm:p-8 space-y-5">
          <div className="bg-sky-50/70 p-4 rounded-2xl border border-sky-100">
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-800 mb-1">
              {lang === 'ta' ? 'ஒரு பார்வை' : 'At a Glance'}
            </p>
            <p className="text-sm font-medium text-slate-800 leading-relaxed">
              {treatment.shortDesc}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              {lang === 'ta' ? 'சிகிச்சை & மருத்துவ முறை விவரங்கள்' : 'Procedure & Clinical Details'}
            </h4>
            <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">
              {treatment.fullDesc}
            </p>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onBookTreatment(treatment.title);
              }}
              id="treatment-modal-book-cta"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold text-sm shadow-md transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>{lang === 'ta' ? 'இச்சிகிச்சைக்கு பதிவு செய்க' : `Book Appointment for ${treatment.title}`}</span>
            </button>
            <button
              onClick={onClose}
              id="treatment-modal-dismiss-btn"
              className="px-4 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
            >
              {lang === 'ta' ? 'மூடுக' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
