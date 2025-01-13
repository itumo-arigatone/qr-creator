// import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>ヘッダーも共通のつくる</header>
      <main className={styles.main}>
        <div>ここにQR生成ツールを表示</div>
      </main>
      <footer className={styles.footer}>フッターも共通のつくる</footer>
    </div>
  );
}
