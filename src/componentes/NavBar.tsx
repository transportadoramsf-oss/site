"use client";

import { Truck } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export function NavBar() {

  const pathname = usePathname();

  return (
    <nav className="bg-gray-100 text-gray-900">
      <div className="w-[90%] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex gap-2  shrink-0">
            <Truck size={40} className="text-black" />
            <h1 className="text-sm font-bold">Consultoria<br/> & Logistica.</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className={`px-3 py-2 rounded-md ${pathname === "/" ? "text-base font-bold underline underline-offset-3 decoration-3" : "text-sm font-medium"}`}>Inicio</Link>
              <Link href="/Sobre" className={`px-3 py-2 rounded-md ${pathname === "/Sobre" ? "text-base font-bold underline underline-offset-3 decoration-3" : "text-sm font-medium"}`}>Sobre</Link>
              <Link href="/Contato" className={`px-3 py-2 rounded-md ${pathname === "/Contato" ? "text-base font-bold underline underline-offset-3 decoration-3" : "text-sm font-medium"}`}>Contato</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;