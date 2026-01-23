import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedProductsSection from '@/components/sections/FeaturedProductsSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import TestersSection from '@/components/sections/TestersSection';
import TrustSection from '@/components/sections/TrustSection';
import TestimonialsAndFAQSection from '@/components/sections/TestimonialsAndFAQSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedProductsSection />
        <CategoriesSection />
        <TestersSection />
        <TrustSection />
        <TestimonialsAndFAQSection />
      </main>
      <Footer />
    </>
  );
}