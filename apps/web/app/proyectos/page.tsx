import { Sparkles } from 'lucide-react'

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
          {[1, 2, 3, 4].map((i) => (
            <article key={i} className="card">
              <div className="aspect-video bg-gradient-to-br from-white/10 to-transparent rounded-xl mb-4 overflow-hidden flex items-center justify-center">
                <Sparkles className="h-12 w-12 text-white/20" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Proyecto Ejemplo {i}
              </h3>
              <p className="text-white/70 mb-4">
                Transformación completa de un espacio residencial con diseño contemporáneo y funcional.
              </p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-white/10">Remodelación</span>
                <span className="text-xs px-2 py-1 rounded-full bg-white/10">Premium</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}