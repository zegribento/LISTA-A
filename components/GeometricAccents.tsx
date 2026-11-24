'use client';

import React from 'react';
import Image from 'next/image';

export default function GeometricAccents() {
  return (
    <>
      {/* Desktop Full-Bleed Background */}
      <div
        aria-hidden="true"
        className="hidden lg:block pointer-events-none select-none absolute inset-0 overflow-hidden z-10"
      >
        <Image
          src="/assets/aistudio/Estudantes_Sorrindo_em_Banner_Moderno_94759dff.webp"
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 100vw, 1px"
          referrerPolicy="no-referrer"
          className="object-cover object-right-bottom"
        />
      </div>

      {/* Mobile & Tablet 3:4 Background filling the full hero region from top to bottom */}
      <div
        aria-hidden="true"
        className="lg:hidden pointer-events-none select-none absolute inset-0 overflow-hidden z-10"
      >
        <Image
          src="/assets/aistudio/hero_mobile_3x4_integral__1__fc2f3e07.jpg"
          alt=""
          width={1200}
          height={1600}
          priority
          sizes="100vw"
          referrerPolicy="no-referrer"
          className="absolute bottom-0 right-0 h-[242%] w-auto max-w-none block"
        />
        {/* Left readability feather for headline, paragraph and secondary link */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/55 to-transparent" />
        {/* Light bottom feather for OUVIR | REPRESENTAR | AGIR */}
        <div className="absolute inset-x-0 bottom-0 h-[76px] bg-gradient-to-t from-white/75 via-white/25 to-transparent" />
      </div>
    </>
  );
}
