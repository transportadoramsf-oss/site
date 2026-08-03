import { Truck } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="w-full max-w-6xl mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4">
          <div>
            <div className="flex gap-2 shrink-0 items-center">
              <Truck size={40} />
              <h1 className="text-sm font-bold">Consultoria<br/> & Logistica.</h1>
            </div>
            <p className="text-xs pt-1">Soluções completas em transporte<br/> & logística para todo o Brasil.</p>
          </div>

          <div>
            <h1 className="text-lg font-semibold">NAVEGAÇÃO</h1>
            <div className="flex flex-col text-sm font-medium text-gray-100 gap-1">
              <Link href="/">Inicio</Link>
              <Link href="/Sobre">Sobre</Link>
              <Link href="/Contato">Contato</Link>
            </div>
          </div>

          <div>
            <h1 className="text-lg font-semibold">SERVIÇOS</h1>
            <div className="flex flex-col text-sm font-medium text-gray-100 gap-1">
              <h1>Dedicada</h1>
              <h1>Fracionada</h1>
              <h1>Especiais</h1>
            </div>
          </div>

          <div>
            <h1 className="text-lg font-semibold">CONTATO</h1>
            <div className="flex flex-col text-sm font-medium text-gray-100 gap-1">
              <Link href="/">NUMERO</Link>
              <Link href="/">EMAIL</Link>
              <Link href="/">ENDEREÇO</Link>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-700" />

      <div className="w-full max-w-6xl mx-auto py-3 px-4">
        <p className="text-center text-sm">
          &copy; 2026 MSF Consultoria & Logistica. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;