import Link from "next/link";

export function Hero() {
    return (
        <section 
                className="relative w-[90%] max-w-7xl mx-auto bg-cover p-8 text-white h-105"
                style={{ backgroundImage: "url('/backgroundHero.png')",
                backgroundPosition: "center 60%",
                 }}>

            <div className="flex flex-col gap-3 py-4">
            <h1 className="lg:text-6xl">Soluções em<br/> transporte que<br/> movem o seu negócio</h1>
            <h1 className="lg:text-xl">Transporte seguro, ágil e eficiente para todo o Brasil.<br/> Conte com a NSF Consultoria e logistica.</h1>
            <Link href="/Contato" className="inline-block w-fit rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-800">Entre em contato</Link>
            </div>
        </section>
    );
}
export default Hero;