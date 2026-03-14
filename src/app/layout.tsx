import type { Metadata } from 'next'
import { Bebas_Neue, Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dm = DM_Sans({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-dm',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'LUMIÈRE — Atelier de Beleza',
  description: 'Atelier de beleza premium em Recife. Arte, técnica e transformação.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${bebas.variable} ${cormorant.variable} ${dm.variable} font-dm`}>
        {children}
      </body>
    </html>
  )
}
