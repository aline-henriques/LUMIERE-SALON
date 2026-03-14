import Link from 'next/link'

const team = [
  {
    name:       'Isabella Moraes',
    firstName:  'Isabella',
    role:       'Diretora Criativa & Colorista',
    tag:        '+ 10 anos de experiência',
    gradient:   'linear-gradient(145deg, #C5A882 0%, #8B6B4A 100%)',
  },
  {
    name:       'Camila Vasconcelos',
    firstName:  'Camila',
    role:       'Especialista em Tratamentos',
    tag:        'Mestre em Tricologia',
    gradient:   'linear-gradient(145deg, #A8B5B0 0%, #6B7D78 100%)',
  },
  {
    name:       'Renata Souza',
    firstName:  'Renata',
    role:       'Make Artist & Produção',
    tag:        'Formada em NY',
    gradient:   'linear-gradient(145deg, #C4A0A0 0%, #8B5A5A 100%)',
  },
]

export default function Team() {
  return (
    <section id="equipe" className="py-28 px-14">
      {/* Header */}
      <div className="reveal flex justify-between items-end mb-16">
        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-rouge mb-5">A equipe</p>
          <h2 className="font-cormorant font-light text-ink" style={{ fontSize: 'clamp(36px,4vw,54px)', lineHeight: 1.15 }}>
            Mãos que <em className="italic text-gold">criam</em> beleza
          </h2>
        </div>
        <Link
          href="#agendamento"
          className="btn-ghost-line text-[11px] tracking-[0.15em] uppercase text-warm-gray hover:text-ink no-underline hidden md:flex"
        >
          Ver todos
        </Link>
      </div>

      {/* Grid */}
      <div className="reveal grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {team.map((member) => (
          <div key={member.name} className="team-card">
            {/* Photo */}
            <div className="relative overflow-hidden mb-5" style={{ aspectRatio: '3/4' }}>
              <div
                className="team-photo-inner absolute inset-0"
                style={{ background: member.gradient }}
              />
              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(26,22,20,0.7) 0%, transparent 50%)' }}
              />
              <span className="absolute bottom-5 left-5 font-cormorant italic font-light text-bone text-[24px]">
                {member.firstName}
              </span>
            </div>

            {/* Info */}
            <div>
              <h4 className="text-[13px] tracking-[0.08em] text-ink">{member.name}</h4>
              <p className="text-[11px] text-warm-gray mt-1 tracking-[0.05em]">{member.role}</p>
              <span className="inline-block mt-2.5 text-[9px] tracking-[0.2em] uppercase text-rouge border border-rouge px-2.5 py-0.5">
                {member.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
