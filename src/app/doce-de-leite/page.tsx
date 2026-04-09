import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Lazy-loaded: abaixo do fold, carregados sob demanda
const About = dynamic(() => import("@/components/About"));
const ProductShowcase = dynamic(() => import("@/components/ProductShowcase"));
const TabelaNutricional = dynamic(() => import("@/components/TabelaNutricional"));
const Receitas = dynamic(() => import("@/components/Receitas"));
const Diferenciais = dynamic(() => import("@/components/Diferenciais"));
const Depoimentos = dynamic(() => import("@/components/Depoimentos"));
const Contato = dynamic(() => import("@/components/Contato"));
const Footer = dynamic(() => import("@/components/Footer"));

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
