import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const list = [
    {
      url: "https://qr.itsumoarigatone.com",
      lastModified: "2025-01-22T00:00:00.000Z",
    },
    {
      url: "https://qr.itsumoarigatone.com/how-to",
      lastModified: "2025-02-02T02:32:00.000Z",
    },
    {
      url: "https://qr.itsumoarigatone.com/faq",
      lastModified: "2025-04-06T01:50:00.000Z",
    },
  ];
  // 配列の結合
  return [...list];
}
