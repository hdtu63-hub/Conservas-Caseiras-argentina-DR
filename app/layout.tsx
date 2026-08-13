import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Comidas Congeladas Fáciles para Mamás Ocupadas · 100+ Recetas",
  description: "Más de 100 recetas fáciles para congelar, pensadas para mamás ocupadas. Cocina una vez y come toda la semana sin complicarte la vida.",
  openGraph: {
    title: "Comidas Congeladas Fáciles para Mamás Ocupadas",
    description: "100+ recetas prácticas para una semana entera de comida rica.",
  },
  twitter: { card: "summary" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es-419"><body>{children}</body></html>;
}
