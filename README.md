# LUMIÈRE — Atelier de Beleza

Landing page profissional em **Next.js 14 + TypeScript + Tailwind CSS**.

## Como rodar

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o servidor de desenvolvimento
npm run dev

# 3. Acesse no navegador
http://localhost:3000
```

## Build para produção

```bash
npm run build
npm start
```

## Estrutura do projeto

```
src/app/
├── layout.tsx              # Root layout com fontes Google
├── page.tsx                # Página principal (monta todas as seções)
├── globals.css             # CSS global + animações + utilitários
│
├── components/
│   ├── Cursor.tsx          # Cursor personalizado animado
│   ├── Navbar.tsx          # Navegação fixa
│   ├── Footer.tsx          # Rodapé completo
│   └── useReveal.ts        # Hook para animação de scroll reveal
│
└── sections/
    ├── Hero.tsx            # Seção hero com layout split
    ├── Marquee.tsx         # Faixa animada de serviços
    ├── Services.tsx        # Grid de 6 serviços com hover effect
    ├── Philosophy.tsx      # Filosofia + estatísticas
    ├── Team.tsx            # Cards da equipe
    ├── Testimonials.tsx    # Carrossel infinito de depoimentos
    └── Booking.tsx         # Formulário de agendamento
```

## Stack

- **Next.js 14** — App Router
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** — Bebas Neue + Cormorant Garamond + DM Sans

## Personalização

| O que mudar           | Onde                          |
|-----------------------|-------------------------------|
| Nome / cidade         | `sections/Hero.tsx`           |
| Serviços e preços     | `sections/Services.tsx`       |
| Equipe                | `sections/Team.tsx`           |
| Depoimentos           | `sections/Testimonials.tsx`   |
| Horários / endereço   | `sections/Booking.tsx`        |
| Paleta de cores       | `tailwind.config.ts`          |
| Fontes                | `app/layout.tsx`              |
