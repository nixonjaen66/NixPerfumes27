'use client';

import { MessageCircle, Instagram, Facebook, Phone, Mail } from 'lucide-react';
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
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-2">
                Nix Perfumes <span className="text-gold-400">27</span>
              </h3>
              <p className="text-navy-200 leading-relaxed">
                Tu destino para fragancias originales con el lujo que mereces, 
                a precios accesibles. Descubre tu esencia perfecta.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gold-400 flex-shrink-0" />
                <span className="text-navy-100">Teléfono: +506 72140221</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gold-400 flex-shrink-0" />
                <span className="text-navy-100">nixonjaen00@gmail.com</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-4 w-4 text-gold-400 flex-shrink-0" />
                <div>
                  <div className="text-navy-100">Consultas y pedidos</div>
                  <div className="text-navy-200 text-sm">Respuesta rápida por mensaje</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-bold text-gold-400">Enlaces Rápidos</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-navy-200 hover:text-gold-400 transition-colors duration-200 text-left text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Services & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-bold text-gold-400">Servicios</h4>
            <div className="space-y-2">
              <div className="text-navy-200 text-sm">Perfumes Originales</div>
              <div className="text-navy-200 text-sm">Testers Premium</div>
              <div className="text-navy-200 text-sm">Asesorías</div>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="font-semibold text-gold-400 mb-3">Síguenos</h5>
              <div className="flex space-x-3">
                <a
                  href={`https://instagram.com/${brandInfo.social.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-navy-700 hover:bg-gold-500 rounded-lg transition-colors duration-200"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href={`https://facebook.com/${brandInfo.social.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-navy-700 hover:bg-gold-500 rounded-lg transition-colors duration-200"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-700 py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-navy-300 text-sm">
              © {currentYear} Nix Perfumes 27. Todos los derechos reservados.
            </div>

            {/* Brand Tagline */}
            <div className="text-center">
              <p className="font-serif italic text-gold-400">
                {brandInfo.tagline}
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-4 text-sm text-navy-300">
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

      {/* Floating Contact Button */}
      <a
        href={generateCatalogWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-navy-600 hover:bg-navy-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
        aria-label="Contactar ahora"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </footer>
  );
};

export default Footer;