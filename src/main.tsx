import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
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

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
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
