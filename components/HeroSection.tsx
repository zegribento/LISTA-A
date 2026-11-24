'use client';

import React, {useState} from 'react';
import Image from 'next/image';
import {motion} from 'motion/react';
import {ArrowRight} from 'lucide-react';
import Header from './Header';
import GeometricAccents from './GeometricAccents';
import AboutSection from './AboutSection';
import ProposalsSection from './ProposalsSection';
import TeamSection from './TeamSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import InfoDrawer, {type SectionKey} from './InfoDrawer';

export default function HeroSection() {
  const [activeSection, setActiveSection] = useState<SectionKey>(null);

  const handleNavigate = (section: SectionKey) => {
    if (section === 'a-lista') {
      const target = document.getElementById('sobre-a-lista');
      if (target) {
        target.scrollIntoView({behavior: 'smooth'});
        return;
      }
    }
    if (section === 'propostas') {
      const target = document.getElementById('propostas');
      if (target) {
        target.scrollIntoView({behavior: 'smooth'});
        return;
      }
    }
    if (section === 'equipa') {
      const target = document.getElementById('equipa');
      if (target) {
        target.scrollIntoView({behavior: 'smooth'});
        return;
      }
    }
    if (section === 'projectos') {
      const target = document.getElementById('projectos');
      if (target) {
        target.scrollIntoView({behavior: 'smooth'});
        return;
      }
    }
    if (section === 'contactos') {
      const target = document.getElementById('contactos');
      if (target) {
        target.scrollIntoView({behavior: 'smooth'});
        return;
      }
    }
    setActiveSection(section);
  };

  return (
    <div className="w-full bg-white text-[#102B60] overflow-x-hidden">
      <div
        id="topo"
        className="relative lg:h-auto lg:min-h-[max(100vh,calc(100vw*941/1672))] w-full bg-white text-[#102B60] overflow-x-hidden flex flex-col"
      >
        {/* Background & Geometric Brand Elements (Desktop full-bleed) */}
        <GeometricAccents />

        {/* Horizontal Full-Width Header (height: 114u on 1648x928) */}
        <Header onNavigate={handleNavigate} />

        {/* Main Hero Section — strictly aligned to 1648x928 coordinate system */}
        {/* Header ends at 114u; Identification label begins at 218u -> pt = 104u */}
        <main className="relative z-20 flex-1 w-full lg:min-h-[calc(814*var(--u))] px-5 sm:px-8 md:px-12 lg:px-[calc(80*var(--u))] pt-6 sm:pt-9 md:pt-11 lg:pt-[calc(104*var(--u))] pb-7 sm:pb-10 md:pb-12 lg:pb-[calc(90*var(--u))] flex flex-col justify-start">
          <div className="w-full max-w-[850px] lg:max-w-[calc(850*var(--u))]">
            {/* 6. Identification Label (top: 218u, height: 19u -> ends at 237u) */}
            <motion.div
              initial={{opacity: 0, y: 6}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.35, ease: [0.16, 1, 0.3, 1]}}
              className="flex items-center gap-2.5 sm:gap-3.5 lg:gap-[calc(14*var(--u))]"
            >
              <span
                aria-hidden="true"
                className="inline-block w-[44px] sm:w-[64px] lg:w-[calc(79*var(--u))] h-[5px] sm:h-[6px] lg:h-[calc(7*var(--u))] rounded-[10px] lg:rounded-[calc(10*var(--u))] bg-[#EF791B] shrink-0"
              />
              <span className="text-[13.5px] sm:text-[16px] lg:text-[calc(19*var(--u))] font-bold text-[#102B60] leading-none whitespace-nowrap">
                LISTA A · AEUGS
              </span>
            </motion.div>

            {/* 7. Main Headline (top: 270u -> mt: 33u from 237u; font-size: 88u, line-height: 0.924 -> height: 244u, ends at 514u) */}
            <motion.h1
              initial={{opacity: 0, y: 8}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.4, delay: 0.04, ease: [0.16, 1, 0.3, 1]}}
              className="mt-4 sm:mt-6 lg:mt-[calc(33*var(--u))] max-w-[850px] lg:max-w-[calc(850*var(--u))] text-left font-extrabold text-[#102B60] text-[clamp(2.15rem,9.2vw,3.2rem)] sm:text-[clamp(2.75rem,6vw,4rem)] lg:text-[calc(88*var(--u))] leading-[0.94] lg:leading-[0.924] tracking-[-0.035em] lg:tracking-[calc(-3.5*var(--u))]"
            >
              <span className="block lg:whitespace-nowrap text-[#102B60]">
                Uma Nova Etapa,
              </span>
              <span className="block lg:whitespace-nowrap text-[#102B60]">
                O Mesmo
              </span>
              <span className="block lg:whitespace-nowrap text-[#EF791B]">
                Compromisso!
              </span>
            </motion.h1>

            {/* 8. Supporting Description (top: 538u -> mt: 24u from 514u; font-size: 25u, line-height: 1.5 -> height: 75u, ends at 613u) */}
            <motion.p
              initial={{opacity: 0, y: 8}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1]}}
              className="mt-3.5 sm:mt-5 lg:mt-[calc(24*var(--u))] max-w-[710px] lg:max-w-[calc(710*var(--u))] text-left font-medium text-[#465775] text-[15px] sm:text-[18px] lg:text-[calc(25*var(--u))] leading-[1.48] lg:leading-[1.5] tracking-[-0.015em] lg:tracking-[calc(-0.6*var(--u))]"
            >
              <span className="lg:block lg:whitespace-nowrap">
                Uma candidatura que quer construir uma AEUGS{' '}
              </span>
              <span className="lg:block lg:whitespace-nowrap">
                mais próxima, participativa e atenta às tuas prioridades.
              </span>
            </motion.p>

            {/* 9. Call-To-Action Buttons (top: 633u -> mt: 20u from 613u; height: 67u -> ends at 700u) */}
            <motion.div
              initial={{opacity: 0, y: 8}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.4, delay: 0.12, ease: [0.16, 1, 0.3, 1]}}
              className="mt-5 sm:mt-7 lg:mt-[calc(20*var(--u))] flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 lg:gap-[calc(34*var(--u))]"
            >
              {/* Primary Button (322x67, radius 36, font 17 bold on 1648x928) */}
              <button
                type="button"
                onClick={() => handleNavigate('propostas')}
                className="group w-fit sm:w-[280px] lg:w-[calc(322*var(--u))] h-[48px] sm:h-[56px] lg:h-[calc(67*var(--u))] bg-[#102B60] text-white rounded-[36px] lg:rounded-[calc(36*var(--u))] px-6 lg:px-0 inline-flex items-center justify-center gap-3 lg:gap-[calc(12*var(--u))] text-[14.5px] sm:text-[15px] lg:text-[calc(17*var(--u))] font-bold hover:bg-[#16387A] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#102B60]"
              >
                <span>Conhece as propostas</span>
                <ArrowRight
                  className="w-4 h-4 lg:w-[calc(18*var(--u))] lg:h-[calc(18*var(--u))] stroke-[2.25] transition-transform duration-150 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>

              {/* Secondary Button (17px bold, 2px orange underline, 34px spacing from primary) */}
              <button
                type="button"
                onClick={() => handleNavigate('equipa')}
                className="group inline-flex items-center self-start sm:self-center min-h-[40px] lg:min-h-0 text-[14.5px] sm:text-[15px] lg:text-[calc(17*var(--u))] font-bold text-[#102B60] bg-transparent py-1 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#102B60]"
              >
                <span className="border-b-2 border-[#EF791B] pb-[4px] lg:pb-[calc(5*var(--u))] group-hover:text-[#EF791B] transition-colors duration-150">
                  Conhece a nossa equipa
                </span>
                <ArrowRight
                  className="ml-2.5 lg:ml-[calc(10*var(--u))] mb-[4px] lg:mb-[calc(5*var(--u))] w-4 h-4 lg:w-[calc(18*var(--u))] lg:h-[calc(18*var(--u))] stroke-[2.25] text-[#102B60] group-hover:text-[#EF791B] transition-all duration-150 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </motion.div>

            {/* 10. Values / Feature Row (top: 778u -> mt: 78u from 700u; icons 34-38u, font 16u bold, separator 40u) */}
            <motion.div
              initial={{opacity: 0, y: 8}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.4, delay: 0.16, ease: [0.16, 1, 0.3, 1]}}
              className="mt-6 sm:mt-9 lg:mt-[calc(78*var(--u))] flex items-center justify-between sm:justify-start [text-shadow:0_1px_10px_rgba(255,255,255,0.95)] lg:[text-shadow:none]"
            >
              {/* Item 1: OUVIR */}
              <button
                type="button"
                onClick={() => handleNavigate('a-lista')}
                className="group inline-flex items-center gap-1.5 sm:gap-2.5 lg:gap-[calc(12*var(--u))] min-h-[44px] lg:min-h-0 text-[#102B60] hover:opacity-80 transition-opacity duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#102B60]"
              >
                <Image
                  src="/assets/icon-ouvir.png"
                  alt=""
                  width={53}
                  height={33}
                  referrerPolicy="no-referrer"
                  className="h-[20px] sm:h-[24px] lg:h-[calc(34*var(--u))] w-auto object-contain shrink-0"
                />
                <span className="text-[11.5px] sm:text-[14px] lg:text-[calc(16*var(--u))] font-bold tracking-[0.01em] text-[#102B60] whitespace-nowrap">
                  OUVIR
                </span>
              </button>

              {/* Vertical Orange Separator 1 */}
              <span
                aria-hidden="true"
                className="mx-2 sm:mx-5 lg:mx-[calc(28*var(--u))] w-[2px] h-[24px] sm:h-[32px] lg:h-[calc(40*var(--u))] bg-[#EF791B] shrink-0"
              />

              {/* Item 2: REPRESENTAR */}
              <button
                type="button"
                onClick={() => handleNavigate('a-lista')}
                className="group inline-flex items-center gap-1.5 sm:gap-2.5 lg:gap-[calc(12*var(--u))] min-h-[44px] lg:min-h-0 text-[#102B60] hover:opacity-80 transition-opacity duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#102B60]"
              >
                <Image
                  src="/assets/icon-representar.png"
                  alt=""
                  width={47}
                  height={30}
                  referrerPolicy="no-referrer"
                  className="h-[19px] sm:h-[24px] lg:h-[calc(34*var(--u))] w-auto object-contain shrink-0"
                />
                <span className="text-[11.5px] sm:text-[14px] lg:text-[calc(16*var(--u))] font-bold tracking-[0.01em] text-[#102B60] whitespace-nowrap">
                  REPRESENTAR
                </span>
              </button>

              {/* Vertical Orange Separator 2 */}
              <span
                aria-hidden="true"
                className="mx-2 sm:mx-5 lg:mx-[calc(28*var(--u))] w-[2px] h-[24px] sm:h-[32px] lg:h-[calc(40*var(--u))] bg-[#EF791B] shrink-0"
              />

              {/* Item 3: AGIR */}
              <button
                type="button"
                onClick={() => handleNavigate('projectos')}
                className="group inline-flex items-center gap-1.5 sm:gap-2.5 lg:gap-[calc(12*var(--u))] min-h-[44px] lg:min-h-0 text-[#102B60] hover:opacity-80 transition-opacity duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#102B60]"
              >
                <Image
                  src="/assets/icon-agir.png"
                  alt=""
                  width={38}
                  height={38}
                  referrerPolicy="no-referrer"
                  className="h-[23px] sm:h-[30px] lg:h-[calc(38*var(--u))] w-auto object-contain shrink-0"
                />
                <span className="text-[11.5px] sm:text-[14px] lg:text-[calc(16*var(--u))] font-bold tracking-[0.01em] text-[#102B60] whitespace-nowrap">
                  AGIR
                </span>
              </button>
            </motion.div>
          </div>
        </main>
      </div>

      {/* Secção Sobre a Lista A */}
      <AboutSection onNavigate={handleNavigate} />

      {/* Secção Propostas */}
      <ProposalsSection onNavigate={handleNavigate} />

      {/* Secção Nossa Equipa */}
      <TeamSection onNavigate={handleNavigate} />

      {/* Secção Nossos Projectos */}
      <ProjectsSection onNavigate={handleNavigate} />

      {/* Secção Contactos e Redes Sociais */}
      <ContactSection onNavigate={handleNavigate} />

      {/* Rodapé Institucional */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Institutional Drawer for Navigation & CTAs */}
      <InfoDrawer
        activeSection={activeSection}
        onClose={() => setActiveSection(null)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
