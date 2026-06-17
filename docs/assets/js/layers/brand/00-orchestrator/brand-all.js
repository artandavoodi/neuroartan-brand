import { mountBrandFragments } from "../01-services/fragments.js";
import { loadBrandData } from "../01-services/data.js";
import { renderBrandHome } from "../03-pages/home.js";
import { renderBrandPage } from "../03-pages/page.js";

export async function initializeBrand() {
  await mountBrandFragments();

  const data = await loadBrandData();

  const homeMount = document.querySelector("[data-brand-home]");
  if (homeMount) {
    renderBrandHome(homeMount, data.home);
  }

  const pageMount = document.querySelector("[data-brand-page-mount]");
  if (pageMount) {
    const pageKey = pageMount.dataset.brandPageMount;
    const pageData = data.pages?.[pageKey];

    if (pageData) {
      renderBrandPage(pageMount, pageData);
    }
  }
}

initializeBrand();
