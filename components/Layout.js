import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Header from "../components/header"

export default function Layout({ children, title = "HP by Nextjs" }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className={styles.NavContainer}>
            <Header></Header>
        </nav>
      </header>
      <main className="">{children}</main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
