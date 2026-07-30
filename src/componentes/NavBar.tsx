import Link from "next/link";

export function NavBar() {
  return (
    <nav className="bg-gray-100 text-gray-900">
      <div className="w-[90%] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0">
            <h1 className="text-xl font-bold">My App</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="py-2 rounded-md text-sm font-medium">Inicio</Link>
              <Link href="/Sobre" className="px-3 py-2 rounded-md text-sm font-medium">Sobre</Link>
              <Link href="/Contato" className="px-3 py-2 rounded-md text-sm font-medium">Contato</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;