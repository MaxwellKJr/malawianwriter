'use client'
import Header from '@/components/Header'
import './globals.css'
import Footer from '@/components/Footer'
import { Providers } from './Providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className='flex flex-col min-h-screen'>
        <Providers>
          <div className='flex-1'>
            <Header />
            <div>
              {children}
            </div>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
