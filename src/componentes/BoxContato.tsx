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
    <div className="flex border rounded-xl border-gray-200 px-4 py-4 items-center gap-4 shadow-sm">
      <div className="bg-gray-300 p-3 text-blue-600">
        {icone}
      </div>

      <div>
        <h1 className="pt-3.5 font-bold">{titulo}</h1>
        <Link href={href} className="">{contato}</Link>
        <p>{description}</p>
      </div>
    </div>
  );
}