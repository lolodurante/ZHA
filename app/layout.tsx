import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"

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
      <Analytics />
      <body>{children}</body>
    </html>
  )
}
