"use client";

import Image from "next/image";
import styles from "@/app/styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src="/itsumoarigatone.png"
        alt="ロゴアイコン"
        className={styles.logoImageMobile}
        width={70}
        height={70}
      />
      <div className={styles.logo}>
        <Image
          src="/itsumoarigatone.png"
          alt="ロゴアイコン"
          className={styles.logoImagePC}
          width={70}
          height={70}
        />
        <div>
          QRコードジェネレータ
          <div className={styles.created}>created by Itsumoarigatone</div>
        </div>
      </div>
      <div className={`${styles.links}`}>
        <a
          className={styles.button}
          target="_blank"
          href="https://www.itsumoarigatone.com/blog/"
        >
          製作者ブログ
        </a>
      </div>
    </header>
  );
}
