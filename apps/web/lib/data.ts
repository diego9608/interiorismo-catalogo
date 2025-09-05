import fs from 'node:fs'
import path from 'node:path'
import type { Pieza, ClienteSimulado, PaqueteServicio } from './types'

const base = path.join(process.cwd(), 'content')

export function loadJSON<T>(rel: string): T {
  const p = path.join(base, rel)
  if (!fs.existsSync(p)) {
    return {} as T
  }
  return JSON.parse(fs.readFileSync(p, 'utf8')) as T
}

export function loadAll<T>(relDir: string): T[] {
  const dir = path.join(base, relDir)
  if (!fs.existsSync(dir)) {
    return []
  }
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.json'))
    .map(f => loadJSON<T>(path.join(relDir, f)))
}

export const getPiezas = () => loadAll<Pieza>('piezas')
export const getClientes = () => loadAll<ClienteSimulado>('clientes')

export function getPiezaById(id: string): Pieza | undefined {
  const piezas = getPiezas()
  return piezas.find(p => p.id === id)
}

export function getClienteById(id: string): ClienteSimulado | undefined {
  const clientes = getClientes()
  return clientes.find(c => c.id === id)
}