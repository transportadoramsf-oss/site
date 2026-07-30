import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface BoxServiçosProps {
  icone: ReactNode;
  titulo: string;
  description: string;
}

export default function BoxServiços({
  icone,
  titulo,
  description,
}: BoxServiçosProps) {
  return (
    <div className="flex justify-center items-center gap-4">
      <div>
        {icone}
        <h1>{titulo}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}