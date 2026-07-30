import Link from "next/link";

export function Hero() {
    return (
        <section 
                className="relative w-[90%] max-w-7xl mx-auto bg-cover bg-center p-8"
                style={{ backgroundImage: "url('/backgroundHero.png')" }}>

            <div className="flex flex-col gap-6 py-10">
            <h1 className="lg:text-6xl">Soluções em<br/> transporte que<br/> movem o seu negócio</h1>
            <h1 className="lg:text-xl">transporte seguro, ágil e eficiente para<br/> todo o Brasil. Conte com a (nome da empresa)</h1>
            <Link href="/Contato" className="inline-block w-fit rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-800">Entre em contato</Link>
            </div>
        </section>
    );
}
export default Hero;