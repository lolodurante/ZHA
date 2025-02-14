import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Transforma tu negocio con Zoho | Consultoría y Soluciones ZHA',
  description: 'Optimiza tu empresa con las soluciones de Zoho. Consultoría, CRM, automatización y más. ¡Obtén $100 USD de regalo al iniciar!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="zoho-init" strategy="afterInteractive">
          {`window.$zoho=window.$zoho || {}; $zoho.salesiq=$zoho.salesiq||{ready:function(){}};`}
        </Script>
        <Script
          id="zoho-salesiq"
          src="https://salesiq.zohopublic.com/widget?wc=siq249ba8539d877c3af0782842d4e76581"
          strategy="lazyOnload"
        />
      </head>
      <Analytics />
      <body>{children}</body>
    </html>
  )
}
