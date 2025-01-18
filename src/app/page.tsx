import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import QRCreator from "@/app/_components/qr/QRCreator";
import styles from "@/app/styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className="qr-code-area">
          <h1 className={styles.h1_title}>無料でQRコードを作成</h1>
          <div className={styles.description}>
            <div>
              <p>URLを入力するとQRコードが生成されます。</p>
              <p>
                色や中心の画像を設定する場合はページ下部のQRコードのカスタマイズから設定してください。
              </p>
            </div>
          </div>
          <QRCreator />

          {/* <div>広告のバナー挿入</div> */}

          <div>
            <h2>QRコードのカスタマイズ</h2>
            <div>{/* <div>詳細設定</div> */}</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
