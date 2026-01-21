'use client'

import { Dumbbell, UtensilsCrossed, Brain } from 'lucide-react'
import { motion } from 'framer-motion'

const pillars = [
  {
    icon: Dumbbell,
    title: 'Treino Inteligente',
    subtitle: 'Periodização',
    description:
      'Sistema de periodização baseado em ciência que adapta o treino ao seu nível e objetivos, garantindo progressão constante.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Orientação Nutricional',
    subtitle: 'Sem passar fome',
    description:
      'Guia nutricional prático que se adapta à sua rotina, sem dietas restritivas ou passar fome. Resultados sem sofrimento.',
  },
  {
    icon: Brain,
    title: 'Mentalidade de Atleta',
    subtitle: 'Mindset vencedor',
    description:
      'Desenvolva a mentalidade correta para manter consistência e alcançar resultados duradouros, não apenas temporários.',
  },
]

export default function Solution() {
  return (
    <section id="metodo" className="py-16 md:py-24 bg-dark-bg relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-6 text-white">
            O Que é o Protocolo Duarte?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Não é apenas &apos;uma ficha de treino&apos;. É um{' '}
            <span className="text-red-gradient font-bold">
              sistema completo
            </span>{' '}
            baseado em ciência: periodização científica, orientação alimentar e
            suporte contínuo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02, rotateY: 2 }}
              className="glass-dark p-6 md:p-8 rounded-lg neon-red-border-lg hover:shadow-red-glow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="mb-6 flex items-center justify-center">
                <div className="p-4 bg-gradient-to-br from-red-900/50 to-red-600/50 rounded-full">
                  <pillar.icon
                    size={44}
                    className="text-red-500"
                    strokeWidth={2.5}
                  />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-display font-black mb-2 text-white">
                {pillar.title}
              </h3>
              <p className="text-red-500 font-bold mb-4 text-base md:text-lg">
                {pillar.subtitle}
              </p>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
