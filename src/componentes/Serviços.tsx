import { Truck, Boxes, Warehouse } from "lucide-react";
import BoxServiços from "./BoxServiços";

export function Serviços() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 p-2 text-gray-900">
        <div className="flex flex-col justify-center items-center pt-2">
          <h1 className="text-base sm:text-lg text-gray-800 font-bold py-0.5 px-2 border border-gray-100 rounded-3xl shadow-[0_1px_10px_#00008B]">NOSSOS SERVIÇOS</h1>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold p-2 pb-2 text-gray-900 text-center">Soluções completas para sua logística</h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-6 pb-4 pt-2">
          <BoxServiços
            icone={<Truck size={70} className="text-black" />}
            titulo="Carga Dedicada"
            description="No transporte de carga dedicada, o cliente pode utilizar o espaço do veículo em sua totalidade. Sendo assim, após o carregamento da carga, o veículo segue em rota ao destinatário. Existe uma urgência na entrega, tornando-a mais rápida e evitando atrasos."
          />

          <BoxServiços
            icone={<Boxes size={70} className="text-black" />}
            titulo="Carga Fracionada"
            description="Aplicável a despacho de carga de pequeno volume, ultilizando parcialmente a capacidade nominal de carga do veículo transportador."
          />

          <BoxServiços
            icone={<Warehouse size={70} className="text-black" />}
            titulo="Especiais"
            description="Aplicável a embarques de cargas em uma origem, ultilizando mais que o total da capacidade nominal da carga do veículo transportador e em um ou mais destinos."
          />
        </div>
    </div>
  );
}

export default Serviços;