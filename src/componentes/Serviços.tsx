import { Truck, Boxes, Warehouse } from "lucide-react";
import BoxServiços from "./BoxServiços";

export function Serviços() {
  return (
    <div className="w-[90%] max-w-7xl mx-auto p-4 text-gray-900">
      <div>
        <h1></h1>
        <h1></h1>
      </div>

      <div className="flex justify-between">
        <BoxServiços
          icone={<Truck size={40} className="text-blue-600" />}
          titulo="Carga Dedicada"
          description="Carga exclusiva, com entrega rápida e direta ao destinatário."
        />

        <BoxServiços
          icone={<Boxes size={40} className="text-blue-600" />}
          titulo="Carga Fracionada"
          description="Cargas de pequeno volume com uso parcial do veículo."
        />

        <BoxServiços
          icone={<Warehouse size={40} className="text-blue-600" />}
          titulo="Especiais"
          description="Ideal para embarques que ultrapassam a capacidade do transportador."
        />
      </div>
    </div>
  );
}

export default Serviços;