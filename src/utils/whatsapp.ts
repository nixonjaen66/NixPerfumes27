import { Product } from '@/types';
import { brandInfo } from '@/data/content';

export const generateWhatsAppLink = (product?: Product, customMessage?: string): string => {
  const baseURL = `https://wa.me/${brandInfo.whatsapp}`;
  
  let message = customMessage || `¡Hola! Me interesa conocer más sobre Nix Perfumes 27.`;
  
  if (product) {
    message = `¡Hola! Me interesa el perfume *${product.name}* de ${product.brand} (${product.size}) por ₡${product.price.toLocaleString('es-CR')}.

¿Está disponible? ¿Podrían darme más información?`;
  }
  
  return `${baseURL}?text=${encodeURIComponent(message)}`;
};

export const generateCatalogWhatsAppLink = (): string => {
  const message = `¡Hola! Me gustaría ver el catálogo completo de Nix Perfumes 27. ¿Podrían enviarme información sobre todos los productos disponibles?`;
  
  return generateWhatsAppLink(undefined, message);
};

export const generateConsultationWhatsAppLink = (): string => {
  const message = `¡Hola! Me gustaría recibir asesoría para elegir el perfume perfecto. ¿Podrían ayudarme?`;
  
  return generateWhatsAppLink(undefined, message);
};

export const formatPrice = (price: number): string => {
  return `₡${price.toLocaleString('es-CR')}`;
};

export const calculateDiscount = (originalPrice: number, currentPrice: number): number => {
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
};