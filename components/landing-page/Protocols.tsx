'use client'

import { motion } from 'framer-motion'
import { Flame, Activity, Zap, Dumbbell } from 'lucide-react'

const protocols = [
  {
    title: 'PROTOCOLO EMAGRECIMENTO',
    description:
      'Elimine a gordura visceral e revele sua musculatura. Um método metabólico de alta intensidade para secar o físico mantendo a massa magra. Chega de retenção.',
    icon: Flame,
    highlight: 'Foco total em queima de gordura e definição corporal.',
    href: 'https://pages.mfitpersonal.com.br/p/2g3m?checkout=true',
  },
  {
    title: 'PROTOCOLO HIPERTROFIA/FEMININA',
    description:
      'Esculpa curvas sólidas e um corpo atlético. Foco estratégico em glúteos e pernas, desenhando a silhueta feminina com volume muscular e definição harmônica.',
    icon: Activity,
    highlight: 'Construção de shape feminino atlético, com ênfase em glúteos e pernas.',
    href: 'https://pages.mfitpersonal.com.br/p/2g3e?checkout=true',
  },
  {
    title: 'PROTOCOLO PERFORMANCE',
    description:
      'Eleve seu nível atlético ao extremo. Potência, explosão e resistência cardiovascular para quem busca uma máquina de alta performance, não apenas estética.',
    icon: Zap,
    highlight: 'Mais força, velocidade e condicionamento para alta performance.',
    href: 'https://pages.mfitpersonal.com.br/p/2g3l?checkout=true',
  },
  {
    title: 'PROTOCOLO HIPERTROFIA/MASCULINA',
    description:
      'Construção de massa bruta e densidade muscular real. Foco em volume, força e na estética em "V" que impõe respeito. Preencha a camiseta com qualidade.',
    icon: Dumbbell,
    highlight: 'Ganho agressivo de massa muscular com foco em volume e densidade.',
    href: 'https://pages.mfitpersonal.com.br/p/2g3k?checkout=true',
  },
]

export default function Protocols() {
  const handleRedirect = (url: string) => {
    window.location.href = url
  }

  return (
    <section id="protocolos" className="py-16 md:py-24 bg-dark-bg relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-center mb-12 md:mb-16 text-white"
        >
          Defina Seu Objetivo Dentro do Protocolo Duarte
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto text-center text-gray-300 text-sm md:text-base mb-10 md:mb-14"
        >
          Cada protocolo foi desenhado para um tipo específico de objetivo. Escolha o caminho que mais conversa com a sua fase
          atual e deixe que o método faça o resto.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {protocols.map((protocol, index) => {
            const Icon = protocol.icon

            return (
              <motion.div
                key={protocol.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => handleRedirect(protocol.href)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleRedirect(protocol.href)
                  }
                }}
                role="button"
                tabIndex={0}
                className="relative glass-dark rounded-xl neon-red-border-lg hover:shadow-red-glow-lg transition-all duration-300 overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500/60"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-red-700/10 pointer-events-none" />
                <div className="relative z-10 p-6 md:p-7 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-red-900/40 border border-red-500/70 shadow-red-glow">
                      <Icon className="text-red-400" size={26} />
                    </div>
                    <h3 className="text-lg md:text-xl font-display font-black text-white tracking-wide">
                      {protocol.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3">
                    {protocol.description}
                  </p>
                  <p className="text-red-400 text-xs md:text-sm font-medium mb-5">
                    {protocol.highlight}
                  </p>

                  <div className="mt-auto pt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleRedirect(protocol.href)
                      }}
                      className="w-full md:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white font-display font-bold text-xs md:text-sm tracking-wide shadow-red-glow hover:shadow-red-glow-lg hover:scale-[1.02] transition-all"
                    >
                      QUERO ESTE PROTOCOLO
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

