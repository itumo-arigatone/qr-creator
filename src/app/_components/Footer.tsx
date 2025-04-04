import styles from "@/app/styles/footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link
        href="https://www.itsumoarigatone.com/policy/"
        className={styles.link}
      >
        プライバシーポリシー
      </Link>
      <div className={styles.copyright}>
        Copyright © 2025 Itsumoarigatone. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
