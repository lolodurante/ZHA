import { Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#29416C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/company/zhadmin/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-300 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span>Seguinos en LinkedIn</span>
            </a>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} ZHA. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

