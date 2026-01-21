'use client'

import { motion } from 'framer-motion'

export default function BackgroundParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Partículas flutuantes vermelhas - Gym Atmosphere Global */}
      {[...Array(12)].map((_, i) => {
        const randomX = Math.random() * 100
        const randomY = Math.random() * 100
        const randomDuration = 10 + Math.random() * 6
        const randomSize = 2 + Math.random() * 4
        return (
          <motion.div
            key={`bg-particle-${i}`}
            className="absolute bg-red-500/20 rounded-full"
            style={{
              width: `${randomSize}px`,
              height: `${randomSize}px`,
              left: `${randomX}%`,
              top: `${randomY}%`,
            }}
            animate={{
              y: [
                `${randomY}%`,
                `${(randomY + 50) % 100}%`,
                `${randomY}%`,
              ],
              x: [
                `${randomX}%`,
                `${(randomX + 40) % 100}%`,
                `${randomX}%`,
              ],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
          />
        )
      })}
    </div>
  )
}

