import './globals.css'
import { League_Spartan, Inter } from 'next/font/google'

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  variable: '--font-league-spartan',
  weight: ['400', '700']
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${leagueSpartan.variable} ${inter.variable}`}
    >
      {/* Default body font set here */}
      <body className="font-inter">{children}</body>
    </html>
  )
}