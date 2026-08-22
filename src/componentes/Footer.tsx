import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="w-full md:h-28 max-w-6xl mx-auto">
        <div className="flex flex-col p-6 md:items-center md:flex-row justify-between gap-4 md:p-1">
          
          <Image
            src="/LogoHDI.png"
            alt="Logo"
            width={500}
            height={500}
            className="w-auto h-auto md:h-28"
          />
          
          <div>
            <h1 className="text-lg font-semibold text-[#2b9da6]">NAVEGAÇÃO</h1>
            <div className="flex flex-col text-sm font-medium text-gray-100 gap-1">
              <Link href="/">Inicio</Link>
              <Link href="/Sobre">Sobre</Link>
              <Link href="/Contato">Contato</Link>
            </div>
          </div>

          <div>
            <h1 className="text-lg font-semibold text-[#2b9da6]">SERVIÇOS</h1>
            <div className="flex flex-col text-sm font-medium text-gray-100 gap-1">
              <h1>Dedicada</h1>
              <h1>Fracionada</h1>
              <h1>Especiais</h1>
            </div>
          </div>

          <div>
            <h1 className="text-lg font-semibold text-[#2b9da6]">CONTATO</h1>
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