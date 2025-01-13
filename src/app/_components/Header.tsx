"use client";

import Image from "next/image";
import styles from "@/app/styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/itsumoarigatone.png"
          alt="ロゴアイコン"
          width={70}
          height={70}
        />
        <div>
          QRコードジェネレータ
          <div>created by Itsumoarigatone</div>
        </div>
      </div>
      <a target="_blank" href="https://www.itsumoarigatone.com/">
        製作者ブログ
      </a>
    </header>
  );
}
