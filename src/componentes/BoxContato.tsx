import Image from "next/image";
import Link from "next/link";

interface BoxContatoProps {
  icone: string;
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
    <div className="flex items-center gap-4">
      <Image src={icone} alt={titulo} width={40} height={40} />

      <div>
        <h1>{titulo}</h1>
        <Link href={href}>{contato}</Link>
        <p>{description}</p>
      </div>
    </div>
  );
}