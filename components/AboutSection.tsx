'use client';

import React from 'react';
import Image from 'next/image';
import {motion} from 'motion/react';
import {ArrowRight} from 'lucide-react';
import type {SectionKey} from './InfoDrawer';

interface AboutSectionProps {
  onNavigate: (section: SectionKey) => void;
}

const PILLARS = [
  {
    title: 'Representar',
    description:
      'Diálogo institucional responsável e defesa activa dos estudantes junto da Universidade.',
  },
  {
    title: 'Servir',
    description:
      'Presença próxima, escuta contínua e resposta prática às necessidades reais do campus.',
  },
  {
    title: 'Transformar',
    description:
      'Inovação através de soluções concretas que ampliam oportunidades e vida académica.',
  },
];

export default function AboutSection({onNavigate}: AboutSectionProps) {
  return (
    <section
      id="sobre-a-lista"
      aria-labelledby="sobre-a-lista-titulo"
      className="relative w-full bg-white border-t border-[#DFE5EF] py-16 sm:py-20 lg:py-24 px-5 sm:px-8 md:px-12 lg:px-[calc(80*var(--u))]"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-14 xl:gap-16">
          {/* Left Column — Centered LISTA A Logo Showcase */}
          <motion.div
            initial={{opacity: 0, y: 12}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.25}}
            transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-[380px] bg-white border border-[#DFE5EF] rounded-[20px] px-5 py-6 sm:px-9 sm:py-10 flex flex-col items-center justify-center">
              {/* Subtle institutional top accent line */}
              <span
                aria-hidden="true"
                className="w-10 h-[3px] rounded-[10px] bg-[#EF791B] mb-5"
              />

              {/* Attached LISTA A Logo cropped cleanly around the graphic bounds */}
              <div className="relative w-full aspect-[2400/860] overflow-hidden bg-white">
                <Image
                  src="/assets/aistudio/LISTA_A_logo_reconstruction_76b19640_2K_6e2693fc.jpg"
                  alt="Logótipo oficial da Lista A — Uma Nova Etapa, O Mesmo Compromisso!"
                  fill
                  sizes="(max-width: 1024px) 80vw, 320px"
                  referrerPolicy="no-referrer"
                  className="object-cover object-[50%_51.5%]"
                />
              </div>

              {/* Clean unboxed institutional caption */}
              <div className="mt-5 pt-4 w-full border-t border-[#DFE5EF] flex flex-wrap items-center justify-center gap-2 text-[12px] sm:text-[12.5px] font-medium text-[#465775] tracking-[0.01em] text-center">
                <span className="text-[#102B60] font-semibold">AEUGS</span>
                <span aria-hidden="true" className="text-[#EF791B]">
                  ·
                </span>
                <span>Representar</span>
                <span aria-hidden="true" className="text-[#EF791B]">
                  ·
                </span>
                <span>Servir</span>
                <span aria-hidden="true" className="text-[#EF791B]">
                  ·
                </span>
                <span>Transformar</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Vertically Centered Editorial Content */}
          <motion.div
            initial={{opacity: 0, y: 12}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.25}}
            transition={{duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="w-full max-w-[540px] mx-auto lg:mx-0 flex flex-col items-center lg:items-start">
              {/* Section Identification Label */}
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span
                  aria-hidden="true"
                  className="inline-block w-[42px] sm:w-[52px] h-[5px] rounded-[10px] bg-[#EF791B] shrink-0"
                />
                <span className="text-[13px] sm:text-[14px] font-semibold text-[#102B60] leading-none tracking-[0.04em] whitespace-nowrap">
                  SOBRE A LISTA A
                </span>
              </div>

              {/* Section Heading */}
              <h2
                id="sobre-a-lista-titulo"
                className="mt-4 text-[clamp(1.65rem,2.4vw,34px)] font-bold text-[#102B60] leading-[1.12] tracking-[-0.03em]"
              >
                Continuidade, responsabilidade e{' '}
                <span className="text-[#EF791B]">ambição de evoluir.</span>
              </h2>

              {/* Body Copy grounded in Plano Estratégico da LISTA A */}
              <div className="mt-4 space-y-3.5 text-[15px] sm:text-[16px] font-normal text-[#465775] leading-[1.7] tracking-[-0.01em]">
                <p>
                  A Lista A apresenta-se à AEUGS com uma visão clara: não apagar o trabalho já construído, mas dar continuidade ao legado positivo da associação, responder às prioridades reais dos estudantes e levar a instituição mais longe.
                </p>
                <p>
                  Orientada pela linha de acção{' '}
                  <strong className="font-semibold text-[#102B60]">
                    Continuar. Melhorar. Inovar. Crescer.
                  </strong>
                  , a candidatura combina escuta presencial em todos os cursos, diálogo aberto e compromissos específicos, compreensíveis e verificáveis.
                </p>
              </div>

              {/* Official Three Pillars from the Strategic Plan */}
              <div className="mt-6 pt-5 w-full border-t border-[#DFE5EF] grid grid-cols-1 sm:grid-cols-3 divide-y divide-[#DFE5EF] sm:divide-y-0 sm:gap-5 text-center lg:text-left">
                {PILLARS.map((pillar) => (
                  <div key={pillar.title} className="py-3.5 first:pt-0 last:pb-0 sm:py-0">
                    <div className="text-[14px] font-semibold text-[#102B60]">
                      {pillar.title}
                    </div>
                    <p className="mt-1 text-[13px] font-normal text-[#465775] leading-[1.55]">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Link consistent with Hero Secondary CTA */}
              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6">
                <button
                  type="button"
                  onClick={() => onNavigate('propostas')}
                  className="group inline-flex items-center text-[14.5px] sm:text-[15px] font-semibold text-[#102B60] bg-transparent py-1 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#102B60]"
                >
                  <span className="border-b-2 border-[#EF791B] pb-[3px] group-hover:text-[#EF791B] transition-colors duration-150">
                    Explorar as nossas propostas
                  </span>
                  <ArrowRight
                    className="ml-2 mb-[3px] w-[15px] h-[15px] stroke-[2.25] text-[#102B60] group-hover:text-[#EF791B] transition-all duration-150 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
