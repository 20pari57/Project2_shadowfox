import React from 'react';

/**
 * Skeleton placeholder for Treatment cards (used in HomeView & TreatmentsView)
 */
export const TreatmentCardSkeleton: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <div
      id={id}
      aria-hidden="true"
      className="p-6 rounded-3xl bg-white border border-sky-100/80 shadow-xs flex flex-col justify-between min-h-[290px] animate-pulse relative overflow-hidden"
    >
      <div>
        {/* Top: Icon + Badge placeholder */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-sky-100/80" />
          <div className="flex items-center gap-1.5">
            <div className="w-20 h-5 rounded-full bg-sky-50 border border-sky-100" />
            <div className="w-14 h-5 rounded-full bg-slate-100" />
          </div>
        </div>

        {/* Title placeholder */}
        <div className="h-6 w-3/4 rounded-lg bg-slate-200/80 mb-2.5" />

        {/* Short description / category subtitle */}
        <div className="h-3.5 w-1/2 rounded bg-sky-50 mb-3.5" />

        {/* Description body lines */}
        <div className="space-y-2">
          <div className="h-3.5 w-full rounded bg-slate-100" />
          <div className="h-3.5 w-11/12 rounded bg-slate-100" />
          <div className="h-3.5 w-4/5 rounded bg-slate-100" />
        </div>
      </div>

      {/* Footer action buttons */}
      <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-2">
        <div className="h-4 w-20 rounded bg-slate-200/70" />
        <div className="h-8 w-28 rounded-xl bg-sky-100/90" />
      </div>
    </div>
  );
};

/**
 * Skeleton placeholder for Testimonial cards (used in HomeView)
 */
export const TestimonialCardSkeleton: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <div
      id={id}
      aria-hidden="true"
      className="p-7 rounded-3xl bg-white border border-sky-100/80 shadow-xs flex flex-col justify-between min-h-[230px] animate-pulse relative overflow-hidden"
    >
      <div>
        {/* Star rating placeholder */}
        <div className="flex items-center gap-1.5 mb-4">
          {[1, 2, 3, 4, 5].map((s) => (
            <div key={s} className="w-4 h-4 rounded-sm bg-amber-100/80" />
          ))}
        </div>

        {/* Quote lines placeholder */}
        <div className="space-y-2.5">
          <div className="h-4 w-full rounded bg-slate-200/70" />
          <div className="h-4 w-10/12 rounded bg-slate-100" />
          <div className="h-4 w-3/4 rounded bg-slate-100" />
        </div>
      </div>

      {/* Author & credential placeholder */}
      <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-sky-100/80 shrink-0" />
        <div className="space-y-1.5 flex-1">
          <div className="h-4 w-28 rounded bg-slate-200/80" />
          <div className="h-3 w-20 rounded bg-sky-100/80" />
        </div>
      </div>
    </div>
  );
};
