import { getCollection, type CollectionEntry } from "astro:content";

export async function getPublishedPosts() {
  const posts = await getCollection("blog", ({ data }) => (import.meta.env.PROD ? !data.draft : true));
  return posts.sort((a, b) => b.data.fecha.valueOf() - a.data.fecha.valueOf());
}

export function estimateReadingTime(body: string): string {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min`;
}

// timeZone UTC a propósito: el frontmatter (fecha: 2026-08-01) se parsea a medianoche
// UTC, así que formatear en la zona local corre la fecha un día hacia atrás en cualquier
// TZ negativa (en Argentina 2026-08-01 se mostraba como "Jul 2026" / 31/07/2026).
const monthShort = new Intl.DateTimeFormat("es-AR", { month: "short", year: "numeric", timeZone: "UTC" });
const dayFmt = new Intl.DateTimeFormat("es-AR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  timeZone: "UTC",
});

export function formatMonth(date: Date): string {
  const s = monthShort.format(date);
  return s.charAt(0).toUpperCase() + s.slice(1).replace(".", "");
}

export function formatDay(date: Date): string {
  return dayFmt.format(date);
}

export function truncate(text: string, max = 160): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max).trimEnd()}…`;
}

export function pickFeatured(posts: CollectionEntry<"blog">[]): CollectionEntry<"blog"> | undefined {
  return posts.find((p) => p.data.destacada) ?? posts[0];
}

export function relatedPosts(
  posts: CollectionEntry<"blog">[],
  current: CollectionEntry<"blog">,
  count = 3
): CollectionEntry<"blog">[] {
  const others = posts.filter((p) => p.id !== current.id);
  const sameCategory = others.filter((p) => p.data.categoria === current.data.categoria);
  const rest = others.filter((p) => p.data.categoria !== current.data.categoria);
  return [...sameCategory, ...rest].slice(0, count);
}
