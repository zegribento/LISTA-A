'use client';

import React, {useState} from 'react';
import Image from 'next/image';
import {ArrowRight, Menu, X} from 'lucide-react';
import type {SectionKey} from './InfoDrawer';

interface HeaderProps {
  onNavigate: (section: SectionKey) => void;
}

const NAV_ITEMS: {label: string; key: SectionKey}[] = [
  {label: 'A Lista', key: 'a-lista'},
  {label: 'Propostas', key: 'propostas'},
  {label: 'Equipa', key: 'equipa'},
  {label: 'Projectos', key: 'projectos'},
  {label: 'Contactos', key: 'contactos'},
];

export default function Header({onNavigate}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (key: SectionKey) => {
    setMobileMenuOpen(false);
    onNavigate(key);
  };

  return (
    <header className="relative z-20 w-full h-[64px] sm:h-[76px] lg:h-[calc(114*var(--u))] px-4 sm:px-8 md:px-12 lg:px-[calc(80*var(--u))] border-b border-[#DFE5EF] bg-transparent flex items-center justify-between">
      {/* Zone 1: Left section — Original supplied LISTA A Logo (230x55 at left 80 on 1648x928) */}
      <a
        href="#topo"
        aria-label="LISTA A · AEUGS — Página inicial"
        className="shrink-0 flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#102B60]"
      >
        <Image
          src="/assets/lista-a-logo.png"
          alt="LISTA A"
          width={230}
          height={55}
          priority
          referrerPolicy="no-referrer"
          className="w-[126px] sm:w-[168px] lg:w-[calc(230*var(--u))] lg:h-[calc(55*var(--u))] object-contain object-left"
        />
      </a>

      {/* Zone 2: Center section — Horizontal Navigation (17px font, 48px spacing on 1648x928) */}
      <nav
        aria-label="Navegação principal"
        className="hidden lg:flex items-center lg:gap-[calc(48*var(--u))]"
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => handleNavClick(item.key)}
            className="text-[calc(17*var(--u))] font-semibold text-[#102B60] hover:text-[#EF791B] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#102B60]"
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Zone 3: Right section — Main Header CTA (px 27, py 15, radius 32, 17px bold on 1648x928) */}
      <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
        <button
          type="button"
          onClick={() => handleNavClick('junta-te')}
          className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 lg:gap-[calc(10*var(--u))] bg-[#102B60] text-white text-[12.5px] sm:text-[14px] lg:text-[calc(17*var(--u))] font-bold rounded-[32px] lg:rounded-[calc(32*var(--u))] px-3.5 py-2.5 sm:px-5 lg:px-[calc(27*var(--u))] lg:py-[calc(15*var(--u))] leading-none hover:bg-[#16387A] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#102B60]"
        >
          <span>Junta-te a nós</span>
          <ArrowRight
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-[calc(17*var(--u))] lg:h-[calc(17*var(--u))] stroke-[2.25] transition-transform duration-150 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </button>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#DFE5EF] bg-white text-[#102B60] hover:border-[#102B60] transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" aria-hidden="true" />
          ) : (
            <Menu className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-[#DFE5EF] px-5 sm:px-8 py-4 z-30 shadow-sm">
          <nav aria-label="Menu móvel" className="flex flex-col divide-y divide-[#DFE5EF]/70">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => handleNavClick(item.key)}
                className="text-left text-[15.5px] font-semibold text-[#102B60] hover:text-[#EF791B] min-h-[44px] py-3 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="pt-4 mt-2 border-t border-[#DFE5EF]">
            <button
              type="button"
              onClick={() => handleNavClick('junta-te')}
              className="w-full min-h-[46px] bg-[#102B60] text-white text-[14.5px] font-bold rounded-[32px] px-5 py-2.5 inline-flex items-center justify-center gap-2 hover:bg-[#16387A] transition-colors cursor-pointer"
            >
              <span>Junta-te a nós</span>
              <ArrowRight className="w-4 h-4 stroke-[2.25]" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
