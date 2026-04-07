"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductShowcase from "@/components/ProductShowcase";
import TabelaNutricional from "@/components/TabelaNutricional";
import Receitas from "@/components/Receitas";
import Diferenciais from "@/components/Diferenciais";
import Depoimentos from "@/components/Depoimentos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function ProdutoPage() {
  return (
    <main>
      <Header 
         isProductPage={true} 
      />
      <Hero />
      <About />
      <ProductShowcase />
      <TabelaNutricional />
      <Receitas />
      <Diferenciais />
      <Depoimentos />
      <Contato />
      <Footer />
    </main>
  );
}
