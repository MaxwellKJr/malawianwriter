'use client'
import Header from '@/components/Header'
import './globals.css'
import Footer from '@/components/Footer'
import { Providers } from './Providers'
import { AnimatePresence, motion } from 'framer-motion'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <div>
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
