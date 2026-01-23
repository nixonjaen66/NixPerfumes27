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
    <div className={`card-product group ${className}`}>
      {/* Image Container */}
      <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 p-8">
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

        {/* Product Image Placeholder */}
        <div className="w-full h-full bg-gradient-to-b from-navy-100 to-navy-200 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
          <div className="text-center">
            <div className="w-20 h-28 bg-gradient-to-b from-navy-600 to-navy-800 rounded-lg mx-auto mb-3 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400/20 to-transparent"></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-gold-400 rounded-sm text-xs text-white flex items-center justify-center font-bold">
                {product.brand.slice(0, 3)}
              </div>
            </div>
            <p className="text-xs text-gray-600 font-medium">{product.size}</p>
          </div>
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
          className="w-full flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-medium py-3 rounded-lg transition-colors duration-200 group"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Comprar por WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;