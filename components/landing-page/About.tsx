'use client'

import { useState } from 'react'
import { Award, Target, TrendingUp, Volume2, VolumeX } from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <section id="quem-somos" className="py-16 md:py-24 bg-dark-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-center mb-8 md:mb-12 text-white"
        >
          Quem São os Criadores
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
            {/* Video Container - Vertical Format */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-[320px] max-w-xs mx-auto md:mx-0 aspect-[9/16] rounded-lg overflow-hidden neon-red-border-lg shadow-red-glow bg-black"
            >
              <video
                src="/video-criadores.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent" />
              
              {/* Botão de controle de som */}
              <motion.button
                onClick={toggleMute}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-4 right-4 w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-200 z-10"
                aria-label={isMuted ? "Ativar som" : "Desativar som"}
              >
                {isMuted ? (
                  <VolumeX size={20} className="text-white" />
                ) : (
                  <Volume2 size={20} className="text-white" />
                )}
              </motion.button>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 max-w-xl"
            >
              <h3 className="text-2xl md:text-3xl font-display font-black text-red-gradient">
                OS DUARTE
              </h3>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Somos bacharéis em Educação Física, especialistas em treinamento
                científico e, acima de tudo, profissionais com vasta experiência
                prática. Durante anos, lapidamos um método que já levou
                centenas de alunos ao físico que sempre almejaram. Não entregamos
                apenas uma ficha de treino; entregamos a estratégia que a nossa
                trajetória nos ensinou. Se você quer parar de tentar e começar a
                evoluir com segurança, conte com o nosso suporte profissional.
              </p>

              {/* Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                <div className="flex items-center gap-3 glass-dark p-3 rounded-lg neon-red-border">
                  <Award className="text-red-500 flex-shrink-0" size={22} />
                  <span className="text-gray-300 font-medium text-sm">
                    Certificações Internacionais
                  </span>
                </div>
                <div className="flex items-center gap-3 glass-dark p-3 rounded-lg neon-red-border">
                  <Target className="text-red-500 flex-shrink-0" size={22} />
                  <span className="text-gray-300 font-medium text-sm">
                    +500 Alunos Transformados
                  </span>
                </div>
                <div className="flex items-center gap-3 glass-dark p-3 rounded-lg neon-red-border">
                  <TrendingUp className="text-red-500 flex-shrink-0" size={22} />
                  <span className="text-gray-300 font-medium text-sm">
                    10+ Anos de Experiência
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
