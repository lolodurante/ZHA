"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const clients = [
  {
    name: "Voltz",
    logo: "/clients/Voltz.png",
    description: "Ecommerce de material electrico"
  },
  {
    name: "Universidad IMPE",
    logo: "/clients/Universidad IMPE.jpg",
    description: "Educación superior"
  },
  {
    name: "Top Right Partners",
    logo: "/clients/Top Right Partners.png",
    description: "Agencia deMarketing"
  },
  {
    name: "SI Tickets",
    logo: "/clients/SI Tickets.jpg",
    description: "Venta de entradas"
  },
  {
    name: "Seguro Inteligente",
    logo: "/clients/Seguro Inteligente.png",
    description: "Servicios de seguros"
  },
  {
    name: "RMB",
    logo: "/clients/RMB.png",
    description: "Eventos"
  },
  {
    name: "Quanti Solutions",
    logo: "/clients/Quanti Solutions.png",
    description: "Soluciones tecnológicas"
  },
  {
    name: "On Energy",
    logo: "/clients/On Energy.png",
    description: "Energía renovable"
  },
  {
    name: "MRM Solutions",
    logo: "/clients/MRM Solutions.jpg",
    description: "Soluciones empresariales"
  },
  {
    name: "Motion Ave",
    logo: "/clients/Motion Ave.png",
    description: "Agencia de Marketing"
  },
  {
    name: "Misión DAC",
    logo: "/clients/Misión DAC.png",
    description: "Organización sin fines de lucro"
  },
  {
    name: "Michael Ham",
    logo: "/clients/Michael Ham.png",
    description: "Educación"
  },
  {
    name: "Kykuyo",
    logo: "/clients/Kykuyo.png",
    description: "Gaming"
  },
  {
    name: "Instituto Nacional de Enfermería Pericial",
    logo: "/clients/Instituto Nacional de Enfermería Pericial.jpg",
    description: "Educación en enfermería"
  },
  {
    name: "Instituto de Cultura CUDES",
    logo: "/clients/Instituto de Cultura CUDES.png",
    description: "Educación y cultura"
  },
  {
    name: "BMC Strategic Innovation",
    logo: "/clients/BMC Strategic Innovation.jpg",
    description: "Consultoría estratégica"
  }
]

export default function ClientsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])

  return (
    <section id="clientes" className="py-20 bg-gray-50 dark:bg-[#29416C]/10 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-[#29416C] dark:text-white mb-4">Nuestros Clientes</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Trabajamos con empresas líderes en sus sectores, ayudándolas a optimizar sus procesos y mejorar su eficiencia con las soluciones Zoho.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <motion.div style={{ x }} className="flex gap-8 w-fit pl-8">
          {clients.map((client) => (
            <Card key={client.name} className="w-[300px] flex-shrink-0 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 mb-4 flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 128px"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#29416C] dark:text-white mb-2 line-clamp-2">{client.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{client.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 