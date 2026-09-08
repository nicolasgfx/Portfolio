/*
 * Portfolio gallery — data-driven, dependency-free.
 *
 * Everything on the page (the overview thumbnail grid, the per-project
 * single-column sections, the credits list, and the lightbox) is built from the
 * PROJECTS array below. Each project groups one or more images that share a
 * scene and credit. To add work, add a project or push an image onto one.
 *
 * License fields are deliberately explicit — this portfolio reproduces scenes
 * and models made by other artists, so accurate attribution is a requirement,
 * not decoration. A project with `kind: "tool"` is my own work (the editor) and
 * carries no third-party credit.
 */

const PROJECTS = [
  {
    id: "editor",
    title: "The editor",
    kind: "tool",
    blurb:
      "Every render here comes out of a path tracer I wrote from scratch — scene management, physically based materials, importance sampling and light transport, all my own code. These are shots of its editor: scene tree, layered material inspector, live viewport, and progressive render output.",
    images: [
      { file: "images/00_editor/2_editor.png" },
      { file: "images/00_editor/4_editor.png" },
    ],
  },
  {
    id: "poolhouse",
    title: "Poolhouse",
    blurb:
      "A modern villa and pool — heavily reworked from a Sketchfab base model, relit and re-dressed for a set of cinematic hero shots.",
    author: "zigurat architecture studio",
    source: "Sketchfab",
    sourceUrl:
      "https://sketchfab.com/3d-models/modern-luxury-villa-house-building-with-pool-0e858284939343cb994233d40a48a20a",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    notes:
      'Base model "Modern luxury villa house building with pool" by zigurat architecture studio, heavily modified by Nicolas Menzel (geometry, materials, lighting, and staging). CC BY 4.0 permits modification with attribution and an indication of changes.',
    images: [
      { file: "images/05_poolhouse/01_Hero_Shot_Grass.png", caption: "Hero — grass" },
      { file: "images/05_poolhouse/02_Hero_Shot_Terrace.png", caption: "Hero — terrace" },
      { file: "images/05_poolhouse/03_Hero_Shot_Inside.png", caption: "Hero — interior" },
      { file: "images/05_poolhouse/04_grade_cinematic.png", caption: "Cinematic grade" },
    ],
  },
  {
    id: "kroken",
    title: "Kroken",
    blurb:
      "A modern interior-design scene — a Kroken easy chair and chaise longue beside a styled shelving wall.",
    author: "Angelo Ferretti / Lucy Dreams",
    source: "lucydreams.it",
    sourceUrl: "https://www.lucydreams.it/kroken/",
    license: "CC BY-ND 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-nd/4.0/",
    notes:
      "The CC BY-ND 4.0 license excludes derivatives like renders, but Angelo Ferretti (Lucy Dreams, the scene's author) granted written permission by email on 2026-07-03 to publish rendered images in this context, subject to the shop's EULA (lucydreams.it/shop/eula-license). pbrt-v4 scene via github.com/mmp/pbrt-v4-scenes.",
    images: [
      { file: "images/06_kroken/Camera_01_Main.png", caption: "Main" },
      { file: "images/06_kroken/Camera_02_Chaise_Longue.png", caption: "Chaise longue" },
      { file: "images/06_kroken/Camera_03_Shelf.png", caption: "Shelf" },
      { file: "images/06_kroken/Camera_04_Shelf_Detail.png", caption: "Shelf detail" },
      { file: "images/06_kroken/Camera_05_Blanket_Detail_Top.png", caption: "Blanket detail — top" },
      { file: "images/06_kroken/Camera_06_Blanket_Detail_Front.png", caption: "Blanket detail — front" },
      { file: "images/06_kroken/Camera_07_Moka_Detail.png", caption: "Moka detail" },
      { file: "images/06_kroken/Camera_08_Outside.png", caption: "Outside" },
    ],
  },
  {
    id: "bistro",
    title: "Bistro",
    blurb:
      "The Amazon Lumberyard Bistro — a Parisian café exterior and interior under warm evening light.",
    author: "Amazon Lumberyard",
    source: "NVIDIA ORCA",
    sourceUrl: "https://developer.nvidia.com/orca/amazon-lumberyard-bistro",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    notes:
      'Scene "Amazon Lumberyard Bistro", pbrt-v4 port via github.com/mmp/pbrt-v4-scenes.',
    images: [
      { file: "images/07_bistro/01_bistro_vespa.png", caption: "Vespa" },
      { file: "images/07_bistro/02_bistro_cafe.png", caption: "Café" },
      { file: "images/07_bistro/03_bistro_le_chevalier.png", caption: "Le Chevalier" },
      { file: "images/07_bistro/04_clay.png", caption: "Clay render" },
    ],
  },
  {
    id: "zeroday",
    title: "Zero-Day",
    blurb:
      "Neon-lit sci-fi corridor from Beeple's short film — a classic global-illumination stress test.",
    author: "Mike Winkelmann (Beeple)",
    source: "beeple-crap.com/resources",
    sourceUrl: "https://www.beeple-crap.com/resources",
    license: "Free for any use (no attribution required)",
    licenseUrl: "https://www.beeple-crap.com/resources",
    notes:
      "Released by the author for any commercial or non-commercial use; credited here voluntarily. Also available via NVIDIA ORCA under CC BY 4.0.",
    images: [
      { file: "images/08_zeroday/zeroday1.png" },
      { file: "images/08_zeroday/zeroday2.png" },
    ],
  },
  {
    id: "bathroom",
    title: "Bathroom",
    blurb:
      "A daylit modern bathroom — reflective tile, chrome fixtures, and soft window light.",
    author: "PHI Archviz",
    source: "Fab",
    sourceUrl: "https://www.fab.com/listings/0a045566-e87c-4c54-927b-b40173523681",
    license: "Fab Standard License",
    licenseUrl: "https://www.fab.com/eula",
    notes:
      'Asset "Bathroom Scene 15" by PHI Archviz, purchased on Fab. The Fab Standard License permits rendered images ("linear" end products) and public display; no attribution required (credited voluntarily), and the underlying 3D asset files are not redistributed.',
    images: [{ file: "images/09_bathroom/bathroom.png" }],
  },
  {
    id: "monster",
    title: "Monster Under the Bed",
    blurb:
      "A stylized creature peering out from beneath a bed — a subsurface-scattering study.",
    author: "Metin Seven",
    source: "Blender Demo Files",
    sourceUrl: "https://www.blender.org/download/demo-files/",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    notes:
      "3D scene by Metin Seven (metinseven.nl), based on 2D concept art by Blake Stevenson.",
    images: [{ file: "images/10_monster_under_bed/monster_under_bed.png" }],
  },
  {
    id: "classroom",
    title: "Classroom",
    blurb:
      "The well-known Blender classroom benchmark scene — daylight through the blinds.",
    author: "Christophe Seux",
    source: "Blender Demo Files",
    sourceUrl: "https://www.blender.org/download/demo-files/",
    license: "CC0 1.0 (Public Domain)",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    notes: "No attribution required under CC0; credited here voluntarily.",
    images: [{ file: "images/11_classroom/classroom.png" }],
  },
  {
    id: "gelatinouscube",
    title: "Gelatinous Cube — fan art",
    blurb:
      "A translucent ooze settled in a vine-grown stone ruin, a helmeted skeleton with its sword, shield and a few spent arrows suspended mid-digestion inside — a study in refraction, absorption and volumetric scattering. The clay pass drops the jelly and shows what is trapped in it.",
    author: "glenatron",
    source: "Sketchfab",
    sourceUrl:
      "https://sketchfab.com/3d-models/gelatinous-cube-e08385238f4d4b59b012233a9fbdca21",
    license: "CC BY-NC 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-nc/4.0/",
    fanart: true,
    notes:
      'Unofficial fan art. Model "Gelatinous Cube" by glenatron, used under CC BY-NC 4.0 — the NonCommercial term is respected here: this site carries no advertising, sells nothing, and the renders are not licensed or offered for sale. The gelatinous cube is a Dungeons & Dragons monster; D&D is a trademark of Wizards of the Coast — see disclaimer below.',
    images: [
      { file: "images/12_gelatinous_cube/main.png", caption: "Main" },
      { file: "images/12_gelatinous_cube/clay.png", caption: "Clay render" },
    ],
  },
  {
    id: "spaceship",
    title: "4060.b Spaceship",
    blurb:
      "A retro-futurist rocket in 1960s science-fiction styling — polished chrome, a glass bubble canopy over magenta seats, and ribbed thrusters, lit on a plain studio backdrop.",
    author: "thecali",
    source: "Blend Swap #13489",
    sourceUrl: "https://blendswap.com/blend/13489",
    license: "CC0 1.0 (Public Domain)",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    notes:
      'Model "4060.b Spaceship" by thecali. Released into the public domain under CC0 — no attribution required; credited here voluntarily.',
    images: [
      { file: "images/13_spaceship/main.png", caption: "Main" },
      { file: "images/13_spaceship/clay.png", caption: "Clay render" },
    ],
  },
  {
    id: "hornet",
    title: "Hornet — fan art",
    blurb:
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
    images: [{ file: "images/16_hornet/hornet.png" }],
  },
  {
    id: "staircase",
    title: "Staircase",
    blurb: "A sunlit wooden staircase — a soft-shadow and indirect-light study.",
    author: "Wig42",
    source: "Blend Swap #14449",
    sourceUrl: "https://blendswap.com/blend/14449",
    license: "CC BY",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    notes:
      'Scene "The Wooden Staircase" by Wig42. Confirm the exact CC-BY version shown on the Blend Swap page.',
    images: [{ file: "images/other/staicase.png" }],
  },
];

const CREDITS_INTRO =
  "All images here are renders I produced with my own path tracer. The underlying 3D scenes and models were created by the artists credited below and used under the stated licenses; each render is a new image derived from those assets. Trademarks and characters are the property of their respective owners.";

/* A project whose renders have not been dropped in yet carries `draft: true` and
 * stays out of the page entirely — grid, sections and credits alike — so the
 * page never links images that do not exist. Remove the flag to publish it. */
const ACTIVE = PROJECTS.filter((p) => !p.draft);

/* Flat, ordered list of every image with its project — the lightbox and the
 * overview grid share this ordering. */
const FLAT = [];
ACTIVE.forEach((p) => p.images.forEach((img) => FLAT.push({ project: p, img })));

/* ---------- helpers ---------- */

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

function imgTitle(project, img) {
  return img.caption ? `${project.title} — ${img.caption}` : project.title;
}

function creditLine(p) {
  // "Title" by Author — Source (link) — License (link) — notes
  const frag = document.createDocumentFragment();
  frag.append(el("strong", { text: p.title }));
  frag.append(document.createTextNode(` by ${p.author} — `));
  frag.append(el("a", { href: p.sourceUrl, target: "_blank", rel: "noopener", text: p.source }));
  frag.append(document.createTextNode(" — "));
  frag.append(el("a", { href: p.licenseUrl, target: "_blank", rel: "noopener", text: p.license }));
  if (p.notes) frag.append(el("span", { class: "credit-note", text: " " + p.notes }));
  return frag;
}

function creditLineShort(p) {
  // Compact source · license · author shown under a project heading.
  const frag = document.createDocumentFragment();
  frag.append(el("a", { href: p.sourceUrl, target: "_blank", rel: "noopener", text: p.source }));
  frag.append(document.createTextNode(" · "));
  frag.append(el("a", { href: p.licenseUrl, target: "_blank", rel: "noopener", text: p.license }));
  frag.append(document.createTextNode(` · ${p.author}`));
  return frag;
}

/* ---------- overview grid ---------- */

function buildOverview() {
  const grid = document.getElementById("overview");
  FLAT.forEach(({ project, img }, i) => {
    const btn = el(
      "button",
      { class: "thumb", type: "button", "aria-label": `Open ${imgTitle(project, img)} in full size` },
      [el("img", { src: img.file, alt: imgTitle(project, img), loading: "lazy", decoding: "async" })]
    );
    btn.addEventListener("click", () => openLightbox(i));
    grid.append(btn);
  });
}

/* ---------- per-project sections (single column) ---------- */

function buildSections() {
  const wrap = document.getElementById("sections");
  let flatIndex = 0;
  ACTIVE.forEach((p) => {
    const section = el("section", { class: "project", id: `project-${p.id}` });
    section.append(el("h2", { class: "project__title", text: p.title }));
    if (p.blurb) section.append(el("p", { class: "project__blurb", text: p.blurb }));
    if (!p.kind) section.append(el("p", { class: "project__credit" }, [creditLineShort(p)]));

    const images = el("div", { class: "project__images" });
    p.images.forEach((img) => {
      const idx = flatIndex++;
      const btn = el(
        "button",
        { class: "shot__btn", type: "button", "aria-label": `Open ${imgTitle(p, img)} in full size` },
        [el("img", { src: img.file, alt: imgTitle(p, img), loading: "lazy", decoding: "async" })]
      );
      btn.addEventListener("click", () => openLightbox(idx));
      const fig = el("figure", { class: "shot" }, [btn]);
      if (img.caption) fig.append(el("figcaption", { class: "shot__cap", text: img.caption }));
      images.append(fig);
    });
    section.append(images);
    wrap.append(section);
  });
}

/* ---------- credits ---------- */

function buildCredits() {
  const list = document.getElementById("credits-list");
  ACTIVE.filter((p) => !p.kind).forEach((p) => {
    list.append(el("li", { class: p.fanart ? "credit--fanart" : "" }, [creditLine(p)]));
  });
}

/* ---------- lightbox ---------- */

let current = -1;

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
    const thumb = document.querySelectorAll(".thumb")[current];
    if (thumb) thumb.focus();
  }
  current = -1;
}

function step(dir) {
  if (current < 0) return;
  current = (current + dir + FLAT.length) % FLAT.length;
  renderLightbox();
}

function renderLightbox() {
  const { project, img } = FLAT[current];
  document.getElementById("lb-img").src = img.file;
  document.getElementById("lb-img").alt = `${imgTitle(project, img)} — full-size render`;
  document.getElementById("lb-title").textContent = imgTitle(project, img);
  document.getElementById("lb-scene").textContent = project.blurb || "";
  const credit = document.getElementById("lb-credit");
  credit.textContent = "";
  if (project.kind === "tool") {
    credit.textContent = "My own work — path tracer and editor, no third-party assets.";
  } else {
    credit.append(creditLine(project));
  }
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
  buildOverview();
  buildSections();
  buildCredits();
  initLightbox();
});
