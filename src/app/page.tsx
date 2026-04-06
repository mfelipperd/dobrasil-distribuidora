import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductShowcase from "@/components/ProductShowcase";
import Diferenciais from "@/components/Diferenciais";
import Depoimentos from "@/components/Depoimentos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <ProductShowcase />
      <Diferenciais />
      <Depoimentos />
      <Contato />
      <Footer />
    </main>
  );
}
