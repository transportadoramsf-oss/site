import Hero from "@/componentes/Hero";
import Serviços from "@/componentes/Serviços";

export default function Home() {
  return (
    <div className="flex flex-col flex-1  bg-gray-100 ">
      <main className="flex flex-col">
        <Hero/>
        <Serviços/>
      </main>
    </div>
  );
}
