import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Inter } from 'next/font/google';
import { Poppins, Playfair_Display } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '700'],  // Specify the weights you need
  subsets: ['latin'],
});

const playfairDisplay = Playfair_Display({
  weight: ['400', '700'],  // Specify the weights you need for headings
  subsets: ['latin'],
});


import AosInit from '@/utils/aos';
import ScrolToTop from '@/utils/ScrolToTop';
import Navbar from '@/components/modules/navbar/Navbar';
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title:"Afghanistan Art Gollery||آرت گالری",
  description: 'Asad Shahi projects ArtGollery',
  icons:{
    icon: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/36190/coffee-logo-clipart-md.png",

  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir='ltr' >
       <head>
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" 
        />
      </head>
      <body className={poppins.className}>
        <div style={{fontFamily:'sans-serif'}}>
        <AosInit/>
          
        {children}
        </div>
      
        <ScrolToTop/>
        </body>
    </html>
  )
}
