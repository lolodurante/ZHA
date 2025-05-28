"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, Video, ArrowRight } from "lucide-react"

const meetingTypes = [
  {
    title: "Consultoría Inicial",
    duration: "30 minutos",
    description: "Evaluación rápida de tus necesidades y objetivos",
    icon: Clock,
    link: "https://crm.zoho.com/bookings/30minutesmeeting?rid=6f1aeff56f3feb2cfadc82209370a8bfc9caf072e724d4e7a97953371276631de67c4fe9b0dc714bbd3ccfe07d0b1062gida67338863219114441121268dcbd620c4827e75912adce6e2fc8f61b1d2a0425"
  },
  {
    title: "Demo Personalizada",
    duration: "45 minutos",
    description: "Demostración de las soluciones Zoho relevantes para tu negocio",
    icon: Video,
    link: "https://crm.zoho.com/bookings/45minutesmeeting?rid=57b322d02e9da5db527cdabb213fc544d613f5cf237cdedd41c7ba89d831db829d4bad7238316eb045e01267f032c105gida67338863219114441121268dcbd620c4827e75912adce6e2fc8f61b1d2a0425"
  },
  {
    title: "Reunión Estratégica",
    duration: "60 minutos",
    description: "Planificación detallada y análisis de implementación",
    icon: Calendar,
    link: "https://crm.zoho.com/bookings/60minutesmeeting?rid=00a1cc689910f422dfc83df0cd18249ede0f7090be641cdfa266cda691186f300502c52d851e65520f0dff910dfadfc4gida67338863219114441121268dcbd620c4827e75912adce6e2fc8f61b1d2a0425"
  },
]

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-white dark:bg-[#29416C]/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#29416C] dark:text-white mb-4">Agenda una reunión</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Elige el tipo de reunión que mejor se adapte a tus necesidades
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {meetingTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#29416C]/10 mb-4">
                    <type.icon className="h-6 w-6 text-[#29416C]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#29416C] mb-2">{type.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">Duración: {type.duration}</p>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <a href="https://crm.zoho.com/bookings/30minutesmeeting?rid=6f1aeff56f3feb2cfadc82209370a8bfc9caf072e724d4e7a97953371276631de67c4fe9b0dc714bbd3ccfe07d0b1062gida67338863219114441121268dcbd620c4827e75912adce6e2fc8f61b1d2a0425">                  
                    <Button
                      className="w-full bg-[#29416C] hover:bg-[#29416C]/90 text-white"
                      onClick={() => window.open(type.link, "_blank")}
                    >
                      Agendar ahora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">¿Prefieres contactarnos directamente?</p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 md:justify-center flex-wrap">
            <a href="mailto:hola@zhadmin.com">
              <Button variant="outline" className="rounded-full">
                hola@zhadmin.com
              </Button>
            </a>
            <a href="tel:+5491144292093">
              <Button variant="outline" className="rounded-full">
              +54 9 11 4429-2093 (Argentina)
              </Button>
            </a>
            <a href="tel:+5215546667874">
              <Button variant="outline" className="rounded-full">
              +52 1 55 4666 7874 (México)
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

