import Fuse from 'fuse.js'

export function buildFuse<T>(list: T[], keys: string[]) {
  return new Fuse(list, { 
    keys, 
    threshold: 0.35, 
    ignoreLocation: true,
    minMatchCharLength: 2,
    shouldSort: true
  })
}

export function filterByCategory<T extends { categoria?: string[] }>(
  items: T[], 
  category: string
): T[] {
  if (!category || category === 'all') return items
  return items.filter(item => 
    item.categoria?.includes(category as any)
  )
}

export function filterByPriceBand<T extends { priceBand?: string }>(
  items: T[], 
  band: string
): T[] {
  if (!band || band === 'all') return items
  return items.filter(item => item.priceBand === band)
}

export function filterByCity<T extends { ciudad?: string }>(
  items: T[], 
  city: string
): T[] {
  if (!city || city === 'all') return items
  return items.filter(item => item.ciudad === city)
}