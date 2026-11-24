'use client';

import React, {useState} from 'react';
import {motion} from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Instagram,
  Mail,
  Music2,
} from 'lucide-react';
import type {SectionKey} from './InfoDrawer';

interface ContactSectionProps {
  onNavigate: (section: SectionKey) => void;
}

const EMAIL_ADDRESS = 'listaa.aeugs@ugs.ed.ao';

const SOCIAL_CHANNELS = [
  {
    id: 'instagram',
    kicker: 'Rede Social',
    title: 'Instagram',
    handle: '@listaa.aeugs',
    description:
      'Identidade, propostas, equipa, vídeos e actualizações oficiais da candidatura.',
    ctaLabel: 'Abrir Instagram',
    href: 'https://www.instagram.com/listaa.aeugs/',
    icon: Instagram,
  },
  {
    id: 'tiktok',
    kicker: 'Rede Social',
    title: 'TikTok',
    handle: '@listaa.aeugs',
    description:
      'Vídeos verticais, dia-a-dia no campus e resposta directa às dúvidas estudantis.',
    ctaLabel: 'Abrir TikTok',
    href: 'https://www.tiktok.com/@listaa.aeugs',
    icon: Music2,
  },
];

export default function ContactSection({onNavigate}: ContactSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contactos"
      aria-labelledby="contactos-titulo"
      className="relative w-full bg-white border-t border-[#DFE5EF] py-16 sm:py-20 lg:py-24 px-5 sm:px-8 md:px-12 lg:px-[calc(80*var(--u))]"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Section Header */}
        <motion.div
          initial={{opacity: 0, y: 12}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.25}}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
          className="max-w-[660px]"
        >
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="inline-block w-[42px] sm:w-[52px] h-[5px] rounded-[10px] bg-[#EF791B] shrink-0"
            />
            <span className="text-[13px] sm:text-[14px] font-semibold text-[#102B60] leading-none tracking-[0.04em] whitespace-nowrap">
              CONTACTOS · REDES SOCIAIS
            </span>
          </div>

          <h2
            id="contactos-titulo"
            className="mt-4 text-[clamp(1.65rem,2.4vw,34px)] font-bold text-[#102B60] leading-[1.12] tracking-[-0.03em]"
          >
            Acompanha e fala{' '}
            <span className="text-[#EF791B]">directamente connosco.</span>
          </h2>

          <p className="mt-3.5 text-[15px] sm:text-[16px] font-normal text-[#465775] leading-[1.68] tracking-[-0.01em]">
            Segue os canais oficiais da Lista A para acompanhar todas as
            propostas, iniciativas e encontros no campus, ou escreve-nos por
            e-mail.
          </p>
        </motion.div>

        {/* Social & Email Cards Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {SOCIAL_CHANNELS.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <motion.a
                key={channel.id}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{opacity: 0, y: 12}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.2}}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group bg-white border border-[#DFE5EF] rounded-[20px] p-6 sm:p-7 flex flex-col justify-between transition-colors duration-150 hover:border-[#102B60]/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#102B60]"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-11 h-11 rounded-[12px] bg-[#F5F7FA] border border-[#DFE5EF] flex items-center justify-center text-[#102B60] group-hover:border-[#102B60]/30 transition-colors">
                      <Icon className="w-5 h-5 stroke-[1.9]" aria-hidden="true" />
                    </div>
                    <ArrowUpRight
                      className="w-5 h-5 text-[#465775] group-hover:text-[#EF791B] transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </div>

                  <span
                    aria-hidden="true"
                    className="block w-7 h-[2.5px] rounded-[10px] bg-[#EF791B] mt-5 mb-2.5"
                  />

                  <div className="text-[12px] font-semibold text-[#465775] tracking-[0.03em] uppercase">
                    {channel.kicker}
                  </div>

                  <h3 className="mt-1 text-[21px] font-bold text-[#102B60] leading-[1.2] tracking-[-0.02em]">
                    {channel.title}
                  </h3>

                  <div className="mt-1 text-[14.5px] font-semibold text-[#EF791B] break-all">
                    {channel.handle}
                  </div>

                  <p className="mt-3 text-[14px] font-normal text-[#465775] leading-[1.6]">
                    {channel.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DFE5EF] flex items-center justify-between text-[14px] font-semibold text-[#102B60] group-hover:text-[#EF791B] transition-colors">
                  <span>{channel.ctaLabel}</span>
                  <ArrowRight
                    className="w-4 h-4 stroke-[2.25] transition-transform duration-150 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </motion.a>
            );
          })}

          {/* Email Direct Contact Card */}
          <motion.article
            initial={{opacity: 0, y: 12}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1]}}
            className="group bg-white border border-[#DFE5EF] rounded-[20px] p-6 sm:p-7 flex flex-col justify-between transition-colors duration-150 hover:border-[#102B60]/40"
          >
            <div>
              <div className="flex items-start justify-between gap-4">
                <div className="w-11 h-11 rounded-[12px] bg-[#F5F7FA] border border-[#DFE5EF] flex items-center justify-center text-[#102B60] group-hover:border-[#102B60]/30 transition-colors">
                  <Mail className="w-5 h-5 stroke-[1.9]" aria-hidden="true" />
                </div>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  aria-label={`Enviar e-mail para ${EMAIL_ADDRESS}`}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full text-[#465775] hover:text-[#EF791B] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#102B60]"
                >
                  <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>

              <span
                aria-hidden="true"
                className="block w-7 h-[2.5px] rounded-[10px] bg-[#EF791B] mt-5 mb-2.5"
              />

              <div className="text-[12px] font-semibold text-[#465775] tracking-[0.03em] uppercase">
                Contacto Directo
              </div>

              <h3 className="mt-1 text-[21px] font-bold text-[#102B60] leading-[1.2] tracking-[-0.02em]">
                E-mail
              </h3>

              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="mt-1 inline-block text-[14.5px] font-semibold text-[#EF791B] hover:underline break-all"
              >
                {EMAIL_ADDRESS}
              </a>

              <p className="mt-3 text-[14px] font-normal text-[#465775] leading-[1.6]">
                Canal institucional para sugestões de curso, parcerias
                estudantis e esclarecimento de dúvidas.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#DFE5EF] flex items-center justify-between gap-3">
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#102B60] hover:text-[#EF791B] transition-colors min-h-[36px]"
              >
                <span>Enviar e-mail</span>
                <ArrowRight className="w-4 h-4 stroke-[2.25]" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#465775] hover:text-[#102B60] transition-colors cursor-pointer min-h-[36px] px-2.5 rounded-[8px] bg-[#F5F7FA] border border-[#DFE5EF]"
              >
                {copied ? (
                  <>
                    <Check
                      className="w-3.5 h-3.5 text-[#EF791B]"
                      aria-hidden="true"
                    />
                    <span className="text-[#102B60]">Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>
          </motion.article>
        </div>

        {/* Bottom Direct Participation Bar */}
        <div className="mt-8 bg-[#F5F7FA] border border-[#DFE5EF] rounded-[20px] p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="max-w-[600px]">
            <div className="text-[15.5px] sm:text-[16px] font-bold text-[#102B60]">
              Queres participar na candidatura ou deixar uma sugestão agora?
            </div>
            <p className="mt-1 text-[13.5px] sm:text-[14px] font-normal text-[#465775]">
              Envia os teus dados ou partilha a prioridade do teu curso
              directamente com a equipa da Lista A · AEUGS.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('junta-te')}
            className="group w-fit bg-[#102B60] text-white text-[14px] font-bold rounded-[32px] px-6 py-3 inline-flex items-center justify-center gap-2 hover:bg-[#16387A] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#102B60]"
          >
            <span>Junta-te a nós</span>
            <ArrowRight
              className="w-4 h-4 stroke-[2.25] transition-transform duration-150 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
