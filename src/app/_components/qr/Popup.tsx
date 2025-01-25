"use client";

import React, { useEffect, useState } from "react";
import styles from "@/app/styles/qr_creator.module.css";
import QRCodeStyling from "qr-code-styling";

type Props = {
  ref: any;
  popupQrCode: QRCodeStyling | null;
};

const Popup = ({ ref, popupQrCode }: Props) => {
  const [isDismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    popupQrCode?.update();
  }, [isDismissed]);

  return (
    <div className={styles.popup}>
      {(!isDismissed && (
        <>
          <div
            className={`${styles.preview} ${styles.popup_preview}`}
            ref={ref}
          />
          <div onClick={() => setDismissed(true)}>閉じる</div>
        </>
      )) ||
        (isDismissed && <div onClick={() => setDismissed(false)}>再表示</div>)}
    </div>
  );
};

export default Popup;
