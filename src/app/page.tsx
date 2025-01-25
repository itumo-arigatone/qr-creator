"use client";
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
          <section className={styles.description}>
            <div>
              <p>URLを入力するとQRコードが生成されます。</p>
              <p>
                色や中心の画像を設定する場合はページ下部のQRコードのカスタマイズから設定してください。
              </p>
              <p>
                おしゃれで、カッコよくて、かわいいQRコードを作成しましょう！
              </p>
            </div>
          </section>
          <QRCreator />
        </div>
      </main>
      <Footer />
    </div>
  );
}
