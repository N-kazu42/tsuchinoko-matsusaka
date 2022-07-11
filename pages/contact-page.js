import Layout from "../components/Layout";
import {motion} from "framer-motion";
import styles from "../styles/Home.module.scss";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const Contact = () => {
  const {ref, inView } = useInView({
    threshold:0.2
  });
  const animation = useAnimation();

  useEffect(() =>{
    console.log("use effect hook, inView =", inView);
    if(inView){
      animation.start({
        opacity: 1,
        
        transitionDuration: '500ms'
      });
    }
    if(!inView){
      animation.start({
        opacity: 0,
        y:'-10px',
      });
    }
    
  },[inView]);
  return (
    <Layout title="お問い合わせ：つちのこ　就労継続支援B型事業所">
      <div className={styles.Contact}>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe9qfAvu01fWrwT0I7vJcbYrfvKgU2nJPd53t5IoJo1xopAJA/viewform?embedded=true" width="640" height="1200" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
      </div>
    </Layout>
  )
}

export default Contact


