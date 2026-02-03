import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Saint-Valentin 💕',
  description: 'Une question pour Jade...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="antialiased bg-gradient-to-br from-pink-100 via-rose-50 to-red-100 min-h-screen">
        {children}
      </body>
    </html>
  )
}
