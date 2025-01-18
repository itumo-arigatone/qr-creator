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
          className={styles.logoImage}
          width={70}
          height={70}
        />
        <div>
          QRコードジェネレータ
          <div className={styles.created}>created by Itsumoarigatone</div>
        </div>
      </div>
      <div className={styles.links}>
        <a
          className="link"
          target="_blank"
          href="https://www.itsumoarigatone.com/blog/"
        >
          製作者ブログ
        </a>
      </div>
    </header>
  );
}
