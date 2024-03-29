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
          <p>作業内容のご案内</p>
          <p className={styles.SubTitle}>information</p>
        </div>
        <div className={styles.Info}>
          <p>販売店募集</p>
        </div>
        
        <div className={`${styles.InfoBlock} ${styles.container}`}>
          <div className={styles.InfoCard}>
            <div className={styles.InfoCardTitle}>腐葉土づくり</div>
            <div className={styles.InfoCardText}>
              市内の公園などで落ち葉を拾い、見晴らしのいい土地で発酵させて腐葉土にします。
              できた腐葉土を作業所に持ってきてふるいにかけて袋詰めを行います。袋詰めした商品はベルファームなどで販売を行っています。
            </div>
            <div className={styles.InfoCardImg}>
              <Image
                src={"/img/CardImg1.webp"}
                layout="fill"
                alt="腐葉土づくり風景"
              />
            </div>
          </div>
          <div className={styles.InfoCard}>
            <div className={styles.InfoCardTitle}>レモングラスづくり</div>
            <div className={styles.InfoCardText}>
              市内の見晴らしのいい土地で無農薬のレモングラスを栽培。
              収穫し水洗い、自然乾燥、手作業でカットし袋詰めした商品は、近くの市町村のお店で販売を行っています。
            </div>
            <div className={styles.InfoCardImg}>
              <Image
                src={"/img/CardImg2.webp"}
                layout="fill"
                alt="レモングラスづくり風景"
              />
            </div>
          </div>
          <div className={styles.InfoCard}>
            <div className={styles.InfoCardTitle}>茶オイルづくり</div>
            <div className={styles.InfoCardText}>
              市内の使わなくなった茶畑でお茶の実を収穫し、天日干しし手作業で殻を割り手動オイル機でオイルを抽出しています。
              バームを製造、市内のお店で販売予定です。
            </div>
            <div className={styles.InfoCardImg}>
              <Image
                src={"/img/CardImg3.webp"}
                layout="fill"
                alt="茶オイルづくり風景"
              />
            </div>
          </div>
        </div>
        <div className={`${styles.InfoBlock} ${styles.container}`}>
        <div className={styles.InfoNews}>
            
            <div className={styles.InfoNewsImg}>
              <Image
                src={"/img/NewsImg1.webp"}
                layout="fill"
                alt="新聞記事1"
              />
            </div>
          </div>
          <div className={styles.InfoNews}>
           
            <div className={styles.InfoNewsImg}>
              <Image
                src={"/img/NewsImg2.webp"}
                layout="fill"
                alt="新聞記事2"
              />
            </div>
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
        <div className={`${styles.Flow} ${styles.container}`} ref={ref}>
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
