'use client';

import React, {useEffect, useState} from 'react';
import {X, ArrowRight, CheckCircle2, Users, Handshake, Rocket} from 'lucide-react';

export type SectionKey =
  | 'a-lista'
  | 'propostas'
  | 'equipa'
  | 'projectos'
  | 'contactos'
  | 'junta-te'
  | null;

interface InfoDrawerProps {
  activeSection: SectionKey;
  onClose: () => void;
  onNavigate: (section: SectionKey) => void;
}

export default function InfoDrawer({
  activeSection,
  onClose,
  onNavigate,
}: InfoDrawerProps) {
  const [formState, setFormState] = useState({
    nome: '',
    curso: '',
    email: '',
    mensagem: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeSection) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, onClose]);

  if (!activeSection) return null;

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  const handleNavigate = (section: SectionKey) => {
    setSubmitted(false);
    onNavigate(section);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.nome.trim() || !formState.email.trim()) return;
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#102B60]/40 backdrop-blur-[1px] transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-[540px] bg-white h-full overflow-y-auto border-l border-[#DFE5EF] p-6 sm:p-10 flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-[#DFE5EF]">
            <div className="flex items-center gap-3">
              <span className="inline-block w-[42px] h-[6px] rounded-[10px] bg-[#EF791B]" />
              <span className="text-[15px] font-bold text-[#102B60] tracking-tight">
                LISTA A · AEUGS
              </span>
            </div>
            <button
              type="button"
              onClick={handleClose}
              aria-label="Fechar painel"
              className="w-11 h-11 rounded-full border border-[#DFE5EF] flex items-center justify-center text-[#102B60] hover:border-[#102B60] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Section Content */}
          <div className="mt-8">
            {activeSection === 'a-lista' && (
              <div className="space-y-6">
                <h2
                  id="drawer-title"
                  className="text-[28px] sm:text-[32px] font-extrabold text-[#102B60] leading-[1.08] tracking-[-0.03em]"
                >
                  A Lista A · AEUGS
                </h2>
                <p className="text-[16px] sm:text-[17px] font-medium text-[#465775] leading-[1.6]">
                  Orientada pela linha de acção Continuar. Melhorar. Inovar. Crescer., a Lista A apresenta uma candidatura comprometida com a continuidade responsável e com respostas concretas na Universidade Gregório Semedo.
                </p>
                <div className="space-y-4 pt-2">
                  <div className="p-5 bg-[#F5F7FA] border border-[#DFE5EF] rounded-[14px]">
                    <div className="flex items-center gap-3 text-[#102B60] font-bold text-[16px]">
                      <Users className="w-5 h-5 text-[#EF791B]" />
                      <span>REPRESENTAR</span>
                    </div>
                    <p className="mt-2 text-[15px] text-[#465775] leading-relaxed">
                      Diálogo institucional responsável e defesa activa dos estudantes junto da Universidade.
                    </p>
                  </div>
                  <div className="p-5 bg-[#F5F7FA] border border-[#DFE5EF] rounded-[14px]">
                    <div className="flex items-center gap-3 text-[#102B60] font-bold text-[16px]">
                      <Handshake className="w-5 h-5 text-[#EF791B]" />
                      <span>SERVIR</span>
                    </div>
                    <p className="mt-2 text-[15px] text-[#465775] leading-relaxed">
                      Presença próxima, escuta contínua e resposta prática às necessidades reais do campus.
                    </p>
                  </div>
                  <div className="p-5 bg-[#F5F7FA] border border-[#DFE5EF] rounded-[14px]">
                    <div className="flex items-center gap-3 text-[#102B60] font-bold text-[16px]">
                      <Rocket className="w-5 h-5 text-[#EF791B]" />
                      <span>TRANSFORMAR</span>
                    </div>
                    <p className="mt-2 text-[15px] text-[#465775] leading-relaxed">
                      Inovação através de soluções concretas que ampliam oportunidades e vida académica.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'propostas' && (
              <div className="space-y-6">
                <h2
                  id="drawer-title"
                  className="text-[28px] sm:text-[32px] font-extrabold text-[#102B60] leading-[1.08] tracking-[-0.03em]"
                >
                  Eixos de Propostas
                </h2>
                <p className="text-[16px] sm:text-[17px] font-medium text-[#465775] leading-[1.6]">
                  O programa da Lista A organiza-se em quatro áreas de trabalho com compromissos específicos, viáveis e verificáveis.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      num: '01.',
                      title: 'Vida académica',
                      desc: 'Representação, canal organizado de informação estudantil e articulação contínua com delegados de turma.',
                    },
                    {
                      num: '02.',
                      title: 'Serviços e bem-estar',
                      desc: 'Escuta presencial em todos os cursos e turnos, acolhimento e acompanhamento transparente de solicitações.',
                    },
                    {
                      num: '03.',
                      title: 'Inovação e oportunidades',
                      desc: 'Tecnologia, formações práticas, pontes para estágios e apoio ao empreendedorismo estudantil.',
                    },
                    {
                      num: '04.',
                      title: 'Comunidade e participação',
                      desc: 'Cultura, desporto, integração inter-faculdades, parcerias e espaços regulares de diálogo aberto.',
                    },
                  ].map((item) => (
                    <div
                      key={item.num}
                      className="p-5 bg-[#F5F7FA] border border-[#DFE5EF] rounded-[14px]"
                    >
                      <div className="text-[16px] font-bold text-[#102B60]">
                        <span className="text-[#EF791B] mr-2">{item.num}</span>
                        {item.title}
                      </div>
                      <p className="mt-1.5 text-[15px] text-[#465775] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'equipa' && (
              <div className="space-y-6">
                <h2
                  id="drawer-title"
                  className="text-[28px] sm:text-[32px] font-extrabold text-[#102B60] leading-[1.08] tracking-[-0.03em]"
                >
                  A Nossa Equipa
                </h2>
                <p className="text-[16px] sm:text-[17px] font-medium text-[#465775] leading-[1.6]">
                  Liderança próxima e coordenação setorial preparada para servir toda a comunidade estudantil da UGS.
                </p>
                <div className="space-y-3">
                  {[
                    {
                      role: 'Djalil Zau · Presidente',
                      dept: 'Coordenação geral, visão estratégica e representação institucional',
                    },
                    {
                      role: 'Márcia Silva · Vice-Presidente',
                      dept: 'Articulação entre cursos e acompanhamento pedagógico',
                    },
                    {
                      role: 'Sidney Otávio · Secretário-Geral',
                      dept: 'Organização executiva, conformidade e acompanhamento dos compromissos',
                    },
                    {
                      role: 'Secretários de Departamento',
                      dept: 'Tecnologia e Comunicação, Jurídico, Académico, Científico e Pós-Graduação, Ambiente e Acção Social, Recreação e Cultura, Desporto e Financeiro',
                    },
                  ].map((member) => (
                    <div
                      key={member.role}
                      className="p-4 bg-[#F5F7FA] border border-[#DFE5EF] rounded-[14px]"
                    >
                      <div className="text-[16px] font-bold text-[#102B60]">
                        {member.role}
                      </div>
                      <div className="text-[14px] font-medium text-[#465775] mt-1">
                        {member.dept}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'projectos' && (
              <div className="space-y-6">
                <h2
                  id="drawer-title"
                  className="text-[28px] sm:text-[32px] font-extrabold text-[#102B60] leading-[1.08] tracking-[-0.03em]"
                >
                  Projectos Estruturantes
                </h2>
                <p className="text-[16px] sm:text-[17px] font-medium text-[#465775] leading-[1.6]">
                  Quatro iniciativas com implementação gradual e impacto directo no campus da Universidade Gregório Semedo.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: 'UGS Conexão',
                      desc: 'Ponto presencial de escuta, acolhimento e encaminhamento estudantil com modelo misto e confidencialidade.',
                    },
                    {
                      title: 'UGS Palavra Viva',
                      desc: 'Encontros quinzenais de poesia, leitura, música e partilha criativa no campus.',
                    },
                    {
                      title: 'UGS Descomplica Académico',
                      desc: 'Aulas de reforço, preparação para avaliações e entreajuda colaborativa entre estudantes.',
                    },
                    {
                      title: 'UGS Uni Shark',
                      desc: 'Programa de empreendedorismo que aproxima ideias universitárias de um painel de Sharks e financiamento.',
                    },
                  ].map((proj) => (
                    <div
                      key={proj.title}
                      className="p-5 bg-[#F5F7FA] border border-[#DFE5EF] rounded-[14px]"
                    >
                      <div className="text-[16px] font-bold text-[#102B60]">
                        {proj.title}
                      </div>
                      <p className="mt-1.5 text-[15px] text-[#465775] leading-relaxed">
                        {proj.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(activeSection === 'contactos' || activeSection === 'junta-te') && (
              <div className="space-y-6">
                <h2
                  id="drawer-title"
                  className="text-[28px] sm:text-[32px] font-extrabold text-[#102B60] leading-[1.08] tracking-[-0.03em]"
                >
                  {activeSection === 'junta-te'
                    ? 'Junta-te à Lista A'
                    : 'Contacta a Candidatura'}
                </h2>
                <p className="text-[16px] sm:text-[17px] font-medium text-[#465775] leading-[1.6]">
                  {activeSection === 'junta-te'
                    ? 'Faz parte de uma representação presente. Deixa os teus dados para participares nas actividades e núcleos da campanha.'
                    : 'Tens uma proposta, dúvida ou prioridade para o teu curso? Fala directamente com a equipa da Lista A · AEUGS.'}
                </p>

                {submitted ? (
                  <div className="p-6 bg-[#F5F7FA] border border-[#DFE5EF] rounded-[14px] space-y-3">
                    <div className="flex items-center gap-2.5 text-[#102B60] font-bold text-[18px]">
                      <CheckCircle2 className="w-6 h-6 text-[#EF791B]" />
                      <span>Mensagem registada com sucesso!</span>
                    </div>
                    <p className="text-[15px] text-[#465775] leading-relaxed">
                      Obrigado pelo teu contributo, {formState.nome}. A equipa da Lista A · AEUGS entrará em contacto brevemente.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="nome"
                        className="block text-[14px] font-bold text-[#102B60] mb-1.5"
                      >
                        Nome completo
                      </label>
                      <input
                        id="nome"
                        type="text"
                        required
                        value={formState.nome}
                        onChange={(e) =>
                          setFormState({...formState, nome: e.target.value})
                        }
                        placeholder="O teu nome"
                        className="w-full h-[48px] px-4 bg-[#F5F7FA] border border-[#DFE5EF] rounded-[10px] text-[#102B60] text-[16px] focus:outline-none focus:border-[#102B60]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="curso"
                        className="block text-[14px] font-bold text-[#102B60] mb-1.5"
                      >
                        Curso / Ano Académico
                      </label>
                      <input
                        id="curso"
                        type="text"
                        value={formState.curso}
                        onChange={(e) =>
                          setFormState({...formState, curso: e.target.value})
                        }
                        placeholder="Ex.: Engenharia Informática · 3.º Ano"
                        className="w-full h-[48px] px-4 bg-[#F5F7FA] border border-[#DFE5EF] rounded-[10px] text-[#102B60] text-[16px] focus:outline-none focus:border-[#102B60]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[14px] font-bold text-[#102B60] mb-1.5"
                      >
                        Email ou Contacto
                      </label>
                      <input
                        id="email"
                        type="text"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({...formState, email: e.target.value})
                        }
                        placeholder="nome@estudante.ugs.ed.ao"
                        className="w-full h-[48px] px-4 bg-[#F5F7FA] border border-[#DFE5EF] rounded-[10px] text-[#102B60] text-[16px] focus:outline-none focus:border-[#102B60]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="mensagem"
                        className="block text-[14px] font-bold text-[#102B60] mb-1.5"
                      >
                        A tua prioridade ou sugestão
                      </label>
                      <textarea
                        id="mensagem"
                        rows={3}
                        value={formState.mensagem}
                        onChange={(e) =>
                          setFormState({...formState, mensagem: e.target.value})
                        }
                        placeholder="Partilha connosco as tuas ideias para a AEUGS..."
                        className="w-full p-4 bg-[#F5F7FA] border border-[#DFE5EF] rounded-[10px] text-[#102B60] text-[16px] focus:outline-none focus:border-[#102B60]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full h-[54px] bg-[#102B60] text-white font-bold text-[16px] rounded-[32px] flex items-center justify-center gap-2.5 hover:bg-[#102B60]/90 transition-colors cursor-pointer"
                    >
                      <span>Enviar participação</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Footer inside drawer */}
        <div className="pt-8 mt-8 border-t border-[#DFE5EF] flex flex-wrap items-center justify-between gap-3">
          <span className="text-[13.5px] sm:text-[14px] font-semibold text-[#465775]">
            Universidade Gregório Semedo · AEUGS
          </span>
          {activeSection !== 'junta-te' && (
            <button
              type="button"
              onClick={() => handleNavigate('junta-te')}
              className="text-[14px] font-bold text-[#102B60] border-b-2 border-[#EF791B] min-h-[44px] py-2 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Junta-te a nós</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
