"use client";

import styles from "@/app/styles/customize.module.css";
import QRCodeStyling from "qr-code-styling";

const Customize = ({ qrCode }: { qrCode: QRCodeStyling }) => {
  const handleClearIcon = () => {
    qrCode.update({
      image: "",
    });
  };

  const handleChangeBackground = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    qrCode.update({
      backgroundOptions: {
        color: event.target.value,
      },
    });
  };

  const handleChangeQRColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    qrCode.update({
      dotsOptions: {
        color: event.target.value,
      },
    });
  };

  return (
    <section className={styles.customize}>
      <div className={styles.customize_inner}>
        <h3 className={styles.h3_title}>アイコン設定</h3>
        <div className={styles.customize_content}>
          <div className={styles.button} onClick={() => handleClearIcon()}>
            アイコンをクリア
          </div>
        </div>
      </div>
      <div className={styles.customize_inner}>
        <h3 className={styles.h3_title}>色の設定</h3>
        <div className={styles.customize_content}>
          <p>背景色</p>
          <input
            type="color"
            className={styles.color_picker}
            onChange={(event) => handleChangeBackground(event)}
          />
        </div>
        <div className={styles.customize_content}>
          <p>QRの色</p>
          <input
            type="color"
            className={styles.color_picker}
            onChange={(event) => handleChangeQRColor(event)}
          />
        </div>
      </div>
    </section>
  );
};

export default Customize;
