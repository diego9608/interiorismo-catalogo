import { Sparkles } from 'lucide-react'
import Image from 'next/image'

const proyectos = [
  {
    id: 1,
    titulo: 'Penthouse Polanco',
    descripcion: 'Remodelación integral de penthouse de 350m² con vista panorámica de la ciudad.',
    imagen: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    tipo: 'Remodelación',
    ubicacion: 'CDMX'
  },
  {
    id: 2,
    titulo: 'Residencial Valle Real',
    descripcion: 'Amueblado completo de casa nueva con estilo moderno contemporáneo.',
    imagen: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    tipo: 'Amueblado',
    ubicacion: 'Monterrey'
  },
  {
    id: 3,
    titulo: 'Oficinas Corporativas',
    descripcion: 'Diseño de espacios de trabajo para empresa tecnológica con 50+ empleados.',
    imagen: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    tipo: 'Comercial',
    ubicacion: 'Guadalajara'
  },
  {
    id: 4,
    titulo: 'Loft Roma Norte',
    descripcion: 'Home staging para venta express de loft industrial en zona premium.',
    imagen: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&q=80',
    tipo: 'Home Staging',
    ubicacion: 'CDMX'
  }
]

export default function ProyectosPage() {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Proyectos Destacados</h1>
          <p className="text-lg text-white/80">
            Casos de éxito y transformaciones completas
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {proyectos.map((proyecto) => (
            <article key={proyecto.id} className="card">
              <div className="aspect-video bg-gradient-to-br from-white/10 to-transparent rounded-xl mb-4 overflow-hidden relative">
                <Image
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {proyecto.titulo}
              </h3>
              <p className="text-white/70 mb-4">
                {proyecto.descripcion}
              </p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-white/10">{proyecto.tipo}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-white/10">{proyecto.ubicacion}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}