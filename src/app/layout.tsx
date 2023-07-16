import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import NavBar from '@/component/NavBar'
import Footer from '@/component/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Seerakku',
    default: 'Seerakku'
  },
  description: 'Creating a Sustainable Legacy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
