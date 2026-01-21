'use client'

import { Shield, CheckCircle2, Gift } from 'lucide-react'
import { motion } from 'framer-motion'

type PricingProps = {
  onOpenCheckout: () => void
}

export default function Pricing({ onOpenCheckout }: PricingProps) {
  return (
    <section id="oferta" className="py-16 md:py-24 bg-gradient-to-b from-dark-secondary via-dark-bg to-dark-secondary relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-transparent to-red-950/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-6 text-white"
          >
            Oferta Irresistível
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 mb-12"
          >
            Transforme seu físico hoje mesmo com o método que já mudou centenas
            de vidas
          </motion.p>

          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-dark border-2 border-red-500/70 rounded-2xl p-8 md:p-12 mb-8 relative overflow-hidden neon-red-border-lg shadow-red-glow-lg"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-red-600/20 to-red-900/20 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-8">
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white">
                    1x de
                  </span>
                  <span className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-red-gradient">
                    R$ 39,90
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={onOpenCheckout}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(220, 38, 38, 0.4), 0 0 40px rgba(220, 38, 38, 0.2)',
                    '0 0 30px rgba(220, 38, 38, 0.6), 0 0 60px rgba(220, 38, 38, 0.4)',
                    '0 0 20px rgba(220, 38, 38, 0.4), 0 0 40px rgba(220, 38, 38, 0.2)',
                  ],
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
                className="w-full bg-gradient-to-r from-red-900 via-red-600 to-red-500 text-white px-6 py-4 md:px-8 md:py-5 rounded-lg font-display font-black text-lg md:text-2xl transition-all duration-300 mb-8 relative overflow-hidden group"
              >
                <span className="relative z-10">GARANTIR MINHA VAGA NO PROTOCOLO AGORA</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-400 to-red-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: 'easeInOut',
                  }}
                />
              </motion.button>

              {/* Guarantee Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 glass-dark border border-red-500/50 rounded-lg p-4 mb-8 neon-red-border"
              >
                <Shield size={32} className="text-red-500 flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <p className="text-red-500 font-bold text-base md:text-lg">
                    Garantia Incondicional de 7 Dias
                  </p>
                  <p className="text-gray-300 text-sm">
                    Ou seu dinheiro de volta, sem perguntas
                  </p>
                </div>
              </motion.div>

              {/* What's Included */}
              <div className="space-y-4 text-left">
                <h3 className="text-xl font-display font-bold text-white mb-4 text-center">
                  O Que Você Recebe:
                </h3>
                <div className="space-y-3">
                  {[
                    'Módulos completos de vídeo-aulas',
                    'Planilhas periodizadas (3 níveis)',
                    'E-book de Receitas Anabólicas',
                    'Acesso ao grupo VIP de alunos',
                    'Suporte contínuo da equipe',
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2
                        size={22}
                        className="text-red-500 flex-shrink-0"
                      />
                      <span className="text-gray-300 text-sm md:text-base">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bonus Alert */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-dark border border-red-500/50 rounded-lg p-4 md:p-6 flex flex-col sm:flex-row items-start gap-4 neon-red-border"
          >
            <Gift size={32} className="text-red-500 flex-shrink-0" />
            <div className="text-left">
              <p className="text-red-500 font-bold text-base md:text-lg mb-2">
                Bônus Exclusivo para os Primeiros 100 Alunos
              </p>
              <p className="text-gray-300 text-sm md:text-base">
                Acesso a 2 lives mensais exclusivas com os criadores para tirar
                dúvidas e receber orientações personalizadas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
