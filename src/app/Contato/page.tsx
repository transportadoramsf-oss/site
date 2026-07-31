import BoxContato from "@/componentes/BoxContato";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Contatos() {
  return (
    <div className="flex flex-col flex-1 bg-gray-100 text-gray-900 border-t border-gray-300">
      <div className="flex gap-8 w-[90%] max-w-7xl mx-auto items-stretch">
        <div className="flex flex-col justify-center p-6 gap-2">
          <div className="flex justify-center p-2">
            <h1 className="text-lg text-gray-800 font-bold py-0.5 px-2 border border-gray-100 rounded-3xl shadow-[0_1px_10px_#00008B]">CONTATO</h1>
          </div>
          <div>
            <h1 className="text-4xl font-semibold pb-2">Nossos canais de atendimento</h1>
            <p className="text-lg">
              Escolha o melhor canal para falar com a nossa equipe.
              <br />
              Será um prazer atender você.
            </p>
          </div>
          
          <BoxContato
            icone={<Phone size={30} />}
            titulo="Telefone"
            href={`tel:${process.env.NEXT_PUBLIC_TELEFONE}`}
            contato={process.env.NEXT_PUBLIC_TELEFONE!}
            description="Segunda à Sexta: 8h às 18h."
          />

          <BoxContato
            icone={<FaWhatsapp size={30} />}
            titulo="WhatsApp"
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
            contato={process.env.NEXT_PUBLIC_WHATSAPP!}
            description="Respostas rapidas durante o horario comercial."
          />

          <BoxContato
            icone={<Mail size={30} />}
            titulo="E-mail"
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
            contato={process.env.NEXT_PUBLIC_EMAIL!}
            description="Respondemos em ate 24h."
          />

          <BoxContato
            icone={<MapPin size={30} />}
            titulo="Endereço"
            href="https://www.google.com/maps?ll=-20.755364,-42.877369&z=15&t=m&hl=pt-BR&gl=BR&mapclient=embed"
            contato={process.env.NEXT_PUBLIC_ENDERECO!}
            description={process.env.NEXT_PUBLIC_SUBENDERECO!}
          />
        </div>

        <div className="relative flex-1 p-6">
          <iframe
            src={process.env.NEXT_PUBLIC_MAPS!}
            className="w-full h-full rounded-xl shadow-xl transition-shadow duration-300 hover:shadow-[0_1px_10px_#00008B]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <div className="absolute top-8 right-10 bg-white rounded-xl p-4 shadow-xl">
            <h2 className="font-bold">MSF Consultoria & Logistica</h2>
            <p>Viçosa - MG</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contatos;