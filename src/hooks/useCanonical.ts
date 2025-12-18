import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://efedigital.com.ar";

/**
 * Hook para actualizar dinámicamente la etiqueta canónica y meta tags
 * según la ruta actual de la aplicación
 */
export function useCanonical() {
  const location = useLocation();

  useEffect(() => {
    // Construir la URL canónica completa
    const canonicalUrl = `${BASE_URL}${location.pathname}`;

    // Obtener o crear el elemento canonical
    let canonicalLink = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement;

    if (!canonicalLink) {
      // Si no existe, crearlo
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }

    // Actualizar la URL canónica
    canonicalLink.setAttribute("href", canonicalUrl);

    // Actualizar meta tags de Open Graph
    updateMetaTag("property", "og:url", canonicalUrl);

    // Actualizar meta tags de Twitter
    updateMetaTag("name", "twitter:url", canonicalUrl);
  }, [location.pathname]);
}

/**
 * Función auxiliar para actualizar o crear meta tags
 */
function updateMetaTag(
  attribute: "property" | "name",
  value: string,
  content: string
) {
  let metaTag = document.querySelector(
    `meta[${attribute}="${value}"]`
  ) as HTMLMetaElement;

  if (!metaTag) {
    metaTag = document.createElement("meta");
    metaTag.setAttribute(attribute, value);
    document.head.appendChild(metaTag);
  }

  metaTag.setAttribute("content", content);
}
