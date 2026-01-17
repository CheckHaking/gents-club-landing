# Gents Club - Landing Page

Premium dark mode landing page para Gents Club barbería.

## Características

- **Diseño Premium Dark Mode**: Estética masculina con acentos dorados
- **Rendimiento Optimizado**: LCP < 1.2s
- **Responsive**: Optimizado para móvil y desktop
- **Componentes Modulares**: Hero, Services, Location, WhatsApp Button
- **SEO Optimizado**: Meta tags y estructura semántica
- **Animaciones Suaves**: Transiciones y efectos visuales elegantes

## Tecnologías

- Astro.js
- Tailwind CSS v4
- CSS puro para animaciones
- Google Fonts (Playfair Display)

## Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## Estructura

```
landing/
├── src/
│   ├── components/
│   │   ├── Hero.astro          # Sección hero principal
│   │   ├── Services.astro      # Servicios y precios
│   │   ├── Location.astro      # Ubicación y contacto
│   │   └── WhatsAppButton.astro # Botón flotante de WhatsApp
│   ├── pages/
│   │   └── index.astro         # Página principal
│   ├── styles/
│   │   └── global.css          # Estilos globales
│   └── config.json             # Configuración del negocio
└── astro.config.mjs            # Configuración de Astro
```

## Optimizaciones de Rendimiento

- **Critical CSS inlineado** en el `<head>`
- **Preconnect** a Google Fonts
- **Font preloading** para Playfair Display
- **CSS containment** para prevenir layout shift
- **Lazy loading** de recursos no críticos
- **Minificación** con Terser y LightningCSS
- **Compresión HTML**
- **Web Vitals monitoring** en consola

## Configuración

Edita `src/config.json` para actualizar:
- Información del negocio
- Servicios y precios
- Horarios
- Datos de contacto

## Performance Metrics

El sitio está optimizado para:
- **LCP** (Largest Contentful Paint): < 1.2s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

Monitorea las métricas en la consola del navegador.
