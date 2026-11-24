'use client';

import React from 'react';
import Image from 'next/image';
import {motion} from 'motion/react';
import {ArrowRight} from 'lucide-react';
import type {SectionKey} from './InfoDrawer';

interface TeamSectionProps {
  onNavigate: (section: SectionKey) => void;
}

const TEAM_MEMBERS = [
  {
    name: 'Djalil Zau',
    role: 'Presidente',
    summary:
      'Coordenação geral, visão estratégica e representação institucional da Lista A · AEUGS.',
    photo: '/assets/aistudio/djalil_zau_1ac43ad5.png',
    imgClass:
      'object-contain object-bottom scale-[1.15] origin-bottom transition-transform duration-300 ease-out group-hover:scale-[1.18]',
  },
  {
    name: 'Márcia Silva',
    role: 'Vice-Presidente',
    summary:
      'Articulação entre cursos, acompanhamento pedagógico e proximidade contínua aos estudantes.',
    photo: '/assets/aistudio/m_rcia_silva_1fdff9dd.png',
    imgClass:
      'object-contain object-bottom scale-[1.18] origin-bottom transition-transform duration-300 ease-out group-hover:scale-[1.21]',
  },
  {
    name: 'Sidney Otávio',
    role: 'Secretário-Geral',
    summary:
      'Organização executiva, documentação oficial, conformidade e acompanhamento dos compromissos.',
    photo: '/assets/aistudio/sidney_Oct_vio_741b026d.png',
    imgClass:
      'object-contain object-bottom scale-[1.15] origin-bottom transition-transform duration-300 ease-out group-hover:scale-[1.18]',
  },
];

const DEPARTMENT_HEADS = [
  {
    department: 'Departamento de Tecnologia e Comunicação',
    name: 'Carlos Abreu',
    role: 'Secretário',
    photo: '/assets/aistudio/carlos_abreu_1bfee5a2.png',
    imgClass:
      'object-contain object-bottom scale-[1.32] origin-bottom transition-transform duration-300 ease-out group-hover:scale-[1.35]',
  },
  {
    department: 'Departamento para Assuntos Jurídicos',
    name: 'Kiamy Carvalhos',
    role: 'Secretário',
    photo: '/assets/aistudio/kiamy_Carvalho_c794f09e.png',
    imgClass:
      'object-contain object-bottom scale-[1.16] origin-bottom transition-transform duration-300 ease-out group-hover:scale-[1.19]',
  },
  {
    department: 'Departamento para Assuntos Acadêmicos',
    name: 'Jorge Luhaco',
    role: 'Secretário',
    photo: '/assets/aistudio/jorge_luhaco_44955098.png',
    imgClass:
      'object-contain object-bottom scale-[1.03] origin-bottom transition-transform duration-300 ease-out group-hover:scale-[1.06]',
  },
  {
    department: 'Departamento para Assuntos Científicos e Pós-Graduação',
    name: 'Priscila Antônio',
    role: 'Secretária',
    photo: '/assets/aistudio/priscila_ant_nio_43807675.png',
    imgClass:
      'object-contain object-bottom scale-[1.26] origin-bottom transition-transform duration-300 ease-out group-hover:scale-[1.29]',
  },
  {
    department: 'Departamento para Ambiente e Ação Social',
    name: 'Lourdes Sebastião',
    role: 'Secretária',
    photo: '/assets/aistudio/lourdes_sebasti_o_a11d9584.png',
    imgClass:
      'object-contain object-bottom scale-[1.27] origin-bottom transition-transform duration-300 ease-out group-hover:scale-[1.30]',
  },
  {
    department: 'Departamento para Recreação e Cultura',
    name: 'Helbér Carvalho',
    role: 'Secretário',
    photo: '/assets/aistudio/h_lber_carvalho_55e12902.png',
    imgClass:
      'object-contain object-bottom scale-[1.16] origin-bottom transition-transform duration-300 ease-out group-hover:scale-[1.19]',
  },
  {
    department: 'Departamento para o Desporto',
    name: 'Victor Pereira',
    role: 'Secretário',
    photo: '/assets/aistudio/victor_pereira_840ffff2.png',
    imgClass:
      'object-contain object-bottom scale-[1.30] origin-bottom transition-transform duration-300 ease-out group-hover:scale-[1.33]',
  },
  {
    department: 'Departamento Financeiro',
    name: 'Aliana Candeia',
    role: 'Secretária',
    photo: '/assets/aistudio/Aliana_Candeia_fc3d95d6.png',
    imgClass:
      'object-contain object-bottom scale-[1.26] origin-bottom transition-transform duration-300 ease-out group-hover:scale-[1.29]',
  },
];

export default function TeamSection({onNavigate}: TeamSectionProps) {
  return (
    <section
      id="equipa"
      aria-labelledby="equipa-titulo"
      className="relative w-full bg-white border-t border-[#DFE5EF] py-16 sm:py-20 lg:py-24 px-5 sm:px-8 md:px-12 lg:px-[calc(80*var(--u))]"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Section Header */}
        <motion.div
          initial={{opacity: 0, y: 12}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.25}}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div className="max-w-[600px]">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="inline-block w-[42px] sm:w-[52px] h-[5px] rounded-[10px] bg-[#EF791B] shrink-0"
              />
              <span className="text-[13px] sm:text-[14px] font-semibold text-[#102B60] leading-none tracking-[0.04em] whitespace-nowrap">
                NOSSA EQUIPA
              </span>
            </div>

            <h2
              id="equipa-titulo"
              className="mt-4 text-[clamp(1.65rem,2.4vw,34px)] font-bold text-[#102B60] leading-[1.12] tracking-[-0.03em]"
            >
              Liderança próxima,{' '}
              <span className="text-[#EF791B]">preparada para servir.</span>
            </h2>

            <p className="mt-3.5 text-[15px] sm:text-[16px] font-normal text-[#465775] leading-[1.68] tracking-[-0.01em]">
              Responsabilidades claras, presença em todos os turnos e trabalho
              em equipa para transformar cada compromisso da Lista A em
              resultados concretos na UGS.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('junta-te')}
            className="group inline-flex items-center self-start md:self-end text-[14.5px] sm:text-[15px] font-semibold text-[#102B60] bg-transparent py-1 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#102B60]"
          >
            <span className="border-b-2 border-[#EF791B] pb-[3px] group-hover:text-[#EF791B] transition-colors duration-150">
              Junta-te à candidatura
            </span>
            <ArrowRight
              className="ml-2 mb-[3px] w-[15px] h-[15px] stroke-[2.25] text-[#102B60] group-hover:text-[#EF791B] transition-all duration-150 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </button>
        </motion.div>

        {/* Three Executive Leadership Photo Cards */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{opacity: 0, y: 14}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.2}}
              transition={{
                duration: 0.42,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group max-w-[340px] mx-auto w-full md:max-w-none bg-white border border-[#DFE5EF] rounded-[20px] overflow-hidden flex flex-col transition-colors duration-150 hover:border-[#102B60]/35"
            >
              {/* Photo Container */}
              <div className="relative w-full aspect-[4/4.2] md:aspect-[3/4] bg-gradient-to-b from-[#F5F7FA] to-[#EAEFF6] overflow-hidden border-b border-[#DFE5EF]">
                <Image
                  src={member.photo}
                  alt={`${member.name} — ${member.role}`}
                  fill
                  sizes="(max-width: 768px) 340px, 352px"
                  referrerPolicy="no-referrer"
                  className={member.imgClass}
                />
              </div>

              {/* Member Info */}
              <div className="px-6 py-5 sm:px-7 sm:py-6 flex-1 flex flex-col">
                <span
                  aria-hidden="true"
                  className="w-8 h-[3px] rounded-[10px] bg-[#EF791B] mb-3"
                />
                <div className="text-[12.5px] font-semibold text-[#EF791B] uppercase tracking-[0.06em]">
                  {member.role}
                </div>
                <h3 className="mt-1 text-[20px] sm:text-[21px] font-bold text-[#102B60] leading-[1.2] tracking-[-0.02em]">
                  {member.name}
                </h3>
                <p className="mt-2 text-[13.5px] sm:text-[14px] font-normal text-[#465775] leading-[1.58]">
                  {member.summary}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Sub-heading for Department Secretaries */}
        <div className="mt-14 sm:mt-16 pt-10 border-t border-[#DFE5EF] text-center">
          <div className="inline-flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="inline-block w-7 h-[3px] rounded-[10px] bg-[#EF791B]"
            />
            <span className="text-[12.5px] sm:text-[13px] font-semibold text-[#102B60] uppercase tracking-[0.06em]">
              Secretários de Departamento
            </span>
          </div>
          <h3 className="mt-2.5 text-[20px] sm:text-[23px] font-bold text-[#102B60] tracking-[-0.02em]">
            Coordenação setorial da Lista A
          </h3>
        </div>

        {/* Eight Half-Size Department Photo Cards */}
        <div className="mt-8 mx-auto max-w-[880px] flex flex-wrap justify-center gap-3 sm:gap-5">
          {DEPARTMENT_HEADS.map((dept, index) => (
            <motion.article
              key={dept.department}
              initial={{opacity: 0, y: 12}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.15}}
              transition={{
                duration: 0.36,
                delay: index * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group w-full sm:w-[calc(33.333%-14px)] lg:w-[196px] bg-white border border-[#DFE5EF] rounded-[16px] overflow-hidden flex flex-row items-center gap-3.5 p-3 sm:p-0 sm:flex-col sm:items-stretch sm:gap-0 transition-colors duration-150 hover:border-[#102B60]/35"
            >
              {/* Compact Half-Size Photo */}
              <div className="relative w-[76px] h-[76px] shrink-0 rounded-[12px] border border-[#DFE5EF] sm:border-0 sm:border-b sm:rounded-none sm:w-full sm:h-auto sm:aspect-square bg-gradient-to-b from-[#F5F7FA] to-[#EAEFF6] overflow-hidden">
                <Image
                  src={dept.photo}
                  alt={`${dept.name} — ${dept.role} (${dept.department})`}
                  fill
                  sizes="(max-width: 640px) 76px, 196px"
                  referrerPolicy="no-referrer"
                  className={dept.imgClass}
                />
              </div>

              {/* Compact Department Info */}
              <div className="flex-1 min-w-0 sm:p-4 sm:flex sm:flex-col sm:justify-between">
                <div>
                  <span
                    aria-hidden="true"
                    className="hidden sm:block w-5 h-[2.5px] rounded-[10px] bg-[#EF791B] mb-2"
                  />
                  <div className="text-[11.5px] sm:text-[11px] font-semibold text-[#EF791B] leading-[1.35]">
                    {dept.department}
                  </div>
                </div>
                <div className="mt-1 sm:mt-2.5 sm:pt-2 sm:border-t sm:border-[#DFE5EF]/80">
                  <h4 className="text-[15px] font-bold text-[#102B60] leading-[1.2] tracking-[-0.015em]">
                    {dept.name}
                  </h4>
                  <div className="mt-0.5 text-[12px] sm:text-[11.5px] font-medium text-[#465775]">
                    {dept.role}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
