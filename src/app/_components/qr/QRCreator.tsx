"use client";

import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";
import DownloadButton from "@/app/_components/DownloadButton";
import styles from "@/app/styles/qr_creator.module.css";
import "@/app/styles/selectbox.css";

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

  const onDownloadClick = () => {
    // qrCode.download({
    //   extension: fileExt,
    // });
  };

  const [activeIndex, setActiveIndex] = useState<number>(0); // 選択されたラジオボタンのインデックス

  const handleClick = (index: number, value: string) => {
    setFileExt(value);
    setActiveIndex(index); // インデックスを更新
  };

  return (
    <section className={styles.qr_creator}>
      <div className={styles.input_wrapper}>
        <input value={url} onChange={onUrlChange} className={styles.textbox} />
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
  );
};

export default QRCreator;
