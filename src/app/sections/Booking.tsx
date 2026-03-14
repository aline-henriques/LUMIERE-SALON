'use client'

export default function Booking() {
  return (
    <section id="agendamento" className="py-24 px-14 bg-cream grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
      {/* Info */}
      <div className="reveal">
        <p className="text-[10px] tracking-[0.3em] uppercase text-rouge mb-5">Agendar</p>
        <blockquote className="font-cormorant italic font-light text-ink text-[36px] leading-[1.4] border-l-2 border-rouge pl-7 mb-8">
          &ldquo;Beleza não é acidente — é intenção.&rdquo;
        </blockquote>
        <div className="flex flex-col gap-3">
          {[
            ['Terça — Sexta', '09h às 20h'],
            ['Sábado', '08h às 18h'],
            ['Domingo e Segunda', 'Fechado'],
            ['Endereço', 'R. das Caixas — Recife, PE'],
            ['Telefone', '(81) 9 9999-0000'],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between text-[12px] pb-3 border-b border-ink/10 text-warm-gray">
              <strong className="font-normal text-ink">{label}</strong>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <div className="reveal flex flex-col gap-5">
        <p className="text-[10px] tracking-[0.3em] uppercase text-rouge">Preencha o formulário</p>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-[9px] tracking-[0.25em] uppercase text-warm-gray">Nome</label>
            <input className="form-input" type="text" placeholder="Seu nome completo" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[9px] tracking-[0.25em] uppercase text-warm-gray">Telefone</label>
            <input className="form-input" type="tel" placeholder="(xx) 9 xxxx-xxxx" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[9px] tracking-[0.25em] uppercase text-warm-gray">Serviço</label>
          <select className="form-input">
            <option value="" disabled>Selecione um serviço</option>
            <option>Coloração &amp; Mechas</option>
            <option>Corte Feminino</option>
            <option>Tratamento Capilar</option>
            <option>Maquiagem Artística</option>
            <option>Pacote Noivas</option>
            <option>Estética Facial</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-[9px] tracking-[0.25em] uppercase text-warm-gray">Data</label>
            <input className="form-input" type="date" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[9px] tracking-[0.25em] uppercase text-warm-gray">Horário</label>
            <select className="form-input">
              <option value="" disabled>Prefiro...</option>
              <option>Manhã (09h–12h)</option>
              <option>Tarde (12h–17h)</option>
              <option>Final do dia (17h–20h)</option>
            </select>
          </div>
        </div>

        <button className="btn-fill self-start bg-ink text-bone px-11 py-4 text-[11px] tracking-[0.2em] uppercase border-none mt-3">
          <span>Solicitar Agendamento →</span>
        </button>
      </div>
    </section>
  )
}
