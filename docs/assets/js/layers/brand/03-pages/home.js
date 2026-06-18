import { createElement } from "../02-renderers/elements.js";

const BRAND_ASSETS = {
  logo: "/registry/icons/public/assets/core/identity/brand/neuroartan/logo-plain.svg",
  wordmark: "/registry/icons/public/assets/core/identity/brand/neuroartan/logo-plain.svg",
  symbol: "/registry/icons/public/assets/core/identity/brand/neuroartan/logo-plain.svg"
};

function createShowcaseVisual(item) {
  const visual = createElement("span", `brand-showcase-item__visual brand-showcase-item__visual--${item.variant}`);

  if (item.asset) {
    const image = createElement("img", "brand-showcase-item__asset");
    image.src = item.asset;
    image.alt = "";
    image.loading = "lazy";
    image.decoding = "async";
    visual.append(image);
  }

  return visual;
}

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

  const heading = createElement("h2", null, "Guidelines");
  heading.id = "brand-sections-title";

  const grid = createElement("div", "brand-guideline-list");

  data.sections.forEach((item) => {
    const card = createElement("article", "brand-guideline-item");
    const title = createElement("h3");
    const link = createElement("a", null, item.title);
    link.href = item.href;
    title.append(link);
    card.append(title, createElement("p", null, item.description));
    grid.append(card);
  });

  resources.append(heading, grid);

  const showcase = createElement("section", "brand-section brand-showcase");
  showcase.setAttribute("aria-labelledby", "brand-showcase-title");

  const showcaseHeading = createElement("h2", null, "Gallery");
  showcaseHeading.id = "brand-showcase-title";

  const showcaseIntro = createElement("p", "brand-section-copy", "Examples of how the Neuroartan identity should appear across product, documentation, editorial, and public presentation contexts.");

  const showcaseGrid = createElement("div", "brand-showcase-grid");

  [
    {
      title: "Logo",
      description: "Primary Neuroartan logo presented with clear space and neutral contrast.",
      variant: "logo",
      asset: BRAND_ASSETS.logo
    },
    {
      title: "Wordmark",
      description: "Readable company identification for pages, profiles, listings, and public references.",
      variant: "wordmark",
      asset: BRAND_ASSETS.wordmark
    },
    {
      title: "Symbol",
      description: "Compact identity use for constrained spaces where Neuroartan is already identified.",
      variant: "symbol",
      asset: BRAND_ASSETS.symbol
    },
    {
      title: "Application",
      description: "Identity applied across product, documentation, editorial, and public presentation contexts.",
      variant: "application"
    }
  ].forEach((item) => {
    const example = createElement("article", "brand-showcase-item");
    example.append(
      createShowcaseVisual(item),
      createElement("h3", null, item.title),
      createElement("p", null, item.description)
    );
    showcaseGrid.append(example);
  });

  showcase.append(showcaseHeading, showcaseIntro, showcaseGrid);

  const presence = createElement("section", "brand-section");
  presence.setAttribute("aria-labelledby", "brand-presence-title");

  const presenceHeading = createElement("h2", null, data.presence.title);
  presenceHeading.id = "brand-presence-title";

  presence.append(
    presenceHeading,
    createElement("p", "brand-section-copy", data.presence.description)
  );

  const contact = createElement("section", "brand-section");
  contact.setAttribute("aria-labelledby", "brand-contact-title");

  const contactHeading = createElement("h2", null, "Permissions");
  contactHeading.id = "brand-contact-title";

  contact.append(
    contactHeading,
    createElement("p", "brand-section-copy", "Use Neuroartan assets only in approved contexts. For partnerships, campaigns, press materials, commercial use, or co-branded presentation, request review before publication.")
  );

  mount.append(hero, resources, showcase, presence, contact);
}
