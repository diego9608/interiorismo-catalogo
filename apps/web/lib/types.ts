export type Categoria =
  | 'Sala' 
  | 'Recámara' 
  | 'Comedor' 
  | 'Cocina' 
  | 'Oficina' 
  | 'Baño' 
  | 'Iluminación' 
  | 'Decoración' 
  | 'Remodelación Integral'

export interface Pieza {
  id: string
  nombre: string
  categoria: Categoria[]
  descripcionCorta: string
  descripcionLarga?: string
  tags: string[]
  materiales?: string[]
  medidas?: string
  color?: string
  imagenes: string[]
  proveedor?: string
  skuProveedor?: string
  costoEstimado?: number
  priceBand?: 'Económico' | 'Medio' | 'Premium' | 'Luxury'
  visible: boolean
}

export interface ClienteSimulado {
  id: string
  nombre: string
  ciudad: string
  tipoProyecto: 'Amueblado' | 'Remodelación' | 'Home Staging' | 'Comercial' | 'Oficina'
  metraje?: number
  presupuestoBand: 'Bajo' | 'Medio' | 'Alto' | 'Premium'
  estado: 'Diseño' | 'Ejecución' | 'Entregado'
  portada: string
  resumen: string
  piezasClave: string[]
  fechaEntrega?: string
}

export interface PaqueteServicio {
  id: string
  titulo: string
  subtitulo?: string
  resumen: string
  incluye: string[]
  entregables: string[]
  timelineSemanas: [number, number]
  desdeMXN?: number
  addOns?: string[]
}