import React from 'react';

interface LogoProps {
  variant?: 'navbar' | 'full' | 'hero' | 'footer';
  className?: string;
  showGuns?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'navbar',
  className = '',
  showGuns = false
}) => {
  const [imageError, setImageError] = React.useState(false);

  if (variant === 'hero' || variant === 'full') {
    return (
      <div className={`relative flex flex-col items-center justify-center text-center select-none ${className}`}>
        {/* If emblem image is available, render with blend mode and crisp contrast */}
        {!imageError ? (
          <div className="relative w-full max-w-[420px] sm:max-w-[560px] mx-auto overflow-hidden rounded-2xl group">
            <img
              src="/src/assets/images/continent_logo_emblem_1790632962796.jpg"
              alt="Logo Oficial Continent Fast Repair"
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-auto object-contain filter contrast-125 brightness-110 drop-shadow-[0_10px_30px_rgba(225,6,0,0.35)]"
            />
          </div>
        ) : (
          <>
            {/* Upper Car Silhouette with Chrome & Red Headlight Accent */}
            <div className="relative w-full max-w-[340px] sm:max-w-[480px] h-14 sm:h-20 flex items-center justify-center">
              <svg
                viewBox="0 0 500 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-[0_4px_16px_rgba(225,6,0,0.3)]"
              >
                <defs>
                  <linearGradient id="chromeBody" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8A929B" />
                    <stop offset="25%" stopColor="#FFFFFF" />
                    <stop offset="50%" stopColor="#CFD4DA" />
                    <stop offset="75%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#6C747E" />
                  </linearGradient>
                  <linearGradient id="roofGleam" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="40%" stopColor="#A8B0B8" />
                    <stop offset="100%" stopColor="#121417" />
                  </linearGradient>
                  <radialGradient id="redHeadlight" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FF2018" />
                    <stop offset="60%" stopColor="#E10600" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Ground Shadow & Red Floor Reflection */}
                <ellipse cx="250" cy="112" rx="210" ry="6" fill="#E10600" fillOpacity="0.25" />
                <ellipse cx="250" cy="110" rx="230" ry="4" fill="#000000" fillOpacity="0.8" />

                {/* Fastback Coupe Silhouette */}
                <path
                  d="M 60 102 C 100 102 120 101 160 101 C 180 101 320 101 350 101 C 390 101 420 102 440 102"
                  stroke="#E10600"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 60 102 L 68 86 C 72 78 82 74 110 74 L 170 74 C 205 60 250 42 290 42 L 340 42 C 375 42 410 65 425 78 L 440 85 L 440 102 Z"
                  fill="url(#roofGleam)"
                  fillOpacity="0.85"
                />
                <path
                  d="M 68 82 C 110 80 160 78 200 75 C 260 70 330 70 380 73 C 410 76 430 81 440 85"
                  stroke="url(#chromeBody)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 180 72 C 215 52 245 44 285 44 L 335 44 C 360 44 385 58 405 74"
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 225 68 C 245 54 265 50 290 50 L 325 50 C 342 50 358 58 370 68 Z"
                  fill="#08090B"
                  stroke="#8A929B"
                  strokeWidth="1"
                />
                <circle cx="92" cy="85" r="7" fill="url(#redHeadlight)" />
                <circle cx="92" cy="85" r="3" fill="#FFFFFF" />
                <line x1="60" y1="87" x2="115" y2="87" stroke="#FF2018" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="145" cy="98" r="16" stroke="url(#chromeBody)" strokeWidth="2" fill="#08090B" />
                <circle cx="375" cy="98" r="16" stroke="url(#chromeBody)" strokeWidth="2" fill="#08090B" />
              </svg>
            </div>

            {/* Brand Chrome Wordmark: CONTINENT */}
            <div className="relative mt-1">
              <span className="block font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[0.14em] sm:tracking-[0.18em] uppercase text-chrome filter drop-shadow-[0_2px_12px_rgba(255,255,255,0.25)]">
                CONTINENT
              </span>
            </div>

            {/* Sub-brand Wordmark: FAST REPAIR with red flare streaks */}
            <div className="relative flex items-center justify-center gap-3 sm:gap-6 mt-1 sm:mt-2 w-full max-w-[480px]">
              <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-[#E10600] to-[#FF2018] relative">
                <span className="absolute right-0 -top-[3px] w-2 h-2 rounded-full bg-[#FF2018] blur-[1px]"></span>
              </div>

              <span className="font-display italic text-lg sm:text-2xl md:text-3xl font-black tracking-[0.22em] uppercase text-[#E10600] drop-shadow-[0_0_14px_rgba(225,6,0,0.8)] px-2 whitespace-nowrap">
                FAST REPAIR
              </span>

              <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent via-[#E10600] to-[#FF2018] relative">
                <span className="absolute left-0 -top-[3px] w-2 h-2 rounded-full bg-[#FF2018] blur-[1px]"></span>
              </div>
            </div>
          </>
        )}

        {/* Optional spray gun mist reflection */}
        {showGuns && (
          <div className="text-[11px] font-mono-tech tracking-[0.25em] text-[#9CA3AA] mt-3 uppercase">
            Funilaria & Pintura Automotiva
          </div>
        )}
      </div>
    );
  }

  // Navbar & Footer compact version (Strict 3-zone contract compliant)
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      {/* Mini metallic car mark icon */}
      <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#0D0F12] border border-white/10 flex items-center justify-center p-1 overflow-hidden transition-all duration-300 group-hover:border-[#E10600]/40 group-hover:shadow-[0_0_15px_-3px_rgba(225,6,0,0.4)]">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[#E10600]/10 opacity-70"></div>
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 relative z-10"
        >
          {/* Car profile vector */}
          <path
            d="M4 22L7 16C8 14 10 13 13 13H19C22 13 24 14 25 16L28 22"
            stroke="#D7DADF"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M3 22H29"
            stroke="#E10600"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="8" cy="22" r="2.5" fill="#181B20" stroke="#FFFFFF" strokeWidth="1" />
          <circle cx="24" cy="22" r="2.5" fill="#181B20" stroke="#FFFFFF" strokeWidth="1" />
          <line x1="12" y1="16" x2="16" y2="16" stroke="#FF2018" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Brand wordmark typography */}
      <div className="flex flex-col leading-none">
        <span className="font-display text-base sm:text-lg font-extrabold tracking-[0.12em] text-white group-hover:text-chrome transition-colors">
          CONTINENT
        </span>
        <div className="flex items-center gap-1 mt-0.5">
          <span className="font-display italic text-[9px] sm:text-[10px] font-black tracking-[0.2em] text-[#E10600] group-hover:text-[#FF2018] transition-colors">
            FAST REPAIR
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]/80 animate-pulse"></span>
        </div>
      </div>
    </div>
  );
};
