import { useEffect } from "react";
import { DesarrolloWeb } from "../components/servicios/desarrolloWeb";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function DesarrolloWebPage() {
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
