export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  category: 'perfume' | 'tester' | 'decant';
  size: string;
  inStock: boolean;
  featured?: boolean;
  gender: 'hombre' | 'mujer' | 'unisex';
  notes?: {
    top: string[];
    heart: string[];
    base: string[];
  };
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  products: Product[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  product?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'productos' | 'envios' | 'pagos';
}