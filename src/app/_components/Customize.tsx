"use client";

import styles from "@/app/styles/customize.module.css";
import QRCodeStyling from "qr-code-styling";

const Customize = ({ qrCode }: { qrCode: QRCodeStyling }) => {
  const handleClearIcon = () => {
    qrCode.update({
      image: "",
    });
  };

  return (
    <section className={styles.customize}>
      <h3 className={styles.h3_title}>アイコン設定</h3>
      <div className={styles.customize_content}>
        <div className={styles.button} onClick={() => handleClearIcon()}>
          アイコンをクリア
        </div>
      </div>
    </section>
  );
};

export default Customize;
