# Nix Perfumes 27

Landing page moderna y minimalista para perfumería de lujo accesible.

## 🚀 Características

- **Diseño Elegante**: Interfaz minimalista inspirada en boutiques premium
- **Responsive**: Optimizado para todos los dispositivos
- **WhatsApp Integration**: Compra directa por WhatsApp
- **SEO Optimized**: Metadatos y estructura optimizada para buscadores
- **Performance**: Built con Next.js 14 y TailwindCSS

## 🎨 Paleta de Colores

- **Fondo principal**: Blanco (#ffffff)
- **Detalles oscuros**: Azul marino (#1e3a8a)
- **Acentos premium**: Dorado (#f59e0b)
- **Apoyo**: Gris muy claro (#f9fafb)

## 🛠️ Tecnologías

- **Framework**: Next.js 14
- **Styling**: TailwindCSS
- **TypeScript**: Para tipado estático
- **Icons**: Lucide React
- **Fonts**: Playfair Display (serif) + Inter (sans-serif)

## 📦 Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
├── components/             # Componentes React
│   ├── sections/          # Secciones de la landing page
│   └── ui/                # Componentes de interfaz
├── data/                  # Datos estáticos (productos, contenido)
├── styles/                # Estilos globales
├── types/                 # Definiciones de TypeScript
└── utils/                 # Utilidades y helpers
```

## 📱 Secciones de la Landing Page

1. **Header**: Navegación minimalista con logo y WhatsApp
2. **Hero**: Frase principal, CTA y beneficios clave
3. **Productos Destacados**: Grid de perfumes featured
4. **Categorías**: Perfumes completos, Testers, Decants
5. **Sección Testers**: Explicación detallada del concepto
6. **Confianza**: Íconos de garantías y beneficios
7. **Testimonios & FAQ**: Reseñas y preguntas frecuentes
8. **Footer**: Contacto, redes sociales y información legal

## 📞 Configuración de WhatsApp

Edita el número de WhatsApp en `src/data/content.ts`:

```typescript
export const brandInfo = {
  whatsapp: '50612345678', // Cambia por tu número real
  // ...
};
```

## 🎯 SEO y Performance

- Metadatos optimizados para buscadores
- Structured Data para Local Business
- Imágenes optimizadas
- Core Web Vitals optimization
- Semantic HTML structure

## 🚀 Deployment

Para construir la aplicación para producción:

```bash
npm run build
npm start
```

## 📝 Personalización

### Cambiar Productos

Edita `src/data/products.ts` para agregar o modificar productos.

### Modificar Contenido

Actualiza `src/data/content.ts` para cambiar testimonios, FAQs y información de la marca.

### Ajustar Estilos

Modifica `tailwind.config.ts` para personalizar colores, fonts y espaciados.

## 📞 Soporte

Para soporte técnico o preguntas sobre la implementación, contacta al desarrollador.

## 📄 Licencia

Este proyecto es propiedad de Nix Perfumes 27. Todos los derechos reservados.