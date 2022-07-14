import Layout from "../components/Layout";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.scss";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import Image from "next/image";

export default function Recruitment() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const animation = useAnimation();

  useEffect(() => {
    console.log("use effect hook, inView =", inView);
    if (inView) {
      animation.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 1 },
      }));
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: "5%",
      });
    }
  }, [inView]);
  return (
    <Layout title="利用者募集：つちのこ　就労継続支援B型事業所">
      <div
        className={styles.SubImg}
        style={{ backgroundImage: `url('/sub-img.webp')` }}
      >
        <h2>利用者募集</h2>
      </div>
      <section className={`${styles.recruitment}`}>
        <div className={`${styles.Text} ${styles.container}`}>
          <p className={`${styles.Coment} ${styles.ComentFont}`}>
            一般企業への就職が困難な障がいをお持ちの方で何かを始めたい！チャレンジしたい！とお考えの方、私たちといっしょにお仕事しませんか？
          </p>
        </div>
        <div className={styles.Title}>
          <p>施設紹介</p>
          <p className={styles.SubTitle}>introduction</p>
        </div>
        <div className={`${styles.Imgs} ${styles.container}`}>
          <div
            className={styles.Img}
          >
            <Image src={"/AboutImg1.webp"} layout="fill" alt="logo" />
          </div>
          <div
            className={styles.Img}
          >
            <Image src={"/AboutImg1.webp"} layout="fill" alt="logo" />
          </div>
          <div
            className={styles.Img}
          >
            <Image src={"/AboutImg1.webp"} layout="fill" alt="logo" />
          </div>
          <div
            className={styles.Img}
          >
            <Image src={"/AboutImg1.webp"} layout="fill" alt="logo" />
          </div>
          <div
            className={styles.Img}
          >
            <Image src={"/AboutImg1.webp"} layout="fill" alt="logo" />
          </div>
          <div
            className={styles.Img}
          >
            <Image src={"/AboutImg1.webp"} layout="fill" alt="logo" />
          </div>
         
        </div>
        <div className={styles.Title}>
          <p>1日の流れ</p>
          <p className={styles.SubTitle}>flow</p>
        </div>
        <div className={`${styles.Days} ${styles.container}`}>
          <dvi className={styles.DaysContainer}>
            <ul className={styles.TimeSchedule}>
              <li>
                <span className={styles.Time}>9:30</span>
                <div className={styles.SchBox}>
                  <p className={styles.SchTitle}>朝のスケジュール</p>
                  <div className={styles.SchTx}>
                    <p>（その日の説明）</p>
                  </div>
                </div>
              </li>
              <li>
                <span className={styles.Time}>10:30</span>
                <div className={styles.SchBox}>
                  <p className={styles.SchTitle}>作業開始/移動</p>
                  <div className={styles.SchTx}>
                    <p>（15分休憩）</p>
                  </div>
                </div>
              </li>
              <li>
                <span className={styles.Time}>12:00</span>
                <div className={styles.SchBox}>
                  <p className={styles.SchTitle}>昼食/休憩</p>
                  <div className={styles.SchTx}></div>
                </div>
              </li>
              <li>
                <span className={styles.Time}>13:00</span>
                <div className={styles.SchBox}>
                  <p className={styles.SchTitle}>作業開始</p>
                  <div className={styles.SchTx}>
                    <p>（15分休憩）</p>
                  </div>
                </div>
              </li>
              <li>
                <span className={styles.Time}>15:30</span>
                <div className={styles.SchBox}>
                  <p className={styles.SchTitle}>終業</p>
                  <div className={styles.SchTx}>
                    <p></p>
                  </div>
                </div>
              </li>
            </ul>
          </dvi>
        </div>
        <div className={styles.Title}>
          <p>ご利用の流れ</p>
          <p className={styles.SubTitle}>Usage flow</p>
        </div>
        <div className={`${styles.Flow} ${styles.container}`}ref={ref}>
          <motion.div
            custom={0}
            animate={animation}
            className={styles.FlowBlock}
          >
            <div className={styles.FlowText}>
              <p className={`${styles.FlowTitle} ${styles.TitleFont}`}>
                見学・面談
              </p>
              <p className={`${styles.FlowComent} ${styles.ComentFont}`}>
                施設を見学していただき、作業内容や雰囲気を見て頂き、サービス管理と面談しわかりやすく説明いたします
              </p>
            </div>
          </motion.div>
          <motion.div
            custom={1}
            animate={animation}
            className={styles.FlowBlock}
          >
            <div className={styles.FlowText}>
              <p className={`${styles.FlowTitle} ${styles.TitleFont}`}>体験</p>
              <p className={`${styles.FlowComent} ${styles.ComentFont}`}>
                実際に作業等、一日の流れに沿って過ごして頂き、自分らしく働けて、合っているのか体験することができます
              </p>
            </div>
          </motion.div>
          <motion.div
            custom={2}
            animate={animation}
            className={styles.FlowBlock}
          >
            <div className={styles.FlowText}>
              <p className={`${styles.FlowTitle} ${styles.TitleFont}`}>
                個別支援計画の作成
              </p>
              <p className={`${styles.FlowComent} ${styles.ComentFont}`}>
                相談員様・サービス管理責任者との無理のない計画を立て自分らしく働けるリズムの計画を作成して行きます
              </p>
            </div>
          </motion.div>
          <motion.div
            custom={3}
            animate={animation}
            className={styles.FlowBlock}
          >
            <div className={styles.FlowText}>
              <p className={`${styles.FlowTitle} ${styles.TitleFont}`}>契約</p>
              <p className={`${styles.FlowComent} ${styles.ComentFont}`}>
                個別支援計画をもとにご確認いただき、必要書類等を作成し契約してまいります
              </p>
            </div>
          </motion.div>
          <motion.div
            custom={4}
            animate={animation}
            className={styles.FlowBlock}
          >
            <div className={styles.FlowText}>
              <p className={`${styles.FlowTitle} ${styles.TitleFont}`}>
                サービス開始
              </p>
              <p className={`${styles.FlowComent} ${styles.ComentFont}`}>
                個別支援計画に沿ったサービスを提供してまいります
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
