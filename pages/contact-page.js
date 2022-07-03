import Layout from "../components/Layout";
import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";


const Contact = () => {
  
  return (
    <Layout title="Contact">
      <div>contact-page</div>
      <motion.div
        style={{ backgroundColor: "red", width: "30px", height: "30px" }}
        animate={{
          x: [0, 100, 50]
        }}
        transition={{
          duration: 2,
          times: [0, 0.2, 1]
        }}
      />
    </Layout>
  )
}

export default Contact


