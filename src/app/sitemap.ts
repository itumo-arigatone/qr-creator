import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const list = [
    {
      url: "https://qr.itsumoarigatone.com",
      lastModified: "2025-01-22T00:00:00.000Z",
    },
  ];
  // 配列の結合
  return [...list];
}
