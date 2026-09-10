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

const monthShort = new Intl.DateTimeFormat("es-AR", { month: "short", year: "numeric" });
const dayFmt = new Intl.DateTimeFormat("es-AR", { day: "2-digit", month: "2-digit", year: "numeric" });

export function formatMonth(date: Date): string {
  const s = monthShort.format(date);
  return s.charAt(0).toUpperCase() + s.slice(1).replace(".", "");
}

export function formatDay(date: Date): string {
  return dayFmt.format(date);
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
