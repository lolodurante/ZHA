"use client"

import { motion } from "framer-motion"
import { Users, Building2, Award, Clock } from "lucide-react"

const stats = [
  {
    title: "Clientes Satisfechos",
    value: "200+",
    icon: Users,
    description: "Empresas transformadas",
  },
  {
    title: "Años de Experiencia",
    value: "10+",
    icon: Clock,
    description: "En consultoría Zoho",
  },
  {
    title: "Proyectos Completados",
    value: "250+",
    icon: Building2,
    description: "Implementaciones exitosas",
  },
  {
    title: "Certificaciones",
    value: "10+",
    icon: Award,
    description: "Especialistas certificados",
  },
]

export default function StatsSection() {
  return (
    <section id="trayectoria" className="py-20 bg-white dark:bg-[#29416C]/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#29416C] dark:text-white mb-4">Nuestra Trayectoria</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Más de una década ayudando a empresas a optimizar sus procesos con Zoho
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-[#29416C]/10 text-[#29416C] dark:text-white">
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-[#29416C] dark:text-white mb-2">{stat.value}</h3>
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">{stat.title}</p>
              <p className="text-gray-600 dark:text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

