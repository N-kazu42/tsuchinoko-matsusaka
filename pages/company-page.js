import Layout from "../components/Layout";
import { motion } from "framer-motion";
// import "../styles/module.scss";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const Contact = () => {
  const controls = useAnimation()

useEffect(() => {
  controls.start(i => ({
    opacity: 0,
    x: 100,
    transition: { delay: i * 0.5 },
  }))
}, [])

  return (
    <Layout title="Contact">
      <ul className="visible">
    <motion.li custom={0} animate={controls} />
    <motion.li custom={1} animate={controls} />
    <motion.li custom={2} animate={controls} />
  </ul>
    </Layout>
  );
};

export default Contact;
