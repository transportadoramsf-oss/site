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
    <div className="w-90 rounded-xl border border-gray-300 bg-white p-4 shadow-lg transition-shadow duration-300 hover:shadow-[0_1px_10px_#00008B]">
      <div className="flex flex-col items-center pl-4 pr-4 p-2  gap-2">
        {icone}
        <h1 className="text-2xl text-black font-bold">{titulo}</h1>
        <p className="indent-6 text-sm text-gray-900">{description}</p>
      </div>
    </div>
  );
}