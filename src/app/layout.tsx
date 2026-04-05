import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Melvin Rusbel Huatuco - Abogado Penalista",
  description: "Defensa Penal Eficaz con Valores. Abogado con amplio conocimiento del Poder Judicial. Especialista en delitos complejos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfairDisplay.variable} scroll-smooth`}
    >
      <body className="antialiased min-h-screen flex flex-col bg-[var(--color-primary)] text-white">
        {children}
      </body>
    </html>
  );
}
