import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import NavBar from '@/component/NavBar'
import Footer from '@/component/Footer'
import OverlayProvider from '@/context/OverlayProvider'


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
      <body className="data-[has-overlay=true]:overflow-hidden">
        <NavBar />
        <OverlayProvider>
          {children}
        </OverlayProvider>
        <Footer />
      </body>
    </html>
  )
}
