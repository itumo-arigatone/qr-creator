import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import type { Metadata } from "next";
import styles from "@/app/styles/page.module.css";
import howToStyles from "@/app/styles/how_to/page.module.css";

export const metadata: Metadata = {
  title: "QRコードはどうやって作るの？",
  description:
    "QRコードの作り方を解説しています。アプリダウンロード不要！シンプルなQRコード作成ツールです。画像の設定や色の変更など簡単にカスタマイズ可能！おしゃれでかわいいQRコードを自作しよう！！。",
};

export default function Page() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className="qr-code-area">
          <h1 className={styles.h1_title}>QRコードの作り方</h1>
          <section className={howToStyles.section}>
            <h2 className={howToStyles.h2_title}>どこで作るの？</h2>
            <div className="description">
              <p>
                <a
                  target="_blank"
                  href="https://qr.itsumoarigatone.com"
                  className="how_to_link"
                >
                  https://qr.itsumoarigatone.com
                </a>
              </p>
              <p>↑のサイトで作れます。</p>
            </div>
          </section>
          <section className={howToStyles.section}>
            <h2 className={howToStyles.h2_title}>作り方</h2>
            <h3 className={howToStyles.h3_title}>
              QRコードにしたいURLを入力しよう
            </h3>
            <div className="description">
              <p>サイトにアクセスするとQRコードが出ますね？</p>
              <p>
                何やらURLが書かれている個所があります。ここを書き換えてみましょう。
              </p>
              <img src="/images/how_to/01.png" alt="" className="how_to_img" />
            </div>
            <h3 className={howToStyles.h3_title}>中央のロゴを変更しよう</h3>
            <div className="description">
              <p>
                アリのマークのロゴがQRコードのサイトと合いませんか？そんな時はロゴを変更しましょう。
              </p>
              <p>
                下にスクロールすると「アイコンをクリア」と「中央画像を追加」のボタンがあります。
              </p>
              <img src="/images/how_to/02.png" alt="" className="how_to_img" />
              <p>
                ロゴを消すだけなら「アイコンをクリア」をタップしてアイコンを消しちゃいましょう
              </p>
              <img src="/images/how_to/03.png" alt="" className="how_to_img" />
              <p>消えましたね！</p>
              <p>
                変更したい場合は「中央画像を追加」で変更しましょう。ただし、iPhoneで撮っているような写真は使用できません。
                具体的に言うと対応している画像はPNGとJPEG画像に対応しています。SVGはどうだったかな〜。
              </p>
              <img src="/images/how_to/04.png" alt="" className="how_to_img" />
              <p>試しにXのロゴに変更しました</p>
            </div>
            <h3 className={howToStyles.h3_title}>QRコードの形を変更しよう</h3>
            <div className="description">
              <p>QRのスタイルを変更してオリジナリティを出しましょう</p>
              <p>
                下にスクロールすると「ドットのカスタマイズ」のボタンがあります。ここをタップしてQRの形を変更しましょう。
              </p>
              <img src="/images/how_to/02.png" alt="" className="how_to_img" />
              <p>今回はドットを選択してみました</p>
              <img src="/images/how_to/05.png" alt="" className="how_to_img" />
            </div>
            <h3 className={howToStyles.h3_title}>色を変更しよう</h3>
            <div className="description">
              <p>あとは色を設定しましょう。</p>
              <p>
                色を設定する上で注意することはQRコードが読み取れるかが一番重要です。読み取れないのに大量に印刷しちゃ悲惨ですからね。
              </p>
              <img src="/images/how_to/06.png" alt="" className="how_to_img" />
              <p>自分に合った色を選んでQRコードを作成しましょう！</p>
            </div>
            <h3 className={howToStyles.h3_title}>余白を設定しよう</h3>
            <div className="description">
              <p>色が設定できたのになんか窮屈だね。</p>
              <p>
                オシャレは余白が大事って何かの本の表紙で見たことある。気がする。
              </p>
              <p>なので「余白の設定」で数字を入力して余白を設定しよう</p>
              <p>おすすめは10前後がいいかと思います</p>
              <img src="/images/how_to/07.png" alt="" className="how_to_img" />
            </div>
            <h3 className={howToStyles.h3_title}>ダウンロードしよう</h3>
            <div className="description">
              <p>
                QRコードが完成しましたね！あとはダウンロードして使うだけです。
              </p>
              <p>
                PNGとかJPEGとか選択できますね。特にこだわりがなければPNGでダウンロードするのがいいと思います。
              </p>
              <img src="/images/how_to/08.png" alt="" className="how_to_img" />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
