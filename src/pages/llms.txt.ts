import type { APIRoute } from "astro";
import { getPublishedPosts } from "../utils/blog";
import { homeServicios } from "../data/home-servicios";
import { herramientas } from "../data/home-herramientas";
import { pasos } from "../data/home-proceso";
import { faqs } from "../data/home-faqs";

export const prerender = true;

const stripHtml = (html: string) => html.replace(/<[^>]+>/g, "").trim();

export const GET: APIRoute = async () => {
  const posts = await getPublishedPosts();

  const notas = posts.length
    ? posts
        .map(
          (p) =>
            `- [${p.data.titulo}](https://efedigital.com.ar/blog/${p.id}): ${p.data.metaDescripcion ?? p.data.bajada}`
        )
        .join("\n")
    : "- Todavía no hay notas publicadas.";

  const servicios = homeServicios.map((s) => `- ${s.titulo}: ${s.desc}`).join("\n");

  const stack = herramientas.map((h) => `- ${h.grupo}: ${h.items}`).join("\n");

  const proceso = pasos.map((p, i) => `${i + 1}. ${p.titulo} (${p.plazo}): ${p.desc}`).join("\n");

  const preguntas = faqs.map((f) => `### ${f.pregunta}\n${stripHtml(f.respuesta)}`).join("\n\n");

  const body = `# efedigital

> Estudio chico de desarrollo web, e-commerce y automatización con IA para negocios de Argentina y el resto del mundo. Sitios y tiendas en WordPress/WooCommerce, automatizaciones con n8n, y auditorías técnicas de SEO, GEO y AEO para que el sitio sea legible tanto por buscadores como por motores de IA (ChatGPT, Gemini, Claude, Perplexity).

## Empresa
- [Inicio](https://efedigital.com.ar/): servicios, proceso de trabajo, stack técnico y preguntas frecuentes.
- [Contacto](https://efedigital.com.ar/contacto): formulario de contacto, email y WhatsApp.

## Servicios
${servicios}

## Enfoque y stack técnico
${stack}

No somos una agencia de SEO, GEO ni AEO: nos ocupamos de la parte técnica para que el sitio sea rápido, rastreable y citable. La estrategia y el contenido quedan del lado del cliente.

## Cómo trabajamos
${proceso}

## Preguntas frecuentes
${preguntas}

## Blog
${notas}

## Datos de contacto
- Ubicación: Posadas, Misiones, Argentina (atendemos remoto en toda Argentina y el exterior)
- Email: claudioefe@icloud.com
- WhatsApp: +54 9 376 4279444
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
