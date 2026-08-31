import { DEFAULT_DATASETS } from "./default-datasets";

export async function fetchDataset(type: string) {
  const targetUrl = `https://admission-calendar.com/api/get_${type}.php`;
  try {
    const res = await fetch(targetUrl, {
      headers: {
        'Referer': 'https://admission-calendar.com/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json',
      },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(3000),
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return data;
      }
    }
  } catch (error) {
    console.warn(`Failed to fetch ${type}:`, error);
  }
  return (DEFAULT_DATASETS as any)[type] || [];
}
