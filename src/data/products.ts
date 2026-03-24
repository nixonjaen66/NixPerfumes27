import { Product } from '@/types';

export const products: Product[] = [
  // Perfumes Destacados
  {
    id: 'chanel-5-100ml',
    name: 'Chanel No. 5',
    brand: 'Chanel',
    price: 85000,
    originalPrice: 95000,
    image: '/images/s465690-main-zoom.webp',
    description: 'El perfume más icónico del mundo. Elegancia atemporal en cada gota.',
    category: 'perfume',
    size: '100ml',
    inStock: true,
    featured: true,
    gender: 'mujer',
    notes: {
      top: ['Aldehydes', 'Ylang-ylang', 'Neroli'],
      heart: ['Iris', 'Rosa', 'Jazmín'],
      base: ['Sándalo', 'Vainilla', 'Vetiver']
    }
  },
  {
    id: 'dior-sauvage-100ml',
    name: 'Sauvage',
    brand: 'Dior',
    price: 78000,
    image: '/images/R.jpg',
    description: 'Frescura salvaje y elegancia masculina. Perfecto para cualquier ocasión.',
    category: 'perfume',
    size: '100ml',
    inStock: true,
    featured: true,
    gender: 'hombre',
    notes: {
      top: ['Bergamota', 'Pimienta'],
      heart: ['Geranio', 'Lavanda', 'Elemi'],
      base: ['Ambroxan', 'Cedro', 'Labdanum']
    }
  },
  {
    id: 'tom-ford-black-orchid-50ml',
    name: 'Black Orchid',
    brand: 'Tom Ford',
    price: 92000,
    image: '/images/OIP.webp',
    description: 'Sensualidad y misterio. Una fragancia lujosa y envolvente.',
    category: 'perfume',
    size: '50ml',
    inStock: true,
    featured: true,
    gender: 'unisex',
    notes: {
      top: ['Trufa', 'Gardenia', 'Grosella negra'],
      heart: ['Orquídea', 'Especias', 'Frutas'],
      base: ['Pachuli', 'Vainilla', 'Sándalo']
    }
  },
  {
    id: 'versace-eros-100ml',
    name: 'Eros',
    brand: 'Versace',
    price: 65000,
    image: '/images/OIP (2).webp',
    description: 'Pasión mediterránea. Frescura y sensualidad combinadas.',
    category: 'perfume',
    size: '100ml',
    inStock: true,
    featured: true,
    gender: 'hombre',
    notes: {
      top: ['Menta', 'Manzana verde', 'Limón'],
      heart: ['Tonka', 'Geranio', 'Ambroxan'],
      base: ['Vainilla', 'Vetiver', 'Musgo de roble']
    }
  },

  // Testers
  {
    id: 'chanel-5-tester',
    name: 'Chanel No. 5 (Tester)',
    brand: 'Chanel',
    price: 62000,
    originalPrice: 85000,
    image: '/images/s465690-main-zoom.webp',
    description: 'Misma fragancia original, mejor precio. Sin caja, incluye tapa.',
    category: 'tester',
    size: '100ml',
    inStock: true,
    gender: 'mujer',
    notes: {
      top: ['Aldehydes', 'Ylang-ylang', 'Neroli'],
      heart: ['Iris', 'Rosa', 'Jazmín'],
      base: ['Sándalo', 'Vainilla', 'Vetiver']
    }
  },
  {
    id: 'dior-sauvage-tester',
    name: 'Sauvage (Tester)',
    brand: 'Dior',
    price: 55000,
    originalPrice: 78000,
    image: '/images/dior-sauvage-tester.svg',
    description: 'Calidad original Dior a precio accesible. Ideal para probar antes de comprar el completo.',
    category: 'tester',
    size: '100ml',
    inStock: true,
    gender: 'hombre',
    notes: {
      top: ['Bergamota', 'Pimienta'],
      heart: ['Geranio', 'Lavanda', 'Elemi'],
      base: ['Ambroxan', 'Cedro', 'Labdanum']
    }
  },
  {
    id: 'ysl-libre-tester',
    name: 'Libre (Tester)',
    brand: 'Yves Saint Laurent',
    price: 58000,
    originalPrice: 82000,
    image: '/images/ysl-libre-tester.svg',
    description: 'Libertad y elegancia femenina. Tester original YSL.',
    category: 'tester',
    size: '90ml',
    inStock: true,
    gender: 'mujer',
    notes: {
      top: ['Mandarina', 'Grosella negra', 'Lavanda'],
      heart: ['Flor de naranjo', 'Jazmín', 'Lavanda'],
      base: ['Vainilla', 'Ambroxan', 'Cedro']
    }
  },
  {
    id: 'paco-rabanne-invictus-tester',
    name: 'Invictus (Tester)',
    brand: 'Paco Rabanne',
    price: 45000,
    originalPrice: 68000,
    image: '/images/paco-rabanne-invictus-tester.svg',
    description: 'Fuerza y victoria. Fragancia deportiva y fresca.',
    category: 'tester',
    size: '100ml',
    inStock: true,
    gender: 'hombre',
    notes: {
      top: ['Pomelo', 'Laurel'],
      heart: ['Jazmín', 'Gaiac'],
      base: ['Ámbar gris', 'Musgo de roble']
    }
  },

  // Más perfumes femeninos
  {
    id: 'coco-mademoiselle-100ml',
    name: 'Coco Mademoiselle',
    brand: 'Chanel',
    price: 89000,
    image: '/images/coco-mademoiselle.svg',
    description: 'Elegancia moderna y sofisticada. Un clásico atemporal.',
    category: 'perfume',
    size: '100ml',
    inStock: true,
    gender: 'mujer',
    notes: {
      top: ['Bergamota', 'Naranja', 'Pomelo'],
      heart: ['Rosa', 'Jazmín', 'Litchi'],
      base: ['Pachuli', 'Vetiver', 'Vainilla']
    }
  },
  {
    id: 'lancome-la-vie-est-belle-75ml',
    name: 'La Vie Est Belle',
    brand: 'Lancôme',
    price: 72000,
    image: '/images/lancome-la-vie-est-belle.svg',
    description: 'La vida es bella. Dulzura y elegancia en cada gota.',
    category: 'perfume',
    size: '75ml',
    inStock: true,
    gender: 'mujer',
    notes: {
      top: ['Pera', 'Grosella negra', 'Mandarina'],
      heart: ['Iris', 'Jazmín', 'Flor de naranjo'],
      base: ['Praline', 'Vainilla', 'Pachuli']
    }
  },
  {
    id: 'viktor-rolf-flowerbomb-50ml',
    name: 'Flowerbomb',
    brand: 'Viktor & Rolf',
    price: 78000,
    image: '/images/viktor-rolf-flowerbomb.svg',
    description: 'Explosión floral. Sensualidad y feminidad en estado puro.',
    category: 'perfume',
    size: '50ml',
    inStock: true,
    gender: 'mujer',
    notes: {
      top: ['Té', 'Bergamota', 'Osmanthus'],
      heart: ['Orquídea', 'Rosa', 'Fresia'],
      base: ['Pachuli', 'Almizcle', 'Vainilla']
    }
  },

  // Más perfumes masculinos
  {
    id: 'bleu-de-chanel-100ml',
    name: 'Bleu de Chanel',
    brand: 'Chanel',
    price: 85000,
    image: '/images/bleu-de-chanel.svg',
    description: 'Libertad masculina. Frescura aromática y elegancia.',
    category: 'perfume',
    size: '100ml',
    inStock: true,
    gender: 'hombre',
    notes: {
      top: ['Limón', 'Bergamota', 'Menta'],
      heart: ['Jengibre', 'Nuez moscada', 'Jazmín'],
      base: ['Incienso', 'Cedro', 'Sándalo']
    }
  },
  {
    id: 'giorgio-armani-acqua-di-gio-100ml',
    name: 'Acqua Di Gio',
    brand: 'Giorgio Armani',
    price: 68000,
    image: '/images/acqua-di-gio.svg',
    description: 'Inspirado en el Mediterráneo. Frescura acuática inconfundible.',
    category: 'perfume',
    size: '100ml',
    inStock: true,
    featured: true,
    gender: 'hombre',
    notes: {
      top: ['Lima', 'Limón', 'Bergamota', 'Jazmín'],
      heart: ['Calone', 'Fresia', 'Jacinto', 'Rosa'],
      base: ['Almizcle blanco', 'Cedro', 'Musgo de roble']
    }
  },

  // Más testers
  {
    id: 'coco-mademoiselle-tester',
    name: 'Coco Mademoiselle (Tester)',
    brand: 'Chanel',
    price: 64000,
    originalPrice: 89000,
    image: '/images/coco-mademoiselle-tester.svg',
    description: 'Elegancia Chanel a precio accesible. Sin caja original.',
    category: 'tester',
    size: '100ml',
    inStock: true,
    gender: 'mujer',
    notes: {
      top: ['Bergamota', 'Naranja', 'Pomelo'],
      heart: ['Rosa', 'Jazmín', 'Litchi'],
      base: ['Pachuli', 'Vetiver', 'Vainilla']
    }
  },
  {
    id: 'bleu-chanel-tester',
    name: 'Bleu de Chanel (Tester)',
    brand: 'Chanel',
    price: 62000,
    originalPrice: 85000,
    image: '/images/bleu-chanel-tester.svg',
    description: 'El favorito masculino de Chanel en formato tester.',
    category: 'tester',
    size: '100ml',
    inStock: true,
    gender: 'hombre',
    notes: {
      top: ['Limón', 'Bergamota', 'Menta'],
      heart: ['Jengibre', 'Nuez moscada', 'Jazmín'],
      base: ['Incienso', 'Cedro', 'Sándalo']
    }
  },
  {
    id: 'acqua-di-gio-tester',
    name: 'Acqua Di Gio (Tester)',
    brand: 'Giorgio Armani',
    price: 48000,
    originalPrice: 68000,
    image: '/images/acqua-di-gio-tester.svg',
    description: 'Frescura mediterránea en formato tester.',
    category: 'tester',
    size: '100ml',
    inStock: true,
    gender: 'hombre',
    notes: {
      top: ['Lima', 'Limón', 'Bergamota', 'Jazmín'],
      heart: ['Calone', 'Fresia', 'Jacinto', 'Rosa'],
      base: ['Almizcle blanco', 'Cedro', 'Musgo de roble']
    }
  }
];

export const featuredProducts = products.filter(product => product.featured);

export const perfumesByCategory = {
  perfumes: products.filter(product => product.category === 'perfume'),
  testers: products.filter(product => product.category === 'tester'),
  decants: products.filter(product => product.category === 'decant')
};