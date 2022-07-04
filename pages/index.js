import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout title="Home">
      <div style={{ position: "relative", width: "100%", height: "60vw" }}>
        <Image
          src="/main-img.png"
          alt="メイン画像"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <section className={`${styles.container} ${styles.About}`}>
        <div className={styles.Block1}>
          <div className={styles.AboutImg}
          style={{backgroundImage:`url('/AboutImg1.jpg')`}}
          >
           
          </div>
          <div className={styles.AboutText}>
            <p className={styles.AboutTitle}>就労継続支援B型事業所ってなに？</p>
            <p className={styles.AboutComent}>
              年齢や体力などの面で雇用契約を結んで働くことが困難な方が、軽作業などの就労訓練を行うことができる福祉サービスです。
            </p>
          </div>
        </div>
        <div className={styles.Block2}>
          <div className={styles.AboutImg}
          style={{backgroundImage:`url('/AboutImg1.jpg')`}}
          >
           
          </div>
          <div className={styles.AboutText}>
            <p className={styles.AboutTitle}>就労継続支援B型事業所ってなに？</p>
            <p className={styles.AboutComent}>
              年齢や体力などの面で雇用契約を結んで働くことが困難な方が、軽作業などの就労訓練を行うことができる福祉サービスです。
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
