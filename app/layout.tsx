import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './globals.css'
import Script from 'next/script'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className='overflow-x-hidden'>
        <Navbar/>
       
            {children}
       <Footer/>
      <Script strategy='lazyOnload' defer charSet='utf-8' src="/vanilla-tilt.js" />
      </body>

    </html>
  )
}
