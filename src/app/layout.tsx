import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import NavBar from "@/componentes/NavBar";
import { Footer } from "@/componentes/Footer";
import BotaoWhatsapp from "@/componentes/BotaoWhatsapp";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MSF Consultoria e logistica",
  description: "Transporte de cargas com segurança, agilidade e compromisso em cada entrega.",
  icons: {
    icon: "/LogoHD.png"
  },

  openGraph: {
    title: "MSF Consultoria e logistica",
    description: "Transporte de cargas com segurança, agilidade e compromisso em cada entrega.",
    images: ["/LogoHD.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`h-full antialiased`}
    >
      <body className={`${geistSans.className} bg-white min-h-full flex flex-col`}>
        <NavBar/>
        {children}
        <Footer/>
        <BotaoWhatsapp/>
      </body>
    </html>
  );
}
