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
const logo = "http://localhost:3000/images/logo-icon.png"; 

export const metadata = {
  title: "Afghanistan Art Gollery||افغانستان آرت گالری",
  description: 'Asad Shahi projects ArtGollery',
  icons: {
    icon: "/images/logo-icon.png",

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
        <meta property='og:titile' content="Afghanistan Art Gollery||افغانستان آرت گالری" />
        <meta property='og:description' content='online art store all over the world'/>
        <meta property="og:url" content="https://afgartgollery.com" />
        <meta property='og:image' content={logo}/> 

      </head>

      <body className={poppins.className}>
        <div style={{ fontFamily: 'sans-serif' }}>
          <AosInit />

          {children}
        </div>

        <ScrolToTop />
      </body>
    </html>
  )
}
