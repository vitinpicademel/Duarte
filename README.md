# Protocolo Duarte - Landing Page

Landing page de alta conversão para o curso online de fitness/musculação "Protocolo Duarte".

## 🚀 Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (Ícones)

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar produção
npm start
```

## 🎨 Design

- **Tema:** Dark Mode predominante
- **Cores:** Azul Elétrico (#00f2ea) para CTAs e destaques
- **Tipografia:** Montserrat (títulos) e Inter (corpo)
- **Estilo:** Agressivo, motivador, direto ao ponto

## 📱 Responsividade

A landing page é totalmente responsiva, com design mobile-first. Todos os componentes se adaptam automaticamente a diferentes tamanhos de tela.

## 📄 Estrutura

```
/components/landing-page/
  - Header.tsx       # Navbar flutuante
  - Hero.tsx         # Seção principal
  - Pain.tsx         # Problematização
  - Solution.tsx     # Apresentação do método
  - Deliverables.tsx # O que está incluso
  - Testimonials.tsx # Antes e depois
  - About.tsx        # Quem são os criadores
  - FAQ.tsx          # Perguntas frequentes
  - Pricing.tsx      # Oferta e garantia
  - Footer.tsx       # Rodapé
```

## 🔧 Configuração

O projeto está configurado para usar:
- Imagens otimizadas com `next/image`
- Placeholders de imagens do `placehold.co`
- Scroll suave para navegação âncora
- Menu mobile responsivo

## 📝 Próximos Passos

1. Substituir placeholders de imagens por imagens reais
2. Integrar com plataforma de pagamento
3. Adicionar analytics
4. Configurar formulários de contato

