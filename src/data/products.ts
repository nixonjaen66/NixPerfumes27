import { Product } from '@/types';

export const products: Product[] = [
  // Perfumes Destacados
  {
    id: 'chanel-5-100ml',
    name: 'Chanel No. 5',
    brand: 'Chanel',
    price: 85000,
    originalPrice: 95000,
    image: '/images/chanel-5.jpg',
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
    image: '/images/dior-sauvage.jpg',
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
    image: '/images/tom-ford-black-orchid.jpg',
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
    image: '/images/versace-eros.jpg',
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
    image: '/images/chanel-5-tester.jpg',
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
    image: '/images/dior-sauvage-tester.jpg',
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
    image: '/images/ysl-libre-tester.jpg',
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
    image: '/images/paco-rabanne-invictus-tester.jpg',
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
  }
];

export const featuredProducts = products.filter(product => product.featured);

export const perfumesByCategory = {
  perfumes: products.filter(product => product.category === 'perfume'),
  testers: products.filter(product => product.category === 'tester'),
  decants: products.filter(product => product.category === 'decant')
};