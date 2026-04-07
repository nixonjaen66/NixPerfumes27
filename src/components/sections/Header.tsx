'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        setIsHeaderVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigation = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Orientación', href: '#orientacion' },
    { name: 'Aprende', href: '#conocimiento' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const catalogOptions = [
    { name: 'Catálogo Masculino', href: '#catalogo-masculino' },
    { name: 'Catálogo Femenino', href: '#catalogo-femenino' },
    { name: 'Testers', href: '#catalogo-testers' },
  ];

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);

    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = href;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-transform duration-300 ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="container-custom section-padding py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection('#inicio')}
            className="flex items-center space-x-3"
            aria-label="Volver al inicio"
          >
            <img
              src="/logoperfumes.jpeg"
              alt="Nix Perfumes"
              className="h-20 w-auto"
            />
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-navy-800">
              Nix Perfumes <span className="text-gold-600">27</span>
            </h1>
          </button>

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

            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 text-navy-700 hover:text-gold-500 font-medium transition-colors duration-200"
              >
                <span>Catálogo</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  {catalogOptions.map((option) => (
                    <button
                      key={option.name}
                      type="button"
                      onClick={() => scrollToSection(option.href)}
                      className="w-full text-left px-4 py-2 text-navy-700 hover:bg-gold-50 hover:text-gold-600 transition-colors duration-200"
                    >
                      {option.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <button
              type="button"
              className="md:hidden text-navy-700 hover:text-gold-500 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                  type="button"
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