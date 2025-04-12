"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Yazmin Dimas Uribe",
    role: "Universidad IMPE",
    content:
      "Marcia y su equipo nos han brindado soluciones personalizadas en todo momento. Su atención y escucha de nuestras necesidades ha permitido que nos brinden soluciones para mejorar nuestra eficiencia operativa. Sin duda, son un aliado confiable para cualquier organización que busque innovar y mejorar su gestión a través de la tecnología.",
    image: "/placeholder.svg",
  },
  {
    name: "Carlos Rodríguez",
    role: "Director de Operaciones, InnovaSoft",
    content:
      "La capacitación que recibimos fue fundamental para aprovechar al máximo las herramientas de Zoho. El equipo de ZHA nos guió en cada paso del proceso.",
    image: "/placeholder.svg",
  },
  {
    name: "Ana Martínez",
    role: "Gerente de Ventas, GlobalTech",
    content:
      "Gracias a ZHA, pudimos automatizar nuestros procesos de ventas y mejorar significativamente nuestra eficiencia. Su experiencia en Zoho es invaluable.",
    image: "/placeholder.svg",
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 bg-gray-50 dark:bg-[#29416C]/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#29416C] dark:text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Historias de éxito de empresas que confiaron en nosotros
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-[#29416C]/20 mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-[#29416C] dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

