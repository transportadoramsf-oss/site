import { ReactNode } from "react";
import Link from "next/link";

interface BoxSobreProps {
  icone: ReactNode;
  titulo: string;
  href?: string;
  contato?: string;
  description: string;
}

export default function BoxSobre({
  icone,
  titulo,
  href,
  contato,
  description,
}: BoxSobreProps) {
  return (
    <div className="flex border rounded-xl border-gray-200 px-4 py-3 items-center gap-4 shadow-sm transition-shadow duration-300 hover:shadow-[0_1px_10px_#00008B]">
      <div className="p-4 text-gray-900">
        {icone}
      </div>

      <div>
        <h1 className="font-bold">{titulo}</h1>

        {href && contato ? (
          <Link href={href} className="font-extralight">
            {contato}
          </Link>
        ) : (
          contato && <p className="font-extralight">{contato}</p>
        )}

        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}