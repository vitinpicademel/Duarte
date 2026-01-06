'use client'

import { Mail } from 'lucide-react'

type FooterProps = {
  onOpenCheckout: () => void
}

export default function Footer({ onOpenCheckout }: FooterProps) {
  return (
    <footer className="bg-dark-bg border-t border-red-500/20 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl md:text-2xl font-display font-black text-white mb-4">
              PROTOCOLO DUARTE
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Transformando vidas através da ciência aplicada ao treino e
              nutrição.
            </p>
            <button
              onClick={onOpenCheckout}
              className="mt-4 inline-flex items-center justify-center bg-gradient-to-r from-red-900 via-red-600 to-red-500 text-white px-5 py-2 rounded-lg font-bold text-sm hover:shadow-red-glow transition-all transform hover:scale-105"
            >
              GARANTIR MINHA VAGA
            </button>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-base md:text-lg font-display font-bold text-white mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#metodo"
                  className="text-gray-400 hover:text-red-500 transition-colors text-sm md:text-base"
                >
                  O Método
                </a>
              </li>
              <li>
                <a
                  href="#resultados"
                  className="text-gray-400 hover:text-red-500 transition-colors text-sm md:text-base"
                >
                  Resultados
                </a>
              </li>
              <li>
                <a
                  href="#quem-somos"
                  className="text-gray-400 hover:text-red-500 transition-colors text-sm md:text-base"
                >
                  Quem Somos
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-red-500 transition-colors text-sm md:text-base"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base md:text-lg font-display font-bold text-white mb-4">
              Contato
            </h4>
            <div className="flex items-center gap-2 text-gray-400 mb-4">
              <Mail size={18} />
              <a
                href="mailto:suporte@protocoloduarte.com"
                className="hover:text-red-500 transition-colors text-sm md:text-base"
              >
                suporte@protocoloduarte.com
              </a>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-red-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs md:text-sm">
              Protocolo Duarte © {new Date().getFullYear()} Todos os direitos
              reservados.
            </p>
            <div className="flex flex-wrap gap-4 text-xs md:text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
