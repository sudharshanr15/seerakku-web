import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import NavBar from '@/component/NavBar'
import Footer from '@/component/Footer'
import OverlayProvider from '@/context/OverlayProvider'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DonateMenuWrapper from '@/component/DonateMenu/DonateMenuWrapper'


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
        <OverlayProvider>
        <NavBar />
          {children}
        <Footer />
        <DonateMenuWrapper />
        </OverlayProvider>
        <ToastContainer />
      </body>
    </html>
  )
}
