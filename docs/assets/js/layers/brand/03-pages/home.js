import { createElement } from "../02-renderers/elements.js";

export function renderBrandHome(mount, data) {
  mount.replaceChildren();

  const hero = createElement("section", "brand-hero");
  hero.append(
    createElement("p", "brand-eyebrow", data.eyebrow),
    createElement("h1", "brand-title", data.title),
    createElement("p", "brand-intro", data.intro)
  );

  const resources = createElement("section", "brand-section");
  resources.setAttribute("aria-labelledby", "brand-sections-title");

  const heading = createElement("h2", null, "Brand resource sections");
  heading.id = "brand-sections-title";

  const grid = createElement("div", "brand-card-grid");

  data.sections.forEach((item) => {
    const card = createElement("article", "brand-card");
    const title = createElement("h3");
    const link = createElement("a", null, item.title);
    link.href = item.href;
    title.append(link);
    card.append(title, createElement("p", null, item.description));
    grid.append(card);
  });

  resources.append(heading, grid);

  const presence = createElement("section", "brand-section");
  presence.setAttribute("aria-labelledby", "brand-presence-title");

  const presenceHeading = createElement("h2", null, data.presence.title);
  presenceHeading.id = "brand-presence-title";

  presence.append(
    presenceHeading,
    createElement("p", "brand-section-copy", data.presence.description)
  );

  mount.append(hero, resources, presence);
}
