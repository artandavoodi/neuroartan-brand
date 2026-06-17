const FRAGMENTS = {
  "brand-header": "/assets/fragments/brand/header.html",
  "brand-footer": "/assets/fragments/brand/footer.html"
};

export async function mountBrandFragments() {
  const mounts = [...document.querySelectorAll("[data-fragment]")];

  await Promise.all(
    mounts.map(async (mount) => {
      const key = mount.dataset.fragment;
      const source = FRAGMENTS[key];

      if (!source) {
        return;
      }

      const response = await fetch(source);
      if (!response.ok) {
        throw new Error(`Unable to load brand fragment: ${source}`);
      }

      mount.innerHTML = await response.text();
    })
  );
}
