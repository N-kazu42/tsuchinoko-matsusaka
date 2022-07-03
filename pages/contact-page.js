import Layout from "../components/Layout";
import {motion} from "framer-motion";
import styles from "../styles/Home.module.scss";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const Contact = () => {
  const {ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() =>{
    if(inView){
      animation.start({
        x: 0,
        transition: {
          type: 'spring',duration: 1, bounce: 0.3
        }
      });
    }
    if(!inView){
      animation.start({x:'-100px'})
    }
    
  },[inView]);
  return (
    <Layout title="Contact">
      <div className={styles.hibox}>testcontainer</div>
      <motion.div 
      animation={animation}>
      <div ref={ref}>contact-page</div>
      </motion.div>
    </Layout>
  )
}

export default Contact


