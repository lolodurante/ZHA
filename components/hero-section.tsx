"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import FloatingPaths from "./floating-paths"

export default function HeroSection() {
  const title = "Transforma tu negocio con la potencia del ecosistema Zoho"
  const words = title.split(" ")

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-white to-[#29416C]/5 dark:from-[#29416C] dark:via-[#29416C] dark:to-[#1a2844]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#29416C]/5 via-transparent to-transparent dark:from-[#29416C]/20" />
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tighter">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text 
                    bg-gradient-to-r from-[#29416C] to-[#29416C]/80 
                    dark:from-white dark:to-white/80"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Optimiza tus procesos, aumenta la productividad y haz crecer tu negocio con la suite empresarial líder en el
            mercado
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a href="https://crm.zoho.com/bookings/30minutesmeeting?rid=6f1aeff56f3feb2cfadc82209370a8bfc9caf072e724d4e7a97953371276631de67c4fe9b0dc714bbd3ccfe07d0b1062gida67338863219114441121268dcbd620c4827e75912adce6e2fc8f61b1d2a0425">
              <Button
                variant="default"
                className="rounded-full px-8 py-6 text-lg font-semibold 
                bg-[#29416C] hover:bg-[#29416C]/90 text-white
                transition-all duration-300 hover:-translate-y-0.5"
              >
                Contactanos
                <span className="ml-2">→</span>
              </Button>
            </a>
            <a href="#servicios">
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-lg font-semibold 
                border-[#29416C] text-[#29416C] hover:bg-[#29416C]/10
                transition-all duration-300 hover:-translate-y-0.5"
              >
                Ver servicios
                <span className="ml-2">↓</span>
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

