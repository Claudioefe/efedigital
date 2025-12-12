import { useEffect } from "react";
import { Header } from "../components/Header";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";

export default function ContactoPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="bg-[#0a0a0a]">
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
}
