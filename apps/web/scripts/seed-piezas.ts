import fs from 'node:fs'
import path from 'node:path'
import type { Pieza, Categoria } from '../lib/types'

const categorias: Categoria[] = [
  'Sala', 'Recámara', 'Comedor', 'Cocina', 
  'Oficina', 'Iluminación', 'Decoración'
]

const piezasData = [
  // Sala
  { nombre: 'Sofá Modular Lino', categoria: ['Sala'], tags: ['mid-century', 'nórdico', 'blu-dot-like'], materiales: ['lino', 'madera'], medidas: '230x95x70 cm' },
  { nombre: 'Sofá Chester Cuero', categoria: ['Sala'], tags: ['clásico', 'elegante'], materiales: ['cuero', 'madera'], medidas: '210x85x75 cm' },
  { nombre: 'Sofá Esquinero Gris', categoria: ['Sala'], tags: ['moderno', 'minimalista'], materiales: ['tela', 'metal'], medidas: '280x180x85 cm' },
  { nombre: 'Mesa Centro Nogal', categoria: ['Sala'], tags: ['nórdico', 'natural'], materiales: ['nogal', 'metal'], medidas: '120x60x40 cm' },
  { nombre: 'Mesa Centro Mármol', categoria: ['Sala'], tags: ['luxury', 'moderno'], materiales: ['mármol', 'bronce'], medidas: '130x70x35 cm' },
  { nombre: 'Credenza Rejilla', categoria: ['Sala'], tags: ['mid-century', 'vintage'], materiales: ['madera', 'rejilla'], medidas: '180x45x70 cm' },
  { nombre: 'Librero Industrial', categoria: ['Sala', 'Oficina'], tags: ['industrial', 'urbano'], materiales: ['metal', 'madera'], medidas: '180x40x200 cm' },
  { nombre: 'Sillón Individual Oslo', categoria: ['Sala'], tags: ['nórdico', 'acogedor'], materiales: ['tela', 'madera'], medidas: '80x75x85 cm' },
  
  // Recámara
  { nombre: 'Cama Tapizada King', categoria: ['Recámara'], tags: ['luxury', 'moderno'], materiales: ['tela', 'madera'], medidas: '200x220x120 cm' },
  { nombre: 'Cama Platform Queen', categoria: ['Recámara'], tags: ['minimalista', 'japonés'], materiales: ['madera'], medidas: '160x200x30 cm' },
  { nombre: 'Buró Nogal Curvo', categoria: ['Recámara'], tags: ['nórdico', 'orgánico'], materiales: ['nogal'], medidas: '50x40x55 cm' },
  { nombre: 'Buró Flotante', categoria: ['Recámara'], tags: ['moderno', 'space-saving'], materiales: ['MDF', 'laca'], medidas: '45x30x25 cm' },
  { nombre: 'Cómoda 6 Cajones', categoria: ['Recámara'], tags: ['clásico', 'funcional'], materiales: ['madera'], medidas: '120x50x80 cm' },
  { nombre: 'Espejo Cuerpo Completo', categoria: ['Recámara', 'Decoración'], tags: ['minimalista'], materiales: ['metal', 'vidrio'], medidas: '60x180 cm' },
  { nombre: 'Banco Pie de Cama', categoria: ['Recámara'], tags: ['elegante', 'práctico'], materiales: ['tela', 'madera'], medidas: '120x40x45 cm' },
  
  // Comedor
  { nombre: 'Mesa Comedor Encino 8P', categoria: ['Comedor'], tags: ['rústico', 'familiar'], materiales: ['encino'], medidas: '240x100x75 cm' },
  { nombre: 'Mesa Comedor Extensible', categoria: ['Comedor'], tags: ['moderno', 'versátil'], materiales: ['MDF', 'metal'], medidas: '160-220x90x75 cm' },
  { nombre: 'Mesa Redonda Mármol', categoria: ['Comedor'], tags: ['luxury', 'elegante'], materiales: ['mármol', 'metal'], medidas: '120x120x75 cm' },
  { nombre: 'Silla Tapizada Velvet', categoria: ['Comedor'], tags: ['glamour', 'comfort'], materiales: ['velvet', 'metal'], medidas: '45x50x85 cm' },
  { nombre: 'Silla Madera Natural', categoria: ['Comedor'], tags: ['nórdico', 'eco'], materiales: ['madera'], medidas: '45x45x80 cm' },
  { nombre: 'Banco Alto Bar', categoria: ['Comedor', 'Cocina'], tags: ['industrial', 'bar'], materiales: ['metal', 'madera'], medidas: '40x40x75 cm' },
  { nombre: 'Buffet Comedor', categoria: ['Comedor'], tags: ['clásico', 'almacenaje'], materiales: ['madera'], medidas: '160x45x80 cm' },
  
  // Cocina
  { nombre: 'Isla Cocina Móvil', categoria: ['Cocina'], tags: ['funcional', 'versátil'], materiales: ['madera', 'acero'], medidas: '120x60x90 cm' },
  { nombre: 'Barra Desayunador', categoria: ['Cocina'], tags: ['moderno', 'compacto'], materiales: ['cuarzo', 'metal'], medidas: '180x40x110 cm' },
  { nombre: 'Estante Especiero', categoria: ['Cocina'], tags: ['organizador', 'práctico'], materiales: ['metal'], medidas: '60x15x80 cm' },
  { nombre: 'Carrito Auxiliar', categoria: ['Cocina'], tags: ['móvil', 'útil'], materiales: ['bambú', 'metal'], medidas: '70x40x85 cm' },
  
  // Oficina
  { nombre: 'Escritorio Ejecutivo', categoria: ['Oficina'], tags: ['profesional', 'amplio'], materiales: ['madera', 'metal'], medidas: '180x80x75 cm' },
  { nombre: 'Escritorio Nórdico Slim', categoria: ['Oficina'], tags: ['minimalista', 'compacto'], materiales: ['madera', 'metal'], medidas: '120x60x75 cm' },
  { nombre: 'Silla Ergonómica Mesh', categoria: ['Oficina'], tags: ['comfort', 'salud'], materiales: ['mesh', 'plástico'], medidas: '65x65x120 cm' },
  { nombre: 'Silla Gaming Premium', categoria: ['Oficina'], tags: ['gaming', 'comfort'], materiales: ['cuero sintético', 'metal'], medidas: '70x70x130 cm' },
  { nombre: 'Archivero 4 Gavetas', categoria: ['Oficina'], tags: ['organizador', 'seguro'], materiales: ['metal'], medidas: '45x60x132 cm' },
  { nombre: 'Mesa Juntas 6P', categoria: ['Oficina'], tags: ['corporativo', 'moderno'], materiales: ['vidrio', 'metal'], medidas: '200x100x75 cm' },
  
  // Iluminación
  { nombre: 'Lámpara Colgante Disco', categoria: ['Iluminación'], tags: ['moderno', 'statement'], materiales: ['metal'], medidas: '40x40x30 cm' },
  { nombre: 'Lámpara Pie Arco', categoria: ['Iluminación'], tags: ['elegante', 'funcional'], materiales: ['metal', 'tela'], medidas: '180x40x220 cm' },
  { nombre: 'Lámpara Mesa Touch', categoria: ['Iluminación'], tags: ['smart', 'moderno'], materiales: ['metal', 'vidrio'], medidas: '25x25x45 cm' },
  { nombre: 'Plafón LED Minimalista', categoria: ['Iluminación'], tags: ['eficiente', 'discreto'], materiales: ['aluminio', 'acrílico'], medidas: '60x60x8 cm' },
  { nombre: 'Tira LED RGB', categoria: ['Iluminación'], tags: ['ambient', 'personalizable'], materiales: ['silicona', 'LED'], medidas: '5 metros' },
  { nombre: 'Lámpara Industrial', categoria: ['Iluminación'], tags: ['vintage', 'industrial'], materiales: ['metal'], medidas: '35x35x40 cm' },
  
  // Decoración
  { nombre: 'Alfombra Tejida Natural', categoria: ['Decoración'], tags: ['eco', 'textura'], materiales: ['yute', 'algodón'], medidas: '200x300 cm' },
  { nombre: 'Alfombra Persa', categoria: ['Decoración'], tags: ['clásico', 'luxury'], materiales: ['lana'], medidas: '250x350 cm' },
  { nombre: 'Cuadro Abstracto XL', categoria: ['Decoración'], tags: ['arte', 'moderno'], materiales: ['canvas', 'madera'], medidas: '120x80 cm' },
  { nombre: 'Set Cojines Texturas', categoria: ['Decoración'], tags: ['acogedor', 'color'], materiales: ['tela', 'pluma'], medidas: '45x45 cm' },
  { nombre: 'Planta Monstera XL', categoria: ['Decoración'], tags: ['natural', 'tropical'], materiales: ['natural'], medidas: '150 cm altura' },
  { nombre: 'Jarrón Cerámico Grande', categoria: ['Decoración'], tags: ['artesanal', 'statement'], materiales: ['cerámica'], medidas: '30x30x50 cm' },
  { nombre: 'Espejo Sol Dorado', categoria: ['Decoración'], tags: ['glamour', 'vintage'], materiales: ['metal', 'vidrio'], medidas: '80x80 cm' },
  { nombre: 'Reloj Pared Minimalista', categoria: ['Decoración'], tags: ['moderno', 'funcional'], materiales: ['madera', 'metal'], medidas: '40x40 cm' },
]

const colores = ['Arena', 'Gris', 'Negro', 'Blanco', 'Nogal', 'Natural', 'Dorado', 'Plata']
const proveedores = ['GAIA', 'Moblum', 'West Elm', 'CB2', 'Taller Local', 'Importación Directa']
const priceBands: Pieza['priceBand'][] = ['Económico', 'Medio', 'Premium', 'Luxury']

function generatePiezas(): Pieza[] {
  const piezas: Pieza[] = []
  let id = 1
  
  // Generar piezas base
  for (const data of piezasData) {
    const pieza: Pieza = {
      id: `${data.nombre.toLowerCase().replace(/\s+/g, '-')}-${id}`,
      nombre: data.nombre,
      categoria: data.categoria as Categoria[],
      descripcionCorta: `${data.nombre} con diseño ${data.tags[0]} y acabados de alta calidad.`,
      descripcionLarga: `Pieza premium de nuestra colección exclusiva. ${data.nombre} combina funcionalidad y estética con materiales de primera calidad. Ideal para espacios modernos que buscan calidez y sofisticación.`,
      tags: data.tags,
      materiales: data.materiales,
      medidas: data.medidas,
      color: colores[id % colores.length],
      imagenes: [`/renders/piezas/mock-${(id % 12) + 1}.webp`],
      proveedor: proveedores[id % proveedores.length],
      priceBand: priceBands[id % 4],
      visible: true
    }
    piezas.push(pieza)
    id++
  }
  
  // Generar variaciones adicionales para llegar a 120 piezas
  while (piezas.length < 120) {
    const basePieza = piezasData[piezas.length % piezasData.length]
    const color = colores[piezas.length % colores.length]
    
    const pieza: Pieza = {
      id: `pieza-${piezas.length + 1}`,
      nombre: `${basePieza.nombre} ${color}`,
      categoria: basePieza.categoria as Categoria[],
      descripcionCorta: `Variación en ${color.toLowerCase()} del popular ${basePieza.nombre}.`,
      tags: [...basePieza.tags, color.toLowerCase()],
      materiales: basePieza.materiales,
      medidas: basePieza.medidas,
      color: color,
      imagenes: [`/renders/piezas/mock-${((piezas.length) % 12) + 1}.webp`],
      proveedor: proveedores[piezas.length % proveedores.length],
      priceBand: priceBands[piezas.length % 4],
      visible: true
    }
    piezas.push(pieza)
  }
  
  return piezas
}

async function main() {
  const outDir = path.join(process.cwd(), 'content', 'piezas')
  
  // Crear directorio si no existe
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true })
  }
  
  const piezas = generatePiezas()
  console.log(`Generando ${piezas.length} piezas del catálogo...`)
  
  for (let i = 0; i < piezas.length; i++) {
    const pieza = piezas[i]
    const filePath = path.join(outDir, `${pieza.id}.json`)
    
    fs.writeFileSync(filePath, JSON.stringify(pieza, null, 2))
    
    if ((i + 1) % 20 === 0) {
      console.log(`  ${i + 1}/${piezas.length} piezas generadas...`)
    }
  }
  
  console.log(`✅ ${piezas.length} piezas generadas exitosamente en ${outDir}`)
}

main().catch(console.error)