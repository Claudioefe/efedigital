// Mismo número que usa el sitio (src/components/ContactForm.astro). Si cambia allá,
// cambiarlo también acá.
export const WHATSAPP = "5493764997405";

export const wa = (texto: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
