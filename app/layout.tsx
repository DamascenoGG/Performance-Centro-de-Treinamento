import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Performance Academia",
  description: "Transforme seu desempenho na Performance Academia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body 
        style={{ backgroundImage: "url('/ct-background.png')" }}
        className="min-h-full bg-cover bg-center bg-fixed bg-no-repeat text-white"
      >
        {/* Camada escura por cima da imagem para garantir a leitura dos textos */}
        <div className="flex flex-col min-h-screen bg-black/75 backdrop-blur-[2px]">
          
          <Header />
          
          {/* O conteúdo das suas páginas (Home, Planos, etc) vai aparecer aqui dentro */}
          <main className="flex-1">
            {children}
          </main>
          
          <Footer />
          
        </div>
      </body>
    </html>
  );
}