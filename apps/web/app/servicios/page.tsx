import { Button } from '@/components/ui/button'
import { Check, Clock, Package, Home, Palette, Sparkles, Building } from 'lucide-react'

const servicios = [
  {
    id: 'home-staging',
    icon: Home,
    titulo: 'Home Staging Express',
    resumen: 'Amueblamos y estilizamos depas vacíos para renta/venta rápida con alto valor percibido.',
    incluye: [
      'Moodboard y paleta de materiales',
      'Curaduría de piezas y accesorios',
      'Styling on-site con plantas y arte',
      'Instalación en 1–3 días'
    ],
    entregables: [
      '6–10 renders 4K',
      'Fotos finales profesionales',
      'Checklist de mantenimiento'
    ],
    timeline: '1-2 semanas',
    desde: 120000
  },
  {
    id: 'amueblado',
    icon: Palette,
    titulo: 'Amueblado Premium Llave en Mano',
    resumen: 'Look & feel moderno cálido con piezas mid-century/nórdicas y acabados de calidad.',
    incluye: [
      'Layout 2D completo',
      'Renders 3D fotorrealistas',
      'Selección completa de mobiliario',
      'Instalación profesional'
    ],
    entregables: [
      'Paquete completo de diseño',
      'Guía de cuidado y mantenimiento',
      'Garantía de satisfacción'
    ],
    timeline: '3-5 semanas',
    desde: 350000
  },
  {
    id: 'remodelacion',
    icon: Sparkles,
    titulo: 'Remodelación Integral',
    resumen: 'Transformación estructurada del espacio con dirección de obra y control de calidad.',
    incluye: [
      'Arquitectura interior completa',
      'Presupuesto ejecutivo detallado',
      'Selección de materiales premium',
      'Supervisión de obra'
    ],
    entregables: [
      'Planos ejecutivos',
      'Renders fotorrealistas',
      'Cronograma Gantt',
      'Bitácora de obra'
    ],
    timeline: '6-12+ semanas',
    desde: null
  },
  {
    id: 'oficina',
    icon: Building,
    titulo: 'Oficina/Comercial Boutique',
    resumen: 'Identidad espacial para equipos y atención a clientes, enfocada en ergonomía y experiencia.',
    incluye: [
      'Zonificación estratégica',
      'Mobiliario ergonómico',
      'Branding espacial sutil',
      'Iluminación y acústica'
    ],
    entregables: [
      'Renders corporativos',
      'Planos MEP (si aplica)',
      'Lista de FF&E',
      'Manual de uso del espacio'
    ],
    timeline: '4-8 semanas',
    desde: null
  }
]

export default function ServiciosPage() {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Paquetes & Servicios</h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Soluciones integrales de diseño y remodelación adaptadas a tu presupuesto y necesidades
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {servicios.map((servicio) => {
            const Icon = servicio.icon
            return (
              <article key={servicio.id} id={servicio.id} className="card flex flex-col">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[#D4AF37]/10">
                    <Icon className="h-6 w-6 text-[#D4AF37]" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-2">{servicio.titulo}</h2>
                    <p className="text-white/70">{servicio.resumen}</p>
                  </div>
                </div>
                
                <div className="space-y-6 flex-1">
                  <div>
                    <h3 className="font-medium mb-3 text-[#D4AF37]">¿Qué incluye?</h3>
                    <ul className="space-y-2">
                      {servicio.incluye.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-white/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3 text-[#D4AF37]">Entregables</h3>
                    <ul className="space-y-2">
                      {servicio.entregables.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Package className="h-4 w-4 text-white/40 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-white/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-white/40" />
                      <span className="text-white/70">{servicio.timeline}</span>
                    </div>
                    {servicio.desde && (
                      <div className="text-right">
                        <p className="text-xs text-white/50">Desde</p>
                        <p className="text-lg font-semibold text-[#D4AF37]">
                          ${servicio.desde.toLocaleString('es-MX')} MXN
                        </p>
                      </div>
                    )}
                    {!servicio.desde && (
                      <p className="text-sm text-white/70">Presupuesto a medida</p>
                    )}
                  </div>
                  
                  <Button className="w-full">
                    Solicitar Propuesta
                  </Button>
                </div>
              </article>
            )
          })}
        </div>
        
        {/* BD-Style Section */}
        <section className="mt-20 rounded-3xl bg-gradient-to-br from-[#D4AF37]/20 to-transparent p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Paquete &quot;BD-Style&quot; (Competidor Killer)
            </h2>
            <p className="text-lg text-white/80 mb-8">
              La estética Blu Dot que te gusta, mejorada con más calidez, texturas y accesorios por el mismo presupuesto.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#D4AF37] mb-2">+30%</div>
                <p className="text-sm text-white/70">Más texturas y calidez</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#D4AF37] mb-2">100%</div>
                <p className="text-sm text-white/70">Curación personalizada</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#D4AF37] mb-2">=</div>
                <p className="text-sm text-white/70">Mismo presupuesto</p>
              </div>
            </div>
            <Button size="lg">
              Comparar con Blu Dot
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}