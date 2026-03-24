'use client';

import { MessageCircle } from 'lucide-react';
import { Product } from '@/types';
import { generateWhatsAppLink, formatPrice } from '@/utils/whatsapp';

interface ProductCardProps {
  product: Product;
  className?: string;
  onWhatsAppClick?: () => void;
}

const ProductCard = ({ product, className = '', onWhatsAppClick }: ProductCardProps) => {
  return (
    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${className}`}>
      {/* Image Container */}
      <div className="relative aspect-square bg-white p-8">
        {/* Category Badge */}
        <div className="absolute top-3 right-3 bg-white/90 text-gray-700 text-xs font-medium px-2 py-1 rounded-full border z-10">
          {product.category === 'tester' ? 'Tester' : 'Completo'}
        </div>

        {/* Product Image */}
        <div className="w-full h-full flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-contain"
            onError={(e) => {
              // Si la imagen .jpg falla, intenta cargar la versión .svg
              const currentSrc = e.currentTarget.src;
              if (currentSrc.includes('.jpg')) {
                e.currentTarget.src = currentSrc.replace('.jpg', '.svg');
              }
            }}
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-serif text-lg font-semibold text-navy-800 mb-1 group-hover:text-gold-600 transition-colors duration-200">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm font-medium">{product.brand}</p>
        </div>

        <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Price */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-navy-800">{formatPrice(product.price)}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        {onWhatsAppClick ? (
          <button
            onClick={onWhatsAppClick}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 text-sm"
          >
            Comprar
          </button>
        ) : (
          <a
            href={generateWhatsAppLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-block text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 text-sm"
          >
            Comprar
          </a>
        )}
      </div>
    </div>
  );
};

export default ProductCard;