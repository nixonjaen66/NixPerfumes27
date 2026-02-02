'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { brandInfo } from '@/data/content';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
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

  const navigation = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Testers', href: '#testers' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const catalogOptions = [
    { name: 'Testers', href: '/testers' },
    { name: 'Perfumería Masculina', href: '/masculina' },
    { name: 'Perfumería Femenina', href: '/femenina' },
  ];

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to different page
      window.location.href = href;
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
              Nix Perfumes <span className="text-gold-600">27</span>
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
            
            {/* Dropdown for Catalog */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 text-navy-700 hover:text-gold-500 font-medium transition-colors duration-200"
              >
                <span>Catálogo</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  {catalogOptions.map((option) => (
                    <button
                      key={option.name}
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