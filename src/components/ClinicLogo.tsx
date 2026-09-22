import React from 'react';

interface ClinicLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'hero';
  showText?: boolean;
  textColor?: string;
  variant?: 'default' | 'badge' | 'card' | 'navbar' | 'footer' | 'clean';
  className?: string;
  id?: string;
}

export const ClinicLogo: React.FC<ClinicLogoProps> = ({
  size = 'md',
  showText = false,
  textColor,
  variant = 'default',
  className = '',
  id,
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-20 h-20',
    hero: 'w-24 h-24 sm:w-28 sm:h-28',
  }[size];

  const svgContent = (
    <svg 
      viewBox="0 0 240 260" 
      className={`${sizeClasses} ${className} shrink-0 transition-transform duration-200 select-none`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Sakthi Dental Care Tooth Logo"
    >
      <defs>
        <linearGradient id={`orbitGrad-${size}-${id || 'default'}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="45%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
        
        <linearGradient id={`toothInner-${size}-${id || 'default'}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="65%" stopColor="#F0F9FF" />
          <stop offset="100%" stopColor="#E0F2FE" />
        </linearGradient>

        <linearGradient id={`shineGrad-${size}-${id || 'default'}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Orbit ring back curve */}
      <path 
        d="M 52,90 C 58,60 102,44 162,54 C 196,60 216,74 212,88 C 208,96 186,102 155,103" 
        fill="none" 
        stroke={`url(#orbitGrad-${size}-${id || 'default'})`} 
        strokeWidth="13" 
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Main Tooth Body - Deep Blue outline + Enamel fill */}
      <g>
        <path 
          d="M 85,25 
             C 105,27 115,36 120,38 
             C 125,36 135,27 155,25 
             C 185,22 205,42 200,82 
             C 196,115 186,140 178,175 
             C 174,195 160,205 148,202 
             C 138,200 135,185 133,165 
             C 131,148 127,125 120,125 
             C 113,125 109,148 107,165 
             C 105,185 102,200 92,202 
             C 80,205 66,195 62,175 
             C 54,140 44,115 40,82 
             C 35,42 55,22 85,25 Z" 
          fill={`url(#toothInner-${size}-${id || 'default'})`} 
          stroke="#1E3A8A" 
          strokeWidth="14" 
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Soft upper enamel highlight */}
        <path 
          d="M 86,37 
             C 103,39 113,46 120,48 
             C 127,46 137,39 154,37 
             C 178,35 188,52 185,80 
             C 181,102 173,124 167,150
             C 164,136 160,98 155,78
             C 148,58 134,48 115,48
             C 96,48 83,58 77,78
             C 71,102 67,134 65,150
             C 59,124 51,102 48,80
             C 45,52 55,35 86,37 Z" 
          fill={`url(#shineGrad-${size}-${id || 'default'})`} 
        />
      </g>

      {/* Orbit ring front swoosh looping dynamically across the tooth */}
      <path 
        d="M 36,118 
           C 33,107 54,94 90,84 
           C 132,72 178,71 208,82 
           C 222,87 227,95 221,105 
           C 213,119 178,136 134,146 
           C 88,156 50,151 40,138 
           C 36,133 34,125 36,118 Z" 
        fill={`url(#orbitGrad-${size}-${id || 'default'})`} 
      />

      {/* Aerodynamic luminous glow streak inside the ring */}
      <path 
        d="M 52,122 C 85,110 145,100 200,103" 
        fill="none" 
        stroke="#E0F2FE" 
        strokeWidth="3.5" 
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* "DENTAL CARE" Text label at bottom */}
      {showText && (
        <text 
          x="120" 
          y="244" 
          textAnchor="middle" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontSize="23" 
          fontWeight="800" 
          letterSpacing="2.5" 
          fill={textColor || '#0284C7'}
        >
          DENTAL CARE
        </text>
      )}
    </svg>
  );

  if (variant === 'badge') {
    return (
      <div 
        id={id}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-white border border-sky-100 shadow-xs hover:border-sky-200 transition-colors"
      >
        {svgContent}
        {showText && (
          <span className="text-xs font-bold text-sky-800 tracking-wider uppercase">
            Dental Care
          </span>
        )}
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div 
        id={id}
        className="p-3 bg-white rounded-2xl shadow-xs border border-sky-100/80 inline-flex items-center justify-center hover:scale-105 transition-transform"
      >
        {svgContent}
      </div>
    );
  }

  return (
    <div id={id} className="inline-flex flex-col items-center justify-center">
      {svgContent}
    </div>
  );
};
