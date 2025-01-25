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
    isHideTop &&
    !isDismissed && (
      <div className={`${isHideTop ? styles.popup : ""}`}>
        <div className={`${styles.preview}`} ref={ref} />
        <div onClick={() => setDismissed(true)}>閉じる</div>
      </div>
    )
  );
};

export default Popup;
