import Layout from "../components/Layout";
import styles from "../styles/Home.module.scss";

const Contact = () => {
  return (
    <Layout title="お問い合わせ：つちのこ　就労継続支援B型事業所">
      <div
        className={styles.SubImg}
        style={{ backgroundImage: `url('/sub-img.webp')` }}
      >
        <h2>お問い合わせ</h2>
      </div>
      <section className={styles.Contact}>
        <div className={`${styles.Text} ${styles.container}`}>
          <p className={`${styles.Coment} ${styles.ComentFont}`}>
            「つちのこ」のホームページへお越し頂きありがとうございました。
            <br />
            見学のお問い合わせ・ご質問などをお受けしています。下記フォームまたはお電話でご連絡下さい。
            <br />
            内容によっては、回答をさしあげるのにお時間をいただくこともございます。
            <br />
            また、休業日中のお問い合わせは翌営業日以降の対応となりますのでご了承ください。
          </p>
        </div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScxY-1DJofrzfmjf6rVbNWUIe0dn8UfJX4Cx7NRgeeezwWK-A/viewform?embedded=true"
          width="640"
          height="1200"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          読み込んでいます…
        </iframe>
      </section>
    </Layout>
  );
};

export default Contact;
