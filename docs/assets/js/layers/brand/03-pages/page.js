import { createElement } from "../02-renderers/elements.js";

export function renderBrandPage(mount, data) {
  mount.replaceChildren();

  const hero = createElement("section", "brand-hero");
  hero.append(
    createElement("p", "brand-eyebrow", data.eyebrow),
    createElement("h1", "brand-title", data.title),
    createElement("p", "brand-intro", data.intro)
  );

  const section = createElement("section", "brand-section");
  const grid = createElement("div", "brand-card-grid");

  data.sections.forEach((item) => {
    const card = createElement("article", "brand-card");
    card.append(
      createElement("h3", null, item.title),
      createElement("p", null, item.description)
    );
    grid.append(card);
  });

  section.append(grid);
  mount.append(hero, section);
}
