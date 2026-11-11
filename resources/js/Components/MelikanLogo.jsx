import React from 'react';

export default function MelikanLogo({ className = 'h-12', showText = true, variant = 'dark' }) {
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* SVG Icon Emblem */}
      <div className="w-11 h-11 shrink-0 relative">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          <defs>
            <linearGradient id="logoClayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C2593F"/>
              <stop offset="50%" stopColor="#B84A39"/>
              <stop offset="100%" stopColor="#8C2C1D"/>
            </linearGradient>
            <linearGradient id="logoOchreGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#BA7325"/>
              <stop offset="100%" stopColor="#E5A84B"/>
            </linearGradient>
          </defs>

          {/* Base rounded disc */}
          <rect x="2" y="2" width="96" height="96" rx="26" fill="#FAF8F5" stroke="#EAE1D3" strokeWidth="2.5"/>

          {/* 35 degree tilted wheel axis */}
          <g transform="rotate(-35 50 50)">
            <ellipse cx="50" cy="80" rx="34" ry="8" fill="none" stroke="url(#logoOchreGrad)" strokeWidth="2.5" strokeDasharray="4 3"/>
          </g>

          {/* Kendi Maling & Spout */}
          <g>
            {/* Neck & Lip */}
            <path d="M 46 26 C 46 24 48 23 50 23 C 52 23 54 24 54 26 L 54 31 L 46 31 Z" fill="#BA7325"/>
            <ellipse cx="50" cy="23" rx="4.5" ry="1.5" fill="#E5A84B"/>

            {/* Belly */}
            <path d="M 50 31 C 54 31 58 36 58 43 C 58 47 61 51 66 56 C 73 63 75 72 70 80 C 65 86 58 87 50 87 C 42 87 35 86 30 80 C 25 72 27 63 34 56 C 39 51 42 47 42 43 C 42 36 46 31 50 31 Z" fill="url(#logoClayGrad)"/>
            
            {/* Spout */}
            <path d="M 33 61 C 25 58 19 50 22 42 C 23 40 25 41 25 43 C 23 49 28 55 34 57 Z" fill="url(#logoClayGrad)"/>

            {/* Highlight */}
            <path d="M 58 59 C 63 65 64 73 60 78 C 58 80 56 81 54 82 C 58 79 61 74 60 69 C 60 64 56 61 54 58 Z" fill="#FFFFFF" opacity="0.4"/>

            {/* Cultural Spark */}
            <circle cx="74" cy="27" r="3" fill="url(#logoOchreGrad)"/>
            <path d="M 74 21 L 74 33 M 68 27 L 80 27" stroke="#E5A84B" strokeWidth="1.2" strokeLinecap="round"/>
          </g>
        </svg>
      </div>

      {/* Typography Lockup */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span className={`font-heritage font-bold text-xl tracking-tight ${variant === 'light' ? 'text-white' : 'text-stone-900'}`}>
              Melikan<span className="text-[#B84A39]">Clay</span>
            </span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#FBECE8] text-[#B84A39] border border-[#F6D5CC]">
              WBTb
            </span>
          </div>
          <span className={`text-[10px] font-semibold uppercase tracking-[0.16em] mt-1 ${variant === 'light' ? 'text-stone-400' : 'text-stone-500'}`}>
            Sentra Gerabah Melikan &amp; Paseban
          </span>
        </div>
      )}
    </div>
  );
}

