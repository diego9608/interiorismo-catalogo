import fs from 'node:fs'
import path from 'node:path'

const base = path.join(process.cwd(), 'content')

function loadAll(dir: string): any[] {
  const full = path.join(base, dir)
  if (!fs.existsSync(full)) {
    console.log(`Directory ${full} does not exist, skipping...`)
    return []
  }
  
  return fs.readdirSync(full)
    .filter(f => f.endsWith('.json'))
    .map(f => {
      const content = fs.readFileSync(path.join(full, f), 'utf8')
      return JSON.parse(content)
    })
}

async function main() {
  console.log('Construyendo índice de búsqueda...')
  
  const clientes = loadAll('clientes')
  const piezas = loadAll('piezas')
  
  const index = {
    clientes: clientes.map((c: any) => ({
      id: c.id,
      nombre: c.nombre,
      ciudad: c.ciudad,
      tipo: c.tipoProyecto,
      estado: c.estado,
      resumen: c.resumen
    })),
    piezas: piezas.map((p: any) => ({
      id: p.id,
      nombre: p.nombre,
      tags: p.tags,
      categoria: p.categoria,
      descripcion: p.descripcionCorta
    }))
  }
  
  const outDir = path.join(process.cwd(), 'public', 'index')
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true })
  }
  
  const outPath = path.join(outDir, 'search.json')
  fs.writeFileSync(outPath, JSON.stringify(index, null, 2))
  
  console.log(`✅ Índice de búsqueda generado:`)
  console.log(`   - ${index.clientes.length} clientes`)
  console.log(`   - ${index.piezas.length} piezas`)
  console.log(`   - Guardado en: ${outPath}`)
}

main().catch(console.error)