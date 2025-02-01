"use client";

import styles from "@/app/styles/customize.module.css";
import QRCodeStyling, { DotType } from "qr-code-styling";
import React, { useState } from "react";

type Props = {
  qrCode: QRCodeStyling | null;
  popup: QRCodeStyling | null;
};

const types: DotType[] = [
  "rounded",
  "dots",
  "classy",
  "classy-rounded",
  "square",
  "extra-rounded",
];

const Customize = ({ qrCode, popup }: Props) => {
  const dot = {
    rounded: "丸め",
    dots: "ドット",
    classy: "クラシック",
    "classy-rounded": "丸めでクラシック",
    square: "四角",
    "extra-rounded": "めっちゃ丸め",
  };

  const [selectedType, setSelectedType] = useState(types[0]);

  const handleClearIcon = () => {
    if (!qrCode || !popup) {
      return;
    }
    qrCode.update({
      image: "",
    });
    popup.update({
      image: "",
    });
  };

  const handleChangeBackground = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!qrCode || !popup) {
      return;
    }
    qrCode.update({
      backgroundOptions: {
        color: event.target.value,
      },
    });
    popup.update({
      backgroundOptions: {
        color: event.target.value,
      },
    });
  };

  const handleChangeQRColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!qrCode || !popup) {
      return;
    }
    qrCode.update({
      dotsOptions: {
        color: event.target.value,
      },
    });
    popup.update({
      dotsOptions: {
        color: event.target.value,
      },
    });
  };

  const handleChangeMargin = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!qrCode || !popup) {
      return;
    }
    qrCode.update({
      margin: parseInt(event.target.value),
    });
    popup.update({
      margin: parseInt(event.target.value),
    });
  };

  const handleChangeQRImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!qrCode || !popup) {
      return;
    }
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      qrCode.update({
        image: e.target?.result as string,
      });
      popup.update({
        image: e.target?.result as string,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleChangeDotType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!qrCode || !popup) {
      return;
    }
    const selectedType = event.target.value as DotType;

    qrCode.update({
      dotsOptions: {
        type: selectedType || "rounded",
      },
    });
    popup.update({
      dotsOptions: {
        type: selectedType || "rounded",
      },
    });
    setSelectedType(selectedType);
  };

  return (
    <section className={styles.customize}>
      <h2 className={styles.h2_title}>QRコードのカスタマイズ（機能追加中）</h2>
      <div className={styles.customize_inner}>
        <h3 className={styles.h3_title}>アイコン設定</h3>
        <div className={styles.customize_content}>
          <div className={styles.button} onClick={() => handleClearIcon()}>
            アイコンをクリア
          </div>
        </div>
        <div className={styles.customize_content}>
          <p>中央画像を追加</p>
          <input
            type="file"
            className={styles.button}
            onChange={(event) => handleChangeQRImage(event)}
          />
        </div>
      </div>
      <div className={styles.customize_inner}>
        <h3 className={styles.h3_title}>ドットのカスタマイズ</h3>
        <div className={styles.customize_content}>
          <select
            id="type-select"
            value={selectedType}
            onChange={(event) => handleChangeDotType(event)}
          >
            {types.map((type) => (
              <option key={type} value={type}>
                {dot[type]}
              </option>
            ))}
          </select>
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
      <div className={styles.customize_inner}>
        <h3 className={styles.h3_title}>余白の設定</h3>
        <div className={styles.customize_content}>
          <input
            type="number"
            className={styles.button}
            onChange={(event) => handleChangeMargin(event)}
          />
        </div>
      </div>
    </section>
  );
};

export default Customize;
