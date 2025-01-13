"use client";

// import Image from "next/image";
import styles from "./page.module.css";
import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";

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
    margin: 20,
  },
});

export default function Home() {
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
    <div className={styles.page}>
      <header className={styles.header}>ヘッダーも共通のつくる</header>
      <main className={styles.main}>
        <div className="qr-code-area">
          <div>
            <input value={url} onChange={onUrlChange} />
            <select onChange={onExtensionChange} value={fileExt}>
              <option value="png">PNG</option>
              <option value="jpeg">JPEG</option>
              <option value="webp">WEBP</option>
            </select>
            <button onClick={onDownloadClick}>Download</button>
          </div>
          <div className="preview" ref={ref} />
        </div>
      </main>
      <footer className={styles.footer}>フッターも共通のつくる</footer>
    </div>
  );
}
