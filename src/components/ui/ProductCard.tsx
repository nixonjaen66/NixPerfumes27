'use client';

import { MessageCircle, Star, Tag } from 'lucide-react';
import { Product } from '@/types';
import { generateWhatsAppLink, formatPrice, calculateDiscount } from '@/utils/whatsapp';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className = '' }: ProductCardProps) => {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercentage = hasDiscount ? calculateDiscount(product.originalPrice!, product.price) : 0;

  return (
    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${className}`}>
      {/* Image Container */}
      <div className="relative aspect-square bg-white p-8">
        {/* Discount Badge */}
        {hasDiscount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            -{discountPercentage}%
          </div>
        )}
        
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
              {hasDiscount && (
                <span className="text-lg text-gray-400 line-through ml-2">
                  {formatPrice(product.originalPrice!)}
                </span>
              )}
            </div>
            <div className="flex items-center space-x-1 text-gold-500">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
            </div>
          </div>
        </div>

        {/* Stock Status */}
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-400' : 'bg-red-400'}`}></div>
          <span className={`text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
            {product.inStock ? 'Disponible' : 'Agotado'}
          </span>
        </div>

        {/* Action Button */}
        <a
          href={generateWhatsAppLink(product)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center space-x-2 bg-navy-600 hover:bg-navy-700 disabled:bg-gray-400 text-white font-medium py-3 rounded-lg transition-colors duration-200 group"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Consultar precio</span>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;