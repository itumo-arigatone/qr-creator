"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "@/app/styles/qr_creator.module.css";

type Props = {
  isHideTop: boolean;
  ref: any;
};

const Popup = ({ isHideTop, ref }: Props) => {
  const [isDismissed, setDismissed] = useState(false);

  return (
    <div className={styles.popup}>
      {(isHideTop && !isDismissed && (
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
