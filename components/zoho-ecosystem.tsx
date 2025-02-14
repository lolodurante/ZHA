"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const zohoApps = [

  {
    name: "Zoho Desk",
    description: "Servicio de atención al cliente",
    icon: "/zoho-desk.png?height=80&width=80",
  },
  {
    name: "Zoho Analytics",
    description: "Business Intelligence",
    icon: "/zoho-analytics.png?height=80&width=80",
  },
  {
    name: "Zoho CRM",
    description: "Gestión de relaciones con clientes",
    icon: "/zoho-crm.png?height=80&width=80",
  },
  {
    name: "Zoho Books",
    description: "Contabilidad y facturación",
    icon: "/zoho-books.png?height=80&width=80",
  },
  {
    name: "Zoho People",
    description: "Gestión de recursos humanos",
    icon: "/zoho-people.png?height=80&width=80",
  },
  {
    name: "Zoho Inventory",
    description: "Gestión de inventario",
    icon: "/zoho-inventory.png?height=80&width=80",
  },
  {
    name: "Zoho Marketing",
    description: "Automatización de marketing",
    icon: "/zoho-marketing.png?height=80&width=80",
  },
  {
    name: "Zoho Forms",
    description: "Creación de formularios",
    icon: "/zoho-forms.png?height=80&width=80",
  },
  {
    name: "Zoho Projects",
    description: "Gestión de proyectos",
    icon: "/zoho-projects.png?width=100",
  },
  {
    name: "Zoho Sign",
    description: "Firmas digitales",
    icon: "/zoho-sign.png?height=80&width=80",
  },
]

export default function ZohoEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#29416C]/10 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#29416C] dark:text-white mb-4">Ecosistema Zoho</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Una suite completa de aplicaciones empresariales integradas para impulsar tu negocio
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <motion.div style={{ x }} className="flex gap-8 w-fit">
          {zohoApps.map((app, index) => (
            <Card key={app.name} className="w-[300px] flex-shrink-0 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <img src={app.icon || "/placeholder.svg"} alt={app.name} className="w-20 h-20 mb-4" />
                  <h3 className="text-xl font-semibold text-[#29416C] dark:text-white mb-2">{app.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{app.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

