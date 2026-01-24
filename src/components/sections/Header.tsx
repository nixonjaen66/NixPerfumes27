'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { brandInfo } from '@/data/content';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Catálogo', href: '#catalogo' },
    { name: 'Testers', href: '#testers' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="container-custom section-padding py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/images/logo.png" 
              alt="Nix27 Perfumes" 
              className="h-12 w-auto"
            />
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-navy-800">
              Nix Perfumes <span className="text-gold-500">27</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-navy-700 hover:text-gold-500 font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden text-navy-700 hover:text-gold-500 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-navy-700 hover:text-gold-500 font-medium text-left py-2 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;