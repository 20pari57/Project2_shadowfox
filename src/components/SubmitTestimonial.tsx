import React, { useState } from 'react';
import { Star, Send, CheckCircle2, AlertCircle, Sparkles, MessageSquare } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types';
import { ClinicLogo } from './ClinicLogo';

export interface UserTestimonialItem {
  id: string;
  author: string;
  quote: string;
  tagline: string;
  rating: number;
  date: string;
}

interface SubmitTestimonialProps {
  lang: Language;
  onTestimonialSubmitted: (testimonial: UserTestimonialItem) => void;
}

export const SubmitTestimonial: React.FC<SubmitTestimonialProps> = ({
  lang,
  onTestimonialSubmitted,
}) => {
  const t = TRANSLATIONS[lang].submitTestimonial;

  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [treatment, setTreatment] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; comment?: string }>({});

  const validate = () => {
    const errs: { name?: string; comment?: string } = {};
    if (!name.trim()) {
      errs.name = t.validationName;
    }
    if (!comment.trim()) {
      errs.comment = t.validationComment;
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newReview: UserTestimonialItem = {
      id: `user-rev-${Date.now()}`,
      author: name.trim(),
      quote: `“${comment.trim()}”`,
      tagline: treatment.trim() || (lang === 'ta' ? 'சரிபார்க்கப்பட்ட நோயாளி' : 'Verified Patient'),
      rating,
      date: new Date().toLocaleDateString(lang === 'ta' ? 'ta-IN' : 'en-IN', {
        month: 'short',
        year: 'numeric',
      }),
    };

    onTestimonialSubmitted(newReview);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setRating(5);
    setTreatment('');
    setComment('');
    setErrors({});
    setIsSubmitted(false);
  };

  const currentDisplayRating = hoverRating || rating;
  const ratingDescription = t.ratingDesc[currentDisplayRating - 1] || '';

  return (
    <div 
      id="submit-testimonial-section" 
      className="bg-white rounded-3xl border border-sky-100 shadow-sm p-6 sm:p-10 relative overflow-hidden"
    >
      {/* Decorative subtle background gradient */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-sky-100/50 via-blue-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 relative z-10 space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-bold border border-sky-200/70">
          <ClinicLogo size="xs" id="submit-testimonial-badge-logo" />
          <span className="uppercase tracking-widest">{t.eyebrow}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {t.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          {t.subtext}
        </p>
      </div>

      {isSubmitted ? (
        /* Success State */
        <div 
          id="testimonial-success-card"
          className="max-w-lg mx-auto py-8 px-6 text-center space-y-4 bg-sky-50/50 rounded-2xl border border-sky-100 animate-in fade-in zoom-in-95 duration-200"
        >
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="flex justify-center items-center gap-1 text-amber-400">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>

          <h4 className="text-xl font-bold text-slate-900">
            {t.successTitle}
          </h4>

          <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            {t.successSub}
          </p>

          <div className="pt-3">
            <button
              onClick={handleReset}
              id="submit-another-testimonial-btn"
              className="px-6 py-2.5 rounded-xl bg-white border border-sky-200 text-sky-800 font-semibold text-xs hover:bg-sky-50 transition-colors shadow-2xs cursor-pointer inline-flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>{t.submitAnother}</span>
            </button>
          </div>
        </div>
      ) : (
        /* Feedback Submission Form */
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 relative z-10">
          {/* Rating (1-5 stars) */}
          <div className="bg-sky-50/40 rounded-2xl p-4 sm:p-5 border border-sky-100/80">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              {t.ratingLabel} <span className="text-rose-500">*</span>
            </label>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div 
                className="flex items-center gap-1.5"
                onMouseLeave={() => setHoverRating(0)}
                id="rating-stars-container"
              >
                {[1, 2, 3, 4, 5].map((starNum) => {
                  const isFilled = starNum <= currentDisplayRating;
                  return (
                    <button
                      type="button"
                      key={starNum}
                      id={`rating-star-${starNum}`}
                      onClick={() => setRating(starNum)}
                      onMouseEnter={() => setHoverRating(starNum)}
                      aria-label={`${starNum} Stars`}
                      className="p-1 rounded-lg text-slate-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 transition-all cursor-pointer"
                    >
                      <Star
                        className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors ${
                          isFilled
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-300 hover:text-amber-300'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Text Descriptor of Rating */}
              <div className="sm:ml-3">
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-white text-sky-800 border border-sky-200/80 shadow-2xs">
                  {currentDisplayRating} / 5 • {ratingDescription}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Patient Name */}
            <div>
              <label 
                htmlFor="testimonial-name" 
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                {t.nameLabel} <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="testimonial-name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors({ ...errors, name: '' });
                }}
                placeholder={t.namePlaceholder}
                className={`w-full px-4 py-3 text-sm rounded-xl border transition-colors ${
                  errors.name 
                    ? 'border-rose-400 bg-rose-50/20' 
                    : 'border-slate-200 focus:border-sky-600 bg-white'
                } focus:outline-none focus:ring-2 focus:ring-sky-500/20`}
              />
              {errors.name && (
                <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Treatment Received (Optional) */}
            <div>
              <label 
                htmlFor="testimonial-treatment" 
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                {t.treatmentLabel}
              </label>
              <input
                type="text"
                id="testimonial-treatment"
                value={treatment}
                onChange={(e) => setTreatment(e.target.value)}
                placeholder={t.treatmentPlaceholder}
                className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:border-sky-600 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-colors"
              />
            </div>
          </div>

          {/* Comment Box */}
          <div>
            <label 
              htmlFor="testimonial-comment" 
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              {t.commentLabel} <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="testimonial-comment"
              rows={4}
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
                if (errors.comment) setErrors({ ...errors, comment: '' });
              }}
              placeholder={t.commentPlaceholder}
              className={`w-full px-4 py-3 text-sm rounded-xl border transition-colors resize-none ${
                errors.comment 
                  ? 'border-rose-400 bg-rose-50/20' 
                  : 'border-slate-200 focus:border-sky-600 bg-white'
              } focus:outline-none focus:ring-2 focus:ring-sky-500/20`}
            />
            {errors.comment && (
              <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.comment}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 order-2 sm:order-1">
              {lang === 'ta' 
                ? 'உங்கள் மதிப்புரை மருத்துவமனை தளத்தில் காண்பிக்கப்படும்.' 
                : 'Your testimonial will appear on our clinic website.'}
            </span>

            <button
              type="submit"
              id="submit-testimonial-btn"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center justify-center gap-2 order-1 sm:order-2"
            >
              <Send className="w-4 h-4" />
              <span>{t.submitBtn}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
