import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Inter } from 'next/font/google';


import AosInit from '@/utils/aos';
import ScrolToTop from '@/utils/ScrolToTop';
const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <AosInit/>
        {children}
        <ScrolToTop/>
        </body>
    </html>
  )
}
