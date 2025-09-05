import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Catálogo Interiorismo Pro | Diseño & Remodelación",
  description: "Catálogo digital de interiorismo y remodelación. Amueblamos, remodelamos y entregamos llave en mano con diseño cálido, funcional y atemporal.",
  keywords: "interiorismo, remodelación, diseño de interiores, home staging, amueblado premium, monterrey, cdmx",
  openGraph: {
    title: "Catálogo Interiorismo Pro",
    description: "Diseño cálido, funcional y atemporal",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
