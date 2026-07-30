import BoxContato from "@/componentes/BoxContato";

export function Contatos() {
    return (
        <div className="flex ">
            <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
                <div>
                    <h1>Nossos canais de atendimento</h1>
                    <p>Escolhao melhor canal para falar com a nossa equipe.<br/>Será um prazer atender você</p>
                </div>
                <BoxContato
                    icone=""
                    titulo="Telefone"
                    href="/"
                    contato="numero"
                    description="aceitamos de x a x horas" />
                <BoxContato
                    icone=""
                    titulo="WhatsApp"
                    href="/"
                    contato="numero"
                    description="aceitamos de x a x horas" />
                <BoxContato
                    icone=""
                    titulo="E-mail"
                    href="/"
                    contato="numero"
                    description="aceitamos de x a x horas" />
                <BoxContato
                    icone=""
                    titulo="Endereço"
                    href="/"
                    contato="numero"
                    description="aceitamos de x a x horas" />
            </div>
            <div>
                <h1>mapa</h1>
            </div>
        </div>
    );
}
export default Contatos;
