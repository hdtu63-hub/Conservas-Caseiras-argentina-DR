import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Receitas Saudáveis para Congelar · 100+ Receitas",
  description: "Mais de 100 receitas saudáveis e fáceis para congelar. Cozinhe uma vez e coma bem a semana inteira.",
  openGraph: {
    title: "Receitas Saudáveis para Congelar",
    description: "100+ receitas práticas para uma semana inteira de comida gostosa.",
    images: [{ url: "/og.png", width: 1920, height: 1080, alt: "Receitas saudáveis para congelar" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
