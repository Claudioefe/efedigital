import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    titulo: z.string(),
    bajada: z.string(),
    // Para SEO cuando la bajada visible es muy larga como snippet. Si falta, se usa la bajada.
    metaDescripcion: z.string().max(160).optional(),
    categoria: z.string(),
    fecha: z.date(),
    actualizada: z.date().optional(),
    destacada: z.boolean().default(false),
    imagen: z.string().optional(),
    slotLabel: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
