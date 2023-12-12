import type { Metadata } from 'next'
import { Inter  } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'NZ - Creamos tu hogar',
  description: 'Trabajamos para mejorar tus ambientes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">


<Script async src="https://www.googletagmanager.com/gtag/js?id=G-4693MBSRD8"></Script>
<Script id='google-analytics'> {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-4693MBSRD8');
`}
</Script>

      <body className={inter.className}>{children}</body>


      
    </html>
  )
}
