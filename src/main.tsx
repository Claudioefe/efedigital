import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import App from "./App.tsx";
import "./index.css";

// Lazy load pages for better code splitting
const ServiciosPage = lazy(() => import("./pages/ServiciosPage.tsx"));
const AutomatizacionesPage = lazy(
  () => import("./pages/AutomatizacionesPage.tsx")
);
const DesarrolloWebPage = lazy(() => import("./pages/DesarrolloWebPage.tsx"));
const ContactoPage = lazy(() => import("./pages/ContactoPage.tsx"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="text-white">Cargando...</div>
  </div>
);

// Global AI citation tracker for text fragments (#:~:text=...)
const AiCitationTracker = () => {
  const location = useLocation();

  useEffect(() => {
    try {
      // Intentamos obtener la URL original de navegación (incluye fragmentos que el navegador pueda limpiar)
      const navEntries = performance.getEntriesByType(
        "navigation",
      ) as PerformanceNavigationTiming[];
      const lastNav = navEntries[navEntries.length - 1];

      const sourceUrl =
        lastNav && typeof lastNav.name === "string" && lastNav.name.includes("#:~:text=")
          ? lastNav.name
          : window.location.href;

      const aiMatch = sourceUrl.match(/#:~:text=([^&]+)/);

      if (aiMatch) {
        const decodedText = decodeURIComponent(aiMatch[1].replace(/\+/g, " "));

        if (typeof window.gtag === "function") {
          console.log("✅ [React Audit] IA Citation enviada:", decodedText);

          window.gtag("event", "ai_citation_detected", {
            citation_text: decodedText.substring(0, 100),
            debug_mode: true,
          });
        }
      }
    } catch (error) {
      // En caso de que performance API no esté disponible o falle, no rompemos la app
      console.error("[AI Citation Tracker] Error al procesar fragmento de IA:", error);
    }
  }, [location]);

  return null;
};

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AiCitationTracker />
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route
          path="/servicios/automatizaciones"
          element={<AutomatizacionesPage />}
        />
        <Route
          path="/servicios/desarrollo-web"
          element={<DesarrolloWebPage />}
        />
        <Route path="/contacto" element={<ContactoPage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
