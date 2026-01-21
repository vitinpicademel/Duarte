'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type HeaderProps = {
  onOpenCheckout: () => void
}

export default function Header({ onOpenCheckout }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-dark shadow-red-glow'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="relative flex items-center justify-center"
            >
              {/* Camada de Brilho Traseiro (Blur) */}
              <motion.div
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 blur-xl bg-red-600/40 rounded-full -z-10"
                style={{ width: '120%', height: '150%', left: '-10%', top: '-25%' }}
              />
              
              {/* Texto Principal */}
              <h1 className="relative z-10 text-xl md:text-2xl lg:text-3xl font-display font-black tracking-tighter text-white drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">
                PROTOCOLO <span className="text-red-500">DUARTE</span>
              </h1>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button
              onClick={() => scrollToSection('metodo')}
              className="text-gray-300 hover:text-red-500 transition-colors font-medium text-sm"
            >
              O Método
            </button>
            <button
              onClick={() => scrollToSection('resultados')}
              className="text-gray-300 hover:text-red-500 transition-colors font-medium text-sm"
            >
              Resultados
            </button>
            <button
              onClick={() => scrollToSection('quem-somos')}
              className="text-gray-300 hover:text-red-500 transition-colors font-medium text-sm"
            >
              Quem Somos
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-300 hover:text-red-500 transition-colors font-medium text-sm"
            >
              FAQ
            </button>
            <button
              onClick={onOpenCheckout}
              className="bg-gradient-to-r from-red-900 via-red-600 to-red-500 text-white px-5 py-2 rounded-lg font-bold text-sm hover:shadow-red-glow transition-all transform hover:scale-105"
            >
              QUERO ACESSAR AGORA
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:text-red-500 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 space-y-3 glass-dark border-t border-red-500/30"
            >
              <button
                onClick={() => scrollToSection('metodo')}
                className="block w-full text-left text-gray-300 hover:text-red-500 transition-colors py-2 px-2"
              >
                O Método
              </button>
              <button
                onClick={() => scrollToSection('resultados')}
                className="block w-full text-left text-gray-300 hover:text-red-500 transition-colors py-2 px-2"
              >
                Resultados
              </button>
              <button
                onClick={() => scrollToSection('quem-somos')}
                className="block w-full text-left text-gray-300 hover:text-red-500 transition-colors py-2 px-2"
              >
                Quem Somos
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left text-gray-300 hover:text-red-500 transition-colors py-2 px-2"
              >
                FAQ
              </button>
              <button
                onClick={onOpenCheckout}
                className="block w-full bg-gradient-to-r from-red-900 via-red-600 to-red-500 text-white px-6 py-3 rounded-lg font-bold text-center mt-2"
              >
                QUERO ACESSAR AGORA
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
