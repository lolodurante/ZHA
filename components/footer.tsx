export default function Footer() {
  return (
    <footer className="bg-[#29416C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="border-t border-white/10 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} ZHA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

