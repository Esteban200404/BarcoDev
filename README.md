# Barco Dev - Sitio Web Profesional

Sitio web moderno y escalable para Barco Dev, una empresa especializada en desarrollo de software profesional. Construido con Next.js, React, TypeScript y Tailwind CSS.

## 🎨 Características

- ✨ Diseño moderno con colores morados y negros personalizados
- 📱 Totalmente responsivo (mobile-first)
- ♿ Accesible (a11y)
- 🚀 Optimizado para SEO
- ⚡ Rendimiento de primera categoría (Lighthouse scores altos)
- 🎯 UX/UI mejorada con efectos glassmorphism
- 📊 Estructura escalable y mantenible
- 🔐 Seguridad integrada

## 🛠️ Stack Tecnológico

- **Framework:** Next.js 15+
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS + CSS personalizado
- **UI/UX:** Componentes reutilizables
- **SEO:** Metadata optimizada, Open Graph, Twitter Cards
- **Rendimiento:** Image Optimization, Code splitting

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── page.tsx                # Página principal
│   ├── layout.tsx             # Layout global con SEO
│   ├── globals.css            # Estilos globales
│   ├── servicios/
│   │   └── page.tsx          # Página de servicios
│   ├── portfolio/
│   │   └── page.tsx          # Página de portfolio
│   ├── sobre-nosotros/
│   │   └── page.tsx          # Página sobre nosotros
│   └── contacto/
│       └── page.tsx          # Página de contacto
├── components/
│   ├── Button.tsx            # Componente de botón reutilizable
│   ├── Card.tsx              # Componente de tarjeta
│   └── index.ts              # Exports centralizados
└── utils/
    ├── constants.ts          # Constantes y configuración
    ├── helpers.ts            # Funciones de utilidad
    └── types.ts              # Tipos TypeScript (próximamente)
```

## 🚀 Inicio Rápido

### Requisitos Previos
- Node.js 18+
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone <tu-repo>
cd barco-dev
```

2. Instala dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Inicia el servidor de desarrollo

# Producción
npm run build           # Construye la aplicación
npm run start          # Inicia el servidor de producción

# Linting
npm run lint           # Ejecuta ESLint

# Verificación de tipo
npm run type-check     # Verifica tipos con TypeScript
```

## 🎨 Personalización

### Colores
Los colores principales se definen en `src/app/globals.css`:
- **Púrpura primario:** #8b5cf6
- **Púrpura oscuro:** #7c3aed
- **Negro primario:** #1a1a1a

### Contenido
- **Información de la empresa:** `src/utils/constants.ts`
- **Servicios:** Actualizar array en `src/utils/constants.ts`
- **Equipo:** Editar archivo `src/app/sobre-nosotros/page.tsx`

## 📱 Páginas Incluidas

| Página | Ruta | Descripción |
|--------|------|-------------|
| Home | `/` | Página principal con CTA |
| Servicios | `/servicios` | Listado de servicios |
| Portfolio | `/portfolio` | Proyectos completados |
| Sobre Nosotros | `/sobre-nosotros` | Historia y equipo |
| Contacto | `/contacto` | Formulario de contacto |

## 🔍 SEO

Optimizado para motores de búsqueda:
- ✅ Metadata dinámicas
- ✅ Open Graph configurado
- ✅ Twitter Cards
- ✅ Robots.txt
- ✅ Sitemap (próximamente)
- ✅ Schema.org markup (próximamente)

## 📦 Componentes Reutilizables

### Button
```typescript
import { Button } from '@/components';

<Button variant="primary" size="lg">
  Click me
</Button>
```

### Card
```typescript
import { Card, CardTitle, CardDescription } from '@/components';

<Card>
  <CardTitle>Título</CardTitle>
  <CardDescription>Descripción</CardDescription>
</Card>
```

## 🚀 Deployment

### Vercel (Recomendado)
1. Push a GitHub
2. Conecta a Vercel
3. Deploy automático

### Otros
```bash
npm run build
npm run start
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 📞 Contacto

- Email: contacto@barco-dev.com
- Teléfono: +1 (555) 000-0000
- [LinkedIn](https://linkedin.com/company/barcodev)
- [GitHub](https://github.com/barcodev)

---

**Barco Dev** - Soluciones de Software de Clase Mundial 🚀

