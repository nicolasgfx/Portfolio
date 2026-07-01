/*
 * Portfolio gallery — data-driven, dependency-free.
 *
 * Every render's metadata lives in the RENDERS array below. The gallery grid,
 * the lightbox, and the credits section are all built from it, so adding a new
 * render (or Kroken's missing image) means editing this one array.
 *
 * License fields are deliberately explicit — this portfolio reproduces scenes
 * and models made by other artists, so accurate attribution is a requirement,
 * not decoration. See CREDITS_INTRO / DISCLAIMERS below.
 */

const RENDERS = [
  {
    file: "images/bistro_vespa.png",
    title: "Bistro — Vespa",
    scene:
      "A vintage Vespa parked on a cobblestone street outside a Parisian café at night.",
    author: "Amazon Lumberyard",
    source: "NVIDIA ORCA",
    sourceUrl: "https://developer.nvidia.com/orca/amazon-lumberyard-bistro",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    notes:
      'Scene "Amazon Lumberyard Bistro", pbrt-v4 port via github.com/mmp/pbrt-v4-scenes.',
  },
  {
    file: "images/zeroday.png",
    title: "Zero-Day",
    scene:
      "Neon-lit sci-fi corridor from Beeple's short film, a classic global-illumination stress test.",
    author: "Mike Winkelmann (Beeple)",
    source: "beeple-crap.com/resources",
    sourceUrl: "https://www.beeple-crap.com/resources",
    license: "Free for any use (no attribution required)",
    licenseUrl: "https://www.beeple-crap.com/resources",
    notes:
      "Released by the author for any commercial or non-commercial use; credited here voluntarily. Also available via NVIDIA ORCA under CC BY 4.0.",
  },
  {
    file: "images/hornet.png",
    title: "Hornet — fan art",
    scene:
      "Character study lit with a single warm key and a looping light-trail, rendered from a fan-made 3D model.",
    author: "dark_igorek",
    source: "Sketchfab",
    sourceUrl:
      "https://sketchfab.com/3d-models/silksong-hornet-fanart-57d431b977c841ef8c117af82f109890",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    fanart: true,
    notes:
      'Unofficial fan art. Model "Silksong || Hornet Fanart" by dark_igorek. The character Hornet and Hollow Knight: Silksong are trademarks / © Team Cherry — see disclaimer below.',
  },
  {
    file: "images/bistro_cafe.png",
    title: "Bistro — Café",
    scene: "The café terrace of the Lumberyard Bistro, awnings and warm interior light.",
    author: "Amazon Lumberyard",
    source: "NVIDIA ORCA",
    sourceUrl: "https://developer.nvidia.com/orca/amazon-lumberyard-bistro",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    notes:
      'Scene "Amazon Lumberyard Bistro", pbrt-v4 port via github.com/mmp/pbrt-v4-scenes.',
  },
  {
    file: "images/classroom.png",
    title: "Classroom",
    scene: "The well-known Blender classroom benchmark scene, daylight through the blinds.",
    author: "Christophe Seux",
    source: "Blender Demo Files",
    sourceUrl: "https://www.blender.org/download/demo-files/",
    license: "CC0 1.0 (Public Domain)",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    notes: "No attribution required under CC0; credited here voluntarily.",
  },
  {
    file: "images/monster_under_bed.png",
    title: "Monster Under the Bed",
    scene: "A stylized creature peering out from beneath a bed — a subsurface-scattering demo.",
    author: "Metin Seven",
    source: "Blender Demo Files",
    sourceUrl: "https://www.blender.org/download/demo-files/",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    notes:
      "3D scene by Metin Seven (metinseven.nl), based on 2D concept art by Blake Stevenson.",
  },
  {
    file: "images/staicase.png",
    title: "Staircase",
    scene: "A sunlit wooden staircase — a soft-shadow and indirect-light study.",
    author: "Wig42",
    source: "Blend Swap #14449",
    sourceUrl: "https://blendswap.com/blend/14449",
    license: "CC BY",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    notes:
      'Scene "The Wooden Staircase" by Wig42. Confirm the exact CC-BY version shown on the Blend Swap page.',
  },
  {
    file: "images/bistro_le_chevalier.png",
    title: "Bistro — Le Chevalier",
    scene: "A shopfront corner of the Lumberyard Bistro under evening light.",
    author: "Amazon Lumberyard",
    source: "NVIDIA ORCA",
    sourceUrl: "https://developer.nvidia.com/orca/amazon-lumberyard-bistro",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    notes:
      'Scene "Amazon Lumberyard Bistro", pbrt-v4 port via github.com/mmp/pbrt-v4-scenes.',
  },
  {
    file: "images/kroken.png",
    title: "Kroken",
    scene: "An interior-design scene with a Kroken easy chair — coming soon.",
    author: "Angelo Ferretti / Lucy Dreams",
    source: "lucydreams.it",
    sourceUrl: "https://www.lucydreams.it/kroken/",
    license: "CC BY-ND 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-nd/4.0/",
    comingSoon: true,
    notes:
      "⚠ NoDerivatives: a render may count as a derivative work. Confirm the license permits it (or obtain permission) before publishing this image. pbrt-v4 scene via github.com/mmp/pbrt-v4-scenes.",
  },
];

const CREDITS_INTRO =
  "All images here are renders I produced with my own path tracer. The underlying 3D scenes and models were created by the artists credited below and used under the stated licenses; each render is a new image derived from those assets. Trademarks and characters are the property of their respective owners.";

/* ---------- rendering helpers ---------- */

function el(tag, props = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(props).forEach(([k, v]) => {
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else if (k === "text") node.textContent = v;
    else node.setAttribute(k, v);
  });
  (Array.isArray(children) ? children : [children]).forEach((c) => {
    if (c) node.append(c);
  });
  return node;
}

function creditLine(r) {
  // "Title" by Author — Source (link) — License (link)
  const frag = document.createDocumentFragment();
  frag.append(el("strong", { text: r.title }));
  frag.append(document.createTextNode(` by ${r.author} — `));
  frag.append(el("a", { href: r.sourceUrl, target: "_blank", rel: "noopener", text: r.source }));
  frag.append(document.createTextNode(" — "));
  frag.append(el("a", { href: r.licenseUrl, target: "_blank", rel: "noopener", text: r.license }));
  if (r.notes) {
    frag.append(el("span", { class: "credit-note", text: " " + r.notes }));
  }
  return frag;
}

/* ---------- gallery grid ---------- */

function buildGallery() {
  const grid = document.getElementById("gallery");
  RENDERS.forEach((r, i) => {
    const card = el("article", {
      class: "card" + (r.comingSoon ? " card--soon" : ""),
    });

    if (r.comingSoon) {
      card.append(el("div", { class: "card__placeholder", text: "Coming soon" }));
    } else {
      const img = el("img", {
        src: r.file,
        alt: `${r.title} — path-traced render. ${r.scene}`,
        loading: "lazy",
        decoding: "async",
      });
      card.append(img);
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", `Open ${r.title} in full size`);
      card.addEventListener("click", () => openLightbox(i));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(i);
        }
      });
    }

    const meta = el("div", { class: "card__meta" }, [
      el("h3", { class: "card__title", text: r.title }),
      el("p", { class: "card__source" }, [creditLineShort(r)]),
    ]);
    card.append(meta);
    grid.append(card);
  });
}

function creditLineShort(r) {
  // Compact source + license shown on the card.
  const frag = document.createDocumentFragment();
  frag.append(el("a", { href: r.sourceUrl, target: "_blank", rel: "noopener", text: r.source }));
  frag.append(document.createTextNode(" · "));
  frag.append(el("a", { href: r.licenseUrl, target: "_blank", rel: "noopener", text: r.license }));
  frag.append(document.createTextNode(` · ${r.author}`));
  return frag;
}

/* ---------- credits section ---------- */

function buildCredits() {
  const list = document.getElementById("credits-list");
  RENDERS.forEach((r) => {
    list.append(el("li", { class: r.fanart ? "credit--fanart" : "" }, [creditLine(r)]));
  });
}

/* ---------- lightbox ---------- */

let current = -1;
const openable = () => RENDERS.map((r, i) => (r.comingSoon ? -1 : i)).filter((i) => i >= 0);

function openLightbox(i) {
  current = i;
  renderLightbox();
  const lb = document.getElementById("lightbox");
  lb.classList.add("open");
  lb.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("lb-close").focus();
}

function closeLightbox() {
  const lb = document.getElementById("lightbox");
  lb.classList.remove("open");
  lb.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (current >= 0) {
    const card = document.querySelectorAll(".card")[current];
    if (card) card.focus();
  }
  current = -1;
}

function step(dir) {
  const list = openable();
  const pos = list.indexOf(current);
  if (pos === -1) return;
  current = list[(pos + dir + list.length) % list.length];
  renderLightbox();
}

function renderLightbox() {
  const r = RENDERS[current];
  document.getElementById("lb-img").src = r.file;
  document.getElementById("lb-img").alt = `${r.title} — full-size render`;
  document.getElementById("lb-title").textContent = r.title;
  document.getElementById("lb-scene").textContent = r.scene;
  const credit = document.getElementById("lb-credit");
  credit.textContent = "";
  credit.append(creditLine(r));
}

function initLightbox() {
  document.getElementById("lb-close").addEventListener("click", closeLightbox);
  document.getElementById("lb-prev").addEventListener("click", () => step(-1));
  document.getElementById("lb-next").addEventListener("click", () => step(1));
  document.getElementById("lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (current < 0) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
  });
}

/* ---------- boot ---------- */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("credits-intro").textContent = CREDITS_INTRO;
  document.getElementById("year").textContent = "2026";
  buildGallery();
  buildCredits();
  initLightbox();
});
