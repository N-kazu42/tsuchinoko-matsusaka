import Layout from "../components/Layout";
import styles from "../styles/Home.module.scss";

const Contact = () => {
  return (
    <Layout title="お問い合わせ：つちのこ　就労継続支援B型事業所">
      <div className={styles.Contact}>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe9qfAvu01fWrwT0I7vJcbYrfvKgU2nJPd53t5IoJo1xopAJA/viewform?embedded=true" width="640" height="1200" frameBorder="0" marginHeight="0" marginWidth="0">読み込んでいます…</iframe>
      </div>
    </Layout>
  )
}

export default Contact


