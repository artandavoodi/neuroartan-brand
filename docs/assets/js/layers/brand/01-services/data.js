const BRAND_DATA_URL = "/assets/data/brand/site.json";

export async function loadBrandData() {
  const response = await fetch(BRAND_DATA_URL);

  if (!response.ok) {
    throw new Error(`Unable to load brand data: ${BRAND_DATA_URL}`);
  }

  return response.json();
}
