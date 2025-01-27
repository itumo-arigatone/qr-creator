import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAdsense from "@/app/_components/GoogleAdsense";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "かんたん！かわいいQRコード作成サイト",
  description:
    "アプリダウンロード不要！シンプルなQRコード作成ツールです。画像の設定や色の変更など簡単にカスタマイズ可能！おしゃれでかわいいQRコードを自作しよう！！。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
      <GoogleAdsense pId={"9341570175762550"} />
    </html>
  );
}
