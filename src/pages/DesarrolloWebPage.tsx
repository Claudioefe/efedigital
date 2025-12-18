import { useEffect } from "react";
import { DesarrolloWeb } from "../components/servicios/desarrolloWeb";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useCanonical } from "../hooks/useCanonical";

export default function DesarrolloWebPage() {
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
        <DesarrolloWeb />
      </main>
      <Footer />
    </div>
  );
}
