import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Nix Perfumes 27 | Fragancias Originales - Lujo Accesible',
  description: 'Descubre perfumes auténticos de las mejores marcas mundiales. Calidad premium, precios justos, y la comodidad de comprar por WhatsApp. Perfumes completos y testers disponibles.',
  keywords: 'perfumes originales, testers, fragancias, Costa Rica, Chanel, Dior, Tom Ford, Versace, perfumes baratos, lujo accesible',
  authors: [{ name: 'Nix Perfumes 27' }],
  creator: 'Nix Perfumes 27',
  publisher: 'Nix Perfumes 27',
  openGraph: {
    title: 'Nix Perfumes 27 | Fragancias Originales - Lujo Accesible',
    description: 'Descubre perfumes auténticos de las mejores marcas mundiales. Perfumes completos y testers a precios accesibles.',
    url: 'https://nixperfumes27.com',
    siteName: 'Nix Perfumes 27',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nix Perfumes 27 - Fragancias Originales',
      },
    ],
    locale: 'es_CR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nix Perfumes 27 | Fragancias Originales - Lujo Accesible',
    description: 'Descubre perfumes auténticos de las mejores marcas mundiales a precios accesibles.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e3a8a" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Nix Perfumes 27",
              "description": "Perfumería especializada en fragancias originales y testers de marcas premium",
              "url": "https://nixperfumes27.com",
              "telephone": "+50612345678",
              "email": "info@nixperfumes27.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CR",
                "addressRegion": "San José",
                "addressLocality": "Costa Rica"
              },
              "openingHours": "Mo-Su 08:00-20:00",
              "priceRange": "₡₡",
              "sameAs": [
                "https://instagram.com/nixperfumes27",
                "https://facebook.com/NixPerfumes27"
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}