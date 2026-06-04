# cotizacion-acsa

Propuesta visual navegable para el catálogo público + cotización online de
**Agrupación Camponuevo S.A.**

Pantallas estáticas (sin backend) para presentar la propuesta antes de
aprobarla. Mismo stack que [cotizador-acsa](https://cotizador-acsa.vercel.app):
Next.js 16, React 19, TypeScript.

## Páginas

| Ruta | Descripción |
|---|---|
| `/` | Hub de navegación + decisiones cerradas |
| `/cliente/catalogo` | Vista mobile del catálogo público |
| `/cliente/pedido` | Carrito de cotización + identificación del cliente |
| `/cliente/seguimiento` | Timeline del estado del pedido |
| `/vendedor` | Tablero Kanban del equipo comercial (desktop) |
| `/flujo` | Diagrama end-to-end + principios + stack |
| `/resumen` | One-pager ejecutivo imprimible |

## Local

```bash
npm install
npm run dev
```

Abrir <http://localhost:3000>.
