import { Truck, Boxes, Warehouse } from "lucide-react";
import BoxServiços from "./BoxServiços";

export function Serviços() {
  return (
    <div className="w-[90%] max-w-7xl mx-auto p-2 text-gray-900">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl text-blue-950">Nossos Serviços</h1>
        <h1 className="text-4xl pb-3 text-gray-900">Soluções completas para sua logística</h1>
      </div>

      <div className="flex justify-between pb-10 pt-4">
        <BoxServiços
          icone={<Truck size={70} className="text-black" />}
          titulo="Carga Dedicada"
          description="No transporte de carga dedicada, o cliente pode utilizar o espaço do veículo em sua totalidade. Sendo assim, após o carregamento da carga, o veículo segue em rota ao destinatário. Existe uma urgência na entrega, tornando-a mais rápida e evitando atrasos."
        />

        <BoxServiços
          icone={<Boxes size={70} className="text-black" />}
          titulo="Carga Fracionada"
          description="Aplicável a despacho de carga de pequeno volume, ultilizando parcialmente a capacidade nominal de carga do veículo transportador."/>

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