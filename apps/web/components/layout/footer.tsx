import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#0B0B0D]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-[#D4AF37] mb-4">Interiorismo</h3>
            <p className="text-sm text-white/70">
              Diseño cálido, funcional y atemporal.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios#home-staging" className="text-sm text-white/70 hover:text-[#D4AF37]">
                  Home Staging
                </Link>
              </li>
              <li>
                <Link href="/servicios#amueblado" className="text-sm text-white/70 hover:text-[#D4AF37]">
                  Amueblado Premium
                </Link>
              </li>
              <li>
                <Link href="/servicios#remodelacion" className="text-sm text-white/70 hover:text-[#D4AF37]">
                  Remodelación Integral
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Explorar</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/catalogo" className="text-sm text-white/70 hover:text-[#D4AF37]">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="/clientes" className="text-sm text-white/70 hover:text-[#D4AF37]">
                  Clientes
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="text-sm text-white/70 hover:text-[#D4AF37]">
                  Proyectos
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/privacidad" className="text-sm text-white/70 hover:text-[#D4AF37]">
                  Aviso de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/legal/terminos" className="text-sm text-white/70 hover:text-[#D4AF37]">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-center text-xs text-white/50">
            © {new Date().getFullYear()} Interiorismo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}