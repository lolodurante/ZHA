"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Users, Cog, CopyrightIcon as License } from "lucide-react"

const services = [
  {
    title: "Formación",
    description:
      "Capacitación y entrenamiento en las diferentes aplicaciones Zoho, tanto para el rol administrador, como directivo y gestor. Los cursos son sincrónicos y personalizados.",
    icon: GraduationCap,
  },
  {
    title: "Consultoría",
    description:
      "Relevamos y diseñamos soluciones personalizadas tomando las mejores prácticas propuestas por Zoho. Contamos con experiencia en proyectos de múltiples verticales de negocio.",
    icon: Users,
  },
  {
    title: "Implementación",
    description:
      "Modelado de datos y configuración de aplicaciones del ecosistema Zoho. Implementamos soluciones desde cero y mejoras a los procesos ya implementados. Realizamos automatizaciones y flujos entre varias aplicaciones.",
    icon: Cog,
  },
  {
    title: "Licencias",
    description:
      "Asesoramiento en la compra de licencias Zoho. Somos Afiliados Zoho y como beneficio, podemos otorgar un crédito de 100 USD para la compra de nuevas licencias o nuevas aplicaciones.",
    icon: License,
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#29416C]/10">
      <div className="container mx-auto px-4" id="servicios"> 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-[#29416C]">
                    <service.icon className="h-6 w-6" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

