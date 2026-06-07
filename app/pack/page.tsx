/* eslint-disable @next/next/no-img-element */

const products = [
  {
    id: 6,
    nome: 'POWERGRADES + LUTS',
    descricao: 'Combo completo de cor para DaVinci Resolve. PowerGrades e LUTs feitos para trabalhar juntos — do básico ao cinemático.',
    url: 'https://pay.kiwify.com.br/HY9MRAo',
    cta: 'Comprar agora',
    cor: '#C9A84C',
    imagem: '/images/CAPA_COMBO.png',
  },
  {
    id: 1,
    nome: 'POWERGRADES',
    descricao: 'Grades de cor cinematográficas para DaVinci Resolve. Crie imagens com profundidade e identidade visual em segundos.',
    url: 'https://pay.kiwify.com.br/4lFdT2t',
    cta: 'Comprar agora',
    cor: '#C9A84C',
    imagem: '/images/CAPA_POWERGRADES.png',
  },
  {
    id: 2,
    nome: 'LUTS',
    descricao: 'LUTs prontas para DaVinci e Premiere. Aplique looks profissionais com um clique.',
    url: 'https://pay.kiwify.com.br/PGNK5zP',
    cta: 'Comprar agora',
    cor: '#3B82F6',
    imagem: '/images/CAPA_LUTS.png',
  },
  {
    id: 3,
    nome: 'SOUND EFFECTS',
    descricao: 'Biblioteca de SFX de impacto usados nos maiores eventos do Brasil. Transições, risers, impactos e muito mais.',
    url: 'https://pay.kiwify.com.br/Q3grYGh',
    cta: 'Comprar agora',
    cor: '#22C55E',
    imagem: '/images/CAPA_SFX.png',
  },
  {
    id: 4,
    nome: 'OVERLAYS',
    descricao: 'Overlays de luz, partículas e texturas para elevar qualquer edição. Drag and drop em qualquer software.',
    url: 'https://pay.kiwify.com.br/sOvOxA6',
    cta: 'Comprar agora',
    cor: '#A855F7',
    imagem: '/images/CAPA_OVERLAYS.png',
  },
  {
    id: 5,
    nome: 'TRILHAS SONORAS',
    descricao: 'Trilhas autorais para eventos, institucionais e reels. Música que transforma a percepção do conteúdo.',
    url: 'https://pay.kiwify.com.br/o9OH9bT',
    cta: 'Comprar agora',
    cor: '#EF4444',
    imagem: '/images/CAPA_TRILHAS.png',
  },
]

export default function PackPage() {
  return (
    <main style={{ color: 'var(--text)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* ── HEADER ───────────────────────────────────────────────────── */}
      <section className="section-offset pt-8 pb-4">
        <a
          href="/"
          style={{
            fontFamily: "'Impact', 'Arial Narrow', sans-serif",
            fontWeight: 900,
            letterSpacing: '0.04em',
            lineHeight: 1,
            textTransform: 'uppercase',
            color: '#fff',
            textDecoration: 'none',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          }}
        >
          RONY CABRAL
        </a>
      </section>

      {/* ── TÍTULO ───────────────────────────────────────────────────── */}
      <section className="section-offset pt-10 pb-2">
        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontWeight: 400,
            letterSpacing: '0.04em',
            lineHeight: 1,
            fontSize: 'clamp(3rem, 10vw, 7rem)',
            color: '#fff',
          }}
        >
          PACKS CRIATIVOS
        </h1>
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            color: 'var(--muted)',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.125rem)',
            marginTop: '12px',
          }}
        >
          Assets profissionais usados nos meus projetos.
        </p>
      </section>

      {/* ── PRODUTOS ─────────────────────────────────────────────────── */}
      <section className="section-offset pb-24 mt-8" style={{ flex: 1 }}>
        <div className="flex flex-col max-w-[900px]">
          {products.map((product, i) => (
            <article
              key={product.id}
              className="business-card animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Imagem */}
              <div className="card-image-wrapper">
                {product.id === 1 && <img src="/images/CAPA_POWERGRADES.png" alt="Powergrades" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />}
                {product.id === 2 && <img src="/images/CAPA_LUTS.png" alt="Luts" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />}
                {product.id === 3 && <img src="/images/CAPA_SFX.png" alt="Sound Effects" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />}
                {product.id === 4 && <img src="/images/CAPA_OVERLAYS.png" alt="Overlays" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />}
                {product.id === 5 && <img src="/images/CAPA_TRILHAS.png" alt="Trilhas Sonoras" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />}
                {product.id === 6 && <img src="/images/CAPA_COMBO.png" alt="Powergrades + Luts" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />}
              </div>

              {/* Conteúdo */}
              <div className="card-content">
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontWeight: 400,
                    color: '#fff',
                    lineHeight: 1,
                    fontSize: 'clamp(2rem, 5vw, 4rem)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {product.nome}
                </h3>

                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    color: 'var(--muted)',
                    fontSize: 'clamp(0.875rem, 1.4vw, 1rem)',
                    lineHeight: 1.6,
                    maxWidth: '480px',
                  }}
                >
                  {product.descricao}
                </p>

                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glass"
                  style={{
                    background: product.cor,
                    color: '#fff',
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    borderRadius: 8,
                    display: 'inline-block',
                    padding: 'clamp(8px, 1.5vw, 14px) clamp(16px, 3vw, 36px)',
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                    textDecoration: 'none',
                    marginTop: '8px',
                  }}
                >
                  {product.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer
        style={{
          textAlign: 'center',
          padding: '24px 0',
          color: 'var(--muted)',
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '0.875rem',
          borderTop: '1px solid #1a1a2e',
        }}
      >
        © 2025 Rony Cabral
      </footer>
    </main>
  )
}
