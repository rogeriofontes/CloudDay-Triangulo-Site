// src/app/layout.tsx
import './globals.css'
import Script from 'next/script'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'CloudDay Triângulo - Seu ponto de encontro com as maiores tendências em cloud computing',
  description: 'Bootstrap 5 Tech Conference Template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />

        {/* CSS personalizado do projeto */}
        <link rel="stylesheet" href="/assets/css/theme.css" />

      </head>
      <body>
        {/* Cabeçalho e Navbar */}
        {/*<Header />*/}
        <Navbar />

        {/* Conteúdo da Página */}
        {children}

        {/* Scripts JS necessários */}
        <Script src="/assets/plugins/popper.min.js" strategy="afterInteractive" />
        <Script src="/assets/plugins/bootstrap/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/assets/plugins/smoothscroll.min.js" strategy="afterInteractive" />
        <Script src="/assets/plugins/gumshoe/gumshoe.polyfills.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
