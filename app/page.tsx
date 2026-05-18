/* eslint-disable @next/next/no-img-element */
import { businesses } from '@/data/businesses'

type BizCfg = { image: string; gradient: string; shadow: string; imgW: number; imgH: number; imgFit?: 'cover' | 'contain'; imgBg?: string }

const bizConfig: Record<number, BizCfg> = {
  1: {
    image:    '/images/foto-creative-squad.png',
    gradient: 'linear-gradient(135deg, #e8c96e 0%, #C9A84C 40%, #b8943e 100%)',
    shadow:   '0 0 20px rgba(201,168,76,0.7), 0 0 60px rgba(201,168,76,0.35), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(0,0,0,0.3)',
    imgW: 300, imgH: 450,
  },
  2: {
    image:    '/images/foto-av-prospector.png',
    gradient: 'linear-gradient(135deg, #ffe066 0%, #F5C518 40%, #e0b400 100%)',
    shadow:   '0 0 20px rgba(245,197,24,0.7), 0 0 60px rgba(245,197,24,0.35), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(0,0,0,0.3)',
    imgW: 300, imgH: 450,
  },
  3: {
    image:    '/images/foto-realtimes-club.png',
    gradient: 'linear-gradient(135deg, #c084fc 0%, #A855F7 40%, #9333ea 100%)',
    shadow:   '0 0 20px rgba(168,85,247,0.7), 0 0 60px rgba(168,85,247,0.35), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(0,0,0,0.3)',
    imgW: 300, imgH: 450,
  },
  4: {
    image:    '/images/foto-movie-creators.png',
    gradient: 'linear-gradient(135deg, #60a5fa 0%, #3B82F6 40%, #2563eb 100%)',
    shadow:   '0 0 20px rgba(59,130,246,0.7), 0 0 60px rgba(59,130,246,0.35), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(0,0,0,0.3)',
    imgW: 300, imgH: 450,
  },
  5: {
    image:    '/images/foto-edicao-realtime.png',
    gradient: 'linear-gradient(135deg, #f87171 0%, #EF4444 40%, #dc2626 100%)',
    shadow:   '0 0 20px rgba(239,68,68,0.7), 0 0 60px rgba(239,68,68,0.35), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(0,0,0,0.3)',
    imgW: 300, imgH: 450,
  },
  6: {
    image:    '/images/foto-cllr-pack-sfx.png',
    gradient: 'linear-gradient(135deg, #4ade80 0%, #22C55E 40%, #16a34a 100%)',
    shadow:   '0 0 20px rgba(34,197,94,0.7), 0 0 60px rgba(34,197,94,0.35), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(0,0,0,0.3)',
    imgW: 300, imgH: 450, imgFit: 'contain' as const, imgBg: '#070c18',
  },
}

export default function Home() {
  return (
    <main style={{ color: 'var(--text)' }}>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="section-offset pt-8 pb-14">
        <h1
          style={{
            fontFamily: "'Impact', 'Arial Narrow', sans-serif",
            fontWeight: 900,
            letterSpacing: '0.04em',
            lineHeight: 1,
            textTransform: 'uppercase',
          }}
          className="text-2xl md:text-3xl"
        >
          Rony Cabral
        </h1>
      </section>

      {/* ── NEGÓCIOS ─────────────────────────────────────────────────── */}
      <section className="section-offset pb-24 mt-10">
        <div className="flex flex-col max-w-[900px]">
          {businesses.map((biz, i) => {
            const cfg = bizConfig[biz.id]
            return (
              <article
                key={biz.id}
                className="business-card animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Imagem */}
                <div
                  className="card-image-wrapper"
                  style={{ backgroundColor: cfg.imgBg }}
                >
                  <img
                    src={cfg.image}
                    alt={biz.nome}
                    style={{ objectFit: cfg.imgFit ?? 'cover' }}
                  />
                </div>

                {/* Conteúdo */}
                <div className="card-content">
                  <span
                    style={{
                      color: '#22d3ee',
                      textShadow: '0 0 8px rgba(34, 211, 238, 0.6), 0 0 20px rgba(34, 211, 238, 0.25)',
                      fontFamily: 'DM Sans, sans-serif',
                      letterSpacing: '0.18em',
                      fontSize: '0.8rem',
                      textTransform: 'uppercase',
                      fontWeight: 500,
                    }}
                  >
                    Acesse o site
                  </span>

                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      color: '#fff',
                      lineHeight: 1.1,
                      fontSize: 'clamp(1.5rem, 4vw, 3.5rem)',
                      fontWeight: 700,
                    }}
                  >
                    {biz.nome}
                  </h3>

                  <a
                    href={biz.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass"
                    style={{
                      background: cfg.gradient,
                      boxShadow: cfg.shadow,
                      color: '#000',
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      borderRadius: 8,
                      display: 'inline-block',
                      padding: 'clamp(8px, 1.5vw, 16px) clamp(16px, 3vw, 40px)',
                      fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                    }}
                  >
                    {biz.cta}
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </main>
  )
}
