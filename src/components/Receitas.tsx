"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowLeft, ArrowRight, X, Clock, ChefHat } from "lucide-react";

type Receita = {
  nome: string;
  desc: string;
  tempo: string;
  dificuldade: string;
  img: string;
  ingredientes: string[];
  preparo: string[];
};

const receitas: Receita[] = [
  {
    nome: "Alfajor Premium",
    desc: "Massa quebradiça amendoada recheada com uma camada generosa de nosso doce de leite e coberta com chocolate belga.",
    tempo: "45 min",
    dificuldade: "Média",
    img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80",
    ingredientes: [
      "200g de manteiga sem sal amolecida",
      "150g de açúcar refinado",
      "1 gema de ovo",
      "300g de amido de milho",
      "100g de farinha de trigo",
      "400g de Noble Leche",
      "150g de coco ralado seco"
    ],
    preparo: [
      "Bata a manteiga com o açúcar até formar um creme pálido.",
      "Incorpore a gema, e depois delicadamente os ingredientes secos.",
      "Abra a massa, corte em discos redondos e asse a 180°C por 12 min.",
      "Após esfriar, recheie dois discos com uma camada farta de Noble Leche.",
      "Pressione levemente e role as bordas no coco ralado."
    ]
  },
  {
    nome: "Churros Gourmet",
    desc: "A clássica massa espanhola frita até a crocância perfeita, servida com bowls aquecidos de Noble Leche.",
    tempo: "30 min",
    dificuldade: "Fácil",
    img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=800&q=80",
    ingredientes: [
      "250ml de água",
      "50g de manteiga",
      "1 pitada de sal",
      "150g de farinha de trigo",
      "2 ovos grandes",
      "300g de Noble Leche aquecido",
      "Açúcar e canela para polvilhar"
    ],
    preparo: [
      "Ferva a água com manteiga e sal. Adicione a farinha de uma só vez.",
      "Mexa vigorosamente até a massa desgrudar do fundo. Deixe amornar.",
      "Bata os ovos um a um, misturando até a massa ficar lisa.",
      "Coloque em saco de confeitar e frite em óleo quente até dourar.",
      "Passe na canela com açúcar e sirva rodeado de bowls de Noble Leche."
    ]
  },
  {
    nome: "Cheesecake Clássica",
    desc: "Uma reinterpretação andina da famosa sobremesa, mesclando queijo cremoso suave com a textura espessa do nosso doce.",
    tempo: "2 hrs",
    dificuldade: "Avançado",
    img: "https://images.unsplash.com/photo-1524351111603-9d0442379edb?w=800&q=80",
    ingredientes: [
      "200g de biscoitos maisena ou maria triturados",
      "100g de manteiga derretida",
      "600g de cream cheese em temperatura ambiente",
      "1 colher de chá de extrato de baunilha",
      "3 ovos",
      "400g de Noble Leche (200g para massa, 200g para cobertura)"
    ],
    preparo: [
      "Misture os cookies triturados com a manteiga. Forre uma assadeira.",
      "Bata o cream cheese, adicione a baunilha, os ovos e metade do Noble Leche.",
      "Despeje sobre a base e asse a 160°C em banho-maria por 50 min.",
      "Desligue o forno e deixe esfriar internamente para evitar rachaduras.",
      "Cubra com a generosa camada de Noble Leche restante antes de servir."
    ]
  },
  {
    nome: "Brownie com Vulcão Dulce",
    desc: "Um brownie denso de chocolate amargo, com um coração derretido de doce de leite artesanal em alta temperatura.",
    tempo: "50 min",
    dificuldade: "Média",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
    ingredientes: [
      "200g de chocolate 70% cacau",
      "150g de manteiga",
      "3 ovos grandes",
      "150g de açúcar mascavo",
      "80g de farinha de trigo",
      "300g de Noble Leche (resfriado em bolinhas)"
    ],
    preparo: [
      "Faça bolinhas de 15g de Noble Leche e congele por 2 horas.",
      "Derreta o chocolate com a manteiga em banho-maria.",
      "Bata os ovos com o açúcar, junte o chocolate e por fim a farinha.",
      "Coloque metade da massa na assadeira, espalhe as bolinhas congeladas.",
      "Cubra com o restante da massa e asse a 180°C por apenas 25 min."
    ]
  },
  {
    nome: "Mil Folhas de Doce",
    desc: "Camadas super crocantes de massa folhada intercaladas com Noble Leche, finalizadas com açúcar de confeiteiro.",
    tempo: "40 min",
    dificuldade: "Avançado",
    img: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&q=80",
    ingredientes: [
      "1 rolo de massa folhada fresca",
      "500g de Noble Leche",
      "100ml de creme de leite fresco batido",
      "Açúcar de confeiteiro para decorar",
      "Extrato de baunilha"
    ],
    preparo: [
      "Asse placas de massa folhada apertadas entre assadeiras para ficarem retas.",
      "Misture o creme de leite fresco batido com metade do seu Noble Leche para suavizar.",
      "Corte as massas já assadas e esfriadas em quadrados perfeitos.",
      "Intercale: massa crocante, creme suavizado e Noble Leche puro.",
      "Termine com massa, polvilhe açúcar de confeiteiro decorativo."
    ]
  }
];

export default function Receitas() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedReceita, setSelectedReceita] = useState<Receita | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  // Check if we are on mobile to handle parallax differently
  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth < 768);
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  // Horizontal parallax (linked to container scroll)
  const { scrollXProgress } = useScroll({ container: scrollRef });
  
  // Vertical parallax for desktop (linked to page scroll)
  const { scrollYProgress: pageYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const hBgX = useTransform(scrollXProgress, [0, 1], ["0%", "-30%"]);
  const vBgY = useTransform(pageYProgress, [0, 1], ["-15%", "15%"]);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollBy = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (selectedReceita) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedReceita]);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-36 bg-primary overflow-hidden" id="receitas">
      
      {/* Background */}
      <motion.div 
        style={{ 
          x: hBgX,
          y: isMobile ? "0%" : vBgY,
          scale: 1.3
        }} 
        className="absolute inset-y-0 left-0 w-[150%] md:w-full md:h-[130%] z-0"
      >
        <Image 
          src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=2000&q=80" 
          alt="Spices and ingredients background" 
          fill 
          className="object-cover opacity-30 grayscale brightness-75 transition-all"
        />
        <div className="absolute inset-0 bg-linear-to-b from-primary via-transparent to-primary" />
        <div className="absolute inset-0 bg-primary/40" />
      </motion.div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 mb-12">
          <SectionHeader label="Inspiração" title="Elevando sua culinária" variant="dark" center={false} />
        </div>

        {/* Side Arrows (Always visible when scrollable) */}
        <AnimatePresence>
          <motion.button 
            key="btn-prev-desktop"
            initial={{ opacity: 0 }} animate={{ opacity: canScrollLeft ? 0.6 : 0 }}
            onClick={() => scrollBy(-400)}
            className="absolute left-4 lg:left-8 top-[60%] -translate-y-1/2 z-30 p-3 text-white bg-black/40 backdrop-blur-md rounded-full pointer-events-auto transition-opacity hover:opacity-100 hidden md:flex"
            aria-label="Anterior"
          >
            <ArrowLeft size={24} />
          </motion.button>
          <motion.button 
            key="btn-next-desktop"
            initial={{ opacity: 0 }} animate={{ opacity: canScrollRight ? 0.6 : 0 }}
            onClick={() => scrollBy(400)}
            className="absolute right-4 lg:right-8 top-[60%] -translate-y-1/2 z-30 p-3 text-white bg-black/40 backdrop-blur-md rounded-full pointer-events-auto transition-opacity hover:opacity-100 hidden md:flex"
            aria-label="Próximo"
          >
            <ArrowRight size={24} />
          </motion.button>
          <motion.button 
            key="btn-prev-mobile"
            initial={{ opacity: 0 }} animate={{ opacity: canScrollLeft ? 0.6 : 0 }}
            onClick={() => scrollBy(-300)}
            className="absolute left-2 top-[60%] -translate-y-1/2 z-30 p-2 text-white bg-black/20 backdrop-blur-sm rounded-full pointer-events-auto transition-opacity md:hidden"
            aria-label="Anterior"
          >
            <ArrowLeft size={18} />
          </motion.button>
          <motion.button 
            key="btn-next-mobile"
            initial={{ opacity: 0 }} animate={{ opacity: canScrollRight ? 0.6 : 0 }}
            onClick={() => scrollBy(300)}
            className="absolute right-2 top-[60%] -translate-y-1/2 z-30 p-2 text-white bg-black/20 backdrop-blur-sm rounded-full pointer-events-auto transition-opacity md:hidden"
            aria-label="Próximo"
          >
            <ArrowRight size={18} />
          </motion.button>
        </AnimatePresence>

        {/* Horizontal Scroll Layout - Full Width */}
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto snap-x snap-mandatory px-4 md:px-12 w-full gap-6 lg:gap-10 pb-16 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
        >
          {receitas.map((receita, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, margin: "100px" }}
              className="shrink-0 w-[85vw] sm:w-[400px] lg:w-[450px] snap-center group bg-background rounded-4xl overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500"
            >
              <div className="relative h-[250px] lg:h-[300px] w-full overflow-hidden">
                <Image 
                  src={receita.img} 
                  alt={receita.nome} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-primary flex items-center gap-2">
                  <Clock size={14} /> {receita.tempo}
                </div>
              </div>
              <div className="p-8">
                <div className="text-xs font-bold uppercase tracking-widest text-[#B5916A] mb-3">{receita.dificuldade}</div>
                <h3 className="text-2xl lg:text-3xl font-serif text-primary mb-4">{receita.nome}</h3>
                <p className="text-sm font-medium text-primary/70 leading-relaxed mb-8 line-clamp-3">
                  {receita.desc}
                </p>
                <button 
                  onClick={() => setSelectedReceita(receita)}
                  className="flex items-center gap-3 text-sm font-bold text-white bg-primary w-full py-4 px-6 rounded-2xl hover:bg-primary/90 transition-all uppercase tracking-wider justify-center group/btn"
                >
                  <ChefHat size={18} /> Ver Receita Completa
                </button>
              </div>
            </motion.div>
          ))}
          {/* Spacer to allow some travel after the last card */}
          <div className="shrink-0 w-[5vw] lg:w-[15vw]" />
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedReceita && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedReceita(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              aria-hidden="true"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-background rounded-4xl overflow-hidden flex flex-col shadow-2xl z-10"
            >
              <button 
                onClick={() => setSelectedReceita(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-3 bg-background/50 backdrop-blur-md rounded-full text-primary hover:bg-white hover:text-black transition-colors"
                aria-label="Fechar"
              >
                <X size={24} />
              </button>

              <div className="overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="relative h-[300px] sm:h-[400px] w-full">
                  <Image src={selectedReceita.img} alt={selectedReceita.nome} fill className="object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
                </div>
                
                <div className="px-6 md:px-12 pb-12 -mt-20 relative z-10">
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                      {selectedReceita.dificuldade}
                    </span>
                    <span className="bg-white text-primary border border-primary/10 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                      <Clock size={14} /> {selectedReceita.tempo}
                    </span>
                  </div>
                  
                  <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6 leading-none">
                    {selectedReceita.nome}
                  </h2>
                  <p className="text-lg md:text-xl font-medium text-primary/70 mb-12 max-w-2xl leading-relaxed">
                    {selectedReceita.desc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
                    <div className="md:col-span-5 bg-secondary/20 p-8 rounded-3xl h-fit border border-primary/5">
                      <h3 className="text-2xl font-serif text-primary mb-6 flex items-center gap-3">
                        Ingredientes
                      </h3>
                      <ul className="space-y-4">
                        {selectedReceita.ingredientes.map((ing, i) => (
                          <li key={i} className="flex gap-4 text-primary/80 font-medium text-sm">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#B5916A] shrink-0" />
                            {ing}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="md:col-span-7 p-2">
                      <h3 className="text-2xl font-serif text-primary mb-8">
                        Modo de Preparo
                      </h3>
                      <div className="space-y-8">
                        {selectedReceita.preparo.map((passo, i) => (
                          <div key={i} className="flex gap-6 group">
                            <div className="shrink-0 w-10 h-10 rounded-full bg-primary/5 border border-primary/10 text-primary flex items-center justify-center font-serif text-lg font-bold group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                              {i + 1}
                            </div>
                            <p className="text-base font-medium text-primary/80 leading-relaxed pt-2">
                              {passo}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
