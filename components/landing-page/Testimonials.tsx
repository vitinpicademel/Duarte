'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

type Testimonial = {
  prefix: string
  name: string
  age?: number
  text: string
}

// Para adicionar/remover alunos, basta incluir/remover objetos neste array.
// As imagens seguem o padrão: `/testimonials/{prefix}-antes.png` e `/testimonials/{prefix}-depois.png`
const testimonials: Testimonial[] = [
  {
    prefix: '1',
    name: 'Tiago Wilt',
    age: 36,
    text: 'Tiago Wilt, 36 anos, seguiu com disciplina nossos treinos e orientações. Hoje, ele carrega no corpo a prova real de que a disciplina sempre supera as desculpas. O resultado visual fala por si mesmo.',
  },
  {
    prefix: '2',
    name: 'Regis',
    age: 45,
    text: 'Regis, 45 anos, é a prova viva de que o comprometimento gera resultados. Em apenas 3 meses de treino estruturado, provou que a constância e a disciplina vencem qualquer tipo de desculpa ou idade.',
  },
  {
    prefix: '3',
    name: 'Alisson',
    text: 'Alisson, em apenas 45 dias de protocolo, transformou muito mais que a aparência. Além do físico renovado, resgatou sua autoestima e atingiu um novo nível de qualidade de vida, energia e disposição.',
  },
]

export default function Testimonials() {
  return (
    <section id="resultados" className="py-16 md:py-24 bg-dark-bg relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-center mb-12 md:mb-16 text-white"
        >
          Resultados Reais de Quem Seguiu o Protocolo
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const beforeSrc = `/testimonials/${testimonial.prefix}-antes.png`
            const afterSrc = `/testimonials/${testimonial.prefix}-depois.png`

            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-dark rounded-lg overflow-hidden neon-red-border-lg hover:shadow-red-glow-lg transition-all duration-300"
            >
              {/* Before/After Images */}
              <div className="grid grid-cols-2 gap-2 p-2">
                <div className="relative aspect-[3/4] rounded overflow-hidden border-2 border-red-900/50">
                  <Image
                    src={beforeSrc}
                    alt={`${testimonial.name} - Antes`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-600 px-2 py-1 rounded text-xs font-bold shadow-lg">
                    ANTES
                  </div>
                </div>
                <div className="relative aspect-[3/4] rounded overflow-hidden border-2 border-red-500/70 shadow-red-glow">
                  <Image
                    src={afterSrc}
                    alt={`${testimonial.name} - Depois`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-2 py-1 rounded text-xs font-bold shadow-lg">
                    DEPOIS
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="p-5 md:p-6">
                <p className="text-gray-300 mb-4 italic leading-relaxed text-sm md:text-base">
                  &quot;{testimonial.text}&quot;
                </p>
                <p className="text-red-500 font-bold text-base md:text-lg">
                  {testimonial.age ? `— ${testimonial.name}, ${testimonial.age} anos` : `— ${testimonial.name}`}
                </p>
              </div>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
