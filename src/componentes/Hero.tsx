import Link from "next/link";

export function Hero() {
    return (
        <section 
                className="relative w-full max-w-6xl mx-auto bg-cover p-6 sm:p-8 text-white min-h-105 sm:h-105 flex items-center"
                style={{ backgroundImage: "url('/backgroundHero.png')",
                backgroundPosition: "center 60%",
                 }}>

            <div className="flex flex-col gap-3 py-4">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">Soluções em<br/> transporte que<br/> movem o seu negócio</h1>
            <h1 className="text-base sm:text-lg lg:text-xl">Transporte seguro, ágil e eficiente para todo o Brasil.<br/> Conte com a MSF Consultoria e logistica.</h1>
            <Link href="/Contato" className="inline-block w-fit rounded-lg bg-blue-600 px-5 sm:px-6 py-3 font-semibold text-white transition hover:bg-blue-800">Entre em contato</Link>
            </div>
        </section>
    );
}
export default Hero;