import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowLeft } from 'lucide-react'

export default function GraciasPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20">
          <CheckCircle className="h-8 w-8 text-green-500" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          ¡Gracias por tu mensaje!
        </h1>
        
        <p className="text-lg text-white/80 mb-8">
          Hemos recibido tu solicitud. Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas hábiles.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="secondary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>
          <Link href="/catalogo">
            <Button>
              Explorar catálogo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}