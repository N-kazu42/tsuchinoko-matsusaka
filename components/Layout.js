import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Header from "../components/header";

export default function Layout({ children, title = "HP by Nextjs" }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="google-site-verification" content="qGfhCaDPTj7N7SpYQHiBj-HRrFVtjwSU9fTDoog-KVQ" />
        <meta name="title" content="就労継続支援B型事業所　つちのこ　三重/松阪" />
        <meta name="description" content="体力や力が無くてもでき、個々のペースに合わせて作業を行っています。" />

      </Head>
      <header>
        <nav className={styles.NavContainer}>
          <Header></Header>
        </nav>
      </header>
      <main className="">{children}</main>
      <footer className={styles.Footer}>
        <div className={styles.FooterContainer}>
          <div className={styles.addressContainer}>
            <span className={styles.logo}>
              <Image
                src="/img/FooterLogo.webp"
                alt="Logo"
                width={261}
                height={151}
              />
            </span>
            <div className={styles.address}>
              <p>〒515-0012</p>
              <p>松阪市東町543番地4</p>
              <p>TEL0598-31-3889</p>
              <p>FAX0598-31-3879</p>
              <p>E-Mail syuubtutinoko@gamil.com</p>
            </div>
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
        </div>
        <p style={{ textAlign: "center" }}>copyright(C) 2022 つちのこ　就労継続支援B型事業所 All Rights Reserved.</p>
      </footer>
    </div>
  );
}
