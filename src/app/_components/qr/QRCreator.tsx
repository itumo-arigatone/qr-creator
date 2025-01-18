"use client";

import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";
import styles from "@/app/styles/qr_creator.module.css";
import boxs from "@/app/styles/selectbox.module.css";

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  image: "/itsumoarigatone.png",
  dotsOptions: {
    color: "#000000",
    type: "rounded",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 5,
  },
});

const QRCreator = () => {
  const [url, setUrl] = useState<string>("https://www.itsumoarigatone.com/");
  const [fileExt, setFileExt] = useState<any>("png"); // 型どうすればいいのかわからない
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: url,
    });
  }, [url]);

  const onUrlChange = (event: any) => {
    event.preventDefault();
    setUrl(event.target.value);
  };

  const onExtensionChange = (event: any) => {
    setFileExt(event.target.value);
  };

  const onDownloadClick = () => {
    qrCode.download({
      extension: fileExt,
    });
  };

  return (
    <section className={styles.qr_creator}>
      <div className={styles.input_wrapper}>
        <input value={url} onChange={onUrlChange} className={styles.textbox} />
      </div>
      <div className={styles.preview} ref={ref} />

      <div className={styles.download_area}>
        <div className={boxs.container}>
          <select
            onChange={onExtensionChange}
            value={fileExt}
            className={boxs.select}
          >
            <option value="png" className={boxs.option}>
              PNG
            </option>
            <option value="jpeg" className={boxs.option}>
              JPEG
            </option>
            <option value="webp" className={boxs.option}>
              WEBP
            </option>
          </select>
        </div>
        <div>
          <button onClick={onDownloadClick}>Download</button>
        </div>
      </div>
    </section>
  );
};

export default QRCreator;
