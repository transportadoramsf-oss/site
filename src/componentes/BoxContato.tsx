import { ReactNode } from "react";
import Link from "next/link";

interface BoxContatoProps {
  icone: ReactNode;
  titulo: string;
  href: string;
  contato: string;
  description: string;
}

export default function BoxContato({
  icone,
  titulo,
  href,
  contato,
  description,
}: BoxContatoProps) {
  return (
    <div className="flex border rounded-xl border-gray-200 px-4 py-3 items-center gap-4 shadow-sm transition-shadow duration-300 hover:shadow-[0_1px_10px_#00008B]">
      <div className="bg-gray-300 p-4 text-blue-600">
        {icone}
      </div>

      <div>
        <h1 className="font-bold">{titulo}</h1>
        <Link href={href} className="font-extralight">{contato}</Link>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}