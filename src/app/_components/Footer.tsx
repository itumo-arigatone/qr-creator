import styles from "@/app/styles/footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.link_container}>
        <Link
          href="https://www.itsumoarigatone.com/policy/"
          className={styles.link}
        >
          プライバシーポリシー
        </Link>
        <Link href="/faq" className={styles.link}>
          よくある質問
        </Link>
      </div>
      <div className={styles.copyright}>
        Copyright © 2025 Itsumoarigatone. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
