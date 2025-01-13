import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "シンプルQRコード作成サイト",
  description:
    "シンプルなQRコード作成ツールです。画像の設定や色の変更など簡単にカスタマイズ可能！URLを入力するとQRコードが生成されます。色や中心に画像を設定する場合はページ下部のQRコードのカスタマイズから設定してください。",
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
    </html>
  );
}
