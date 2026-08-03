"use client";

import { Truck, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function NavBar() {

  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100 text-gray-900">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex gap-2 shrink-0 items-center">
            <Truck size={40} className="text-black" />
            <h1 className="text-sm font-bold leading-tight">Consultoria<br/> & Logistica.</h1>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className={`px-3 py-2 rounded-md ${pathname === "/" ? "text-sm font-bold underline underline-offset-3 decoration-3" : "text-sm font-medium"}`}>Inicio</Link>
              <Link href="/Sobre" className={`px-3 py-2 rounded-md ${pathname === "/Sobre" ? "text-sm font-bold underline underline-offset-3 decoration-3" : "text-sm font-medium"}`}>Sobre</Link>
              <Link href="/Contato" className={`px-3 py-2 rounded-md ${pathname === "/Contato" ? "text-sm font-bold underline underline-offset-3 decoration-3" : "text-sm font-medium"}`}>Contato</Link>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col py-2 border-t border-gray-200">
            <Link href="/" onClick={() => setMenuOpen(false)} className={`px-2 py-3 ${pathname === "/" ? "font-bold" : "font-medium"}`}>Inicio</Link>
            <Link href="/Sobre" onClick={() => setMenuOpen(false)} className={`px-2 py-3 ${pathname === "/Sobre" ? "font-bold" : "font-medium"}`}>Sobre</Link>
            <Link href="/Contato" onClick={() => setMenuOpen(false)} className={`px-2 py-3 ${pathname === "/Contato" ? "font-bold" : "font-medium"}`}>Contato</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;