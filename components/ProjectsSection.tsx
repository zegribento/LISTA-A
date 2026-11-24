'use client';

import React from 'react';
import Image from 'next/image';
import {motion} from 'motion/react';
import {ArrowRight} from 'lucide-react';
import type {SectionKey} from './InfoDrawer';

interface ProjectsSectionProps {
  onNavigate: (section: SectionKey) => void;
}

const PROJECTS = [
  {
    num: '01.',
    name: 'UGS Conexão',
    logo: '/assets/aistudio/Log_tipo_UGS_Conex_o_com_Cora__o____1239960a.png',
    subtitle: 'Acolhimento, inclusão e apoio responsável',
    description:
      'Um ponto presencial de escuta, orientação e encaminhamento estudantil com horários e local definidos. Funciona num modelo misto — voluntários preparados para o acolhimento inicial e profissionais habilitados para apoio especializado quando necessário — em articulação com a Universidade, garantindo confidencialidade, respeito e procedimentos claros.',
    motto: 'Ouvir, acolher e encaminhar com responsabilidade.',
    highlights: [
      'Acolhimento presencial',
      'Modelo misto com especialistas',
      'Confidencialidade e consentimento',
    ],
  },
  {
    num: '02.',
    name: 'UGS Palavra Viva',
    logo: '/assets/aistudio/Log_tipo_Palavraviva_com__rvore_e_Livro_41d1cd19.png',
    subtitle: 'Cultura, expressão e criatividade no campus',
    description:
      'Um espaço regular para poesia, leituras abertas, música, conversa sobre livros e partilha criativa nas instalações da Universidade Gregório Semedo. Com encontros presenciais quinzenais para 20 a 30 participantes, valoriza os talentos da comunidade académica e fortalece o sentido de pertença para além das salas de aula.',
    motto: 'Dar voz às ideias, espaço à cultura e palco aos talentos.',
    highlights: [
      'Encontros quinzenais',
      '20 a 30 participantes',
      'Poesia, leitura e música',
    ],
  },
  {
    num: '03.',
    name: 'UGS Descomplica Académico',
    logo: '/assets/aistudio/Logo_acad_mico_UGS_Descomplica_b3decb8b.png',
    subtitle: 'Aprender melhor. Avançar com confiança.',
    description:
      'Iniciativa de entreajuda estudantil focada no sucesso académico através de aulas de reforço, preparação para avaliações e mini-formações acessíveis conduzidas por estudantes veteranos voluntários. Complementa o trabalho dos docentes em disciplinas prioritárias com um modelo de voluntariado e contribuições simbólicas.',
    motto: 'Aprender em conjunto para avançar melhor.',
    highlights: [
      'Aulas de apoio e reforço',
      'Preparação para avaliações',
      'Aprendizagem colaborativa',
    ],
  },
  {
    num: '04.',
    name: 'UGS Uni Shark',
    logo: '/assets/aistudio/Remove_the_circle_2K_20261020222246_fb841de1.jpg',
    subtitle: 'Empreendedorismo, inovação e oportunidades',
    description:
      'Programa dedicado a transformar ideias de estudantes da Gregório Semedo em oportunidades reais de negócio, aproximando startups universitárias de um painel de quatro Sharks, investidores e empresas parceiras. Os três melhores projectos recebem prémios patrocinados, sendo o primeiro classificado elegível para financiamento efectivo e mentoria.',
    motto: 'As ideias dos estudantes merecem uma oportunidade para crescer.',
    highlights: [
      'Painel de 4 Sharks',
      'Mentoria e prémios',
      'Acesso a financiamento',
    ],
  },
];

export default function ProjectsSection({onNavigate}: ProjectsSectionProps) {
  return (
    <section
      id="projectos"
      aria-labelledby="projectos-titulo"
      className="relative w-full bg-[#F5F7FA] border-t border-[#DFE5EF] py-16 sm:py-20 lg:py-24 px-5 sm:px-8 md:px-12 lg:px-[calc(80*var(--u))]"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Section Header */}
        <motion.div
          initial={{opacity: 0, y: 12}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.25}}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
          className="mx-auto max-w-[680px] text-center flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="inline-block w-[42px] sm:w-[52px] h-[5px] rounded-[10px] bg-[#EF791B] shrink-0"
            />
            <span className="text-[13px] sm:text-[14px] font-semibold text-[#102B60] leading-none tracking-[0.04em] whitespace-nowrap">
              NOSSOS PROJECTOS
            </span>
          </div>

          <h2
            id="projectos-titulo"
            className="mt-4 text-[clamp(1.65rem,2.4vw,34px)] font-bold text-[#102B60] leading-[1.12] tracking-[-0.03em]"
          >
            Iniciativas pensadas para{' '}
            <span className="text-[#EF791B]">transformar o campus.</span>
          </h2>

          <p className="mt-3.5 text-[15px] sm:text-[16px] font-normal text-[#465775] leading-[1.68] tracking-[-0.01em]">
            Quatro projectos estruturantes desenhados com objectivos claros,
            implementação gradual e foco directo no bem-estar, na cultura, no
            sucesso académico e no empreendedorismo dos estudantes da UGS.
          </p>
        </motion.div>

        {/* Stacked Projects List — One Below Another, Centered */}
        <div className="mt-12 sm:mt-14 mx-auto max-w-[1000px] space-y-7 sm:space-y-8">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{opacity: 0, y: 14}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.2}}
              transition={{
                duration: 0.42,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white border border-[#DFE5EF] rounded-[20px] p-5 sm:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-12 items-center gap-5 sm:gap-9 lg:gap-12 transition-colors duration-150 hover:border-[#102B60]/30"
            >
              {/* Left Column — Official Project Logo */}
              <div className="md:col-span-5 flex items-center justify-center">
                <div className="w-full max-w-[300px] aspect-[16/10] md:aspect-[4/3] bg-white border border-[#DFE5EF] rounded-[16px] flex items-center justify-center p-4 sm:p-5">
                  <div className="relative w-full h-full">
                    <Image
                      src={project.logo}
                      alt={`Logótipo oficial de ${project.name}`}
                      fill
                      sizes="(max-width: 768px) 280px, 300px"
                      referrerPolicy="no-referrer"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column — Project Description & Details */}
              <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex items-center gap-2 text-[12.5px] font-semibold text-[#EF791B] tracking-[0.04em] uppercase">
                  <span>{project.num}</span>
                  <span aria-hidden="true">·</span>
                  <span>Projecto AEUGS</span>
                </div>

                <h3 className="mt-1.5 text-[22px] sm:text-[25px] font-bold text-[#102B60] leading-[1.18] tracking-[-0.025em]">
                  {project.name}
                </h3>

                <p className="mt-1 text-[14.5px] sm:text-[15px] font-semibold text-[#465775]">
                  {project.subtitle}
                </p>

                <p className="mt-3.5 text-[14.5px] sm:text-[15.5px] font-normal text-[#465775] leading-[1.68] tracking-[-0.01em]">
                  {project.description}
                </p>

                <div className="mt-5 pt-4 w-full border-t border-[#DFE5EF] flex flex-col gap-2">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2.5 gap-y-1 text-[12.5px] font-medium text-[#465775]">
                    {project.highlights.map((highlight, idx) => (
                      <React.Fragment key={highlight}>
                        {idx > 0 && (
                          <span aria-hidden="true" className="text-[#EF791B]">
                            ·
                          </span>
                        )}
                        <span>{highlight}</span>
                      </React.Fragment>
                    ))}
                  </div>
                  <p className="text-[13.5px] font-semibold text-[#102B60]">
                    “{project.motto}”
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 mx-auto max-w-[1000px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[14px] font-medium text-[#465775] text-center sm:text-left">
            Queres colaborar como voluntário, parceiro ou participante num destes projectos?
          </p>
          <button
            type="button"
            onClick={() => onNavigate('junta-te')}
            className="group inline-flex items-center self-center sm:self-auto text-[14.5px] sm:text-[15px] font-semibold text-[#102B60] bg-transparent py-1 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#102B60]"
          >
            <span className="border-b-2 border-[#EF791B] pb-[3px] group-hover:text-[#EF791B] transition-colors duration-150">
              Participar nos projectos
            </span>
            <ArrowRight
              className="ml-2 mb-[3px] w-[15px] h-[15px] stroke-[2.25] text-[#102B60] group-hover:text-[#EF791B] transition-all duration-150 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
