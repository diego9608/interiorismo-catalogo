import { getPiezas } from '@/lib/data'
import { Package } from 'lucide-react'
import { getImageForCategory } from '@/lib/images'
import Image from 'next/image'

export default function CatalogoPage() {
  const piezas = getPiezas()
  
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Catálogo de Piezas</h1>
          <p className="text-lg text-white/80">
            Explora nuestra colección curada de más de 120 piezas de diseño
          </p>
        </div>
        
        {piezas.length === 0 ? (
          <div className="text-center py-20">
            <Package className="mx-auto h-12 w-12 text-white/40 mb-4" />
            <p className="text-white/60">
              El catálogo se está cargando. Ejecuta npm run seed para generar las piezas.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {piezas.slice(0, 60).map((pieza, idx) => (
              <article key={pieza.id} className="card group cursor-pointer">
                <div className="aspect-square bg-white/5 rounded-xl mb-4 overflow-hidden relative">
                  <Image
                    src={getImageForCategory(pieza.categoria[0], idx)}
                    alt={pieza.nombre}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="font-semibold mb-1 group-hover:text-[#D4AF37] transition-colors">
                  {pieza.nombre}
                </h3>
                
                <p className="text-sm text-white/70 mb-2">
                  {pieza.descripcionCorta}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {pieza.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#D4AF37] font-medium">
                    {pieza.priceBand}
                  </span>
                  <span className="text-white/50">
                    {pieza.proveedor}
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
        
        {piezas.length > 60 && (
          <div className="mt-12 text-center">
            <p className="text-white/60">
              Mostrando 60 de {piezas.length} piezas
            </p>
          </div>
        )}
      </div>
    </div>
  )
}