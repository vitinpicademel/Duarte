'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'Serve para iniciantes?',
    answer:
      'Sim! O Protocolo Duarte possui planilhas específicas para iniciantes, intermediários e avançados. Você começa no seu nível e evolui conforme sua progressão.',
  },
  {
    question: 'Preciso de equipamentos caros?',
    answer:
      'Não! O protocolo foi desenvolvido para ser executado tanto em academias completas quanto em academias mais simples. Adaptações são fornecidas para diferentes cenários.',
  },
  {
    question: 'Em quanto tempo vejo resultados?',
    answer:
      'Com consistência e seguindo o protocolo corretamente, os primeiros resultados visíveis aparecem em 30-45 dias. Resultados significativos são esperados em 90 dias.',
  },
  {
    question: 'E se eu não gostar? (Garantia)',
    answer:
      'Oferecemos garantia incondicional de 7 dias. Se você não ficar satisfeito por qualquer motivo, devolvemos 100% do seu investimento, sem perguntas.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 md:py-24 bg-dark-bg relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-center mb-12 md:mb-16 text-white"
        >
          Perguntas Frequentes
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-dark rounded-lg overflow-hidden neon-red-border hover:shadow-red-glow transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 md:px-6 py-4 md:py-5 text-left flex items-center justify-between gap-4 hover:bg-red-950/20 transition-colors"
              >
                <span className="text-lg md:text-xl font-display font-bold text-white">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown
                    size={24}
                    className="text-red-500 flex-shrink-0"
                  />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-4 md:pb-5">
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
