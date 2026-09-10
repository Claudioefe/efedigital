declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function trackAiCitation() {
  try {
    const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    const lastNav = navEntries[navEntries.length - 1];

    const sourceUrl =
      lastNav && typeof lastNav.name === "string" && lastNav.name.includes("#:~:text=")
        ? lastNav.name
        : window.location.href;

    const aiMatch = sourceUrl.match(/#:~:text=([^&]+)/);
    if (!aiMatch) return;

    const decodedText = decodeURIComponent(aiMatch[1].replace(/\+/g, " "));

    if (typeof window.gtag === "function") {
      window.gtag("event", "ai_citation_detected", {
        citation_text: decodedText.substring(0, 100),
        debug_mode: true,
      });
    }
  } catch {
    // performance API unavailable or malformed fragment — ignore
  }
}

trackAiCitation();
