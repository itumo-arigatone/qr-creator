import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import type { Metadata } from "next";
import styles from "@/app/styles/page.module.css";
import buttonStyles from "@/app/styles/button.module.css";
import "@/app/styles/how_to/page.css";
import faqStyles from "@/app/styles/faq/page.module.css";

export const metadata: Metadata = {
  title: "よくある質問",
  description:
    "かんたん！かわいいQRコード作成サイトのよくある質問についてのページです。",
};

export default function Page() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className="faq-area">
          <h1 className={styles.h1_title}>よくある質問</h1>
          <div className={faqStyles.faq_container}>
            <section>
              <h2 className={styles.h2_title}>Q. お金はかかりますか？</h2>
              <div className={styles.description}>
                <p>
                  A. このサイトは無料です。どんどんQRコードを作成してください。
                </p>
              </div>
            </section>
            <section>
              <h2 className={styles.h2_title}>
                Q. QRコードは自由に使えますか？
              </h2>
              <div className={styles.description}>
                <p>A. このサイトで作成したQRコードは自由に使えます。</p>
              </div>
            </section>
            <section>
              <h2 className={styles.h2_title}>
                Q. QRコードの有効期限はありますか？
              </h2>
              <div className={styles.description}>
                <p>
                  A.
                  一般的なQRコードには有効期限はありません。ただし、リンク先のサービスが停止された場合など、QRコードが機能しなくなる可能性があります。
                </p>
              </div>
            </section>
            <section>
              <h2 className={styles.h2_title}>
                Q. QRコードにどのくらいの情報を含めることができますか？
              </h2>
              <div className={styles.description}>
                <p>
                  A.
                  QRコードは最大で数字のみの場合7,089文字、英数字の場合4,296文字まで格納可能です。ただし、情報量が増えるとコードが複雑になり、読み取りにくくなる場合があります。
                </p>
              </div>
            </section>
            <section>
              <h2 className={styles.h2_title}>
                Q. QRコードのデザインをカスタマイズできますか？
              </h2>
              <div className={styles.description}>
                <p>
                  A.
                  はい、当サイトではQRコードの色や形状、中央にロゴやアイコンを追加するなど、デザインのカスタマイズが可能です。
                </p>
              </div>
            </section>
            <section>
              <h2 className={styles.h2_title}>
                Q. QRコードの商用利用は可能ですか？
              </h2>
              <div className={styles.description}>
                <p>A. はい、当サイトで作成したQRコードは商用利用も可能です。</p>
              </div>
            </section>
            <section>
              <h2 className={styles.h2_title}>
                Q. QRコードの読み取りに特別なアプリが必要ですか？
              </h2>
              <div className={styles.description}>
                <p>
                  A.
                  多くのスマートフォンでは、標準のカメラアプリでQRコードを読み取ることができます。もし読み取れない場合は、専用のQRコードリーダーアプリをご利用ください。
                </p>
              </div>
            </section>
            <section>
              <h2 className={styles.h2_title}>
                Q. QRコードを印刷物に掲載する際の注意点はありますか？
              </h2>
              <div className={styles.description}>
                <p>
                  A.
                  QRコードは十分な大きさで、コントラストの高い色で印刷してください。また、周囲に余白を設けることで、読み取りやすさが向上します。
                </p>
              </div>
            </section>
          </div>
        </div>
        <div className={faqStyles.button_container}>
          <a href="/" className={buttonStyles.button_base}>
            トップページに戻る
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
