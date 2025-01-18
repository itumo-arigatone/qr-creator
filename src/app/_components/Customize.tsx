import styles from "@/app/styles/customize.module.css";

const Customize = ({ qrCode }: any) => {
  const handleClearIcon = () => {
    qrCode.update({
      image: "",
    });
  };

  return (
    <section className={styles.customize}>
      <h3 className={styles.h3_title}>アイコン設定</h3>
      <div className={styles.customize_content}>
        <div className={styles.button} onClick={() => handleClearIcon()}>
          アイコンをクリア
        </div>
      </div>
    </section>
  );
};

export default Customize;
