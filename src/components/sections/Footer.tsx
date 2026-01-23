'use client';

import { MessageCircle, Instagram, Facebook, MapPin, Clock, Phone, Mail } from 'lucide-react';
import { brandInfo } from '@/data/content';
import { generateCatalogWhatsAppLink } from '@/utils/whatsapp';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Catálogo', href: '#catalogo' },
    { name: 'Testers', href: '#testers' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contacto" className="bg-navy-800 text-white">
      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">
                Nix Perfumes <span className="text-gold-400">27</span>
              </h3>
              <p className="text-navy-200 text-lg leading-relaxed">
                Tu destino para fragancias originales con el lujo que mereces, 
                a precios accesibles. Descubre tu esencia perfecta.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold-400 flex-shrink-0" />
                <span className="text-navy-100">WhatsApp: +506 {brandInfo.whatsapp}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold-400 flex-shrink-0" />
                <span className="text-navy-100">{brandInfo.email}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gold-400 flex-shrink-0" />
                <span className="text-navy-100">Costa Rica</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-gold-400 flex-shrink-0" />
                <span className="text-navy-100">Lun - Dom: 8:00 AM - 8:00 PM</span>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={generateCatalogWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-bold text-gold-400">Enlaces Rápidos</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-navy-200 hover:text-gold-400 transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Categories & Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-bold text-gold-400">Categorías</h4>
            <div className="space-y-3">
              <div className="text-navy-200">Perfumes Completos</div>
              <div className="text-navy-200">Testers</div>
              <div className="text-navy-200">Decants</div>
              <div className="text-navy-200">Asesorías</div>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="font-semibold text-gold-400 mb-3">Síguenos</h5>
              <div className="flex space-x-4">
                <a
                  href={`https://instagram.com/${brandInfo.social.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-navy-700 hover:bg-gold-500 rounded-lg transition-colors duration-200"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={`https://facebook.com/${brandInfo.social.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-navy-700 hover:bg-gold-500 rounded-lg transition-colors duration-200"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-700">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-navy-300 text-sm">
              © {currentYear} Nix Perfumes 27. Todos los derechos reservados.
            </div>

            {/* Brand Tagline */}
            <div className="text-center">
              <p className="text-lg font-serif italic text-gold-400">
                {brandInfo.tagline}
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm text-navy-300">
              <button className="hover:text-gold-400 transition-colors duration-200">
                Términos
              </button>
              <button className="hover:text-gold-400 transition-colors duration-200">
                Privacidad
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={generateCatalogWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </footer>
  );
};

export default Footer;