"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Zap, Shield, DollarSign, Settings, Globe2, Cloud, CheckCircle2, ArrowRight } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Integración Total",
    description: "Todas las aplicaciones funcionan perfectamente juntas, eliminando silos de información",
  },
  {
    icon: Shield,
    title: "Máxima Seguridad",
    description: "Certificaciones de seguridad internacionales y cifrado de datos de nivel empresarial",
  },
  {
    icon: DollarSign,
    title: "Mejor Costo-Beneficio",
    description: "Ahorra hasta un 40% comparado con soluciones similares del mercado",
  },
  {
    icon: Settings,
    title: "Personalización Total",
    description: "Adapta cada aplicación a tus procesos específicos de negocio",
  },
  {
    icon: Globe2,
    title: "Soporte Local",
    description: "Atención en español y conocimiento del mercado local",
  },
  {
    icon: Cloud,
    title: "100% en la Nube",
    description: "Accede a tus aplicaciones desde cualquier lugar y dispositivo",
  },
]

const features = [
  "Implementación rápida y eficiente",
  "Actualizaciones automáticas sin costo",
  "Interfaz intuitiva y fácil de usar",
  "Escalabilidad según tu crecimiento",
  "Migración de datos incluida",
  "Capacitación personalizada",
]

export default function WhyZoho() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#29416C]/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#29416C] dark:text-white mb-4">¿Por qué elegir Zoho?</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            La suite empresarial más completa y rentable del mercado
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white dark:bg-[#29416C]/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-full bg-[#29416C]/10">
                    <benefit.icon className="h-6 w-6 text-[#29416C] dark:text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#29416C] dark:text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#29416C] rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Características destacadas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-2 text-white"
                  >
                    <CheckCircle2 className="h-5 w-5" style={{color: "#82b8ec"}} />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-semibold text-white mb-4">¿Listo para transformar tu negocio?</h4>
                <p className="text-white/80 mb-6">
                  Agenda una demo personalizada y descubre todo el potencial de Zoho para tu empresa
                </p>
                <a href="https://crm.zoho.com/bookings/30minutesmeeting?rid=6f1aeff56f3feb2cfadc82209370a8bfc9caf072e724d4e7a97953371276631de67c4fe9b0dc714bbd3ccfe07d0b1062gida67338863219114441121268dcbd620c4827e75912adce6e2fc8f61b1d2a0425">                
                  <Button className="w-full bg-white text-[#29416C] hover:bg-white/90" size="lg">
                    Agendar demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

