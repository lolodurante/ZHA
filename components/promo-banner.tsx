"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { DollarSign, ArrowRight } from "lucide-react"

interface PromoBannerProps {
  position?: "top" | "bottom"
}

export default function PromoBanner({ position = "top" }: PromoBannerProps) {
  return (
    <section
      className={`
      relative py-20 bg-gradient-to-r from-[#29416C] to-[#1a2844] text-white overflow-hidden

    `}
    >
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white mb-6 animate-pulse">
            <DollarSign className="h-10 w-10 text-[#29416C]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¡COMIENZA CON <span className="text-green-400">$100 USD</span> DE REGALO!
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Como Zoho Affiliate, te regalamos $100 USD para que empieces a transformar tu negocio hoy mismo
          </p>
          <div className="flex justify-center">
            <a href="https://crm.zoho.com/bookings/30minutesmeeting?rid=6f1aeff56f3feb2cfadc82209370a8bfc9caf072e724d4e7a97953371276631de67c4fe9b0dc714bbd3ccfe07d0b1062gida67338863219114441121268dcbd620c4827e75912adce6e2fc8f61b1d2a0425">
              <Button
                size="lg"
                className="bg-white text-[#29416C] hover:bg-white/90 hover:scale-105 rounded-full px-12 py-8 text-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                ¡Quiero mis $100 USD de regalo!
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

