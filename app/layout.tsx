import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Conservas Caseras · 100+ Recetas Rentables",
  description: "Aprende a preparar conservas caseras con más de 100 recetas rentables, guías de almacenamiento, costos, precios y ventas.",
  openGraph: {
    title: "Conservas Caseras · 100+ Recetas Rentables",
    description: "Prepara, conserva y vende productos artesanales desde casa.",
    images: [{ url: "/og-conservas.png", width: 1536, height: 911, alt: "Conservas Caseras · 100+ Recetas Rentables" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-conservas.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es-419"><body>{children}</body></html>;
}
