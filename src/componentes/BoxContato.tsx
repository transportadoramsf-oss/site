import { ReactNode } from "react";
import Link from "next/link";

interface BoxContatoProps {
  icone: ReactNode;
  titulo: string;
  href?: string;
  contato?: string;
  description: string;
}

export default function BoxContato({
  icone,
  titulo,
  href,
  contato,
  description,
}: BoxContatoProps) {
  const conteudo = (
    <div className="flex border rounded-xl border-gray-200 px-4 py-3 items-center gap-4 shadow-sm transition-shadow duration-300 hover:shadow-[0_1px_10px_#00008B]">
      <div className="bg-gray-300 p-3 sm:p-4 text-blue-600 rounded-lg shrink-0">
        {icone}
      </div>

      <div className="flex-1 min-w-0">
        <h1 className="font-bold text-base sm:text-lg">{titulo}</h1>

        {contato && (
          <p className="font-extralight wrap-break-words">
            {contato}
          </p>
        )}

        <p className="text-sm">{description}</p>
      </div>
    </div>
  );

  return href ? (
    <Link href={href}>
      {conteudo}
    </Link>
  ) : (
    conteudo
  );
}