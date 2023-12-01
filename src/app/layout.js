
import Navbar from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StoreProvider } from '@/redux/StoreProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "StyleSanctum",
  description: "Style it your way!"
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
        <Navbar/>
        <div className='border-b-2 border-blue-950 border-t-2 border-spacing-2'>
          {children}
        </div>
        <Footer/>
        </StoreProvider>
        </body>
    </html>
  )
}
