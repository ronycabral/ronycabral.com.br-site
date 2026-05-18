import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rony Cabral — Empreendedor e Produtor Audiovisual',
  description: 'Negócios, produtos e movimentos de Rony Cabral.',
  openGraph: {
    title: 'Rony Cabral — Empreendedor e Produtor Audiovisual',
    description: 'Negócios, produtos e movimentos de Rony Cabral.',
    images: [{ url: '/images/rony.jpg', width: 800, height: 1000 }],
    type: 'website',
    url: 'https://ronycabral.com.br',
    siteName: 'Rony Cabral',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rony Cabral — Empreendedor e Produtor Audiovisual',
    description: 'Negócios, produtos e movimentos de Rony Cabral.',
    images: ['/images/rony.jpg'],
  },
  metadataBase: new URL('https://ronycabral.com.br'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
