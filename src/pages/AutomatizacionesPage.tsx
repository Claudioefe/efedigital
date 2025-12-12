import { useEffect } from "react";
import { Automatizaciones } from "../components/servicios/automatizaciones";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function AutomatizacionesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div
      className="bg-[#0a0a0a] text-white"
      style={{
        scrollBehavior: "smooth",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <Header />
      <main>
        <Automatizaciones />
      </main>
      <Footer />
    </div>
  );
}
