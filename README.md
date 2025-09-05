# Catálogo Digital de Interiorismo & Remodelación

Plataforma web profesional para mostrar servicios de diseño de interiores, remodelación y un catálogo interactivo con más de 330 clientes simulados.

## 🚀 Características

- **Catálogo interactivo** con 120+ piezas de mobiliario y decoración
- **Portfolio** de 330+ clientes simulados con filtros y búsqueda
- **Servicios Premium** con paquetes detallados y propuestas
- **Diseño responsive** optimizado para todos los dispositivos
- **SEO optimizado** para mejor posicionamiento
- **Formularios de contacto** integrados con Netlify

## 🛠️ Stack Tecnológico

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** TailwindCSS
- **UI Components:** shadcn/ui + Radix UI
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React
- **Deploy:** Netlify
- **Búsqueda:** Fuse.js

## 📦 Instalación

### Requisitos previos

- Node.js 18+ 
- npm o pnpm

### Pasos de instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/diego9608/interiorismo-catalogo.git
cd interiorismo-catalogo/apps/web
```

2. Instalar dependencias:
```bash
npm install
```

3. Generar datos de prueba:
```bash
npm run seed
```

4. Ejecutar en desarrollo:
```bash
npm run dev
```

5. Abrir en el navegador:
```
http://localhost:3000
```

## 🏗️ Build para producción

```bash
npm run build
```

Los archivos estáticos se generarán en la carpeta `out/`

## 📁 Estructura del proyecto

```
interiorismo-catalogo/
├── apps/
│   └── web/
│       ├── app/              # Páginas y rutas (App Router)
│       ├── components/       # Componentes React reutilizables
│       ├── content/          # Contenido MDX y JSON
│       ├── lib/             # Utilidades y tipos TypeScript
│       ├── public/          # Archivos estáticos
│       └── scripts/         # Scripts de generación de datos
```

## 🔧 Scripts disponibles

- `npm run dev` - Ejecutar en modo desarrollo
- `npm run build` - Construir para producción
- `npm run seed` - Generar datos de prueba (clientes y piezas)
- `npm run lint` - Verificar código con ESLint

## 🌐 Deploy en Netlify

### Configuración automática

El proyecto incluye un archivo `netlify.toml` con la configuración necesaria:

- **Build command:** `npm run build`
- **Publish directory:** `out`

### Pasos para deploy

1. Conectar el repositorio de GitHub a Netlify
2. Configurar las variables de build si es necesario
3. Deploy automático en cada push a `main`

## 📝 Personalización

### Modificar colores y estilos

Editar el archivo `tailwind.config.ts` para cambiar la paleta de colores:

```js
colors: {
  brand: {
    bg: '#0B0B0D',      // Color de fondo
    gold: '#D4AF37',    // Color dorado principal
    text: '#EDEDED'     // Color de texto
  }
}
```

### Agregar nuevas piezas al catálogo

Crear archivos JSON en `content/piezas/` siguiendo el formato:

```json
{
  "id": "pieza-nueva",
  "nombre": "Nombre de la Pieza",
  "categoria": ["Sala"],
  "descripcionCorta": "Descripción breve",
  "tags": ["moderno", "elegante"],
  "priceBand": "Medio",
  "visible": true
}
```

### Agregar nuevos servicios

Crear archivos MDX en `content/servicios/` con frontmatter y contenido.

## 🤝 Contribuir

1. Fork el proyecto
2. Crear una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'feat: agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

## 📄 Licencia

Proyecto privado - Todos los derechos reservados

## 📞 Contacto

Para más información sobre el proyecto o servicios de interiorismo:
- Email: contacto@interiorismo.mx
- Tel: +52 (81) 1234-5678

---

Desarrollado con 💛 por Interiorismo Pro