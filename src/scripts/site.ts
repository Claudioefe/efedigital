// Vanilla port of the interactivity from html/resideño.html's DCLogic class.
// Every init function guards on the elements it needs, so it's safe to run
// unconditionally on every page.

function onReady(fn: () => void) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fn);
  } else {
    fn();
  }
}

function late(fn: () => void, sel: string, tries = 120) {
  const tick = () => {
    if (document.querySelector(sel)) {
      fn();
      return;
    }
    if (tries-- > 0) requestAnimationFrame(tick);
  };
  tick();
}

function initIntro() {
  const root = document.getElementById("efe-intro");
  if (!root) return;
  const heroCorners = Array.from(document.querySelectorAll<HTMLElement>("[data-hero-corner]"));
  const intro = {
    tl: root.querySelector<HTMLElement>('[data-intro-corner="tl"]'),
    tr: root.querySelector<HTMLElement>('[data-intro-corner="tr"]'),
    bl: root.querySelector<HTMLElement>('[data-intro-corner="bl"]'),
    br: root.querySelector<HTMLElement>('[data-intro-corner="br"]'),
  };
  const bg = document.getElementById("efe-intro-bg");
  const flash = document.getElementById("efe-intro-flash");
  const logo = document.getElementById("efe-intro-logo");
  const finish = () => {
    document.documentElement.removeAttribute("data-efe-intro");
    root.style.display = "none";
  };
  if (heroCorners.length < 4 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    finish();
    return;
  }

  document.documentElement.setAttribute("data-efe-intro", "");
  root.style.opacity = "1";
  window.scrollTo(0, 0);

  // Los cuartos de cuadrado arrancan enmarcando el logo animado.
  const box = logo?.getBoundingClientRect();
  const pad = 30;
  const frameL = box ? box.left - pad : window.innerWidth / 2 - 66;
  const frameT = box ? box.top - pad : window.innerHeight / 2 - 66;
  const frameR = box ? box.right + pad - 26 : window.innerWidth / 2 + 40;
  const frameB = box ? box.bottom + pad - 26 : window.innerHeight / 2 + 40;
  const start: Record<string, [number, number]> = {
    tl: [frameL, frameT],
    tr: [frameR, frameT],
    bl: [frameL, frameB],
    br: [frameR, frameB],
  };
  (Object.keys(intro) as Array<keyof typeof intro>).forEach((k) => {
    const el = intro[k];
    if (!el) return;
    el.style.left = start[k][0] + "px";
    el.style.top = start[k][1] + "px";
    el.style.opacity = "0";
    el.style.transition = "opacity .45s ease";
  });

  const timers: ReturnType<typeof setTimeout>[] = [];
  const at = (ms: number, fn: () => void) => timers.push(setTimeout(fn, ms));

  // El logo termina de dibujarse a los ~1.66s (el cursor lima es lo último).
  at(1150, () => {
    (Object.keys(intro) as Array<keyof typeof intro>).forEach((k) => {
      const el = intro[k];
      if (el) el.style.opacity = "1";
    });
  });
  at(1720, () => {
    if (flash) flash.style.opacity = ".35";
    if (logo) logo.style.opacity = "0";
  });
  at(1860, () => {
    if (flash) flash.style.opacity = "0";
  });
  at(1880, () => {
    const targets: Record<string, DOMRect> = {};
    heroCorners.forEach((el) => {
      const r = el.getBoundingClientRect();
      const key = (r.top < window.innerHeight / 2 ? "t" : "b") + (r.left < window.innerWidth / 2 ? "l" : "r");
      targets[key] = r;
    });
    (Object.keys(intro) as Array<keyof typeof intro>).forEach((k) => {
      const el = intro[k];
      const t = targets[k];
      if (!el || !t) return;
      el.style.transition = "left .95s cubic-bezier(.16,1,.3,1), top .95s cubic-bezier(.16,1,.3,1)";
      el.style.left = t.left + "px";
      el.style.top = t.top + "px";
    });
    if (bg) bg.style.opacity = "0";
  });
  at(2880, finish);
}

function initCursor() {
  if (!window.matchMedia("(pointer: fine)").matches) return;
  const ring = document.getElementById("efe-cursor-ring");
  const dot = document.getElementById("efe-cursor-dot");
  if (!ring || !dot) return;
  document.documentElement.setAttribute("data-efe-cursor", "");
  let tx = window.innerWidth / 2;
  let ty = window.innerHeight / 2;
  let rx = tx;
  let ry = ty;
  const move = (e: MouseEvent) => {
    tx = e.clientX;
    ty = e.clientY;
    dot.style.transform = `translate3d(${tx}px,${ty}px,0)`;
    ring.style.opacity = "1";
    dot.style.opacity = "1";
    const target = e.target as HTMLElement;
    const big = !!target.closest?.("a,button,[data-spotlight],input,textarea");
    ring.style.width = big ? "56px" : "34px";
    ring.style.height = big ? "56px" : "34px";
    ring.style.margin = big ? "-28px 0 0 -28px" : "-17px 0 0 -17px";
    ring.style.background = big ? "rgba(245,242,236,.14)" : "transparent";
  };
  const loop = () => {
    rx += (tx - rx) * 0.17;
    ry += (ty - ry) * 0.17;
    ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
    requestAnimationFrame(loop);
  };
  loop();
  window.addEventListener("mousemove", move, { passive: true });
  document.addEventListener("mouseleave", () => {
    ring.style.opacity = "0";
    dot.style.opacity = "0";
  });
}

function initReveals() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("efe-in");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.06 }
  );
  const scan = () =>
    document.querySelectorAll("[data-reveal]:not(.efe-in)").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom <= 0 || r.top < window.innerHeight * 0.92) el.classList.add("efe-in");
      else io.observe(el);
    });
  scan();
  let raf: number | null = null;
  const onScroll = () => {
    if (raf === null)
      raf = requestAnimationFrame(() => {
        raf = null;
        scan();
      });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
}

function initSpotlight() {
  document.querySelectorAll<HTMLElement>("[data-spotlight]").forEach((card) => {
    if (card.dataset.efeSpot) return;
    card.dataset.efeSpot = "1";
    const glow = card.querySelector<HTMLElement>("[data-glow]");
    card.addEventListener(
      "mousemove",
      (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", e.clientX - r.left + "px");
        card.style.setProperty("--my", e.clientY - r.top + "px");
        if (glow) glow.style.opacity = "1";
      },
      { passive: true }
    );
    card.addEventListener("mouseleave", () => {
      if (glow) glow.style.opacity = "0";
    });
  });
}

function initProgress() {
  const bar = document.getElementById("efe-progress");
  if (!bar) return;
  let raf: number | null = null;
  const update = () => {
    raf = null;
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const p = max > 0 ? window.scrollY / max : 0;
    bar.style.width = p * 100 + "%";
    document.documentElement.style.setProperty("--efe-p", p.toFixed(4));
  };
  const onScroll = () => {
    if (raf === null) raf = requestAnimationFrame(update);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
}

function initSplit() {
  const split = () => {
    document.querySelectorAll<HTMLHeadingElement>("section h1, section h2, footer h1, footer h2").forEach((h2) => {
      if (h2.dataset.efeSplit) return;
      h2.dataset.efeSplit = "1";
      const hasRichMarkup = Array.from(h2.childNodes).some(
        (node) => node.nodeType === Node.ELEMENT_NODE && node.nodeName !== "BR"
      );
      if (hasRichMarkup) return;
      const frag = document.createDocumentFragment();
      let n = 0;
      Array.from(h2.childNodes).forEach((node) => {
        if (node.nodeName === "BR") {
          frag.appendChild(node.cloneNode());
          return;
        }
        const words = (node.textContent || "").split(/(\s+)/);
        words.forEach((w) => {
          if (!w.trim()) {
            if (w) frag.appendChild(document.createTextNode(" "));
            return;
          }
          const outer = document.createElement("span");
          outer.style.cssText = "display:inline-block;overflow:hidden;vertical-align:bottom;padding-bottom:.06em";
          const inner = document.createElement("span");
          inner.style.cssText = `display:inline-block;transform:translateY(110%);transition:transform .82s cubic-bezier(.16,1,.3,1) ${n * 70}ms`;
          inner.textContent = w;
          inner.addEventListener(
            "transitionend",
            () => {
              outer.style.overflow = "visible";
            },
            { once: true }
          );
          outer.appendChild(inner);
          frag.appendChild(outer);
          n++;
        });
      });
      h2.textContent = "";
      h2.appendChild(frag);
    });
    playSplit();
  };
  const playSplit = () => {
    document.querySelectorAll<HTMLElement>("[data-efe-split]").forEach((h2) => {
      if (h2.dataset.efePlayed) return;
      const r = h2.getBoundingClientRect();
      if (r.bottom <= 0 || r.top < window.innerHeight * 0.95) {
        h2.dataset.efePlayed = "1";
        h2.querySelectorAll("span > span").forEach((s) => {
          (s as HTMLElement).style.transform = "none";
        });
      }
    });
  };
  split();
  let raf: number | null = null;
  const onScroll = () => {
    if (raf === null)
      raf = requestAnimationFrame(() => {
        raf = null;
        split();
      });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
}

function initParallax() {
  const els = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
  if (!els.length || window.matchMedia("(max-width: 760px)").matches) return;
  let raf: number | null = null;
  const update = () => {
    raf = null;
    const vh = window.innerHeight;
    els.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax || "0.08") || 0.08;
      const r = el.getBoundingClientRect();
      const p = (r.top + r.height / 2 - vh / 2) / vh;
      el.style.translate = `0 ${(-p * speed * 100).toFixed(2)}px`;
    });
  };
  const onScroll = () => {
    if (raf === null) raf = requestAnimationFrame(update);
  };
  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
}

function initHeroTilt() {
  if (!window.matchMedia("(pointer: fine) and (min-width: 900px)").matches) return;
  const hero = document.getElementById("top");
  if (!hero) return;
  const tilt = Array.from(hero.querySelectorAll<HTMLElement>("[data-hero-tilt]"));
  const corners = Array.from(hero.querySelectorAll<HTMLElement>("[data-hero-corner]"));
  let tx = 0,
    ty = 0,
    cx = 0,
    cy = 0;
  const move = (e: MouseEvent) => {
    const r = hero.getBoundingClientRect();
    tx = (e.clientX - (r.left + r.width / 2)) / r.width;
    ty = (e.clientY - (r.top + r.height / 2)) / r.height;
  };
  const loop = () => {
    cx += (tx - cx) * 0.06;
    cy += (ty - cy) * 0.06;
    tilt.forEach((el) => {
      const amt = parseFloat(el.dataset.heroTilt || "10") || 10;
      el.style.transform = `translate3d(${(cx * amt).toFixed(2)}px,${(cy * amt * 0.6).toFixed(2)}px,0)`;
    });
    corners.forEach((el, i) => {
      const s = 18 + i * 3;
      el.style.marginLeft = (cx * s).toFixed(2) + "px";
      el.style.marginTop = (cy * s).toFixed(2) + "px";
    });
    requestAnimationFrame(loop);
  };
  loop();
  hero.addEventListener("mousemove", move, { passive: true });
  hero.addEventListener("mouseleave", () => {
    tx = 0;
    ty = 0;
  });
}

function initScrollEngine() {
  const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hero = document.getElementById("top");
  const heroInner = hero?.querySelector<HTMLElement>(":scope > div:last-child") ?? null;
  const proceso = document.getElementById("proceso");
  const pasos = proceso ? Array.from(proceso.querySelectorAll<HTMLElement>("[data-paso]")) : [];
  const fills = proceso ? Array.from(proceso.querySelectorAll<HTMLElement>("[data-paso-fill]")) : [];

  document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((g) => {
    const sync = g.hasAttribute("data-sync");
    Array.from(g.children)
      .filter((c): c is HTMLElement => c instanceof HTMLElement && c.hasAttribute("data-scroll"))
      .forEach((c, i) => {
        c.dataset.scrollDelay = sync ? "0" : String((i % 3) * 0.06);
      });
  });

  const scrubEls = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll]")).map((el) => {
    let kind = el.dataset.scroll || "";
    if (kind === "slideL") {
      const sibs = Array.from(el.parentNode?.children ?? []).filter(
        (c): c is HTMLElement => c instanceof HTMLElement && c.dataset.scroll === "slideL"
      );
      if (sibs.indexOf(el) % 2 === 1) kind = "slideR";
    }
    const parent = el.parentElement;
    const anchor = parent && parent.hasAttribute("data-sync") ? parent : el;
    return { el, kind, anchor, d: parseFloat(el.dataset.scrollDelay || "0") };
  });
  scrubEls.forEach(({ el, kind }) => {
    el.style.willChange = "transform, opacity";
    if (kind === "tilt" || kind === "slideL" || kind === "slideR")
      el.style.setProperty(
        "transition",
        "translate .45s cubic-bezier(.16,1,.3,1), box-shadow .45s cubic-bezier(.16,1,.3,1), background .45s ease, border-color .45s ease"
      );
  });
  if (reduce) {
    scrubEls.forEach(({ el }) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
  }

  let raf: number | null = null;
  const update = () => {
    raf = null;
    const vh = window.innerHeight;

    if (heroInner && !reduce) {
      const p = clamp(window.scrollY / (vh * 0.9), 0, 1);
      heroInner.style.opacity = (1 - p * 0.95).toFixed(3);
      heroInner.style.scale = (1 - p * 0.14).toFixed(4);
      heroInner.style.filter = p > 0.02 ? `blur(${(p * 6).toFixed(2)}px)` : "none";
    }

    scrubEls.forEach(({ el, kind, anchor, d }) => {
      if (reduce) return;
      const r = (anchor || el).getBoundingClientRect();
      const raw = (vh - r.top) / (vh * 0.72 + r.height * 0.25);
      // Si el elemento ya entra completo en pantalla se considera revelado: en páginas
      // cortas las últimas tarjetas nunca llegaban a scrollear lo suficiente y quedaban
      // atenuadas para siempre, dejando el texto atenuado por debajo del contraste AA.
      const p = r.top >= 0 && r.bottom <= vh ? 1 : clamp(raw - d, 0, 1);
      const e = 1 - Math.pow(1 - p, 3);
      if (kind === "tilt") {
        el.style.transform = `perspective(1100px) rotateX(${((1 - e) * 16).toFixed(2)}deg) translate3d(0,${((1 - e) * 90).toFixed(1)}px,0) scale(${(0.94 + e * 0.06).toFixed(4)})`;
        el.style.opacity = (0.15 + e * 0.85).toFixed(3);
      } else if (kind === "slideL" || kind === "slideR") {
        const dir = kind === "slideL" ? -1 : 1;
        el.style.transform = `translate3d(${(dir * (1 - e) * 140).toFixed(1)}px,0,0)`;
        el.style.opacity = (0.1 + e * 0.9).toFixed(3);
      }
    });

    if (proceso && pasos.length) {
      const rect = proceso.getBoundingClientRect();
      const total = proceso.offsetHeight - vh;
      const p = clamp(-rect.top / (total > 0 ? total : 1), 0, 1);
      const n = pasos.length;
      const raw = p * n * 0.999;
      const idx = Math.min(n - 1, Math.floor(raw));
      const local = raw - idx;
      pasos.forEach((el, i) => {
        const on = i === idx;
        el.style.opacity = on ? "1" : "0";
        el.style.translate = on ? `0 ${(-local * 26).toFixed(1)}px` : i < idx ? "0 -46px" : "0 46px";
        el.style.pointerEvents = on ? "auto" : "none";
      });
      fills.forEach((f, i) => {
        f.style.width = (i < idx ? 100 : i === idx ? local * 100 : 0).toFixed(1) + "%";
      });
    }
  };
  const onScroll = () => {
    if (raf === null) raf = requestAnimationFrame(update);
  };
  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
}

function initThread() {
  const host = document.getElementById("efe-thread");
  if (!host) return;
  const NS = "http://www.w3.org/2000/svg";
  const ids = ["top", "servicios", "proceso", "enfoque", "blog", "faq", "contacto"];
  let path: SVGPathElement | null = null;
  let len = 0;
  let y0 = 0;
  let y1 = 1;
  let nodes: { y: number; ring: SVGCircleElement; dot: SVGCircleElement }[] = [];

  const build = () => {
    host.innerHTML = "";
    nodes = [];
    const secs = ids.map((id) => document.getElementById(id)).filter((s): s is HTMLElement => !!s);
    if (secs.length < 3) return;
    const W = host.clientWidth || window.innerWidth;
    const H = document.documentElement.scrollHeight;
    const narrow = W < 760;
    const xs = narrow ? [0.5, 0.22, 0.78, 0.3, 0.7, 0.24, 0.5] : [0.5, 0.16, 0.84, 0.24, 0.76, 0.18, 0.5];
    const pts = secs.map((s, i) => {
      const r = s.getBoundingClientRect();
      const top = r.top + window.scrollY;
      return [xs[i % xs.length] * W, top + r.height * (i === 0 ? 0.72 : 0.45)] as [number, number];
    });
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("width", String(W));
    svg.setAttribute("height", String(H));
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    svg.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;overflow:visible";
    let d = `M ${pts[0][0]} ${pts[0][1]}`;
    for (let i = 1; i < pts.length; i++) {
      const [px, py] = pts[i - 1];
      const [cx, cy] = pts[i];
      const my = (py + cy) / 2;
      d += ` C ${px} ${my}, ${cx} ${my}, ${cx} ${cy}`;
    }
    const base = document.createElementNS(NS, "path");
    base.setAttribute("d", d);
    base.setAttribute("fill", "none");
    base.setAttribute("stroke", "rgba(245,242,236,.09)");
    base.setAttribute("stroke-width", "1.5");
    path = document.createElementNS(NS, "path");
    path.setAttribute("d", d);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "#D4FF3F");
    path.setAttribute("stroke-width", "1.5");
    path.setAttribute("stroke-linecap", "round");
    svg.append(base, path);
    pts.forEach(([x, y]) => {
      const g = document.createElementNS(NS, "g");
      const ring = document.createElementNS(NS, "circle");
      ring.setAttribute("cx", String(x));
      ring.setAttribute("cy", String(y));
      ring.setAttribute("r", "13");
      ring.setAttribute("fill", "none");
      ring.setAttribute("stroke", "rgba(212,255,63,.35)");
      ring.style.transition = "opacity .45s ease, r .45s cubic-bezier(.16,1,.3,1)";
      ring.style.opacity = "0";
      const dot = document.createElementNS(NS, "circle");
      dot.setAttribute("cx", String(x));
      dot.setAttribute("cy", String(y));
      dot.setAttribute("r", "4");
      dot.setAttribute("fill", "#08080A");
      dot.setAttribute("stroke", "rgba(245,242,236,.28)");
      dot.style.transition = "fill .4s ease, stroke .4s ease";
      g.append(ring, dot);
      svg.appendChild(g);
      nodes.push({ y, ring, dot });
    });
    host.appendChild(svg);
    len = path.getTotalLength();
    path.style.strokeDasharray = String(len);
    path.style.strokeDashoffset = String(len);
    y0 = pts[0][1];
    y1 = pts[pts.length - 1][1];
    update();
  };

  let raf: number | null = null;
  const update = () => {
    raf = null;
    if (!path) return;
    const head = window.scrollY + window.innerHeight * 0.62;
    const p = Math.min(1, Math.max(0, (head - y0) / Math.max(1, y1 - y0)));
    path.style.strokeDashoffset = (len * (1 - p)).toFixed(1);
    nodes.forEach((n) => {
      const on = head >= n.y - 10;
      n.dot.setAttribute("fill", on ? "#D4FF3F" : "#08080A");
      n.dot.setAttribute("stroke", on ? "#D4FF3F" : "rgba(245,242,236,.28)");
      n.ring.style.opacity = on ? "1" : "0";
      n.ring.setAttribute("r", on ? "18" : "13");
    });
  };
  const onScroll = () => {
    if (raf === null) raf = requestAnimationFrame(update);
  };
  build();
  let rt: ReturnType<typeof setTimeout> | null = null;
  const onResize = () => {
    if (rt) clearTimeout(rt);
    rt = setTimeout(build, 180);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);
  [400, 1200, 2600].forEach((ms) => setTimeout(build, ms));
}

onReady(() => {
  initIntro();
  initCursor();
  initReveals();
  initSpotlight();
  late(initProgress, "#efe-progress");
  initSplit();
  initParallax();
  initHeroTilt();
  late(initScrollEngine, "[data-scroll], [data-paso]");
  initThread();
});
