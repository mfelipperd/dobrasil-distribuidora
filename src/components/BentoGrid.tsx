"use client";

import { motion } from "framer-motion";
import { Truck, Sparkles, HandshakeIcon, MapPin } from "lucide-react";

const b2bItems = [
  {
    title: "Local Logistics",
    subtitle: "Belém / PA",
    description: "Our dedicated distribution hub in the North ensures your stock is always fresh and delivered on time.",
    icon: <MapPin className="text-[#3A92CE]" size={32} />,
    size: "md:col-span-1",
  },
  {
    title: "Artisanal Curation",
    subtitle: "High Standard Selection",
    description: "Every producer in our network follows strict artisanal criteria, ensuring a consistent premium grade across all batches.",
    icon: <Sparkles className="text-[#7B3F21]" size={32} />,
    size: "md:col-span-1",
  },
  {
    title: "Partnership Program",
    subtitle: "Grow with DO Brasil",
    description: "We offer tailored B2B solutions, POS marketing materials, and competitive wholesale pricing for high-end retailers, hotels, and pastry chefs.",
    icon: <HandshakeIcon className="text-[#3A92CE]" size={32} />,
    size: "md:col-span-2",
  },
];

export default function BentoGrid() {
  return (
    <section id="b2b" className="py-24 bg-[#E8DFC9] px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-sans uppercase tracking-[0.2em] text-[#7B3F21]/60 font-bold">Business Solutions</span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#7B3F21] mt-4">Elevate Your Menu.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {b2bItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${item.size} bg-[#F2E8D5] p-12 rounded-2xl border border-white/40 shadow-sm flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:border-[#7B3F21]/10`}
            >
              <div className="mb-10 p-5 bg-white/50 rounded-2xl w-fit shadow-inner group-hover:bg-white transition-colors duration-300">
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm font-sans uppercase tracking-widest text-[#7B3F21]/40 transition-colors duration-300 font-bold mb-2">
                  {item.subtitle}
                </h4>
                <h3 className="text-3xl font-serif text-[#7B3F21] mb-4">
                  {item.title}
                </h3>
                <p className="text-lg text-[#7B3F21]/70 leading-relaxed font-sans font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
