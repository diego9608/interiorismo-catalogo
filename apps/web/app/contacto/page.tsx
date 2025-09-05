'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Send, Phone, Mail, MapPin } from 'lucide-react'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    ciudad: '',
    tipoProyecto: '',
    metraje: '',
    mensaje: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Agenda una visita y recibe tu propuesta personalizada
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulario */}
          <div>
            <form 
              name="contacto"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/gracias"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contacto" />
              <input type="hidden" name="bot-field" />
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20"
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20"
                  />
                </div>
                
                <div>
                  <label htmlFor="ciudad" className="block text-sm font-medium mb-2">
                    Ciudad *
                  </label>
                  <input
                    type="text"
                    id="ciudad"
                    name="ciudad"
                    required
                    value={formData.ciudad}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20"
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="tipoProyecto" className="block text-sm font-medium mb-2">
                    Tipo de proyecto *
                  </label>
                  <select
                    id="tipoProyecto"
                    name="tipoProyecto"
                    required
                    value={formData.tipoProyecto}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20"
                  >
                    <option value="">Seleccionar...</option>
                    <option value="Home Staging">Home Staging</option>
                    <option value="Amueblado">Amueblado Premium</option>
                    <option value="Remodelación">Remodelación Integral</option>
                    <option value="Oficina">Oficina/Comercial</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="metraje" className="block text-sm font-medium mb-2">
                    Metraje (m²)
                  </label>
                  <input
                    type="number"
                    id="metraje"
                    name="metraje"
                    value={formData.metraje}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 resize-none"
                  placeholder="Cuéntanos más sobre tu proyecto..."
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                Enviar solicitud
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">¿Por qué elegirnos?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Experiencia comprobada</h3>
                    <p className="text-sm text-white/70">
                      Más de 330 proyectos exitosos en todo México
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Diseño personalizado</h3>
                    <p className="text-sm text-white/70">
                      Cada proyecto es único y adaptado a tus necesidades
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Entrega llave en mano</h3>
                    <p className="text-sm text-white/70">
                      Nos encargamos de todo, desde el diseño hasta la instalación
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4 p-6 rounded-2xl bg-white/5">
              <h3 className="text-lg font-semibold mb-4">Información de contacto</h3>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#D4AF37]" />
                <span className="text-white/80">+52 (81) 1234-5678</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#D4AF37]" />
                <span className="text-white/80">contacto@interiorismo.mx</span>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#D4AF37] mt-0.5" />
                <div className="text-white/80">
                  <p>Monterrey, Nuevo León</p>
                  <p className="text-sm text-white/60">También atendemos CDMX, GDL y más ciudades</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-transparent">
              <h3 className="text-lg font-semibold mb-2">Respuesta rápida</h3>
              <p className="text-sm text-white/80">
                Respondemos todas las solicitudes en menos de 24 horas hábiles
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}