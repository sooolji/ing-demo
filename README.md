# Ingredientes que inspiran

Landing page moderna para una marca de ingredientes naturales. Construida con Next.js 15, Tailwind CSS y TypeScript.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS con `tailwindcss-animate`
- **Iconos:** react-icons (Feather, BoxIcons, Game Icons)
- **Fuente:** Inter (Google Fonts)

## Estructura

```
app/
  api/products/       API mock con datos de productos
  layout.tsx          Layout raíz con Footer
  page.tsx            Página principal (Hero + ProductSection)
components/
  product/
    ProductCard.tsx    Tarjeta de producto con grid 2 columnas
    ProductImage.tsx   Imagen con hover effect y shadow
    ProductSpecs.tsx   Lista vertical de especificaciones
  sections/
    Hero.tsx           Hero full-screen con scroll indicator
    ProductSection.tsx Contenedor con fetch de productos y estados
  ui/
    Badge.tsx          Badge con variantes cítrico/vegetal
    Footer.tsx         Footer con copyright
    Icon.tsx           Mapa de iconos centralizado
types/
  product.ts           Tipos Product, SpecItem, CategoryColor
public/
  favicon/             Favicons (usa 32x32)
  lemon.jpg            Imagen de limón
  tomate.jpg           Imagen de tomate
```

## Scripts

```bash
pnpm dev        # Desarrollo
pnpm build      # Build + type check
pnpm start      # Servir build
pnpm lint       # Lint (next lint)
```

## API

`GET /api/products` — Devuelve array de productos (Limón, Tomate) con latencia simulada de 600ms y 5% de error aleatorio.

## Diseño

- Hero full-screen con gradiente, tipografía bold y scroll indicator animado
- Secciones de producto alternadas: fondo crema (#FAF9F6) y rosado (#FFF5F5)
- Grid 2 columnas desktop, 1 columna mobile
- Especificaciones en lista vertical con iconos, separadores y animación slide-up
- Badges con borde lateral y colores por categoría
- Footer con borde superior y texto centrado
