const cols = [
  {
    title: 'Serviços',
    links: ['Coloração', 'Cortes', 'Tratamentos', 'Maquiagem', 'Noivas'],
  },
  {
    title: 'Estúdio',
    links: ['Sobre nós', 'Nossa equipe', 'Galeria', 'Blog'],
  },
  {
    title: 'Contato',
    links: ['Instagram', 'WhatsApp', 'E-mail', 'Localização'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink pt-20 pb-10 px-14">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-16 pb-16 border-b border-white/5 mb-10">
        {/* Brand */}
        <div>
          <span className="font-bebas text-[28px] tracking-[0.25em] text-bone mb-4 block">LUMIÈRE</span>
          <p className="text-[12px] leading-[1.8] text-bone/40 max-w-[260px]">
            Atelier de beleza premium em Recife. Transformamos visões em realidade com técnica, arte e cuidado genuíno.
          </p>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <h5 className="text-[9px] tracking-[0.25em] uppercase text-gold mb-5">{col.title}</h5>
            <ul className="flex flex-col gap-2.5 list-none">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[13px] text-bone/50 hover:text-bone no-underline transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <p className="text-[11px] text-bone/25">
          © {new Date().getFullYear()} Lumière Atelier de Beleza. Todos os direitos reservados.
        </p>
        <div className="flex gap-5">
          {['Instagram', 'TikTok', 'Pinterest'].map((s) => (
            <a
              key={s}
              href="#"
              className="text-[9px] tracking-[0.2em] uppercase text-bone/30 hover:text-rouge no-underline transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
