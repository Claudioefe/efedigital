import { Servicios } from "../components/servicios";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import { useCanonical } from "../hooks/useCanonical";

export default function ServiciosPage() {
  useCanonical();
  
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
        <Servicios />
      </main>
      <Footer />
    </div>
  );
}
