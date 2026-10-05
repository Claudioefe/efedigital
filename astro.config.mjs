import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SERVICIOS_INDEXABLES, SERVICIOS_HUB_INDEXABLE } from "./src/data/site-config.ts";

export default defineConfig({
  site: "https://efedigital.com.ar",
  integrations: [
    // El sitemap ya emite las URLs con barra final, que es la forma que sirve
    // Netlify y la que declaran los canonical. No hay que reescribirlas.
    // Las páginas internas /servicios/* solo entran cuando dejan de ser noindex;
    // el listado /servicios/ entra por su propio interruptor.
    sitemap({
      filter: (page) => {
        if (!page.includes("/servicios")) return true;
        if (SERVICIOS_INDEXABLES) return true;
        return SERVICIOS_HUB_INDEXABLE && new URL(page).pathname === "/servicios/";
      },
    }),
  ],
});
