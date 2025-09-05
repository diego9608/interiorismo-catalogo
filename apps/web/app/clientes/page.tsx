import { getClientes } from '@/lib/data'
import Link from 'next/link'
import { MapPin, Home, TrendingUp, Users } from 'lucide-react'

export default function ClientesPage() {
  const clientes = getClientes()
  
  const getProjectIcon = (tipo: string) => {
    switch(tipo) {
      case 'Amueblado':
      case 'Home Staging':
        return Home
      case 'Comercial':
      case 'Oficina':
        return Users
      default:
        return TrendingUp
    }
  }
  
  const getStatusColor = (estado: string) => {
    switch(estado) {
      case 'Entregado':
        return 'text-green-400'
      case 'Ejecución':
        return 'text-[#D4AF37]'
      case 'Diseño':
        return 'text-blue-400'
      default:
        return 'text-white/70'
    }
  }
  
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros Clientes
          </h1>
          <p className="text-lg text-white/80 mb-2">
            Más de 330 proyectos completados en todo México
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="px-3 py-1 rounded-full bg-white/10">
              {clientes.filter(c => c.estado === 'Entregado').length} Entregados
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10">
              {clientes.filter(c => c.estado === 'Ejecución').length} En Ejecución
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10">
              {clientes.filter(c => c.estado === 'Diseño').length} En Diseño
            </span>
          </div>
        </div>
        
        {clientes.length === 0 ? (
          <div className="text-center py-20">
            <Users className="mx-auto h-12 w-12 text-white/40 mb-4" />
            <p className="text-white/60">
              Los clientes se están cargando. Ejecuta npm run seed para generar los datos.
            </p>
          </div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {clientes.slice(0, 100).map((cliente) => {
                const Icon = getProjectIcon(cliente.tipoProyecto)
                return (
                  <Link
                    key={cliente.id}
                    href={`/clientes/${cliente.id}`}
                    className="card group cursor-pointer"
                  >
                    <div className="aspect-[4/3] bg-gradient-to-br from-white/10 to-transparent rounded-xl mb-4 overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <Icon className="h-12 w-12 text-white/20" />
                      </div>
                    </div>
                    
                    <h3 className="font-semibold mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {cliente.nombre}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-sm text-white/70 mb-2">
                      <MapPin className="h-3 w-3" />
                      <span>{cliente.ciudad}</span>
                    </div>
                    
                    <p className="text-sm text-white/60 mb-3 line-clamp-2">
                      {cliente.resumen}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2 py-1 rounded-full bg-white/10">
                        {cliente.tipoProyecto}
                      </span>
                      <span className={getStatusColor(cliente.estado)}>
                        {cliente.estado}
                      </span>
                    </div>
                    
                    {cliente.metraje && (
                      <div className="mt-2 text-xs text-white/50">
                        {cliente.metraje} m²
                      </div>
                    )}
                  </Link>
                )
              })}
            </div>
            
            {clientes.length > 100 && (
              <div className="mt-12 text-center">
                <p className="text-white/60 mb-4">
                  Mostrando 100 de {clientes.length} clientes
                </p>
                <button className="btn-secondary">
                  Cargar más
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}