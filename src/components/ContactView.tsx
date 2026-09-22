import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  ExternalLink,
  Navigation
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { TRANSLATIONS } from '../data/translations';
import { ContactFormData, Language } from '../types';
import { ClinicLogo } from './ClinicLogo';

interface ContactViewProps {
  lang: Language;
}

export const ContactView: React.FC<ContactViewProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].contactPage;
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = lang === 'ta' ? 'பெயர் அவசியமானது' : 'Name is required';
    }

    if (!formData.email.trim()) {
      errs.email = lang === 'ta' ? 'மின்னஞ்சல் அவசியமானது' : 'Email address is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = lang === 'ta' ? 'சரியான மின்னஞ்சலை உள்ளிடவும்' : 'Please enter a valid email address';
      }
    }

    if (!formData.phone.trim()) {
      errs.phone = lang === 'ta' ? 'தொலைபேசி எண் அவசியமானது' : 'Phone number is required';
    } else {
      const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
      if (cleanPhone.length < 10) {
        errs.phone = lang === 'ta' ? '10 இலக்க தொலைபேசி எண்ணை உள்ளிடவும்' : 'Please enter a valid 10-digit phone number';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="space-y-12 sm:space-y-16 py-8 sm:py-12">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-2xl bg-white border border-sky-200/90 shadow-md flex items-center justify-center p-2">
            <ClinicLogo size="lg" id="contact-header-logo" />
          </div>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-bold mb-3 border border-sky-200/70">
          <ClinicLogo size="xs" id="contact-pill-logo" />
          <span>{t.eyebrow}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          {t.heading}
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
          {t.subtext}
        </p>
      </section>

      {/* Main 2-Column Contact Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* LEFT SIDE: Contact Form */}
          <div className="lg:col-span-7">
            <div 
              id="contact-form-card"
              className="bg-white rounded-3xl border border-sky-100 shadow-sm p-6 sm:p-10 relative overflow-hidden"
            >
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-600">
                  {t.formEyebrow}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  {t.formTitle}
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  {t.formSubtext}
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-200">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {t.thankYouTitle} {formData.name}!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    {t.thankYouSub} (<strong className="text-slate-900">{formData.email}</strong> / <strong className="text-slate-900">{formData.phone}</strong>)
                  </p>
                  <button
                    onClick={handleReset}
                    id="contact-send-another-btn"
                    className="mt-4 px-6 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    {t.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name (Required) */}
                  <div>
                    <label 
                      htmlFor="contact-name" 
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      {t.nameLabel} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder={t.namePlaceholder}
                      className={`w-full px-4 py-3 text-sm rounded-xl border transition-colors ${
                        errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                      } focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Phone - stacked on mobile, 2-col on sm */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email (Required) */}
                    <div>
                      <label 
                        htmlFor="contact-email" 
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        {t.emailLabel} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder={t.emailPlaceholder}
                        className={`w-full px-4 py-3 text-sm rounded-xl border transition-colors ${
                          errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                        } focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number (Required) */}
                    <div>
                      <label 
                        htmlFor="contact-phone" 
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        {t.phoneLabel} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder={t.phonePlaceholder}
                        className={`w-full px-4 py-3 text-sm rounded-xl border transition-colors ${
                          errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                        } focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Your Message (Optional) */}
                  <div>
                    <label 
                      htmlFor="contact-message" 
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      {t.messageLabel} <span className="text-slate-400 font-normal">{t.messageOptional}</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.messagePlaceholder}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600 resize-none"
                    />
                  </div>

                  {/* Submit Button (Clinic's primary accent color blue/sky) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{t.submitButton}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT SIDE: Clinic Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div 
              id="reach-us-card"
              className="bg-white rounded-3xl border border-sky-100 shadow-sm p-6 sm:p-8"
            >
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-sky-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center p-0.5">
                    <ClinicLogo size="sm" id="reach-us-logo" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-sky-950 uppercase tracking-wider block leading-none">Sakthi Dental Clinic</span>
                    <span className="text-[10px] font-bold text-sky-600 tracking-wider uppercase">Hosur • Tamil Nadu</span>
                  </div>
                </div>
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-sky-600">
                {t.reachUsEyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-6">
                {t.reachUsTitle}
              </h2>

              <ul className="space-y-6 text-sm">
                {/* Address */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                      {t.addressLabel}
                    </h4>
                    <p className="text-slate-800 font-medium leading-relaxed">
                      {CLINIC_INFO.address}
                    </p>
                    <a
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="directions-link"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:underline mt-1.5"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>{t.getDirections}</span>
                    </a>
                  </div>
                </li>

                {/* Email */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                      {t.emailContactLabel}
                    </h4>
                    <a
                      href={`mailto:${CLINIC_INFO.email}`}
                      id="clinic-email-link"
                      className="text-slate-800 hover:text-sky-700 font-medium transition-colors"
                    >
                      {CLINIC_INFO.email}
                    </a>
                  </div>
                </li>

                {/* Phone */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                      {t.phoneLabelSection}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-0.5">
                      <a
                        href={`tel:${CLINIC_INFO.phoneNumbers[0]}`}
                        id="contact-phone-1"
                        className="text-slate-800 hover:text-sky-700 font-bold transition-colors"
                      >
                        {CLINIC_INFO.phoneNumbers[0]}
                      </a>
                      <span className="hidden sm:inline text-slate-300">/</span>
                      <a
                        href={`tel:${CLINIC_INFO.phoneNumbers[1]}`}
                        id="contact-phone-2"
                        className="text-slate-800 hover:text-sky-700 font-bold transition-colors"
                      >
                        {CLINIC_INFO.phoneNumbers[1]}
                      </a>
                    </div>
                  </div>
                </li>

                {/* Timings */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-cyan-50 text-cyan-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                      {t.timingsLabel}
                    </h4>
                    <p className="text-slate-800">
                      {t.timingsValue}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {t.doctorAvailabilityNote}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Map preview card */}
            <div className="bg-gradient-to-br from-sky-50 to-blue-50/70 rounded-3xl p-6 border border-sky-100 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-sky-950">{t.nearbyCardTitle}</p>
                <p className="text-xs text-slate-600 mt-0.5">
                  {t.nearbyCardSub}
                </p>
              </div>
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="maps-open-btn"
                className="px-4 py-2 bg-white text-sky-700 border border-sky-200 rounded-xl text-xs font-bold shadow-2xs hover:bg-sky-50 transition-colors flex items-center gap-1.5 flex-shrink-0"
              >
                <span>{t.mapsButton}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
