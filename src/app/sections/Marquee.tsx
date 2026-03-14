const items = [
  'Corte', 'Coloração', 'Tratamento Capilar', 'Maquiagem',
  'Manicure & Pedicure', 'Design de Sobrancelha', 'Spa Capilar', 'Noivas',
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden bg-ink py-3.5 border-t border-white/5">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-bebas text-[13px] tracking-[0.3em] text-white/40 px-10"
          >
            {item} <span className="text-rouge">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
