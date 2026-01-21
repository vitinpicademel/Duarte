'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Header from '@/components/landing-page/Header'
import Hero from '@/components/landing-page/Hero'
import Pain from '@/components/landing-page/Pain'
import Solution from '@/components/landing-page/Solution'
import Deliverables from '@/components/landing-page/Deliverables'
import Testimonials from '@/components/landing-page/Testimonials'
import About from '@/components/landing-page/About'
import Protocols from '@/components/landing-page/Protocols'
import FAQ from '@/components/landing-page/FAQ'
import Pricing from '@/components/landing-page/Pricing'
import Footer from '@/components/landing-page/Footer'
import WhatsAppButton from '@/components/landing-page/WhatsAppButton'
import BackgroundParticles from '@/components/landing-page/BackgroundParticles'

type CheckoutModalProps = {
  isOpen: boolean
  onClose: () => void
}

function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  if (!isOpen) return null

  const handleRedirect = (url: string) => {
    window.location.href = url
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg mx-4 glass-dark border border-red-500/60 rounded-2xl shadow-red-glow-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-black/60 to-red-800/40 pointer-events-none" />
            <div className="relative z-10 p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl md:text-3xl font-display font-black text-white">
                  Qual é o seu objetivo principal?
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-red-400 transition-colors text-sm"
                >
                  FECHAR
                </button>
              </div>

              <p className="text-gray-300 text-sm md:text-base mb-6">
                Escolha abaixo o protocolo que mais se encaixa com o seu momento. Ao clicar, você será direcionado
                diretamente para a página de inscrição do protocolo selecionado.
              </p>

              <div className="space-y-3">
                <button
                  onClick={() =>
                    handleRedirect('https://pages.mfitpersonal.com.br/p/2g3m?checkout=true')
                  }
                  className="w-full text-left bg-gradient-to-r from-red-900 via-red-700 to-red-600 text-white px-5 py-4 rounded-lg font-display font-bold text-sm md:text-base hover:shadow-red-glow transition-all"
                >
                  Protocolo Emagrecimento
                </button>
                <button
                  onClick={() =>
                    handleRedirect('https://pages.mfitpersonal.com.br/p/2g3e?checkout=true')
                  }
                  className="w-full text-left bg-gradient-to-r from-red-900 via-red-700 to-red-600 text-white px-5 py-4 rounded-lg font-display font-bold text-sm md:text-base hover:shadow-red-glow transition-all"
                >
                  Protocolo Hipertrofia Feminina
                </button>
                <button
                  onClick={() =>
                    handleRedirect('https://pages.mfitpersonal.com.br/p/2g3l?checkout=true')
                  }
                  className="w-full text-left bg-gradient-to-r from-red-900 via-red-700 to-red-600 text-white px-5 py-4 rounded-lg font-display font-bold text-sm md:text-base hover:shadow-red-glow transition-all"
                >
                  Protocolo Performance
                </button>
                <button
                  onClick={() =>
                    handleRedirect('https://pages.mfitpersonal.com.br/p/2g3k?checkout=true')
                  }
                  className="w-full text-left bg-gradient-to-r from-red-900 via-red-700 to-red-600 text-white px-5 py-4 rounded-lg font-display font-bold text-sm md:text-base hover:shadow-red-glow transition-all"
                >
                  Protocolo Hipertrofia Masculina
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Home() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const openCheckout = () => setIsCheckoutOpen(true)
  const closeCheckout = () => setIsCheckoutOpen(false)

  return (
    <main className="min-h-screen relative">
      <BackgroundParticles />
      <Header onOpenCheckout={openCheckout} />
      <Hero onOpenCheckout={openCheckout} />
      <Pain />
      <Solution />
      <Deliverables />
      <Testimonials />
      <About />
      <Protocols />
      <Pricing onOpenCheckout={openCheckout} />
      <FAQ />
      <Footer onOpenCheckout={openCheckout} />
      <WhatsAppButton />
      <CheckoutModal isOpen={isCheckoutOpen} onClose={closeCheckout} />
    </main>
  )
}

