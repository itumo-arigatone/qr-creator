import styles from "@/app/styles/share_button.module.css";

const ShareButton = () => {
  return (
    <div className={styles.share}>
      <button
        className={styles.share_button}
        onClick={() => {
          const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            "https://qr.itsumoarigatone.com"
          )}&text=${encodeURIComponent(
            "QRコードを作成しました！読み込んでみてね！"
          )}&hashtags=QRコード作成,カワイイQR`;
          window.open(shareUrl, "_blank", "width=550,height=420");
        }}
      >
        <svg viewBox="0 0 24 24" width="16" height="16">
          <path
            fill="currentColor"
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
          />
        </svg>
        Xでシェア
      </button>
    </div>
  );
};

export default ShareButton;
