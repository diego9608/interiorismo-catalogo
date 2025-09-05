import fs from 'node:fs'
import path from 'node:path'
import type { ClienteSimulado } from '../lib/types'

const ciudades = [
  'Monterrey', 'CDMX', 'Guadalajara', 'Querétaro', 'Puebla', 
  'Tijuana', 'La Paz', 'Mérida', 'León', 'Chihuahua',
  'Cancún', 'Playa del Carmen', 'San Miguel de Allende', 'Oaxaca', 'Toluca'
]

const tipos: ClienteSimulado['tipoProyecto'][] = [
  'Amueblado', 'Remodelación', 'Home Staging', 'Comercial', 'Oficina'
]

const bands: ClienteSimulado['presupuestoBand'][] = [
  'Bajo', 'Medio', 'Alto', 'Premium'
]

const estados: ClienteSimulado['estado'][] = [
  'Diseño', 'Ejecución', 'Entregado'
]

const nombresBase = [
  'Residencial Nova', 'Torre Gaia', 'PH Olivo', 'Departamento Polanco',
  'Casa Valle Real', 'Loft Roma Norte', 'Villa Cumbres', 'Penthouse Angelópolis',
  'Studio Santa Fe', 'Residencial Altavista', 'Torre Platinum', 'Casa Juriquilla',
  'Depto San Pedro', 'Oficina Corporativa', 'Local Comercial Centro'
]

const resumenes = [
  'Amueblado moderno y cálido con acentos naturales para renta premium.',
  'Remodelación integral con acabados de lujo y diseño minimalista.',
  'Home staging express para venta rápida con alto impacto visual.',
  'Espacio comercial boutique con identidad de marca integrada.',
  'Oficina ejecutiva con diseño ergonómico y tecnología integrada.',
  'Departamento completamente amueblado estilo mid-century moderno.',
  'Casa familiar con espacios abiertos y materiales naturales.',
  'Penthouse con vista panorámica y diseño contemporáneo sofisticado.',
  'Studio funcional optimizado para máximo aprovechamiento del espacio.',
  'Remodelación de baños y cocina con acabados premium importados.'
]

function rand<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function generateCliente(index: number): ClienteSimulado {
  const baseNombre = rand(nombresBase)
  const numero = Math.floor(Math.random() * 2000) + 100
  
  return {
    id: `cliente-${String(index).padStart(3, '0')}`,
    nombre: `${baseNombre} ${numero}`,
    ciudad: rand(ciudades),
    tipoProyecto: rand(tipos),
    metraje: 60 + Math.floor(Math.random() * 200),
    presupuestoBand: rand(bands),
    estado: rand(estados),
    portada: `/mock/clients/${(index % 40) + 1}.webp`,
    resumen: rand(resumenes),
    piezasClave: [
      'sofa-1', 'mesa-2', 'lampara-3', 'cama-4', 'buro-5'
    ].slice(0, Math.floor(Math.random() * 3) + 2),
    fechaEntrega: `2025-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`
  }
}

async function main() {
  const outDir = path.join(process.cwd(), 'content', 'clientes')
  
  // Crear directorio si no existe
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true })
  }
  
  const total = 335
  console.log(`Generando ${total} clientes simulados...`)
  
  for (let i = 1; i <= total; i++) {
    const cliente = generateCliente(i)
    const filePath = path.join(outDir, `${cliente.id}.json`)
    
    fs.writeFileSync(filePath, JSON.stringify(cliente, null, 2))
    
    if (i % 50 === 0) {
      console.log(`  ${i}/${total} clientes generados...`)
    }
  }
  
  console.log(`✅ ${total} clientes generados exitosamente en ${outDir}`)
}

main().catch(console.error)