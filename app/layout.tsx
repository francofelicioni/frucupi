import type { Metadata } from "next";
import { Fredoka, Inter } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frucupí Café | Café y cookies en Belgrano, pet friendly",
  description:
    "Frucupí Café — café de especialidad, cookies gourmet y brunch en Moldes & Juramento, Belgrano. Pet friendly: agua y snacks para peludos. Abierto todos los días de 8 a 20hs.",
  openGraph: {
    title: "Frucupí Café",
    description:
      "Café y cookies para humanos, agua y snacks para peludos. Moldes & Juramento, Belgrano.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${fredoka.variable} ${inter.variable} bg-cream font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
