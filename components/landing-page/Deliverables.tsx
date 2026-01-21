'use client'

import { Video, FileText, BookOpen, Users, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const deliverables = [
  {
    icon: Video,
    title: 'Módulos de Vídeo-Aulas',
    description: 'Execução correta de exercícios explicada em detalhes',
  },
  {
    icon: FileText,
    title: 'Planilhas Periodizadas',
    description: 'Iniciante, Intermediário e Avançado',
  },
  {
    icon: BookOpen,
    title: 'E-book de Receitas Anabólicas',
    description: 'Receitas práticas para otimizar seus resultados',
  },
  {
    icon: Users,
    title: 'Grupo VIP de Alunos',
    description: 'Acesso a comunidade exclusiva de suporte',
  },
]

export default function Deliverables() {
  return (
    <section className="py-16 md:py-24 bg-dark-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-center mb-12 md:mb-16 text-white"
        >
          O Que Está Incluso
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
          {deliverables.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 5, scale: 1.02 }}
              className="glass-dark p-5 md:p-6 rounded-lg neon-red-border hover:shadow-red-glow transition-all duration-300 flex items-start gap-4"
            >
              <div className="flex-shrink-0">
                <div className="p-3 bg-gradient-to-br from-red-900/50 to-red-600/50 rounded-lg">
                  <item.icon
                    size={24}
                    className="text-red-500"
                    strokeWidth={2.5}
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-display font-bold mb-1.5 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 glass-dark px-6 py-3 rounded-lg neon-red-border">
            <CheckCircle2 size={22} className="text-red-500" />
            <span className="text-red-500 font-bold text-base md:text-lg">
              Tudo isso incluso no Protocolo Duarte
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
