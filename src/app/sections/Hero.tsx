import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">

      {/* ── FOTO DE FUNDO ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Overlay escuro elegante */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
background: 'linear-gradient(to bottom, rgba(10,8,7,0.75) 0%, rgba(10,8,7,0.65) 40%, rgba(10,8,7,0.88) 100%)',
        }}
      />

      {/* Overlay de textura sutil */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,8,7,0.4) 100%)',
        }}
      />

      {/* ── TOPO ── espaço navbar */}
      <div style={{ height: 120 }} />

      {/* ── CENTRO ── */}
      <div className="relative z-[5] flex flex-col items-center text-center px-8">

        {/* Nome principal */}
        <h1
          style={{
            opacity: 0,
            fontFamily: 'var(--font-cormorant)',
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: 'clamp(72px, 14vw, 160px)',
            letterSpacing: '0.03em',
            lineHeight: 1,
            background: 'linear-gradient(90deg, #F5F0E8 0%, #ffd8ae 45%, #F5F0E8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            backgroundSize: '200% auto',
            animation: 'fadeUp 1s 0.4s forwards, gradientShift 6s ease-in-out 1.4s infinite',
          }}
        >
          Lumière.
        </h1>

        {/* Divisor */}
        <div
          className="mt-8 mb-8 flex items-center gap-5"
          style={{ opacity: 0, animation: 'fadeIn 1s 1s forwards' }}
        >
          <div style={{ width: 60, height: 1, background: 'rgba(245,240,232,0.2)' }} />
          <span className="text-[9px] tracking-[0.4em] uppercase" style={{ color: 'rgba(245,240,232,0.4)' }}>
            desde 2012
          </span>
          <div style={{ width: 60, height: 1, background: 'rgba(245,240,232,0.2)' }} />
        </div>

        {/* Descrição */}
        <p
          className="text-[15px] leading-[2] max-w-[380px]"
          style={{ color: 'rgba(245,240,232,0.65)', opacity: 0, animation: 'fadeUp 0.7s 0.9s forwards' }}
        >
          Cada detalhe é uma declaração. Cada visita, uma transformação que começa de dentro para fora.
        </p>

        {/* Botões */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center gap-5"
          style={{ opacity: 0, animation: 'fadeUp 0.7s 1.1s forwards' }}
        >
          <Link
            href="#agendamento"
            className="btn-fill text-bone px-12 py-5 text-[12px] tracking-[0.22em] uppercase no-underline inline-block"
            style={{ background: 'rgba(245,240,232,0.12)', backdropFilter: 'blur(8px)', border: '1px solid rgba(245,240,232,0.2)' }}
          >
            <span>Agendar Sessão</span>
          </Link>
          <Link
            href="#servicos"
            className="text-[12px] tracking-[0.15em] uppercase no-underline flex items-center gap-3 transition-opacity hover:opacity-100"
            style={{ color: 'rgba(245,240,232,0.6)' }}
          >
            <span style={{ width: 28, height: 1, background: 'currentColor', display: 'inline-block' }} />
            Ver Serviços
          </Link>
        </div>
      </div>

      {/* ── Rodapé ── */}
      <div
        className="relative z-[5] flex flex-col items-center pb-10 gap-3"
        style={{ opacity: 0, animation: 'fadeIn 1s 1.6s forwards' }}
      >
        <div style={{ width: 1, height: 48, background: 'rgba(245,240,232,0.2)' }} />
        <span className="text-[9px] tracking-[0.35em] uppercase" style={{ color: 'rgba(245,240,232,0.3)' }}>
          scroll
        </span>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.3; transform: scale(0.6); }
        }
        @keyframes gradientShift {
          0%   { background-position: 0% center; }
          50%  { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
      `}</style>

    </section>
  )
}