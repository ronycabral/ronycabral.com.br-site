export type BusinessItem = {
  id: number
  categoria: string
  nome: string
  descricao: string
  url: string
  cta: string
}

export const businesses: BusinessItem[] = [
  {
    id: 1,
    categoria: 'Produtora',
    nome: 'Creative Squad Productions',
    descricao:
      'Produtora audiovisual especializada em eventos de alto impacto. Captação, edição e direção criativa para palcos que movem multidões.',
    url: 'https://creativesquadproductions.com.br',
    cta: 'Ver projetos',
  },
  {
    id: 2,
    categoria: 'SaaS',
    nome: 'AV Prospector',
    descricao:
      'Plataforma de prospecção em massa para produtoras audiovisuais. Encontre e aborde centenas de clientes potenciais em minutos — sem planilha, sem achismo.',
    url: '#',
    cta: 'Acessar plataforma',
  },
  {
    id: 3,
    categoria: 'Comunidade',
    nome: 'Realtimes Club',
    descricao:
      'Lives mensais: como empreender no audiovisual, liderar equipe e fechar contratos grandes. Tudo em 1 hora por mês.',
    url: 'https://ronycabral.com.br/live',
    cta: 'Entrar na série',
  },
  {
    id: 4,
    categoria: 'Movimento',
    nome: 'Movie Creators',
    descricao:
      'Churrasco presencial com filmmakers de todo o Brasil. Conexão real e network entre quem está construindo no audiovisual.',
    url: 'https://wa.me/5511981002507',
    cta: 'Participar',
  },
  {
    id: 5,
    categoria: 'Curso',
    nome: 'Edição do Zero ao Avançado',
    descricao:
      'Aprenda a editar do zero e desenvolva uma estética própria num mercado saturado de conteúdo igual.',
    url: 'https://ronycabral.com.br/cursoedicao',
    cta: 'Acessar curso',
  },
  {
    id: 6,
    categoria: 'Produto',
    nome: 'Packs Criativos',
    descricao:
      'Overlays, SFX e LUTs usados em projetos reais. Assets profissionais para elevar o nível das edições.',
    url: 'https://ronycabral.com.br/pack',
    cta: 'Ver packs',
  },
]
