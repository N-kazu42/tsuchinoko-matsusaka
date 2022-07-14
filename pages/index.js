import Layout from "../components/Layout";
import styles from "../styles/Home.module.scss";
import { useEffect, useRef } from "react";

export default function Home() {
  const targets = useRef([]);
  const addToTargets = (el) => {
    if (el && !targets.current?.includes(el)) {
      targets.current.push(el);
    }
  };

  useEffect(() => {
    targets.current.forEach((target) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.effect);
          } else {
            entry.target.classList.remove(styles.effect);
          }
        });
      });
      observer.observe(target);
    });
  }, [targets]);

  return (
    <Layout title="つちのこ　就労継続支援B型事業所">
      <div
        className={styles.MainImg}
        style={{ backgroundImage: `url('/main-img.webp')` }}
      ></div>
      <section className={`${styles.container} ${styles.About}`}>
        <div
          key={1}
          ref={addToTargets}
          className={`${styles.Block1} ${styles.visible}`}
        >
          <div
            className={styles.AboutImg}
            style={{ backgroundImage: `url('/AboutImg1.jpg')` }}
          ></div>
          <div className={styles.AboutText}>
            <p className={`${styles.AboutTitle} ${styles.TitleFont}`}>
              就労継続支援B型事業所ってなに？
            </p>
            <p className={`${styles.AboutComent} ${styles.ComentFont}`}>
              年齢や体力などの面で雇用契約を結んで働くことが困難な方が、軽作業などの就労訓練を行うことができる福祉サービスです。
            </p>
          </div>
        </div>
        <div
          key={2}
          ref={addToTargets}
          className={`${styles.Block2} ${styles.visible}`}
        >
          <div
            className={styles.AboutImg}
            style={{ backgroundImage: `url('/AboutImg1.jpg')` }}
          ></div>
          <div className={styles.AboutText}>
            <p className={`${styles.AboutTitle} ${styles.TitleFont}`}>
              就労継続支援B型事業所「つちのこ」　とは
            </p>
            <p className={`${styles.AboutComent} ${styles.ComentFont}`}>
              就労継続支援B型事業所「つちのこ」は松阪市より許認可を受けた施設です。
              利用者様それぞれの、個々の能力に応じた活動を基本姿勢とし、必要なスキルや能力の向上のサポートを致します。
              つちのこは、障がいをお持ちの方でも、今までの経験や個々の性格に合わせて、才能を開花していけるよう、支援・サポート致します
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
