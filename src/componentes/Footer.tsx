import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="flex justify-between w-full">
          <div>
            <div className="flex p-2 gap-2">
              <Image src="/a.webp" alt="imagem" height={40} width={40} />
              <div>
                <h1>Nome</h1>
                <h1>SubNome</h1>
              </div>
            </div>
            <p>soluções completas em transporte e logistica para todo o Brasil.</p>
          </div>
          <div>
            <h1>NAVEGAÇÃO</h1>
            <div className="flex flex-col">
              <Link href="/">Inicio</Link>
              <Link href="/">Sobre</Link>
              <Link href="/">Contato</Link>
            </div>
          </div>
          <div>
            <h1>SERVIÇOS</h1>
            <div>
              <h1>Dedicada</h1>
              <h1>Fracionada</h1>
              <h1>Especiais</h1>
            </div>
          </div>
          <div>
            <h1>CONTATO</h1>
            <div className="flex flex-col">
              <Link href="/">NUMERO</Link>
              <Link href="/">EMAIL</Link>
              <Link href="/">ENDEREÇO</Link>
            </div>
          </div>
        </div>
      </div>
        <hr className="border-gray-700" />
        <div className="max-w-7xl mx-auto py-1 px-4 sm:px-6 lg:px-8">
          <p className="text-center">&copy; 2026 My App. Todos os direitos reservados.</p>
        </div>
    </footer>
  );
}
export default Footer;