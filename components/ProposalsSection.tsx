'use client';

import React, {useState} from 'react';
import {motion} from 'motion/react';
import {
  ArrowRight,
  GraduationCap,
  HeartHandshake,
  Cpu,
  Users,
} from 'lucide-react';
import type {SectionKey} from './InfoDrawer';

interface ProposalsSectionProps {
  onNavigate: (section: SectionKey) => void;
}

const PROPOSAL_AREAS = [
  {
    num: '01.',
    title: 'Vida académica',
    orientation: 'Representação, informação e melhoria da experiência universitária',
    icon: GraduationCap,
    items: [
      'Canal organizado de informação estudantil com actualizações regulares, recolha de sugestões e encaminhamento directo aos responsáveis competentes.',
      'Articulação contínua com delegados de turma e coordenações para acompanhar calendários, avaliações e questões pedagógicas.',
      'Continuidade e aperfeiçoamento das iniciativas académicas bem-sucedidas reconhecidas pelos estudantes.',
    ],
  },
  {
    num: '02.',
    title: 'Serviços e bem-estar',
    orientation: 'Proximidade, apoio e resposta às necessidades dos estudantes',
    icon: HeartHandshake,
    items: [
      'Escuta presencial regular em diferentes cursos, anos e turnos para identificar dificuldades reais e prioridades recorrentes.',
      'Acompanhamento transparente das solicitações estudantis junto dos serviços da Universidade até à resposta efectiva.',
      'Apoio prático no acolhimento, orientação académica inicial e ligação com os recursos de apoio ao estudante.',
    ],
  },
  {
    num: '03.',
    title: 'Inovação e oportunidades',
    orientation: 'Tecnologia, formação, empregabilidade e empreendedorismo',
    icon: Cpu,
    items: [
      'Formações complementares, oficinas tecnológicas e sessões práticas focadas em competências exigidas pelo mercado.',
      'Pontes com empresas e entidades parceiras para ampliar oportunidades de estágio, mentoria e inserção profissional.',
      'Apoio estruturado a ideias, projectos de inovação e iniciativas empreendedoras desenvolvidas por estudantes da UGS.',
    ],
  },
  {
    num: '04.',
    title: 'Comunidade e participação',
    orientation: 'Cultura, desporto, integração, parcerias e iniciativas estudantis',
    icon: Users,
    items: [
      'Dinamização de actividades culturais, torneios desportivos e encontros inter-faculdades ao longo do ano lectivo.',
      'Parcerias institucionais e estudantis que gerem benefícios práticos e participação activa fora da sala de aula.',
      'Espaços regulares de diálogo aberto, debates e valorização de projectos liderados pela comunidade estudantil.',
    ],
  },
];

const VERIFICATION_CRITERIA = [
  {
    id: 'problema',
    label: '01. Problema',
    question: 'Qual é o problema?',
    detail:
      'Cada proposta parte de uma necessidade real identificada em conversas presenciais com estudantes de diferentes cursos, anos e horários — nunca de suposições.',
    example:
      'Exemplo prático: dispersão de informações académicas e dificuldade em saber a quem encaminhar dúvidas e sugestões.',
  },
  {
    id: 'solucao',
    label: '02. Solução',
    question: 'Qual é a solução?',
    detail:
      'Em vez de promessas genéricas como «melhorar a comunicação», definimos uma resposta objectiva, realista e adaptada às competências da AEUGS.',
    example:
      'Exemplo prático: criar um canal organizado de informação estudantil com actualizações periódicas e caixa de recolha de sugestões.',
  },
  {
    id: 'beneficiarios',
    label: '03. Beneficiários',
    question: 'Quem beneficia?',
    detail:
      'Identificamos claramente que grupos, cursos, turnos ou núcleos da comunidade académica da UGS serão directamente abrangidos pela iniciativa.',
    example:
      'Exemplo prático: todos os estudantes da UGS nos turnos diurno e pós-laboral, bem como os delegados de turma.',
  },
  {
    id: 'execucao',
    label: '04. Execução',
    question: 'Como será executada?',
    detail:
      'Antes de assumir qualquer compromisso, verificamos viabilidade, recursos necessários, equipa responsável e eventuais autorizações institucionais.',
    example:
      'Exemplo prático: equipa dedicada à comunicação e atendimento faz triagem semanal e encaminha questões aos órgãos competentes.',
  },
  {
    id: 'verificacao',
    label: '05. Verificação',
    question: 'Como saberemos se funcionou?',
    detail:
      'Estabelecemos indicadores simples e públicos — dúvidas respondidas, actividades executadas e problemas resolvidos — para prestar contas com transparência.',
    example:
      'Exemplo prático: registo regular de questões recebidas, respondidas e encaminhadas com ponto de situação aberto.',
  },
];

export default function ProposalsSection({onNavigate}: ProposalsSectionProps) {
  const [selectedCriterion, setSelectedCriterion] = useState(
    VERIFICATION_CRITERIA[0].id
  );

  const activeCriterion =
    VERIFICATION_CRITERIA.find((item) => item.id === selectedCriterion) ??
    VERIFICATION_CRITERIA[0];

  return (
    <section
      id="propostas"
      aria-labelledby="propostas-titulo"
      className="relative w-full bg-[#F5F7FA] border-t border-[#DFE5EF] py-16 sm:py-20 lg:py-24 px-5 sm:px-8 md:px-12 lg:px-[calc(80*var(--u))]"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Section Header */}
        <motion.div
          initial={{opacity: 0, y: 12}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.25}}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
          className="max-w-[680px]"
        >
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="inline-block w-[42px] sm:w-[52px] h-[5px] rounded-[10px] bg-[#EF791B] shrink-0"
            />
            <span className="text-[13px] sm:text-[14px] font-semibold text-[#102B60] leading-none tracking-[0.04em] whitespace-nowrap">
              PROGRAMA ELEITORAL · PROPOSTAS
            </span>
          </div>

          <h2
            id="propostas-titulo"
            className="mt-4 text-[clamp(1.65rem,2.5vw,36px)] font-bold text-[#102B60] leading-[1.12] tracking-[-0.03em]"
          >
            Transformar intenções em{' '}
            <span className="text-[#EF791B]">compromissos verificáveis.</span>
          </h2>

          <p className="mt-4 text-[15px] sm:text-[16px] font-normal text-[#465775] leading-[1.7] tracking-[-0.01em]">
            O programa da Lista A está estruturado em quatro áreas de trabalho,
            tendo{' '}
            <strong className="font-semibold text-[#102B60]">
              Representar · Servir · Transformar
            </strong>{' '}
            como princípios transversais. Não apresentamos promessas soltas:
            cada acção foi pensada para ser viável, compreensível e executável.
          </p>
        </motion.div>

        {/* 4 Work Areas Grid (from Section 03 of the Strategic Plan) */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROPOSAL_AREAS.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.article
                key={area.num}
                initial={{opacity: 0, y: 12}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.15}}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-white border border-[#DFE5EF] rounded-[20px] p-5 sm:p-8 flex flex-col justify-between transition-colors duration-150 hover:border-[#102B60]/30"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[13px] font-bold text-[#EF791B] tracking-[0.02em]">
                        {area.num}
                      </span>
                      <h3 className="mt-1 text-[20px] sm:text-[21px] font-bold text-[#102B60] leading-[1.2] tracking-[-0.02em]">
                        {area.title}
                      </h3>
                    </div>
                    <Icon
                      className="w-6 h-6 text-[#102B60] stroke-[1.85] shrink-0 mt-1"
                      aria-hidden="true"
                    />
                  </div>

                  <p className="mt-2 text-[14px] font-medium text-[#465775] leading-[1.5]">
                    {area.orientation}
                  </p>

                  <div className="my-5 border-t border-[#DFE5EF]" />

                  <ul className="space-y-3">
                    {area.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[14px] sm:text-[14.5px] font-normal text-[#465775] leading-[1.6]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#EF791B] shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Interactive 5-Question Verification Rule (from Section 03 of the Strategic Plan) */}
        <motion.div
          initial={{opacity: 0, y: 12}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.2}}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
          className="mt-8 bg-white border border-[#DFE5EF] rounded-[20px] p-5 sm:p-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 pb-6 border-b border-[#DFE5EF]">
            <div className="max-w-[520px]">
              <div className="text-[12.5px] font-semibold text-[#EF791B] tracking-[0.04em] uppercase">
                Regra para cada proposta
              </div>
              <h3 className="mt-1.5 text-[18px] sm:text-[20px] font-bold text-[#102B60] tracking-[-0.02em]">
                Cinco perguntas antes de assumir qualquer compromisso
              </h3>
            </div>

            {/* Interactive Criterion Selector */}
            <div
              role="tablist"
              aria-label="Critérios de validação de propostas"
              className="flex items-center gap-1.5 overflow-x-auto no-scrollbar sm:flex-wrap max-w-full bg-[#F5F7FA] p-1.5 rounded-[12px] border border-[#DFE5EF]"
            >
              {VERIFICATION_CRITERIA.map((criterion) => {
                const isActive = criterion.id === activeCriterion.id;
                return (
                  <button
                    key={criterion.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCriterion(criterion.id)}
                    className={`min-h-[40px] px-3 py-1.5 rounded-[8px] text-[12.5px] sm:text-[13px] font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#102B60] ${
                      isActive
                        ? 'bg-[#102B60] text-white'
                        : 'text-[#465775] hover:text-[#102B60]'
                    }`}
                  >
                    {criterion.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            role="tabpanel"
            className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
          >
            <div className="lg:col-span-7">
              <div className="text-[16px] font-bold text-[#102B60]">
                {activeCriterion.question}
              </div>
              <p className="mt-2 text-[14.5px] sm:text-[15px] font-normal text-[#465775] leading-[1.65]">
                {activeCriterion.detail}
              </p>
            </div>
            <div className="lg:col-span-5 bg-[#F5F7FA] border border-[#DFE5EF] rounded-[14px] p-4 sm:p-5">
              <p className="text-[13.5px] font-medium text-[#102B60] leading-[1.6]">
                {activeCriterion.example}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section Action */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[14px] font-medium text-[#465775]">
            Tens uma prioridade para o teu curso ou turno que deve integrar o diagnóstico da Lista A?
          </p>
          <button
            type="button"
            onClick={() => onNavigate('contactos')}
            className="group inline-flex items-center self-start sm:self-center text-[14.5px] sm:text-[15px] font-semibold text-[#102B60] bg-transparent py-1 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#102B60]"
          >
            <span className="border-b-2 border-[#EF791B] pb-[3px] group-hover:text-[#EF791B] transition-colors duration-150">
              Enviar sugestão à candidatura
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
