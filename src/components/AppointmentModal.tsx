import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { CLINIC_INFO, getDoctors, getTreatments } from '../data/clinicData';
import { TRANSLATIONS } from '../data/translations';
import { AppointmentFormData, Language } from '../types';
import { ClinicLogo } from './ClinicLogo';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  lang: Language;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultService = '',
  lang,
}) => {
  const t = TRANSLATIONS[lang].appointmentModal;
  const treatments = getTreatments(lang);
  const doctors = getDoctors(lang);

  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    phone: '',
    email: '',
    patientType: 'Woman',
    service: defaultService || (lang === 'ta' ? 'பல் சுத்தம் செய்தல் & ஸ்கேலிங்' : 'Teeth Cleaning & Scaling'),
    preferredDoctor: lang === 'ta' ? 'கிடைக்கும் சிறப்பு மருத்துவர்' : 'Any Available Specialist',
    preferredDate: '',
    preferredTimeSlot: 'Morning (9 AM - 1 PM)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (defaultService) {
      setFormData(prev => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = lang === 'ta' ? 'நோயாளி பெயர் அவசியமானது' : 'Patient name is required';
    }
    if (!formData.phone.trim()) {
      errs.phone = lang === 'ta' ? 'தொலைபேசி எண் அவசியமானது' : 'Phone number is required';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 10) {
      errs.phone = lang === 'ta' ? '10 இலக்க தொலைபேசி எண்ணை உள்ளிடவும்' : 'Please enter a valid 10-digit phone number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const randomId = 'SKD-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      patientType: 'Woman',
      service: lang === 'ta' ? 'பல் சுத்தம் செய்தல் & ஸ்கேலிங்' : 'Teeth Cleaning & Scaling',
      preferredDoctor: lang === 'ta' ? 'கிடைக்கும் சிறப்பு மருத்துவர்' : 'Any Available Specialist',
      preferredDate: '',
      preferredTimeSlot: 'Morning (9 AM - 1 PM)',
      notes: '',
    });
    setErrors({});
    onClose();
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Sakthi Dental Clinic Hosur, I would like to fix an appointment for ${formData.name || 'a patient'}. Service: ${formData.service}. Contact: ${formData.phone}. Reference: ${bookingRef}`
    );
    window.open(`https://wa.me/919862890897?text=${text}`, '_blank');
  };

  const patientCategories = [
    { key: 'Woman', label: t.patientTypes.Woman },
    { key: 'Child', label: t.patientTypes.Child },
    { key: 'Adult', label: t.patientTypes.Adult },
    { key: 'Senior', label: t.patientTypes.Senior },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div 
        id="appointment-modal-card"
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-sky-100 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header - White and Light Blue Theme */}
        <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 px-6 py-6 text-white relative">
          <button
            onClick={onClose}
            id="close-appointment-modal-btn"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-8 h-8 rounded-xl bg-white/10 backdrop-blur-xs border border-white/20 flex items-center justify-center p-1">
              <ClinicLogo size="xs" id="appointment-modal-logo" />
            </div>
            <span className="text-sky-100 text-xs font-bold uppercase tracking-wider">Sakthi Dental Clinic • Hosur</span>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            {t.title}
          </h3>
          <p className="text-sky-100 text-xs sm:text-sm mt-1">
            {t.subtext}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center p-2 shadow-xs">
                  <ClinicLogo size="md" id="appointment-success-logo" />
                </div>
              </div>
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">
                {t.requestedTitle}
              </h4>
              <div className="bg-sky-50/80 rounded-2xl p-4 text-left max-w-md mx-auto border border-sky-100">
                <div className="flex justify-between items-center pb-2 border-b border-sky-200/60">
                  <span className="text-xs text-sky-800 font-semibold">{t.referenceCode}:</span>
                  <span className="font-mono font-bold text-sm text-sky-900">{bookingRef}</span>
                </div>
                <div className="pt-2 text-xs text-slate-700 space-y-1">
                  <p><strong className="text-slate-900">{t.patientName}:</strong> {formData.name} ({formData.patientType})</p>
                  <p><strong className="text-slate-900">{t.treatmentService}:</strong> {formData.service}</p>
                  <p><strong className="text-slate-900">{t.preferredDoctor}:</strong> {formData.preferredDoctor}</p>
                  <p><strong className="text-slate-900">{t.phoneNumber}:</strong> {formData.phone}</p>
                  {formData.preferredDate && <p><strong className="text-slate-900">{t.preferredDate}:</strong> {formData.preferredDate} ({formData.preferredTimeSlot})</p>}
                </div>
              </div>

              <p className="text-xs text-slate-500 max-w-md mx-auto">
                {lang === 'ta'
                  ? 'ஓசூர் அந்திவாடி கிளினிக் குழுவினர் விரைவில் உங்களைத் தொடர்பு கொண்டு நேரத்தை உறுதி செய்வர்.'
                  : 'Our front desk team at Anthivadi, Hosur will contact you within a few minutes to confirm the consultation schedule.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  onClick={openWhatsApp}
                  id="whatsapp-confirm-btn"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.whatsappConfirm}</span>
                </button>
                <button
                  onClick={handleReset}
                  id="appointment-done-btn"
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  {t.done}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Patient Category */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {t.patientCategory}
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {patientCategories.map((type) => (
                    <button
                      type="button"
                      key={type.key}
                      id={`patient-type-${type.key.toLowerCase()}`}
                      onClick={() => setFormData({ ...formData, patientType: type.key as any })}
                      className={`py-2 px-2 text-xs font-medium rounded-xl border transition-all text-center cursor-pointer ${
                        formData.patientType === type.key
                          ? 'border-sky-600 bg-sky-50 text-sky-700 font-bold ring-1 ring-sky-500'
                          : 'border-slate-200 text-slate-600 hover:border-sky-300'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.patientName} <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      id="appointment-input-name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder={lang === 'ta' ? 'எ.கா. மீரா / செல்வன் ராகுல்' : 'e.g. Meera / Master Rahul'}
                      className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border ${
                        errors.name ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                      } focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600`}
                    />
                  </div>
                  {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.phoneNumber} <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      id="appointment-input-phone"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder={lang === 'ta' ? 'எ.கா. 9862890897' : 'e.g. 9862890897'}
                      className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border ${
                        errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                      } focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600`}
                    />
                  </div>
                  {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Service Requested */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.treatmentService}
                </label>
                <select
                  id="appointment-select-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600 bg-white"
                >
                  <option value={lang === 'ta' ? 'பொது ஆலோசனை & பரிசோதனை' : 'General Consultation & Checkup'}>
                    {lang === 'ta' ? 'பொது ஆலோசனை & பரிசோதனை' : 'General Consultation & Checkup'}
                  </option>
                  {treatments.map((tr) => (
                    <option key={tr.id} value={tr.title}>
                      {tr.title} ({tr.category})
                    </option>
                  ))}
                  <option value={lang === 'ta' ? 'அவசர பல் வலி நிவாரணம்' : 'Emergency Tooth Pain Relief'}>
                    {lang === 'ta' ? 'அவசர பல் வலி நிவாரணம்' : 'Emergency Tooth Pain Relief'}
                  </option>
                  <option value={lang === 'ta' ? 'குழந்தைகள் முதல் பல் பரிசோதனை' : 'Child Dental First Visit'}>
                    {lang === 'ta' ? 'குழந்தைகள் முதல் பல் பரிசோதனை' : 'Child Dental First Visit'}
                  </option>
                </select>
              </div>

              {/* Doctor Preference */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.preferredDoctor}
                </label>
                <select
                  id="appointment-select-doctor"
                  value={formData.preferredDoctor}
                  onChange={(e) => setFormData({ ...formData, preferredDoctor: e.target.value })}
                  className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600 bg-white"
                >
                  <option value={lang === 'ta' ? 'கிடைக்கும் சிறப்பு மருத்துவர்' : 'Any Available Specialist'}>
                    {lang === 'ta' ? 'கிடைக்கும் சிறப்பு மருத்துவர் (விரைவான ஆலோசனை)' : 'Any Available Specialist (Fastest Consultation)'}
                  </option>
                  {doctors.map((doc) => (
                    <option key={doc.id} value={doc.name}>
                      {doc.name} — {doc.role}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.preferredDate}
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      id="appointment-input-date"
                      value={formData.preferredDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.preferredTimeSlot}
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      id="appointment-select-time"
                      value={formData.preferredTimeSlot}
                      onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value as any })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600 bg-white"
                    >
                      <option value="Morning (9 AM - 1 PM)">{lang === 'ta' ? 'காலை (9 AM - 1 PM)' : 'Morning (9 AM - 1 PM)'}</option>
                      <option value="Afternoon (1 PM - 5 PM)">{lang === 'ta' ? 'மதியம் (1 PM - 5 PM)' : 'Afternoon (1 PM - 5 PM)'}</option>
                      <option value="Evening (5 PM - 7 PM)">{lang === 'ta' ? 'மாலை (5 PM - 7 PM)' : 'Evening (5 PM - 7 PM)'}</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.notes}
                </label>
                <textarea
                  id="appointment-input-notes"
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={t.notesPlaceholder}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  id="appointment-submit-button"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  {t.submit}
                </button>

                <div className="flex items-center justify-center gap-4 pt-1 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    {t.noPrepayment}
                  </span>
                  <span>•</span>
                  <a
                    href={`tel:${CLINIC_INFO.phoneNumbers[0]}`}
                    id="appointment-quick-call-link"
                    className="text-sky-700 hover:underline font-medium"
                  >
                    {t.orCall} {CLINIC_INFO.phoneNumbers[0]}
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
