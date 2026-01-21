'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

type HeroProps = {
  onOpenCheckout: () => void
}

export default function Hero({ onOpenCheckout }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080/1a1a1a/FFF?text=Fisico+Treinado+Dark"
          alt="Físico treinado"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/95 via-dark-bg/90 to-dark-bg" />
        
        {/* Efeito de névoa vermelha animada */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(220, 38, 38, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 20%, rgba(220, 38, 38, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Partículas flutuantes vermelhas - Gym Atmosphere */}
        {[...Array(8)].map((_, i) => {
          const randomX = Math.random() * 100
          const randomY = Math.random() * 100
          const randomDuration = 8 + Math.random() * 4
          const randomSize = 2 + Math.random() * 3
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute bg-red-500 rounded-full opacity-30"
              style={{
                width: `${randomSize}px`,
                height: `${randomSize}px`,
              }}
              initial={{
                x: `${randomX}%`,
                y: `${randomY}%`,
              }}
              animate={{
                y: [`${randomY}%`, `${(randomY + 40) % 100}%`, `${randomY}%`],
                x: [`${randomX}%`, `${(randomX + 30) % 100}%`, `${randomX}%`],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
            />
          )
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black mb-6 leading-tight px-2"
        >
          <span className="text-white">
            INICIE COM MÉTODO,
          </span>
          <br />
          <span className="text-red-gradient">
            EVOLUA COM CIÊNCIA
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto px-4 leading-relaxed"
        >
          Cansado de não ver mudança ou de desistir no meio do caminho? O que te
          falta é método, não esforço. Use a ciência a seu favor para ter
          resultados reais, seja você iniciante ou avançado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            onClick={onOpenCheckout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative bg-gradient-to-r from-red-900 via-red-600 to-red-500 text-white px-8 py-4 md:px-12 md:py-5 rounded-lg font-display font-black text-lg md:text-xl overflow-hidden group"
          >
            <span className="relative z-10">QUERO COMEÇAR MINHA TRANSFORMAÇÃO</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-400 to-red-500"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-500 rounded-lg blur opacity-75"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.button>
        </motion.div>

        {/* Prova Social */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 text-gray-300 mt-8"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <span className="text-sm md:text-base font-medium">
            Mais de 500 alunos transformados
          </span>
        </motion.div>
      </div>
    </section>
  )
}
