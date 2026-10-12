# Portfolio — Path-Traced Renders

Hero renders produced with my path tracer. This repo doubles
as a small gallery site: **[nicolasgfx.github.io/Portfolio](https://nicolasgfx.github.io/Portfolio/)**,
with the renderer's architecture diagrams at
[#architecture](https://nicolasgfx.github.io/Portfolio/#architecture).

**Click any image to open it at full resolution.**

---

## Contents

**[Editor](#editor)** — the path tracer behind every image below

**Renders** —
[Poolhouse](#poolhouse) ·
[Watercolor](#watercolor) ·
[Kroken](#kroken) ·
[Bistro](#bistro) ·
[Zero-Day](#zero-day) ·
[Bathroom](#bathroom) ·
[Monster Under the Bed](#monster-under-the-bed) ·
[Classroom](#classroom) ·
[Transparent Machines](#transparent-machines) ·
[MaterialX Lion](#materialx-lion) ·
[The Old View](#the-old-view) ·
[Studies](#studies) (Hornet, Gelatinous Cube, Staircase, Spaceship)

**[The renderer](#the-renderer)** — what is in it, and a
[case study](#case-study-retiring-the-megakernel) with the measurements behind it

**[Credits &amp; licenses](#credits--licenses)** —
[Fan-art notice (Hornet)](#fan-art-notice-hornet) ·
[Fan-art notice (Gelatinous Cube)](#fan-art-notice-gelatinous-cube) ·
[Kroken — NoDerivatives](#kroken--noderivatives-permission-granted) ·
[Watercolor — Lucy Dreams EULA](#watercolor--lucy-dreams-eula-purchased) ·
[Bathroom — Fab Standard License](#bathroom--fab-standard-license) ·
[MaterialX Lion — ASWF Digital Assets License](#materialx-lion--aswf-digital-assets-license) ·
[The Old View — Blender comparison](#the-old-view--blender-comparison) ·
[Rights holders](#rights-holders)

---

## Editor

Every render here — apart from the Blender reference images in
[The Old View](#the-old-view) — comes out of a spectral GPU path tracer developed
under my technical direction, with an AI-assisted implementation: I set the
architecture and the acceptance criteria, and changes are graded against
measurements and tests. Below are shots of its editor: scene tree, layered
material inspector, live viewport, and progressive render output.

---

<table>
  <tr>
    <td width="50%" align="center"><a href="images/00_editor/2_editor.png"><img src="images/00_editor/2_editor.png" width="100%" alt="Editor"></a></td>
    <td width="50%" align="center"><a href="images/00_editor/4_editor.png"><img src="images/00_editor/4_editor.png" width="100%" alt="Editor"></a></td>
  </tr>
</table>

---

## Poolhouse

A modern villa and pool — **heavily reworked by me** from a Sketchfab base model,
relit and re-dressed for a set of cinematic hero shots.

<table>
  <tr>
    <td width="50%" align="center"><a href="images/05_poolhouse/01_Hero_Shot_Grass.png"><img src="images/05_poolhouse/01_Hero_Shot_Grass.png" width="100%" alt="Poolhouse — hero, grass"></a><br><sub><b>Hero — grass</b></sub></td>
    <td width="50%" align="center"><a href="images/05_poolhouse/02_Hero_Shot_Terrace.png"><img src="images/05_poolhouse/02_Hero_Shot_Terrace.png" width="100%" alt="Poolhouse — hero, terrace"></a><br><sub><b>Hero — terrace</b></sub></td>
  </tr>
  <tr>
    <td width="50%" align="center"><a href="images/05_poolhouse/03_Hero_Shot_Inside.png"><img src="images/05_poolhouse/03_Hero_Shot_Inside.png" width="100%" alt="Poolhouse — hero, interior"></a><br><sub><b>Hero — interior</b></sub></td>
    <td width="50%" align="center"><a href="images/05_poolhouse/04_grade_cinematic.png"><img src="images/05_poolhouse/04_grade_cinematic.png" width="100%" alt="Poolhouse — cinematic grade"></a><br><sub><b>Cinematic grade</b></sub></td>
  </tr>
</table>

> Base model: *\*Modern luxury villa house building with pool\** by zigurat
> architecture studio, licensed
> [CC BY 4.0](https\://creativecommons.org/licenses/by/4.0/) and heavily modified
> here (geometry, materials, lighting, staging). CC BY permits modification with
> attribution and an indication of changes.

---

## Watercolor

A sunlit attic painting studio — skylights, a worktable strewn with watercolor
paints, brushes and sketches, an easel and a gallery wall.

<table>
  <tr>
    <td colspan="3" align="center"><a href="images/01_watercolor/camera-1.png"><img src="images/01_watercolor/camera-1.png" width="100%" alt="Watercolor — studio"></a><br><sub><b>Studio</b></sub></td>
  </tr>
  <tr>
    <td width="33%" align="center"><a href="images/01_watercolor/camera-13.png"><img src="images/01_watercolor/camera-13.png" width="100%" alt="Watercolor — worktable"></a><br><sub><b>Worktable</b></sub></td>
    <td width="33%" align="center"><a href="images/01_watercolor/camera-9.png"><img src="images/01_watercolor/camera-9.png" width="100%" alt="Watercolor — easel and trolley"></a><br><sub><b>Easel and trolley</b></sub></td>
    <td width="33%" align="center"><a href="images/01_watercolor/camera-10.png"><img src="images/01_watercolor/camera-10.png" width="100%" alt="Watercolor — gallery wall"></a><br><sub><b>Gallery wall</b></sub></td>
  </tr>
  <tr>
    <td width="33%" align="center"><a href="images/01_watercolor/camera-3.png"><img src="images/01_watercolor/camera-3.png" width="100%" alt="Watercolor — drawer cabinet"></a><br><sub><b>Drawer cabinet</b></sub></td>
    <td width="33%" align="center"><a href="images/01_watercolor/camera-7.png"><img src="images/01_watercolor/camera-7.png" width="100%" alt="Watercolor — paint table"></a><br><sub><b>Paint table</b></sub></td>
    <td width="33%" align="center"><a href="images/01_watercolor/camera-12.png"><img src="images/01_watercolor/camera-12.png" width="100%" alt="Watercolor — paints from above"></a><br><sub><b>Paints from above</b></sub></td>
  </tr>
  <tr>
    <td width="33%" align="center"><a href="images/01_watercolor/camera-6.png"><img src="images/01_watercolor/camera-6.png" width="100%" alt="Watercolor — watercolor sketch"></a><br><sub><b>Watercolor sketch</b></sub></td>
    <td width="33%" align="center"><a href="images/01_watercolor/camera-8.png"><img src="images/01_watercolor/camera-8.png" width="100%" alt="Watercolor — pens and swatches"></a><br><sub><b>Pens and swatches</b></sub></td>
    <td width="33%" align="center"><a href="images/01_watercolor/camera-16.png"><img src="images/01_watercolor/camera-16.png" width="100%" alt="Watercolor — wicker chair"></a><br><sub><b>Wicker chair</b></sub></td>
  </tr>
</table>

> Scene: *\*Watercolor room interior scene\** by Angelo Ferretti / Lucy Dreams,
> purchased under the [Lucy Dreams EULA](https\://www.lucydreams.it/shop/eula-license/);
> rendered from its pbrt-v4 port with a replaced environment map from
> [Poly Haven](https\://polyhaven.com/hdris) ([CC0](https\://creativecommons.org/publicdomain/zero/1.0/)) (see the
> [note](#watercolor--lucy-dreams-eula-purchased) below).

---

## Kroken

A modern interior-design scene — a Kroken easy chair and chaise longue beside a
styled shelving wall.

<table>
  <tr>
    <td width="50%" align="center"><a href="images/06_kroken/Camera_01_Main_001.png"><img src="images/06_kroken/Camera_01_Main_001.png" width="100%" alt="Kroken — Main"></a><br><sub><b>Main</b></sub></td>
    <td width="50%" align="center"><a href="images/06_kroken/Camera_01b_Main_Clay.png"><img src="images/06_kroken/Camera_01b_Main_Clay.png" width="100%" alt="Kroken — clay render"></a><br><sub><b>Clay render</b></sub></td>
  </tr>
  <tr>
    <td width="50%" align="center"><a href="images/06_kroken/Camera_02_Chaise_Longue_001.png"><img src="images/06_kroken/Camera_02_Chaise_Longue_001.png" width="100%" alt="Kroken — Chaise longue"></a><br><sub><b>Chaise longue</b></sub></td>
    <td width="50%" align="center"><a href="images/06_kroken/Camera_03_Shelf_001.png"><img src="images/06_kroken/Camera_03_Shelf_001.png" width="100%" alt="Kroken — Shelf"></a><br><sub><b>Shelf</b></sub></td>
  </tr>
  <tr>
    <td width="50%" align="center"><a href="images/06_kroken/Camera_04_Shelf_Detail_001.png"><img src="images/06_kroken/Camera_04_Shelf_Detail_001.png" width="100%" alt="Kroken — Shelf detail"></a><br><sub><b>Shelf detail</b></sub></td>
    <td width="50%" align="center"><a href="images/06_kroken/Camera_05_Blanket_Detail_Top_001.png"><img src="images/06_kroken/Camera_05_Blanket_Detail_Top_001.png" width="100%" alt="Kroken — Blanket detail, top"></a><br><sub><b>Blanket detail — top</b></sub></td>
  </tr>
  <tr>
    <td width="50%" align="center"><a href="images/06_kroken/Camera_06_Blanket_Detail_Front_001.png"><img src="images/06_kroken/Camera_06_Blanket_Detail_Front_001.png" width="100%" alt="Kroken — Blanket detail, front"></a><br><sub><b>Blanket detail — front</b></sub></td>
    <td width="50%" align="center"><a href="images/06_kroken/Camera_07_Moka_Detail_001.png"><img src="images/06_kroken/Camera_07_Moka_Detail_001.png" width="100%" alt="Kroken — Moka detail"></a><br><sub><b>Moka detail</b></sub></td>
  </tr>
  <tr>
    <td width="50%" align="center"><a href="images/06_kroken/Camera_08_dispenser.png"><img src="images/06_kroken/Camera_08_dispenser.png" width="100%" alt="Kroken — Dispenser"></a><br><sub><b>Dispenser</b></sub></td>
    <td width="50%" align="center"><a href="images/06_kroken/Camera_09_red_glasses.png"><img src="images/06_kroken/Camera_09_red_glasses.png" width="100%" alt="Kroken — Red glasses"></a><br><sub><b>Red glasses</b></sub></td>
  </tr>
</table>

> Scene: *\*Kroken\** by Angelo Ferretti / Lucy Dreams, licensed
> [CC BY-ND 4.0](https\://creativecommons.org/licenses/by-nd/4.0/) — published with
> the author's written permission (see the
> [note](#kroken--noderivatives-permission-granted) below).

---

## Bistro

The Amazon Lumberyard Bistro — a Parisian café exterior and interior under warm
evening light.

<table>
  <tr>
    <td width="50%" align="center"><a href="images/07_bistro/01_bistro_vespa.png"><img src="images/07_bistro/01_bistro_vespa.png" width="100%" alt="Bistro — Vespa"></a><br><sub><b>Vespa</b></sub></td>
    <td width="50%" align="center"><a href="images/07_bistro/02_bistro_cafe.png"><img src="images/07_bistro/02_bistro_cafe.png" width="100%" alt="Bistro — Café"></a><br><sub><b>Café</b></sub></td>
  </tr>
  <tr>
    <td width="50%" align="center"><a href="images/07_bistro/03_bistro_le_chevalier.png"><img src="images/07_bistro/03_bistro_le_chevalier.png" width="100%" alt="Bistro — Le Chevalier"></a><br><sub><b>Le Chevalier</b></sub></td>
    <td width="50%" align="center"><a href="images/07_bistro/04_clay.png"><img src="images/07_bistro/04_clay.png" width="100%" alt="Bistro — clay render"></a><br><sub><b>Clay render</b></sub></td>
  </tr>
</table>

---

## Zero-Day

Neon-lit sci-fi corridor from Beeple's short film — a classic global-illumination
stress test.

<table>
  <tr>
    <td width="50%" align="center"><a href="images/08_zeroday/zeroday1.png"><img src="images/08_zeroday/zeroday1.png" width="100%" alt="Zero-Day"></a></td>
    <td width="50%" align="center"><a href="images/08_zeroday/zeroday2.png"><img src="images/08_zeroday/zeroday2.png" width="100%" alt="Zero-Day"></a></td>
  </tr>
</table>

---

## Bathroom

A daylit modern bathroom — reflective tile, chrome fixtures, and soft window
light.

<table>
  <tr>
    <td width="50%" align="center"><a href="images/09_bathroom/bathroom.png"><img src="images/09_bathroom/bathroom.png" width="100%" alt="Bathroom"></a></td>
    <td width="50%"></td>
  </tr>
</table>

---

## Monster Under the Bed

A stylized creature peering out from beneath a bed — a subsurface-scattering
study.

<table>
  <tr>
    <td width="50%" align="center"><a href="images/10_monster_under_bed/monster_under_bed.png"><img src="images/10_monster_under_bed/monster_under_bed.png" width="100%" alt="Monster Under the Bed"></a></td>
    <td width="50%"></td>
  </tr>
</table>

---

## Classroom

The well-known Blender classroom benchmark scene — daylight through the blinds.

<table>
  <tr>
    <td width="50%" align="center"><a href="images/11_classroom/classroom.png"><img src="images/11_classroom/classroom.png" width="100%" alt="Classroom"></a></td>
    <td width="50%"></td>
  </tr>
</table>

---

## Transparent Machines

An intricate machine built entirely from glass, floating against a soft blue
backdrop — nested refractive shells, threads and gears that need dozens of ray
bounces to resolve.

<table>
  <tr>
    <td width="50%" align="center"><a href="images/12_transparent_machines/01_main.png"><img src="images/12_transparent_machines/01_main.png" width="100%" alt="Transparent Machines — Main"></a><br><sub><b>Main</b></sub></td>
    <td width="50%" align="center"><a href="images/12_transparent_machines/02_main.png"><img src="images/12_transparent_machines/02_main.png" width="100%" alt="Transparent Machines — Close-up"></a><br><sub><b>Close-up</b></sub></td>
  </tr>
</table>

---

## MaterialX Lion

A guardian-lion statue on a carved wooden base — a crazed ceramic glaze laid
over gold leaf, built as layered MaterialX BSDFs with 4K–8K UDIM textures. The
close-up goes in on the forepaws, where the cracks in the glaze open onto the
metal underneath. See the [notice](#materialx-lion--aswf-digital-assets-license)
below.

<table>
  <tr>
    <td width="50%" align="center"><a href="images/13_lion/lion1.png"><img src="images/13_lion/lion1.png" width="100%" alt="MaterialX Lion"></a><br><sub><b>Main</b></sub></td>
    <td width="50%" align="center"><a href="images/13_lion/lion2.png"><img src="images/13_lion/lion2.png" width="100%" alt="MaterialX Lion — glaze detail"></a><br><sub><b>Glaze detail</b></sub></td>
  </tr>
</table>

---

## The Old View

A replica of Valley View Mall in Dallas, the 1970s shopping centre that Kane
Pixels' *The Oldest View* made famous. Each row is one camera rendered twice:
**left in Blender 5.1, right in my own path tracer** — both rendered by me from
the same scene. See the [notice](#the-old-view--blender-comparison) below.

<table>
  <tr>
    <td width="50%" align="center"><a href="images/14_the_old_view/01_blender.png"><img src="images/14_the_old_view/01_blender.png" width="100%" alt="The Old View — balcony, Blender 5.1"></a><br><sub><b>Balcony — Blender 5.1</b></sub></td>
    <td width="50%" align="center"><a href="images/14_the_old_view/01_mine.png"><img src="images/14_the_old_view/01_mine.png" width="100%" alt="The Old View — balcony, my path tracer"></a><br><sub><b>Balcony — my path tracer</b></sub></td>
  </tr>
  <tr>
    <td width="50%" align="center"><a href="images/14_the_old_view/02_blender.png"><img src="images/14_the_old_view/02_blender.png" width="100%" alt="The Old View — puppet, Blender 5.1"></a><br><sub><b>Puppet — Blender 5.1</b></sub></td>
    <td width="50%" align="center"><a href="images/14_the_old_view/02_mine.png"><img src="images/14_the_old_view/02_mine.png" width="100%" alt="The Old View — puppet, my path tracer"></a><br><sub><b>Puppet — my path tracer</b></sub></td>
  </tr>
  <tr>
    <td width="50%" align="center"><a href="images/14_the_old_view/03_blender.png"><img src="images/14_the_old_view/03_blender.png" width="100%" alt="The Old View — atrium, Blender 5.1"></a><br><sub><b>Atrium — Blender 5.1</b></sub></td>
    <td width="50%" align="center"><a href="images/14_the_old_view/03_mine.png"><img src="images/14_the_old_view/03_mine.png" width="100%" alt="The Old View — atrium, my path tracer"></a><br><sub><b>Atrium — my path tracer</b></sub></td>
  </tr>
</table>

---

## Studies

Single-image studies, each built around one lighting or material problem.
Widths are matched to each render's aspect ratio so every row shares one height.

<table>
  <tr>
    <td width="64%" align="center"><a href="images/90_studies/01_hornet.png"><img src="images/90_studies/01_hornet.png" width="100%" alt="Hornet — fan art"></a><br><sub><b>Hornet — fan art</b></sub></td>
    <td width="36%" align="center"><a href="images/90_studies/02_gelatinous_cube.png"><img src="images/90_studies/02_gelatinous_cube.png" width="100%" alt="Gelatinous Cube — fan art"></a><br><sub><b>Gelatinous Cube — fan art</b></sub></td>
  </tr>
  <tr>
    <td width="36%" align="center"><a href="images/90_studies/03_staircase.png"><img src="images/90_studies/03_staircase.png" width="100%" alt="Staircase"></a><br><sub><b>Staircase</b></sub></td>
    <td width="64%" align="center"><a href="images/90_studies/04_spaceship.png"><img src="images/90_studies/04_spaceship.png" width="100%" alt="4060.b Spaceship"></a><br><sub><b>4060.b Spaceship</b></sub></td>
  </tr>
</table>

- **Hornet** — character study lit with a single warm key and a looping
  light-trail, rendered from a fan-made 3D model. **Unofficial fan art** — see
  the [notice](#fan-art-notice-hornet) below.
- **Gelatinous Cube** — a translucent ooze settled in a vine-grown stone ruin, a
  helmeted skeleton with its sword, shield and a few spent arrows suspended
  mid-digestion inside — a study in refraction, absorption and volumetric
  scattering. **Unofficial fan art** — see the
  [notice](#fan-art-notice-gelatinous-cube) below.
- **Staircase** — a sunlit wooden staircase; a soft-shadow and indirect-light
  study.
- **4060.b Spaceship** — a retro-futurist rocket in 1960s science-fiction
  styling: polished chrome, a glass bubble canopy over magenta seats, and ribbed
  thrusters, lit on a plain studio backdrop.

---

## The renderer

Four areas of the path tracer behind every render above. Each item is present in
the code today and named with the paper it implements; the case study below is
where the depth is.

**Spectral light transport**

- Every path carries four sampled wavelengths. RGB exists only at two boundaries:
  a role-aware uplift of authored values on the way in (Jakob & Hanika 2019) and
  the film's CIE 1931 projection to XYZ and linear sRGB on the way out.
  Dispersion, measured-conductor Fresnel and thin-film interference are evaluated
  per wavelength.
- Next-event estimation combined with BSDF sampling by the power heuristic; path
  guiding over a spatial binary tree with adaptive directional quadtrees (Müller,
  Gross & Novák 2017), off by default; manifold next-event estimation for light
  that reaches the environment through a dielectric (Hanika, Droske & Fascione
  2015).
- Spectral random-walk subsurface scattering with equiangular in-scatter sampling
  (Kulla & Fajardo 2012); priority-based nested dielectrics (Schmidt & Budge
  2002).

**Light sampling & materials**

- Many-light sampling through a light BVH with importance bounds and cone unions
  (Conty Estevez & Kulla 2018); environment maps with piecewise-constant
  importance sampling, MIS compensation (Karlík et al. 2019) and portal-masked
  sampling for interiors lit through windows (Bitterli, Novák & Jarosz 2015).
- Owen-scrambled Sobol on a Morton-coded pixel index with per-dimension digit
  permutation, after PBRT-v4's ZSobol (Ahmed & Wonka 2020): error spreads as
  screen-space blue noise at low sample counts while every 1D and 2D projection
  stays a stratified (0,2)-sequence.
- GGX with height-correlated Smith masking (Heitz 2014), anisotropic and bounded
  VNDF sampling (Heitz 2018; Eto & Tokuyoshi 2023), rough dielectric transmission
  (Walter et al. 2007) and multiple-scattering compensation for conductors from
  directional-albedo tables (Kulla & Conty 2017; Turquin 2019); layered closures
  with coat-over-base coupling and a position-free Monte Carlo layer walk (Guo et
  al. 2018).

**GPU architecture & performance**

- One renderer, two kinds of stage: OptiX raygen programs own everything that
  traces, native CUDA kernels own everything else. Each stage module is created
  only when its stage is reachable, and path state lives in structure-of-arrays
  between stages.
- Two-level acceleration: one GAS per unique mesh with compaction, built in
  batches under a VRAM budget; the IAS alone is rebuilt when only transforms
  change. Textures carry mip chains with anisotropic filtering in BC7/BC4
  artifacts keyed by BLAKE3, under a VRAM budget that halves the largest texture
  first.
- Display chain in CUDA: firefly rejection (median + MAD), the OptiX AI denoiser
  with albedo and normal guides between two phases, mip-chain bloom, ACES, sRGB;
  NVTX ranges per stage for Nsight.

**Verification & engineering decisions**

- A closure-level white furnace runs the production sampler over every material
  stack: controls held to 0.99–1.01, every coated stack in a measured two-sided
  band that may only tighten, the lossless coated case checked per cosine. A
  closed-form fixture, an albedo-1 sphere inside a clear glass ball in a
  radiance-1 environment, must integrate to 1.0 ± 0.01; it read 2.17 before the
  repair that found two full-weight estimators of one transport.
- Chi-squared sampler-versus-pdf tests, Kolmogorov–Smirnov on the sampler,
  reciprocity tests, and architecture regression tests that pin invariants in
  source: no RGB in transport, one camera path body, one render dispatch point.
- Every renderer change declares its acceptance tier before it is gated:
  byte-identical, estimator-identical, or a deliberate image change with a
  predicted direction. 75 numbered decision records carry Problem, Decision,
  Alternatives rejected, Enforcement and a falsifiable revisit trigger, and
  reversals stay on record: path guiding was rejected, then accepted on new
  evidence; an image-space caustic layer was rejected on visual judgement.

### Case study: retiring the megakernel

One OptiX module held the whole camera path, so any BSDF edit recompiled all of
it. Measured on 2026-09-11: a 35.9 MB module, 23.5 minutes of nvcc and a further
35.1 minutes of cold module creation on a disk-cache miss. Over an hour from a
closure edit to a pixel was shaping the physics work: edits were batched and
validated in bulk.

The split was my decision, taken in two recorded steps. A wavefront backend was
not accepted on architecture alone but gated on a measurement, and once it
passed it became the only renderer: OptiX stages own tracing, native CUDA kernels
own shading, and a feature the new backend cannot serve is refused by name rather
than approximated. The megakernel reference arm was retired a week later, once it
was no longer built from the source under review. The implementation was
AI-assisted; the gates were set before the work began.

| Measured | Megakernel | Wavefront |
| --- | --- | --- |
| Device modules a production render creates | one, 35.9 MB; 35.1 min to create cold | three stage modules of 24 KB, 95 KB and 505 KB; 1.7 s for all three |
| nvcc for the shading code | 23.5 min for the one module | 3–4 s per stage module |
| Time per sample at equal spp | 1.0× | 1.56× to 1.85× faster, rising with spp |
| Film mean against the same-source megakernel | reference | five of six ladder rungs inside ±0.01 %; the sixth at +0.0323 % |

<sub>Build and startup rows: the project's swap record, 2026-09-11, through the
shipping binary. Rendering rows: Kroken and Watercolor at 1920×1080, 128–512 spp,
authored settings, denoising off, both backends through the same binary, single
interleaved runs. The subsurface stage is the named exception to the module
figures: its 8.5 MB module takes 138 s to create cold and is built only for
scenes with a subsurface material.</sub>

The parity gate was shown to fail before it was trusted: a mutant build with the
pre-merge shadow policy restored landed near the pre-merge baseline instead of
the merged source, and the glass-enclosure closed form read 2.31 for the mutant
against 0.9986 for the migrated build. The sixth ladder rung is a heavy-tailed
scene at 128 spp whose p99, block maximum and RMSE all fall as samples rise, the
shape of noise rather than bias. The host round trip was measured too: 24–28 % of
the render timeline at 640×360, about 16 µs per GPU operation, which is why the
schedule now makes one device-to-host read per bounce, and a second only when the
subsurface walk ran.

**One bounce of the wavefront today.** Per bounce the traced rays are split into
hit and miss queues; a preparation kernel builds the closure once and routes each
hit by execution shape, never by material identity, to the cheapest kernel that
can shade it. A light connection is resolved only after the shadow trace and, for
the environment, the manifold solve, and it is folded into the path's estimate
exactly once.

```mermaid
flowchart TD
  subgraph LOOP["One tile: the bounce loop"]
    CAM["wf_camera_kernel · CUDA<br/>four wavelengths per path"] --> RQ["ray_q, read parity"]
    RQ --> TR["__raygen__wf_trace · OptiX"]
    TR --> EO["__raygen__wf_env_owns · OptiX<br/>only with environment NEE"]
    EO --> DISP["wf_dispatch_trace_kernel<br/>hit_q · miss_q"]
    DISP --> MISS["wf_miss_kernel<br/>environment radiance, terminal"]
    DISP --> SH["shade kernels · CUDA<br/>closure once, routed by shape:<br/>diffuse · diffuse+glossy · generic · layered"]
    SH --> SYNC["ONE host read of the counters"]
    SYNC --> SHD["shadow_q → __raygen__wf_shadow<br/>and __raygen__wf_bend · OptiX"]
    SHD --> RES["bend resolve, then shadow resolve<br/>the connection folded ONCE"]
    RES --> SSS["sss_q → __raygen__wf_sss · OptiX<br/>spectral random walk, resolve<br/>second host read"]
    SH -->|"continuations"| WQ["ray_q, write parity"]
    SSS -->|"exits"| WQ
    WQ -->|"swap parities · next bounce"| RQ
  end

  WQ -->|"no live paths"| FILM["wf_film_kernel<br/>spectrum → XYZ → linear sRGB"]
  FILM --> P1["phase 1 · firefly filter"]
  P1 --> DN["OptiX AI denoiser<br/>albedo + normal guides"]
  DN --> P2["phase 2 · bloom → ACES → sRGB → look"]
  P2 --> OUT["PNG · viewport"]
  FILM --> EXR["raw + developed EXR"]
```

The repository is private. Source is available on request:
**drnicolasmenzel@gmail.com**.

---

## Credits & licenses

All images here are renders I produced with my own path tracer — except the
left-hand images of [The Old View](#the-old-view) comparison, which I
rendered in Blender 5.1. The underlying
3D scenes and models were created by the artists credited below and used under
the stated licenses; **each render is a new image derived from those assets.**
Trademarks and characters are the property of their respective owners.

| Render | Scene / model — author | Source | License |
| --- | --- | --- | --- |
| Poolhouse *\*(heavily modified)\** | *\*Modern luxury villa house building with pool\** — zigurat architecture studio | [Sketchfab](https\://sketchfab.com/3d-models/modern-luxury-villa-house-building-with-pool-0e858284939343cb994233d40a48a20a) | [CC BY 4.0](https\://creativecommons.org/licenses/by/4.0/) |
| Bistro (Café, Vespa, Le Chevalier) | *\*Amazon Lumberyard Bistro\** — Amazon Lumberyard | [NVIDIA ORCA](https\://developer.nvidia.com/orca/amazon-lumberyard-bistro) · [pbrt-v4-scenes](https\://github.com/mmp/pbrt-v4-scenes) | [CC BY 4.0](https\://creativecommons.org/licenses/by/4.0/) |
| Zero-Day | *\*Zero-Day\** — Mike Winkelmann (Beeple) | [beeple-crap.com/resources](https\://www.beeple-crap.com/resources) | Free for any use, no attribution required (credited voluntarily) |
| Transparent Machines | Models from *\*Transparent Machines\** — Mike Winkelmann (Beeple) | [beeple-crap.com/films](https\://www.beeple-crap.com/films) · [pbrt-v4-scenes](https\://github.com/mmp/pbrt-v4-scenes) | [Free for any use](https\://www.beeple-crap.com/resources), no attribution required (credited voluntarily) |
| MaterialX Lion | *\*MaterialX Teapot and Lion\** — NVIDIA Corporation | [ASWF blog](https\://www.aswf.io/blog/materialxteapotlion/) · [DPEL](https\://dpel.aswf.io/materialx-teapot-lion/) | [ASWF Digital Assets License v1.1](https\://dpel.aswf.io/materialx-teapot-lion/materialx-teapot-lion-license) (non-commercial permitted uses; copyright notice required) |
| Hornet | *\*Silksong \|\| Hornet Fanart\** — dark_igorek | [Sketchfab](https\://sketchfab.com/3d-models/silksong-hornet-fanart-57d431b977c841ef8c117af82f109890) | [CC BY 4.0](https\://creativecommons.org/licenses/by/4.0/) |
| Gelatinous Cube | *\*Gelatinous Cube\** — glenatron | [Sketchfab](https\://sketchfab.com/3d-models/gelatinous-cube-e08385238f4d4b59b012233a9fbdca21) | [CC BY-NC 4.0](https\://creativecommons.org/licenses/by-nc/4.0/) (attribution required; non-commercial use only) |
| 4060.b Spaceship | *\*4060.b Spaceship\** — thecali | [Blend Swap #13489](https\://blendswap.com/blend/13489) | [CC0 1.0](https\://creativecommons.org/publicdomain/zero/1.0/) (public domain; credited voluntarily) |
| Classroom | *\*Class room\** — Christophe Seux | [Blender Demo Files](https\://www.blender.org/download/demo-files/) | [CC0 1.0](https\://creativecommons.org/publicdomain/zero/1.0/) (public domain; credited voluntarily) |
| Monster Under the Bed | Metin Seven, based on 2D concept art by Blake Stevenson | [Blender Demo Files](https\://www.blender.org/download/demo-files/) | [CC BY 4.0](https\://creativecommons.org/licenses/by/4.0/) |
| Staircase | *\*The Wooden Staircase\** — Wig42 | [Blend Swap #14449](https\://blendswap.com/blend/14449) | [CC BY](https\://creativecommons.org/licenses/by/3.0/) |
| Bathroom | *\*Bathroom Scene 15\** — PHI Archviz | [Fab](https\://www.fab.com/listings/0a045566-e87c-4c54-927b-b40173523681) | [Fab Standard License](https\://www.fab.com/eula) (Personal/Professional; no attribution required, credited voluntarily) |
| Kroken | Angelo Ferretti / Lucy Dreams | [lucydreams.it](https\://www.lucydreams.it/kroken/) · [pbrt-v4-scenes](https\://github.com/mmp/pbrt-v4-scenes) | [CC BY-ND 4.0](https\://creativecommons.org/licenses/by-nd/4.0/) |
| Watercolor *\*(environment map replaced)\** | *\*Watercolor room interior scene\** — Angelo Ferretti / Lucy Dreams | [Lucy Dreams shop](https\://gum.co/urfLv) · [pbrt-v4-scenes](https\://github.com/mmp/pbrt-v4-scenes/tree/master/watercolor) | [Lucy Dreams EULA](https\://www.lucydreams.it/shop/eula-license/) (purchased 2026-10-12; no attribution required, credited voluntarily) |
| The Old View | *\*Mall From The Oldest View – Project Files and Assets\** — Šime Bugarija | [CGTrader](https\://www.cgtrader.com/3d-models/interior/other/mall-from-the-oldest-view-project-files-and-assets) | [CGTrader Royalty Free License](https\://www.cgtrader.com/pages/terms-and-conditions) (purchased for US$9; no attribution required, credited voluntarily) |

### Fan-art notice (Hornet)

The Hornet render is **unofficial fan art**. The character Hornet and \*Hollow
Knight: Silksong\* are trademarks and/or copyright of **Team Cherry**. This
non-commercial render is not affiliated with, authorized, sponsored, or endorsed
by Team Cherry. The underlying 3D model, *\*Silksong \|\| Hornet Fanart\** by
dark_igorek, is used under [CC BY 4.0](https\://creativecommons.org/licenses/by/4.0/).

### Fan-art notice (Gelatinous Cube)

The Gelatinous Cube render is **unofficial fan art**. The gelatinous cube is a
\*Dungeons & Dragons\* monster; D&D and its trade dress are trademarks of
**Wizards of the Coast**, and this render is not affiliated with, authorized,
sponsored, or endorsed by them. (The creature's game statistics appear in the
[CC BY 4.0](https\://creativecommons.org/licenses/by/4.0/)-licensed SRD 5.1, but
that covers the rules text, not this artwork.)

The underlying 3D model, *\*Gelatinous Cube\** by **glenatron**, is licensed
[CC BY-NC 4.0](https\://creativecommons.org/licenses/by-nc/4.0/). Attribution is
given above, and the **NonCommercial** term is respected: this site carries no
advertising, sells nothing, and the renders are neither licensed nor offered for
sale. Should this portfolio ever be monetized, this render must be pulled or
separate permission obtained from the author.

### Kroken — NoDerivatives, permission granted

The Kroken scene is licensed **CC BY-ND 4.0**, which technically excludes
derivative works such as renders. Angelo Ferretti (Founder & Director, Lucy
Dreams — the scene's author), granted written permission by email on
**2026-07-03** to publish rendered images of the scene in this context,
subject to Lucy Dreams' [shop EULA/license
terms](https\://www.lucydreams.it/shop/eula-license/). That email is kept on
file as proof of permission.

### Watercolor — Lucy Dreams EULA (purchased)

The [*\*Watercolor room interior scene\**](https\://gum.co/urfLv) by **Angelo
Ferretti** (Lucy Dreams) was purchased on **2026-10-12** under the
[Lucy Dreams EULA](https\://www.lucydreams.it/shop/eula-license/), which permits
creating renderings from the scene, in personal and commercial work, and
modifying it for that purpose. It does not require attribution; the author is
credited here voluntarily. The renders were made from the scene's pbrt-v4 port in
[pbrt-v4-scenes](https\://github.com/mmp/pbrt-v4-scenes/tree/master/watercolor),
using its supplied cameras with a replaced environment map from
[Poly Haven](https\://polyhaven.com/hdris) ([CC0](https\://creativecommons.org/publicdomain/zero/1.0/); no attribution
required, credited voluntarily). The scene files
themselves are not redistributed. The receipt is kept on file as proof of
license.

### Bathroom — Fab Standard License

The *\*Bathroom Scene 15\** asset by **PHI Archviz** was purchased on
[Fab](https\://www.fab.com/listings/0a045566-e87c-4c54-927b-b40173523681) under the
[Fab Standard License](https\://www.fab.com/eula). That license grants the right to
use and modify the asset to produce final rendered images ("linear" end products
such as the still shown here) and to display it publicly. It does **not**
require attribution — the author is credited here voluntarily — and it does **not**
permit redistributing the underlying 3D asset files themselves. Only rendered
images are published in this repository, so the license terms are respected.

### MaterialX Lion — ASWF Digital Assets License

The lion renders show the *\*MaterialX Teapot and Lion\**, an asset contributed
by **NVIDIA** to the Academy Software Foundation's [Digital Production Example
Library](https\://dpel.aswf.io/materialx-teapot-lion/). Required notice:

> MaterialX Teapot and Lion Copyright 2026 NVIDIA Corporation. All rights reserved.

The [ASWF Digital Assets License
v1.1](https\://dpel.aswf.io/materialx-teapot-lion/materialx-teapot-lion-license)
permits use for education, training, research, software and hardware
development, benchmarking and product demonstrations — which is what these
renders are — and requires publications showing derived images to carry that
copyright notice. The underlying asset files are **not** redistributed here, and
nothing in this repository implies endorsement by, sponsorship by, or
affiliation with NVIDIA.

### The Old View — Blender comparison

The mall scene, *\*Mall From The Oldest View – Project Files and Assets\** by
**Šime Bugarija**, was purchased on
[CGTrader](https\://www.cgtrader.com/3d-models/interior/other/mall-from-the-oldest-view-project-files-and-assets). Its license permits rendering the scene and publishing the resulting
images; the underlying 3D files are **not** redistributed in this repository.

Every image in the comparison — the Blender side included — was rendered by me
from the same scene and cameras. **Blender** is a registered trademark of the
Blender Foundation; this comparison is not affiliated with or endorsed by the
Blender Foundation. The mall is a replica of Valley View Mall (Dallas),
popularized by Kane Pixels' series *The Oldest View*; this repository is not
affiliated with Kane Pixels.

### Rights holders

Attribution and licenses above are provided in good faith. If you are a rights
holder and have a concern about any asset used here, contact
**drnicolasmenzel@gmail.com** and I will promptly address it.

---

> **Note:** The Old View entry assumes the CGTrader Royalty Free License; confirm
> the license named on your CGTrader order and update it if it differs.
>
> **Note:** The Staircase entry lists CC BY; confirm the exact CC-BY version
> shown on the [Blend Swap page](https\://blendswap.com/blend/14449) and update
> the license link if it differs.

---
