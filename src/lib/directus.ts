const DIRECTUS_URL = 'https://gentsclub-admin.eamwzl.easypanel.host';

async function fetchDirectus(path: string) {
  const res = await fetch(`${DIRECTUS_URL}${path}`, {
    headers: { 'Accept': 'application/json' }
  });
  if (!res.ok) throw new Error(`Directus error: ${res.status}`);
  const json = await res.json();
  return json.data;
}

export async function getBusinessInfo() {
  return fetchDirectus('/items/business_info');
}

export async function getServices() {
  return fetchDirectus('/items/servicios?sort=sort&filter[status][_eq]=published');
}

export async function getGallery() {
  return fetchDirectus('/items/galeria?sort=sort&filter[status][_eq]=published');
}

export async function getTestimonials() {
  return fetchDirectus('/items/testimonios?sort=sort&filter[status][_eq]=published');
}

export async function getBarbers() {
  return fetchDirectus('/items/barberos?sort=sort&filter[status][_eq]=published');
}

export async function getBarberBySlug(slug: string) {
  const data = await fetchDirectus(`/items/barberos?filter[slug][_eq]=${slug}&filter[status][_eq]=published&limit=1`);
  return data?.[0] || null;
}

export async function getGalleryByBarber(barberId: number) {
  return fetchDirectus(`/items/galeria?filter[barbero_id][_eq]=${barberId}&filter[status][_eq]=published&sort=sort&limit=20`);
}

export function getAssetUrl(fileId: string, options?: { width?: number; height?: number; quality?: number }) {
  const params = new URLSearchParams();
  params.set('format', 'webp');
  params.set('quality', String(options?.quality || 80));
  if (options?.width) params.set('width', String(options.width));
  if (options?.height) params.set('height', String(options.height));
  return `${DIRECTUS_URL}/assets/${fileId}?${params.toString()}`;
}

export function getBarberPhotoUrl(fileId: string) {
  return getAssetUrl(fileId, { width: 600, height: 800, quality: 80 });
}

export function getGalleryImageUrl(fileId: string) {
  return getAssetUrl(fileId, { width: 800, quality: 75 });
}

export function getThumbnailUrl(fileId: string) {
  return getAssetUrl(fileId, { width: 400, quality: 70 });
}
