import Navbar from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'StyleSanctum',
  description: 'Wear it your way',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className='border-b-2 border-blue-950 border-t-2 border-spacing-2'>
        {children}
        </div>
        <Footer/>
        </body>
    </html>
  )
}
