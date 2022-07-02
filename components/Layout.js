import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Layout({ children, title = "HP by Nextjs" }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className={styles.NavContainer}>
            <div className={styles.NavLogo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </div>
                <div className={styles.NavLink}>
                    <Link href="/">
                        <a>
                        Home
                        </a>
                    </Link>
                    <Link href="/blog-page">
                        <a>
                        blog
                        </a>
                    </Link>
                    <Link href="/contact-page">
                        <a>
                        contact
                        </a>
                    </Link>
                </div>
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
