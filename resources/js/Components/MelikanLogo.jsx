import React from 'react';

export default function MelikanLogo({ className = 'h-10', showText = true, variant = 'dark' }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="images/logo-melikan.png"
        alt="Sentra Melikan Logo"
        className="h-full w-auto object-contain"
      />
    </div>
  );
}

