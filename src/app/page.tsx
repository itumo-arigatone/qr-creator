"use client";

// import Image from "next/image";
import Header from "@/app/_components/Header";
import styles from "@/app/styles/page.module.css";
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
    margin: 5,
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
      <Header />
      <main className={styles.main}>
        <div className="qr-code-area">
          <h1>無料でQRコードを作成</h1>
          <div>
            <p>URLを入力するとQRコードが生成されます。</p>
            <p>
              色や中心に画像を設定する場合はページ下部のQRコードのカスタマイズから設定してください。
            </p>
          </div>
          <div>
            <input value={url} onChange={onUrlChange} />
            <select onChange={onExtensionChange} value={fileExt}>
              <option value="png">PNG</option>
              <option value="jpeg">JPEG</option>
              <option value="webp">WEBP</option>
            </select>
          </div>
          <div className={styles.preview} ref={ref} />
          <button onClick={onDownloadClick}>Download</button>

          {/* <div>広告のバナー挿入</div> */}

          <div>
            <h2>QRコードのカスタマイズ</h2>
            <div>{/* <div>詳細設定</div> */}</div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>フッターも共通のつくる</footer>
    </div>
  );
}
