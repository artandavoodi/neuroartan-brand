import { mountBrandFragments } from "../01-services/fragments.js";
import { loadBrandData } from "../01-services/data.js";
import { renderBrandHome } from "../03-pages/home.js";

export async function initializeBrand() {
  await mountBrandFragments();

  const homeMount = document.querySelector("[data-brand-home]");
  if (homeMount) {
    const data = await loadBrandData();
    renderBrandHome(homeMount, data.home);
  }
}
