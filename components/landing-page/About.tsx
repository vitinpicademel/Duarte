'use client'

import Image from 'next/image'
import { Award, Target, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="quem-somos" className="py-16 md:py-24 bg-dark-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-center mb-12 md:mb-16 text-white"
        >
          Quem São os Criadores
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden neon-red-border-lg shadow-red-glow"
            >
              <Image
                src="https://placehold.co/600x450/1a1a1a/FFF?text=Duarte+Team+Academia"
                alt="Criadores do Protocolo Duarte"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
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
