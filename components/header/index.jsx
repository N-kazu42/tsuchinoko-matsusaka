import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import React, {useState} from "react"
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  }
  return (
    <React.Fragment>
      <header id="header" className={styles.header}>
        <div className={styles.LogoWarrape}>
          <Link href="/">
            <a className={styles.logo}>
            <motion.div 
            animate={{ rotate: 30 }}
            transition={{
              type: 'spring',
              repeat: Infinity,
              repeatType: "reverse",
              bounce: 0.25
            }}>
            <img src="/Logo.png" alt="Logo" />
            </motion.div>
            <div>
              <p>就労継続支援B型事業所</p>
              <h1>つちのこ</h1>
            </div>
            </a>
            
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/">
              <a>HOME</a>
              </Link>
            </li>
            <li>
              <Link href="/recruitment-page">
              <a>利用者募集</a>
              </Link>
            </li>
            <li>
              <Link href="/company-page">
              <a>会社概要</a>
              </Link>
            </li>
            <li>
              <Link href="/contact-page">
              <a>お問い合わせ</a>
              </Link>
            </li>
            
          </ul>
        </nav>
        <div className={styles.container}>
          <div className={styles.humburger} onClick={() => menuFunction()}>
            <span className={openMenu ? styles.open : undefined}></span>
            <span className={openMenu ? styles.open : undefined}></span>
            <p className={openMenu ? styles.open : undefined}>Menu</p>
          </div>
        </div>
      </header>
      <div className={`${styles.drawerMenu} ${openMenu ? styles.open : undefined}`}>
        <ul>
          <div className={styles.close} onClick={() => menuFunction()}>
            <span></span>
            <span></span>
            <p>Close</p>
          </div>
          <li>
            <Link href="/">
              <a>
                <p className={styles.mainTitle}>HOME</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/recruitment-page">
            <a>
              <p className={styles.mainTitle}>利用者募集</p>
            </a>
            </Link>
          </li>
          <li>
            <Link href="/company-page">
            <a>
              <p className={styles.mainTitle}>会社概要</p>
            </a>
            </Link>
          </li>
          <li>
            <Link href="/contact-page">
            <a>
              <p className={styles.mainTitle}>お問い合わせ</p>
            </a>
            </Link>
          </li>
          
        </ul>
      </div>
    </React.Fragment>
  )
}
