import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Protocolo Duarte - O Fim da Estagnação',
  description: 'Alcance o físico dos seus sonhos em 90 dias com o método que une ciência e prática. Protocolo completo de treino e nutrição.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

