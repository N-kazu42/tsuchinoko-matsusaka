import Layout from "../components/Layout";
import styles from "../styles/Home.module.scss";
import { useEffect,useRef } from "react";

export default function Home() {
  const targets = useRef([])
  const addToTargets = (el) => {
    if (el && !targets.current?.includes(el)) {
      targets.current.push(el)
    }
  }

  useEffect(() => {
    targets.current.forEach((target) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.effect)
          } else {
            entry.target.classList.remove(styles.effect)
          }
        })
      })
      observer.observe(target)
    })
  }, [targets])

  return (
    <Layout title="つちのこ　就労継続支援B型事業所">
      <div
        className={styles.MainImg}
        style={{ backgroundImage: `url('/main-img.png')` }}
      ></div>
      <section className={`${styles.container} ${styles.About}`}>
        <div key={1} ref={addToTargets} className={`${styles.Block1} ${styles.visible}`}>
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
        <div key={2} ref={addToTargets} className={`${styles.Block2} ${styles.visible}`}>
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
      </section>
    </Layout>
  );
}
