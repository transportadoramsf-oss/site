"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function NavBar() {

  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div ref={navRef}>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-100 text-gray-900 md:static">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            <Link href="/" className="flex items-center">
              <Image
                src="/LogoHD.png"
                alt="Logo"
                width={1280}
                height={700}
                className="w-auto h-18 p-2"
              />
            </Link>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className={`px-3 py-2 rounded-md ${pathname === "/" ? "text-md font-bold underline underline-offset-3 decoration-3" : "text-md font-medium"}`}>Inicio</Link>
                <Link href="/Sobre" className={`px-3 py-2 rounded-md ${pathname === "/Sobre" ? "text-md font-bold underline underline-offset-3 decoration-3" : "text-md font-medium"}`}>Sobre</Link>
                <Link href="/Contato" className={`px-3 py-2 rounded-md ${pathname === "/Contato" ? "text-md font-bold underline underline-offset-3 decoration-3" : "text-md font-medium"}`}>Contato</Link>
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
    </div>
  );
}

export default NavBar;