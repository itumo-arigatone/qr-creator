"use client";

import React, { useEffect, useRef, useState } from "react";
import DownloadButton from "@/app/_components/DownloadButton";
import Customize from "@/app/_components/Customize";
import QRCodeStyling from "qr-code-styling";
import styles from "@/app/styles/qr_creator.module.css";
import "@/app/styles/selectbox.css";

type FileExtension = "png" | "jpeg" | "webp" | "svg";

const QRCreator = () => {
  const [url, setUrl] = useState<string>("https://www.itsumoarigatone.com/");
  const [fileExt, setFileExt] = useState<FileExtension>("png"); // 型どうすればいいのかわからない
  const [activeIndex, setActiveIndex] = useState<number>(0); // 選択されたラジオボタンのインデックス
  const ref = useRef(null);
  const qrCodeRef = useRef<QRCodeStyling | null>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    qrCodeRef.current = new QRCodeStyling({
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

    qrCodeRef.current.append(ref.current);
  }, []);

  useEffect(() => {
    if (!qrCodeRef.current) {
      return;
    }
    qrCodeRef.current.update({
      data: url,
    });
  }, [url]);

  useEffect(() => {
    if (qrCodeRef.current && ref.current) {
      return;
    }
    qrCodeRef.current = new QRCodeStyling({
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
  }, [ref]);

  const onUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setUrl(event.target.value);
  };

  const onDownloadClick = () => {
    if (!qrCodeRef.current) {
      return;
    }

    qrCodeRef.current.download({
      extension: fileExt,
    });
  };

  const handleClick = (index: number, value: string) => {
    if (
      value === "png" ||
      value === "jpeg" ||
      value === "webp" ||
      value === "svg"
    ) {
      setFileExt(value);
      setActiveIndex(index); // インデックスを更新
    }
  };

  const handleClear = () => {
    if (url === "") return;
    if (window.confirm("入力したテキストをクリアしますか？")) {
      setUrl("");
    }
  };

  return (
    <>
      <section className={styles.qr_creator}>
        <div className={styles.input_wrapper}>
          <input
            value={url}
            onChange={onUrlChange}
            className={styles.textbox}
          />
          <div className={styles.clear} onClick={() => handleClear()}>
            ×
          </div>
        </div>
        <div className={styles.preview} ref={ref} />

        <div className={styles.download_area}>
          <div>
            <svg className="filter" version="1.1">
              <defs>
                <filter id="gooeyness">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
                    result="gooey"
                  />
                  <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
                </filter>
              </defs>
            </svg>
            <div className="radios-boxes">
              <div className="radios">
                <input
                  type="radio"
                  name="radio"
                  id="radio1"
                  className={`radio ${activeIndex === 0 ? "active" : ""}`}
                  onClick={(event: React.MouseEvent<HTMLInputElement>) =>
                    handleClick(0, event.currentTarget.value)
                  }
                  value="png"
                />
                <input
                  type="radio"
                  name="radio"
                  id="radio2"
                  className={`radio ${activeIndex === 1 ? "active" : ""}`}
                  onClick={(event: React.MouseEvent<HTMLInputElement>) =>
                    handleClick(1, event.currentTarget.value)
                  }
                  value="jpeg"
                />
                <input
                  type="radio"
                  name="radio"
                  id="radio3"
                  className={`radio ${activeIndex === 2 ? "active" : ""}`}
                  onClick={(event: React.MouseEvent<HTMLInputElement>) =>
                    handleClick(2, event.currentTarget.value)
                  }
                  value="webp"
                />
                <div
                  className={`ball ${
                    activeIndex !== null ? `pos${activeIndex}` : ""
                  }`}
                ></div>
              </div>
              <div className="labels">
                <label
                  htmlFor="radio1"
                  data-value="png"
                  className={`label ${activeIndex === 0 ? "active" : ""}`}
                  onClick={(event: React.MouseEvent<HTMLLabelElement>) =>
                    handleClick(
                      0,
                      event.currentTarget.getAttribute("data-value") || ""
                    )
                  }
                >
                  png
                </label>
                <label
                  htmlFor="radio2"
                  data-value="jpeg"
                  className={`label ${activeIndex === 1 ? "active" : ""}`}
                  onClick={(event: React.MouseEvent<HTMLLabelElement>) =>
                    handleClick(
                      1,
                      event.currentTarget.getAttribute("data-value") || ""
                    )
                  }
                >
                  jpeg
                </label>
                <label
                  htmlFor="radio3"
                  data-value="webp"
                  className={`label ${activeIndex === 2 ? "active" : ""}`}
                  onClick={(event: React.MouseEvent<HTMLLabelElement>) =>
                    handleClick(
                      2,
                      event.currentTarget.getAttribute("data-value") || ""
                    )
                  }
                >
                  webp
                </label>
              </div>
            </div>
          </div>
          <div>
            <DownloadButton onDownloadClick={onDownloadClick} />
          </div>
        </div>
      </section>
      {/* <div>広告のバナー挿入</div> */}
      <section className={styles.section}>
        <h2 className={styles.h2_title}>
          QRコードのカスタマイズ（随時実装中）
        </h2>
        {qrCodeRef.current && <Customize qrCode={qrCodeRef.current} />}
      </section>
    </>
  );
};

export default QRCreator;
