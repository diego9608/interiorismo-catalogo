'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navigation = [
  { name: 'Catálogo', href: '/catalogo' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Clientes', href: '/clientes' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Contacto', href: '/contacto' },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0B0B0D]/80 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tight text-[#D4AF37]">
                Interiorismo
              </span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-[#D4AF37]',
                  pathname === item.href
                    ? 'text-[#D4AF37]'
                    : 'text-white/90'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="text-white/90 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block px-3 py-2 text-base font-medium',
                    pathname === item.href
                      ? 'text-[#D4AF37]'
                      : 'text-white/90 hover:text-[#D4AF37]'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}