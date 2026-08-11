# Portfolio — Path-Traced Renders

Hero renders produced with my own, self-written path tracers. This repo doubles
as a small gallery site.

---

## Gallery

<table>
  <tr>
    <td width="33%" align="center"><a href="#editor"><img src="images/00_editor/2_editor.png" width="100%" alt="The editor"></a><br><sub><b>The editor</b></sub></td>
    <td width="33%" align="center"><a href="#poolhouse"><img src="images/05_poolhouse/01_Hero_Shot_Grass.png" width="100%" alt="Poolhouse"></a><br><sub><b>Poolhouse</b></sub></td>
    <td width="33%" align="center"><a href="#kroken"><img src="images/06_kroken/Camera_01_Main.png" width="100%" alt="Kroken"></a><br><sub><b>Kroken</b></sub></td>
  </tr>
  <tr>
    <td width="33%" align="center"><a href="#bistro"><img src="images/07_bistro/02_bistro_cafe.png" width="100%" alt="Bistro"></a><br><sub><b>Bistro</b></sub></td>
    <td width="33%" align="center"><a href="#bathroom"><img src="images/08_bathroom/bathroom.png" width="100%" alt="Bathroom"></a><br><sub><b>Bathroom</b></sub></td>
    <td width="33%" align="center"><a href="#zero-day"><img src="images/09_zeroday/zeroday.png" width="100%" alt="Zero-Day"></a><br><sub><b>Zero-Day</b></sub></td>
  </tr>
  <tr>
    <td width="33%" align="center"><a href="#monster-under-the-bed"><img src="images/10_monster_under_bed/monster_under_bed.png" width="100%" alt="Monster Under the Bed"></a><br><sub><b>Monster Under the Bed</b></sub></td>
    <td width="33%" align="center"><a href="#classroom"><img src="images/11_classroom/classroom.png" width="100%" alt="Classroom"></a><br><sub><b>Classroom</b></sub></td>
    <td width="33%" align="center"><a href="#hornet"><img src="images/12_hornet/hornet.png" width="100%" alt="Hornet"></a><br><sub><b>Hornet</b></sub></td>
  </tr>
  <tr>
    <td width="33%" align="center"><a href="#staircase"><img src="images/other/staicase.png" width="100%" alt="Staircase"></a><br><sub><b>Staircase</b></sub></td>
    <td width="33%"></td>
    <td width="33%"></td>
  </tr>
</table>

---

## Editor

Every render here comes out of a path tracer I wrote from scratch — scene
management, physically based materials, importance sampling and light transport,
all my own code. Below are shots of its editor: scene tree, layered material
inspector, live viewport, and progressive render output.

## Architecture

This is intentionally a small **one-scene** architecture: one mutable `Document`, one edit funnel,
one renderer crossing, and one renderer with four canonical components.

### End-to-end

A UI control never writes the scene directly. It emits an `Edit`; the composition root applies it
through `Document`. The edit's `WriteSet` is part of that mutation contract and drives the document
epoch / derived-view invalidation. Rendering consumes a derived read-only scene through the single
bridge.

```mermaid
flowchart LR
    Control["Control changed"]
    Edit["Edit<br/>apply() + WriteSet"]
    App["editor/app"]
    Document["Document<br/>ONE mutable Scene"]
    Epoch["SceneEpoch"]
    Views["Views<br/>derived, read-only"]
    Bridge["Renderer Bridge"]
    Compile["compile()"]
    Input["RenderInput"]
    DeviceScene["DeviceScene"]
    Integrator["Integrator"]
    Film["Film"]
    Frame["Frame"]

    Control --> Edit --> App
    App -->|"Document.apply(Edit)"| Document
    Document --> Epoch
    Document --> Views
    Epoch --> Views
    Views -->|"RenderScene"| Bridge
    Bridge --> Compile --> Input
    Input --> DeviceScene
    Input --> Integrator
    DeviceScene --> Integrator
    Integrator --> Film --> Frame

    classDef truth fill:#b73a3a,stroke:#e07a7a,stroke-width:1.5px,color:#fff
    classDef view fill:#5a4a86,stroke:#9d8ad0,stroke-width:1.5px,color:#fff
    classDef bridge fill:#8a5a2b,stroke:#d8a05a,stroke-width:1.5px,color:#fff
    classDef gpu fill:#2f7d3c,stroke:#7acb85,stroke-width:1.5px,color:#fff

    class Document,Epoch truth
    class Views view
    class Edit,App,Bridge,Compile bridge
    class Input,DeviceScene,Integrator,Film,Frame gpu
```

### Renderer

The renderer itself is deliberately only four components: immutable `RenderInput`, GPU-resident
`DeviceScene`, `Integrator`, and `Film`. `compile()` is the one authored-to-render translation.

```mermaid
flowchart LR
    Scene["Scene + content"]
    Compile["compile()"]
    Input["RenderInput<br/>immutable"]
    DeviceScene["DeviceScene<br/>scene GPU memory"]
    Integrator["Integrator<br/>render()"]
    Film["Film<br/>pixel memory"]
    Image["Image"]

    Scene --> Compile --> Input
    Input -->|"update()"| DeviceScene
    Input --> Integrator
    DeviceScene --> Integrator
    Integrator --> Film -->|"resolve()"| Image

    classDef truth fill:#b73a3a,stroke:#e07a7a,stroke-width:1.5px,color:#fff
    classDef bridge fill:#8a5a2b,stroke:#d8a05a,stroke-width:1.5px,color:#fff
    classDef gpu fill:#2f7d3c,stroke:#7acb85,stroke-width:1.5px,color:#fff

    class Scene truth
    class Compile bridge
    class Input,DeviceScene,Integrator,Film,Image gpu
```

---

<p align="center"><img src="images/00_editor/2_editor.png" width="100%" alt="Editor"></p>
<p align="center"><img src="images/00_editor/3_editor.png" width="100%" alt="Editor"></p>
<p align="center"><img src="images/00_editor/4_editor.png" width="100%" alt="Editor"></p>
<p align="center"><img src="images/00_editor/5_editor.png" width="100%" alt="Editor"></p>
<p align="center"><img src="images/00_editor/6_editor.png" width="100%" alt="Editor"></p>

---

## Poolhouse

A modern villa and pool — **heavily reworked by me** from a Sketchfab base model,
relit and re-dressed for a set of cinematic hero shots.

<p align="center"><img src="images/05_poolhouse/01_Hero_Shot_Grass.png" width="100%" alt="Poolhouse — hero, grass"><br><sub><b>Hero — grass</b></sub></p>
<p align="center"><img src="images/05_poolhouse/02_Hero_Shot_Terrace.png" width="100%" alt="Poolhouse — hero, terrace"><br><sub><b>Hero — terrace</b></sub></p>
<p align="center"><img src="images/05_poolhouse/03_Hero_Shot_Inside.png" width="100%" alt="Poolhouse — hero, interior"><br><sub><b>Hero — interior</b></sub></p>
<p align="center"><img src="images/05_poolhouse/04_grade_cinematic.png" width="100%" alt="Poolhouse — cinematic grade"><br><sub><b>Cinematic grade</b></sub></p>

> Base model: *\*Modern luxury villa house building with pool\** by zigurat
> architecture studio, licensed
> [CC BY 4.0](https\://creativecommons.org/licenses/by/4.0/) and heavily modified
> here (geometry, materials, lighting, staging). CC BY permits modification with
> attribution and an indication of changes.

---

## Kroken

A modern interior-design scene — a Kroken easy chair and chaise longue beside a
styled shelving wall.

<p align="center"><img src="images/06_kroken/Camera_01_Main.png" width="100%" alt="Kroken — Main"><br><sub><b>Main</b></sub></p>
<p align="center"><img src="images/06_kroken/Camera_02_Chaise_Longue.png" width="100%" alt="Kroken — Chaise longue"><br><sub><b>Chaise longue</b></sub></p>
<p align="center"><img src="images/06_kroken/Camera_03_Shelf.png" width="100%" alt="Kroken — Shelf"><br><sub><b>Shelf</b></sub></p>
<p align="center"><img src="images/06_kroken/Camera_04_Shelf_Detail.png" width="100%" alt="Kroken — Shelf detail"><br><sub><b>Shelf detail</b></sub></p>
<p align="center"><img src="images/06_kroken/Camera_05_Blanket_Detail_Top.png" width="100%" alt="Kroken — Blanket detail, top"><br><sub><b>Blanket detail — top</b></sub></p>
<p align="center"><img src="images/06_kroken/Camera_06_Blanket_Detail_Front.png" width="100%" alt="Kroken — Blanket detail, front"><br><sub><b>Blanket detail — front</b></sub></p>
<p align="center"><img src="images/06_kroken/Camera_07_Moka_Detail.png" width="100%" alt="Kroken — Moka detail"><br><sub><b>Moka detail</b></sub></p>
<p align="center"><img src="images/06_kroken/Camera_08_Outside.png" width="100%" alt="Kroken — Outside"><br><sub><b>Outside</b></sub></p>

> Scene: *\*Kroken\** by Angelo Ferretti / Lucy Dreams, licensed
> [CC BY-ND 4.0](https\://creativecommons.org/licenses/by-nd/4.0/) — published with
> the author's written permission (see the
> [note](#kroken--noderivatives-permission-granted) below).

---

## Bistro

The Amazon Lumberyard Bistro — a Parisian café exterior and interior under warm
evening light.

<p align="center"><img src="images/07_bistro/01_bistro_vespa.png" width="100%" alt="Bistro — Vespa"><br><sub><b>Vespa</b></sub></p>
<p align="center"><img src="images/07_bistro/02_bistro_cafe.png" width="100%" alt="Bistro — Café"><br><sub><b>Café</b></sub></p>
<p align="center"><img src="images/07_bistro/03_bistro_le_chevalier.png" width="100%" alt="Bistro — Le Chevalier"><br><sub><b>Le Chevalier</b></sub></p>

---

## Bathroom

A daylit modern bathroom — reflective tile, chrome fixtures, and soft window
light.

<p align="center"><img src="images/08_bathroom/bathroom.png" width="100%" alt="Bathroom"></p>

---

## Zero-Day

Neon-lit sci-fi corridor from Beeple's short film — a classic global-illumination
stress test.

<p align="center"><img src="images/09_zeroday/zeroday.png" width="100%" alt="Zero-Day"></p>

---

## Monster Under the Bed

A stylized creature peering out from beneath a bed — a subsurface-scattering
study.

<p align="center"><img src="images/10_monster_under_bed/monster_under_bed.png" width="100%" alt="Monster Under the Bed"></p>

---

## Classroom

The well-known Blender classroom benchmark scene — daylight through the blinds.

<p align="center"><img src="images/11_classroom/classroom.png" width="100%" alt="Classroom"></p>

---

## Hornet

Character study lit with a single warm key and a looping light-trail, rendered
from a fan-made 3D model. **Unofficial fan art** — see the
[notice](#fan-art-notice-hornet) below.

<p align="center"><img src="images/12_hornet/hornet.png" width="100%" alt="Hornet — fan art"></p>

---

## Staircase

A sunlit wooden staircase — a soft-shadow and indirect-light study.

<p align="center"><img src="images/other/staicase.png" width="100%" alt="Staircase"></p>

---

## Credits & licenses

All images here are renders I produced with my own path tracer. The underlying
3D scenes and models were created by the artists credited below and used under
the stated licenses; **each render is a new image derived from those assets.**
Trademarks and characters are the property of their respective owners.

| Render | Scene / model — author | Source | License |
| --- | --- | --- | --- |
| Poolhouse *\*(heavily modified)\** | *\*Modern luxury villa house building with pool\** — zigurat architecture studio | [Sketchfab](https\://sketchfab.com/3d-models/modern-luxury-villa-house-building-with-pool-0e858284939343cb994233d40a48a20a) | [CC BY 4.0](https\://creativecommons.org/licenses/by/4.0/) |
| Bistro (Café, Vespa, Le Chevalier) | *\*Amazon Lumberyard Bistro\** — Amazon Lumberyard | [NVIDIA ORCA](https\://developer.nvidia.com/orca/amazon-lumberyard-bistro) · [pbrt-v4-scenes](https\://github.com/mmp/pbrt-v4-scenes) | [CC BY 4.0](https\://creativecommons.org/licenses/by/4.0/) |
| Zero-Day | *\*Zero-Day\** — Mike Winkelmann (Beeple) | [beeple-crap.com/resources](https\://www.beeple-crap.com/resources) | Free for any use, no attribution required (credited voluntarily) |
| Hornet | *\*Silksong \|\| Hornet Fanart\** — dark_igorek | [Sketchfab](https\://sketchfab.com/3d-models/silksong-hornet-fanart-57d431b977c841ef8c117af82f109890) | [CC BY 4.0](https\://creativecommons.org/licenses/by/4.0/) |
| Classroom | *\*Class room\** — Christophe Seux | [Blender Demo Files](https\://www.blender.org/download/demo-files/) | [CC0 1.0](https\://creativecommons.org/publicdomain/zero/1.0/) (public domain; credited voluntarily) |
| Monster Under the Bed | Metin Seven, based on 2D concept art by Blake Stevenson | [Blender Demo Files](https\://www.blender.org/download/demo-files/) | [CC BY 4.0](https\://creativecommons.org/licenses/by/4.0/) |
| Staircase | *\*The Wooden Staircase\** — Wig42 | [Blend Swap #14449](https\://blendswap.com/blend/14449) | [CC BY](https\://creativecommons.org/licenses/by/3.0/) |
| Bathroom | *\*Bathroom Scene 15\** — PHI Archviz | [Fab](https\://www.fab.com/listings/0a045566-e87c-4c54-927b-b40173523681) | [Fab Standard License](https\://www.fab.com/eula) (Personal/Professional; no attribution required, credited voluntarily) |
| Kroken | Angelo Ferretti / Lucy Dreams | [lucydreams.it](https\://www.lucydreams.it/kroken/) · [pbrt-v4-scenes](https\://github.com/mmp/pbrt-v4-scenes) | [CC BY-ND 4.0](https\://creativecommons.org/licenses/by-nd/4.0/) |

### Fan-art notice (Hornet)

The Hornet render is **unofficial fan art**. The character Hornet and \*Hollow
Knight: Silksong\* are trademarks and/or copyright of **Team Cherry**. This
non-commercial render is not affiliated with, authorized, sponsored, or endorsed
by Team Cherry. The underlying 3D model, *\*Silksong \|\| Hornet Fanart\** by
dark_igorek, is used under [CC BY 4.0](https\://creativecommons.org/licenses/by/4.0/).

### Kroken — NoDerivatives, permission granted

The Kroken scene is licensed **CC BY-ND 4.0**, which technically excludes
derivative works such as renders. Angelo Ferretti (Founder & Director, Lucy
Dreams — the scene's author), granted written permission by email on
**2026-07-03** to publish rendered images of the scene in this context,
subject to Lucy Dreams' [shop EULA/license
terms](https\://www.lucydreams.it/shop/eula-license/). That email is kept on
file as proof of permission.

### Bathroom — Fab Standard License

The *\*Bathroom Scene 15\** asset by **PHI Archviz** was purchased on
[Fab](https\://www.fab.com/listings/0a045566-e87c-4c54-927b-b40173523681) under the
[Fab Standard License](https\://www.fab.com/eula). That license grants the right to
use and modify the asset to produce final rendered images ("linear" end products
such as the still shown here) and to display it publicly. It does **not**
require attribution — the author is credited here voluntarily — and it does **not**
permit redistributing the underlying 3D asset files themselves. Only rendered
images are published in this repository, so the license terms are respected.

### Rights holders

Attribution and licenses above are provided in good faith. If you are a rights
holder and have a concern about any asset used here, contact
**drnicolasmenzel@gmail.com** and I will promptly address it.

---

> **Note:** The Staircase entry lists CC BY; confirm the exact CC-BY version
> shown on the [Blend Swap page](https\://blendswap.com/blend/14449) and update
> the license link if it differs.

---
