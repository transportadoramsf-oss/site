import BoxContato from "@/componentes/BoxContato";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Contatos() {
  return (
    <div className="flex flex-1 bg-gray-100 text-gray-900 border-t border-gray-300">
      <div className="flex gap-8 w-[90%] max-w-7xl mx-auto items-stretch">
        <div className="flex flex-col p-10 gap-3">
          <div>
            <h1 className="text-4xl font-semibold pb-4">Nossos canais de atendimento</h1>
            <p className="text-lg">
              Escolha o melhor canal para falar com a nossa equipe.
              <br />
              Será um prazer atender você.
            </p>
          </div>
          
          <BoxContato
            icone={<Phone size={30} />}
            titulo="Telefone"
            href="/"
            contato="numero"
            description="Aceitamos de x a x horas"
          />

          <BoxContato
            icone={<FaWhatsapp size={30} />}
            titulo="WhatsApp"
            href="/"
            contato="numero"
            description="Aceitamos de x a x horas"
          />

          <BoxContato
            icone={<Mail size={30} />}
            titulo="E-mail"
            href="/"
            contato="numero"
            description="Aceitamos de x a x horas"
          />

          <BoxContato
            icone={<MapPin size={30} />}
            titulo="Endereço"
            href="/"
            contato="numero"
            description="Aceitamos de x a x horas"
          />
        </div>

        <div className="flex-1 p-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10552.54265686552!2d-42.8773689910662!3d-20.75536412583219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1785447872966!5m2!1spt-BR!2sbr"
            className="w-full h-full rounded-xl shadow-2xl shadow-gray-900"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </div>
  );
}

export default Contatos;