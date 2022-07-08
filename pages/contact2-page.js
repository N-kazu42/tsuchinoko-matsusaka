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
    <Layout title="Contact">
      <div className={styles.box}>testcontainer</div>
      <motion.div 
      animate={animation} >
      <div ref={ref}>
        <p className={styles.box2}>contact-page</p>
      </div>
      </motion.div>
    </Layout>
  )
}

export default Contact


