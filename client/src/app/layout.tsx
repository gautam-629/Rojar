import Navbar from './components/shared/Navbar';
import SlideBar from './components/shared/SlideBar';
import './globals.css'
import { Nunito_Sans } from 'next/font/google';
import { Providers } from './provider';
const nuto = Nunito_Sans({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nuto.className}>
       
          <div className='grid grid-cols-12 px-1'>
            <div className='col-span-3'>
              <SlideBar />
            </div>
            <div className='col-span-9 px-5'>
              <Navbar />
              {/* <Providers> */}
              {children}
              {/* </Providers> */}
             
            </div>
          </div>
     
      </body>

    </html>
  )
}
