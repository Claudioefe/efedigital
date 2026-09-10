import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://efedigital.com.ar",
  integrations: [
    // El sitemap ya emite las URLs con barra final, que es la forma que sirve
    // Netlify y la que declaran los canonical. No hay que reescribirlas.
    sitemap({
      filter: (page) => !page.includes("/servicios"),
    }),
  ],
});
