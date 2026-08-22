import BoxSobre from "@/componentes/BoxSobre";
import Link from "next/dist/client/link";
import Image from "next/image";
import { CiViewList } from "react-icons/ci";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { IoCheckmarkCircle } from "react-icons/io5";
import { PiTruck } from "react-icons/pi";

export function Sobre() {
    return (
        <section className="flex-1 bg-gray-100 text-gray-900">

            <div className="flex flex-col gap-4 w-full max-w-6xl mx-auto">
                <div 
                    className="relative w-full max-w-6xl mx-auto bg-cover p-6 sm:p-8 text-white min-h-105 sm:h-105 flex flex-col"
                    style={{ backgroundImage: "url('/backgroundHero.png')",
                    backgroundPosition: "center 60%",
                    }}>
                    
                    <div className="flex">
                        <h1 className="text-lg font-bold py-0.5 px-2 border border-gray-100 rounded-3xl shadow-[0_1px_10px_#00008B]">SOBRE NÓS</h1>
                    </div>

                    <div className="flex flex-col gap-3 py-4">
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">Movendo ideias,<br/>entregando soluções.</h1>
                        <h1 className="text-base sm:text-lg lg:text-xl">A MSF Consultoria e Logística foi criada<br/> para oferecer soluções logísticas inteligentes,<br/> com foco em eficiência, segurança e<br/> compromisso com cada cliente.</h1>
                        <Link href="/Contato" className="inline-block w-fit rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-800">Fale conosco</Link>
                    </div>
                </div>

                <div className="flex flex-col gap-4 w-full max-w-6xl mx-auto">
                    <div className="flex flex-col gap-4 w-full max-w-6xl mx-auto">
                        <div className="flex justify-center p-4">
                            <h1 className="text-lg text-gray-800 font-bold py-0.5 px-2 border border-gray-100 rounded-3xl shadow-[0_1px_10px_#00008B]">QUEM SOMOS</h1>
                        </div>
                        <div className="flex flex-col gap-4 items-center text-center">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold pb-2 text-center">
                                Soluções logísticas com propósito
                            </h1>
                            <p className="text-base sm:text-lg text-center">
                                Somos uma empresa que acredita que logística vai muito além do transporte.<br/> É sobre planejamento, organização e pessoas trabalhando juntas para que tudo chegue<br/> ao destino certo, no prazo certo.
                            </p>
                        </div>
                        <div className="flex gap-4 p-6 flex-col md:flex-row">
                            <BoxSobre
                                icone={<PiTruck size={40}  />}
                                titulo="Transporte"
                                description="Transporte de cargas com segurança, pontualidade e compromisso em cada entrega."
                                />
                            
                            <BoxSobre
                                icone={<GiCardboardBoxClosed size={40} />}
                                titulo="Armazenagem"
                                description="Estrutura em expansão para oferecer mais organização e segurança à sua carga."
                                />
                            
                            <BoxSobre
                                icone={<CiViewList size={40} />}
                                titulo="Consultoria"
                                description="Soluções logísticas personalizadas para otimizar processos e reduzir custos."
                                />
                        </div>
                    </div>
                    <div className="bg-blue-100 w-full max-w-6xl mx-auto">
                        <div className="flex p-4 pb-8 gap-4 flex-col md:flex-row">
                            <div className="md:w-2/5 flex flex-col p-2 gap-4">
                                <div className="flex flex-col gap-4">
                                    <div className="flex">
                                        <h1 className="text-lg text-gray-800 font-bold py-0.5 px-2 border border-gray-100 rounded-3xl shadow-[0_1px_10px_#00008B]">EM CONSTRUÇÃO</h1>
                                    </div>

                                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold pb-2">Um novo armazém</h1>

                                    <p className="text-base sm:text-lg">
                                        Estamos construindo um novo armazém para ampliar nossa capacidade de atendimento, com mais estrutura, tecnologia e segurança para melhor receber e cuidar da sua carga.
                                    </p>

                                    <div className="flex flex-col gap-2 p-1">
                                        <div className="flex gap-2 items-center">
                                            <IoCheckmarkCircle size={23} className="text-blue-500"/>
                                            <h1 className="text-sm">Estrutura planejada para atender melhor nossos clientes</h1>
                                        </div>

                                        <div className="flex gap-2 items-center">
                                            <IoCheckmarkCircle size={23} className="text-blue-500"/>
                                            <h1 className="text-sm">Mais organização e segurança para a armazenagem</h1>
                                        </div>

                                        <div className="flex gap-2 items-center">
                                            <IoCheckmarkCircle size={23} className="text-blue-500"/>
                                            <h1 className="text-sm">Investimento contínuo no crescimento da empresa</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-3/5 flex justify-center items-center">
                                <Image
                                    src="/armazem.webp"
                                    alt="Imagem do galpão em construção"
                                    width={2400}
                                    height={1200}
                                    className="rounded-xl w-full max-w-4xl h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Sobre;