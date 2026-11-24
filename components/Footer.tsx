'use client';

import React from 'react';
import Image from 'next/image';
import {ArrowUp} from 'lucide-react';
import type {SectionKey} from './InfoDrawer';

interface FooterProps {
  onNavigate: (section: SectionKey) => void;
}

const FOOTER_LINKS: {label: string; key: SectionKey}[] = [
  {label: 'A Lista', key: 'a-lista'},
  {label: 'Propostas', key: 'propostas'},
  {label: 'Equipa', key: 'equipa'},
  {label: 'Projectos', key: 'projectos'},
  {label: 'Contactos', key: 'contactos'},
];

export default function Footer({onNavigate}: FooterProps) {
  const scrollToTop = () => {
    const topo = document.getElementById('topo');
    if (topo) {
      topo.scrollIntoView({behavior: 'smooth'});
    } else {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  };

  return (
    <footer className="w-full bg-[#F5F7FA] border-t border-[#DFE5EF] py-10 sm:py-12 px-6 md:px-12 lg:px-[calc(80*var(--u))]">
      <div className="mx-auto max-w-[1120px] flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <Image
              src="/assets/lista-a-logo.png"
              alt="LISTA A"
              width={180}
              height={43}
              referrerPolicy="no-referrer"
              className="w-[150px] sm:w-[170px] h-auto object-contain"
            />
            <p className="text-[13px] font-medium text-[#465775]">
              Uma Nova Etapa, O Mesmo Compromisso!
            </p>
          </div>

          {/* Navigation Links */}
          <nav
            aria-label="Navegação de rodapé"
            className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2.5"
          >
            {FOOTER_LINKS.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => onNavigate(item.key)}
                className="text-[14px] font-semibold text-[#102B60] hover:text-[#EF791B] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#102B60]"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom Hairline Bar */}
        <div className="pt-6 border-t border-[#DFE5EF] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-[12.5px] font-medium text-[#465775]">
            <span className="font-semibold text-[#102B60]">LISTA A · AEUGS</span>
            <span aria-hidden="true" className="text-[#EF791B]">
              ·
            </span>
            <span>Universidade Gregório Semedo</span>
            <span aria-hidden="true" className="text-[#EF791B]">
              ·
            </span>
            <span>Representar · Servir · Transformar</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#102B60] hover:text-[#EF791B] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#102B60]"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 stroke-[2.25]" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
