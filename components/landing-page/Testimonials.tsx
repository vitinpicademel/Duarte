'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const testimonials = [
  {
    before: 'https://placehold.co/300x400/1a1a1a/FFF?text=Antes',
    after: 'https://placehold.co/300x400/dc2626/FFF?text=Depois',
    name: 'João Silva',
    text: 'Em 3 meses consegui resultados que não tinha em 2 anos treinando sozinho. O protocolo mudou minha vida!',
  },
  {
    before: 'https://placehold.co/300x400/1a1a1a/FFF?text=Antes',
    after: 'https://placehold.co/300x400/dc2626/FFF?text=Depois',
    name: 'Maria Santos',
    text: 'Finalmente entendi como treinar e me alimentar corretamente. Perdi 12kg e ganhei muita massa muscular.',
  },
  {
    before: 'https://placehold.co/300x400/1a1a1a/FFF?text=Antes',
    after: 'https://placehold.co/300x400/dc2626/FFF?text=Depois',
    name: 'Carlos Oliveira',
    text: 'Sai da estagnação total. Hoje tenho o físico que sempre sonhei. O método realmente funciona!',
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
          {testimonials.map((testimonial, index) => (
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
                    src={testimonial.before}
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
                    src={testimonial.after}
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
                  — {testimonial.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
