import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { PRIVACY_POLICY_TEXT } from '../data/clinicData';
import { Language } from '../types';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div 
        id="privacy-policy-modal"
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-sky-100 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
      >
        <div className="bg-gradient-to-r from-sky-900 via-blue-900 to-sky-950 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-sky-400" />
            <div>
              <h3 className="text-xl font-bold text-white">
                {lang === 'ta' ? 'தனியுரிமைக் கொள்கை (Privacy Policy)' : 'Privacy Policy'}
              </h3>
              <p className="text-xs text-sky-200">Sakthi Dental Clinic • Hosur</p>
            </div>
          </div>
          <button
            onClick={onClose}
            id="close-privacy-policy-modal"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto prose prose-slate max-w-none text-sm leading-relaxed text-slate-700">
          <div className="whitespace-pre-line font-sans space-y-2">
            {PRIVACY_POLICY_TEXT}
          </div>

          <div className="mt-8 pt-4 border-t border-slate-200 text-right">
            <button
              onClick={onClose}
              id="privacy-modal-close-btn"
              className="px-6 py-2.5 rounded-xl bg-sky-600 text-white font-semibold text-sm hover:bg-sky-700 transition-colors cursor-pointer"
            >
              {lang === 'ta' ? 'புரிந்துகொண்டேன் & ஒப்புக்கொள்கிறேன்' : 'I Understand & Agree'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
