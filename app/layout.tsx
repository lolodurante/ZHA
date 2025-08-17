import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import Script from 'next/script'
import WhatsAppFloat from '@/components/whatsapp-float'

export const metadata: Metadata = {
  title: 'ZHA | Zoho Affiliate',
  description: 'Optimiza tu empresa con las soluciones de Zoho. Consultoría, CRM, automatización y más. ¡Obtén $100 USD de regalo al iniciar!',
  icons: {
    icon: '/favicon.ico',
  }
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
        <Script
          id="pagesense-script"
          src="https://cdn.pagesense.io/js/zhaportal/6fadfdea18aa44a5a6312607ed85bd8e.js"
          strategy="afterInteractive"
        />
      </head>
      <Analytics />
      <body>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  )
}
