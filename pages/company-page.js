import Layout from "../components/Layout";
import styles from "../styles/Home.module.scss";

const Company = () => {

  return (
    <Layout title="会社概要：つちのこ　就労継続支援B型事業所">
      <div
        className={styles.SubImg}
        style={{ backgroundImage: `url('/sub-img.webp')` }}
      >
        <h2>会社概要</h2>
      </div>
      <section className={`${styles.company}`}>
          <div className={styles.Title}>
            <p>施設方針</p>
            <p className={styles.SubTitle}>policy</p>
          </div>
      <div className={`${styles.Text} ${styles.container}`}>
          <p className={`${styles.Coment} ${styles.ComentFont}`}>
          つちのこでは、一人一人のペースに合わせて作業を行います。作業場に来ていただき、１回でも笑顔になれることを目標としています。屋内や屋外での作業の中からご本人様の希望に合わせて１日の作業を決めていきます。
          </p>
        </div>
        <div className={`${styles.Profile}`}>
        <div className={styles.Title}>
            <p>会社概要</p>
            <p className={styles.SubTitle}>about</p>

          </div>
        <div className={`${styles.Block2} ${styles.container}`}>
          <div
            className={styles.ProfileImg}
            style={{ backgroundImage: `url('/img/AboutImg2.webp')` }}
          ></div>
          <div className={styles.ProfileText}>
            <div className={`${styles.ComentFont}`}>
              <p>施設名</p>
              <p>つちのこ</p>
            </div>
            <div className={`${styles.ComentFont}`}>
              <p>住所</p>
              <p>松阪市東町543番地4</p>
            </div>
            <div className={`${styles.ComentFont}`}>
              <p>TEL</p>
              <p>0598-31-3889</p>
            </div>
            <div className={`${styles.ComentFont}`}>
              <p>FAX</p>
              <p>0598-31-3879</p>
            </div>
            <div className={`${styles.ComentFont}`}>
              <p>メールアドレス</p>
              <p>syuubtutinoko@gamil.com</p>
            </div>
          </div>
        </div>
      </div>
      </section>
    </Layout>
  );
};

export default Company;
