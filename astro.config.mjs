import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://efedigital.com.ar",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/servicios"),
      // Los canonical no llevan barra final (salvo la home). El sitemap tiene que
      // listar la misma forma, si no declara dos URLs distintas por página.
      serialize: (item) => {
        const url = new URL(item.url);
        if (url.pathname !== "/") url.pathname = url.pathname.replace(/\/$/, "");
        return { ...item, url: url.href };
      },
    }),
  ],
});
