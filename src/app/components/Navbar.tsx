'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-14 py-7">
      <span className="font-bebas text-[22px] tracking-[0.25em] text-bone">LUMIÈRE</span>

      <ul className="hidden md:flex gap-10 list-none">
        {['Serviços', 'Equipe', 'História', 'Contato'].map((item) => (
          <li key={item}>
            <Link
              href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
              className="text-[11px] tracking-[0.18em] uppercase text-bone opacity-70 hover:opacity-100 transition-opacity no-underline"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="#agendamento"
        className="text-[11px] tracking-[0.18em] uppercase text-bone border-b border-rouge pb-0.5 hover:text-rouge transition-colors no-underline"
      >
        Agendar →
      </Link>
    </nav>
  )
}