import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import { AutomatizacionesPage } from "./pages/AutomatizacionesPage.tsx";
import ServiciosPage from "./pages/ServiciosPage.tsx";
import DesarrolloWebPage from "./pages/DesarrolloWebPage.tsx";
import ContactoPage from "./pages/ContactoPage.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/servicios" element={<ServiciosPage />} />
      <Route
        path="/servicios/automatizaciones"
        element={<AutomatizacionesPage />}
      />
      <Route path="/servicios/desarrollo-web" element={<DesarrolloWebPage />} />
      <Route path="/contacto" element={<ContactoPage />} />
    </Routes>
  </BrowserRouter>
);
