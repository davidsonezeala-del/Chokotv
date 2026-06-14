import './globals.css'
import '../components/Styles.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ReactNode } from 'react'

export const metadata = {
  title: 'ChokoTv - Entertainment & Advertising',
  description: 'ChokoTv - Latest entertainment news and ads marketplace'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
