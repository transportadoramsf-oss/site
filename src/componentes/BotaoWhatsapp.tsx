import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function BotaoWhatsapp() {
  return (
    <Link
      href={`https://wa.me/55${process.env.NEXT_PUBLIC_TELEFONE}`}
      target="_blank"
      rel="noopener noreferrer"
      className= "fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white shadow-lg transition duration-300 hover:bg-green-600 hover:-translate-y-1">
      <FaWhatsapp size={36} />
    </Link>
  );
}