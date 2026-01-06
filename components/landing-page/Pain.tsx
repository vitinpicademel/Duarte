'use client'

import { DollarSign, TrendingDown, Target } from 'lucide-react'
import { motion } from 'framer-motion'

const painPoints = [
  {
    icon: DollarSign,
    text: 'Sente que está jogando dinheiro fora com suplementos inúteis.',
  },
  {
    icon: TrendingDown,
    text: 'Vive em efeito sanfona (emagrece e engorda tudo de novo).',
  },
  {
    icon: Target,
    text: 'Não sabe montar um treino que gere hipertrofia real.',
  },
]

export default function Pain() {
  return (
    <section className="py-16 md:py-24 bg-dark-secondary relative overflow-hidden">
      {/* Background texture effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-center mb-12 md:mb-16 text-white"
        >
          Você treina, treina e não vê mudança?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex flex-col items-center text-center p-6 glass-dark rounded-lg neon-red-border hover:shadow-red-glow transition-all duration-300"
            >
              <div className="mb-4 p-4 bg-gradient-to-br from-red-900/50 to-red-600/50 rounded-full">
                <point.icon
                  size={36}
                  className="text-red-500"
                  strokeWidth={2.5}
                />
              </div>
              <p className="text-gray-300 text-base md:text-lg font-medium leading-relaxed">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
