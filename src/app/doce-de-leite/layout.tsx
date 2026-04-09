import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noble Leche — Doce de Leite Premium | DO Brasil",
  description:
    "Conheça o Noble Leche: doce de leite artesanal premium, 100% natural, produzido com ingredientes selecionados. Distribuição para restaurantes, hotéis e cafeterias.",
};

export default function DoceDeLeiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link
        rel="preload"
        href="/videos/hero-doce-de-leite.mp4"
        as="video"
        type="video/mp4"
      />
      {children}
    </>
  );
}
