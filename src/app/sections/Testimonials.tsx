const testimonials = [
  { text: 'A Isabella transformou meu cabelo completamente. Saí do salão me sentindo uma outra pessoa — mais confiante, mais eu mesma.', name: 'Ana Paula Ferreira',  sub: 'Cliente há 4 anos',  dot: '#B8965A' },
  { text: 'Ambiente sofisticado, equipe atenciosa e resultado impecável. A Lumière é o único lugar onde confio meu cabelo.',             name: 'Mariana Castro',      sub: 'Cliente há 2 anos',  dot: '#C4503A' },
  { text: 'Fiz meu penteado de casamento com a Renata e foi simplesmente perfeito. Meu cabelo aguentou o dia todo com todo o calor!',    name: 'Juliana Mendes',      sub: 'Noiva 2024',         dot: '#8C7E72' },
  { text: 'O tratamento de reconstrução salvou meu cabelo. Após apenas duas sessões, ele ficou irreconhecível — no bom sentido.',        name: 'Fernanda Lima',       sub: 'Cliente há 1 ano',   dot: '#1A1614' },
]

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials]

  return (
    <section className="py-28 bg-bone overflow-hidden">
      <div className="text-center mb-16 px-14">
        <p className="reveal text-[10px] tracking-[0.3em] uppercase text-rouge mb-5">Depoimentos</p>
        <h2 className="reveal font-cormorant font-light text-ink" style={{ fontSize: 'clamp(36px,4vw,54px)', lineHeight: 1.15 }}>
          O que dizem <em className="italic text-gold">nossas clientes</em>
        </h2>
      </div>

      <div className="overflow-hidden">
        <div className="flex gap-6 w-max animate-testimonials">
          {doubled.map((t, i) => (
            <div key={i} className="w-[360px] flex-shrink-0 bg-cream p-10">
              <span className="font-cormorant text-[80px] leading-[0.7] text-rouge block mb-4">&ldquo;</span>
              <p className="font-cormorant italic text-[17px] leading-[1.7] text-ink">{t.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex-shrink-0" style={{ background: t.dot }} />
                <div>
                  <div className="text-[12px] text-ink tracking-[0.05em]">{t.name}</div>
                  <div className="text-[10px] text-warm-gray">{t.sub}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
