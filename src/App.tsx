import { Header } from "./components/Header";
import { HeroModern } from "./components/HeroModern";
import { ServicesSection } from "./components/ServicesSection";
import { ProblemSection } from "./components/ProblemSection";
import { PricingSection } from "./components/PricingSection";
import { ProcessSection } from "./components/ProcessSection";
import { Footer } from "./components/Footer";

export default function App() {
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
        <HeroModern />
        <ServicesSection />
        <ProblemSection />
        <ProcessSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
