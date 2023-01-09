import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        {/* <title>Keith&apos;s Portfolio</title> */}
        <title>Keith | Full Stack Engineer</title>
        <meta name="description" content="Keith Rodriguez's portfolio site" />
        <meta
          name="keywords"
          content="Keith Rodriguez, software engineer, front-end developer, full stack developer, back end developer"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />
      <main className={styles.main}>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
