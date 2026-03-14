const services = [
  { num: '01', title: 'Coloração & Mechas',     desc: 'Balayage, ombré, luzes e coloração global com produtos de última geração.',                  price: 'a partir de R$ 180' },
  { num: '02', title: 'Corte Feminino',          desc: 'Cortes personalizados que valorizam seu rosto e estilo de vida únicos.',                     price: 'a partir de R$ 90'  },
  { num: '03', title: 'Tratamento Capilar',      desc: 'Rituais de nutrição e reconstrução com tecnologia de cromatografia.',                        price: 'a partir de R$ 120' },
  { num: '04', title: 'Make Artístico',          desc: 'Maquiagem profissional para eventos, ensaios e ocasiões especiais.',                         price: 'a partir de R$ 150' },
  { num: '05', title: 'Noivas & Madrinhas',      desc: 'Pacotes exclusivos com teste incluso e acompanhamento no grande dia.',                       price: 'a partir de R$ 480' },
  { num: '06', title: 'Estética Facial',         desc: 'Design de sobrancelha, limpeza de pele e procedimentos faciais premium.',                   price: 'a partir de R$ 80'  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-28 px-14 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-20 items-start">
      {/* Left */}
      <div>
        <p className="reveal text-[10px] tracking-[0.3em] uppercase text-rouge mb-5">O que oferecemos</p>
        <h2 className="reveal font-cormorant font-light text-ink" style={{ fontSize: 'clamp(36px,4vw,54px)', lineHeight: 1.15 }}>
          Serviços que <em className="italic text-gold">redefinem</em> o padrão
        </h2>
          <p className="reveal mt-5 text-[16px] leading-[2] text-warm-gray max-w-[360px]">
          Técnicas contemporâneas aliadas à sofisticação que você merece. Cada procedimento é executado com precisão e dedicação total.
        </p>
      </div>

      {/* Grid */}
      <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-0.5">
        {services.map((s) => (
          <div key={s.num} className="service-card relative bg-cream p-10 overflow-hidden">
            <span className="card-num">{s.num}</span>
            <h3 className="card-title font-cormorant text-[22px] font-normal text-ink mb-2.5">{s.title}</h3>
            <p className="card-desc text-[12px] leading-[1.8] text-warm-gray">{s.desc}</p>
            <div className="card-price font-bebas text-[28px] text-gold mt-5 tracking-[0.05em]">{s.price}</div>
            <div className="card-line" />
          </div>
        ))}
      </div>
    </section>
  )
}
