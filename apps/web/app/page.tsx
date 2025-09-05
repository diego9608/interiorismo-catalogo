import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Home, Palette } from 'lucide-react'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
            alt="Interior moderno"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D]/50 via-[#0B0B0D]/70 to-[#0B0B0D]" />
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2">
            <Sparkles className="h-4 w-4 text-[#D4AF37]" />
            <span className="text-sm font-medium text-[#D4AF37]">330+ Proyectos Completados</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Diseño cálido,{' '}
            <span className="text-[#D4AF37]">funcional</span> y{' '}
            <span className="text-[#D4AF37]">atemporal</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10">
            Amueblamos, remodelamos y entregamos llave en mano. 
            Renders fotorrealistas 4K, curaduría de piezas y ejecución sin estrés.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/servicios">
              <Button size="lg" className="w-full sm:w-auto">
                Ver Paquetes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/catalogo">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Explorar Catálogo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Servicios Premium
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/servicios#home-staging" className="group">
              <div className="card h-full flex flex-col">
                <div className="mb-4 p-3 rounded-xl bg-[#D4AF37]/10 w-fit">
                  <Home className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Home Staging Express</h3>
                <p className="text-white/70 text-sm flex-1">
                  Amueblamos y estilizamos depas vacíos para renta/venta rápida con alto valor percibido.
                </p>
                <p className="text-[#D4AF37] font-medium mt-4">
                  1-2 semanas • Desde $120,000 MXN
                </p>
              </div>
            </Link>

            <Link href="/servicios#amueblado" className="group">
              <div className="card h-full flex flex-col">
                <div className="mb-4 p-3 rounded-xl bg-[#D4AF37]/10 w-fit">
                  <Palette className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Amueblado Premium</h3>
                <p className="text-white/70 text-sm flex-1">
                  Look & feel moderno cálido con piezas mid-century/nórdicas y acabados de calidad.
                </p>
                <p className="text-[#D4AF37] font-medium mt-4">
                  3-5 semanas • Desde $350,000 MXN
                </p>
              </div>
            </Link>

            <Link href="/servicios#remodelacion" className="group">
              <div className="card h-full flex flex-col">
                <div className="mb-4 p-3 rounded-xl bg-[#D4AF37]/10 w-fit">
                  <Sparkles className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Remodelación Integral</h3>
                <p className="text-white/70 text-sm flex-1">
                  Transformación estructurada del espacio con dirección de obra y control de calidad.
                </p>
                <p className="text-[#D4AF37] font-medium mt-4">
                  6-12+ semanas • Presupuesto a medida
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#D4AF37]">330+</div>
              <div className="text-sm text-white/70 mt-1">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#D4AF37]">120+</div>
              <div className="text-sm text-white/70 mt-1">Piezas en Catálogo</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#D4AF37]">15+</div>
              <div className="text-sm text-white/70 mt-1">Ciudades</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#D4AF37]">4K</div>
              <div className="text-sm text-white/70 mt-1">Renders HD</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para transformar tu espacio?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Agenda una visita y recibe tu propuesta personalizada
          </p>
          <Link href="/contacto">
            <Button size="lg">
              Solicitar Propuesta
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}