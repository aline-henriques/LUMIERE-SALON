const stats = [
  { label: 'clientes',        value: '4', suffix: 'k+', sub: 'atendidos por ano'        },
  { label: 'anos de história', value: '12', suffix: '+', sub: 'no mercado premium'       },
  { label: 'profissionais',   value: '08', suffix: '',   sub: 'especialistas certificados'},
  { label: 'satisfação',      value: '98', suffix: '%',  sub: 'de avaliações positivas'  },
]

export default function Philosophy() {
  return (
    <section
      id="filosofia"
      className="relative overflow-hidden py-28 px-14 grid grid-cols-1 md:grid-cols-2 gap-20 items-center bg-ink"
    >
      <span
        className="absolute -left-10 -top-16 font-bebas text-white/[0.02] pointer-events-none select-none leading-none"
        style={{ fontSize: 500 }}
      >
        L
      </span>

      {/* Texto */}
      <div className="relative z-10">
        <p className="reveal text-[10px] tracking-[0.3em] uppercase text-gold mb-5">Nossa História</p>
        <h2 className="reveal font-cormorant font-light text-bone" style={{ fontSize: 'clamp(36px,4vw,54px)', lineHeight: 1.15 }}>
          Beleza que <em className="italic text-rouge">empodera</em> e transforma
        </h2>
        <p className="reveal mt-5 text-[14px] leading-[2] text-bone/50">
          Acreditamos que beleza não é uma máscara — é uma linguagem. Cada cliente é uma obra em
          construção, e cada visita escreve um novo capítulo. Nossa missão é fazer com que você saia
          melhor do que chegou, por fora e por dentro.
        </p>
        <p className="reveal mt-5 text-[14px] leading-[2] text-bone/50">
          Utilizamos apenas produtos certificados, com fórmulas que respeitam a saúde dos fios e da pele.
          Técnica, cuidado e presença total em cada atendimento.
        </p>
      </div>

      {/* Status */}
      <div className="reveal grid grid-cols-2 gap-10">
        {stats.map((s) => (
          <div key={s.label} className="border-l border-white/10 pl-6">
            <em className="font-cormorant italic text-gold text-[14px] block mb-1">{s.label}</em>
            <strong className="font-bebas text-[64px] text-bone leading-none block">
              {s.value}<span className="text-rouge">{s.suffix}</span>
            </strong>
            <p className="text-[11px] tracking-[0.1em] text-bone/40">{s.sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
