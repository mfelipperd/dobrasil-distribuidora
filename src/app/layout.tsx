import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dobrasil.com.br"),
  title: "DO Brasil | The Gold of Brazilian Tradition",
  description: "Noble Leche - Premium Dulce de Leche Distributor. Organic modernism and artisanal tradition in every jar.",
  keywords: "Dulce de Leche, Noble Leche, Brazilian Distributor, Premium Food, Artisanal",
  openGraph: {
    title: "DO Brasil | Premium Dulce de Leche",
    description: "Discover the authentic taste of Brazilian tradition with Noble Leche.",
    images: ["/images/noble-leche-jar.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DO Brasil Distributor",
    "image": "https://dobrasil.com.br/images/noble-leche-jar.png",
    "@id": "https://dobrasil.com.br",
    "url": "https://dobrasil.com.br",
    "telephone": "+5591999999999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Belém",
      "addressLocality": "Belém",
      "addressRegion": "PA",
      "postalCode": "66000-000",
      "addressCountry": "BR"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  };

  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
