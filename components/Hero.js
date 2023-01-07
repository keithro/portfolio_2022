import Link from "next/link";
import Image from "next/image";

import MailIcon from "./icons/MailIcon";
import ArrowIcon from "./icons/ArrowIcon";
import styles from "./../styles/Hero.module.scss";

const Hero = () => {
  return (
    <section id="home" className={styles.section}>
      <img
        className={`${styles.bg_img} ${styles.bg_img_1}`}
        src="/bg-hero-layer-1.svg"
        alt="Background Layer 1"
      />
      <img
        className={`${styles.bg_img} ${styles.bg_img_2}`}
        src="/bg-hero-layer-2.svg"
        alt="Background Layer 2"
      />
      <img
        className={`${styles.bg_img} ${styles.bg_img_3}`}
        src="/bg-hero-layer-3.svg"
        alt="Background Layer 3"
      />

      <div className={styles.content}>
        <h2>A Full Stack Engineer</h2>
        <h1>
          That Brings It <br /> All Together
        </h1>
        <h2>Hello! I&#8217;m Keith</h2>
        <div className={styles.buttons}>
          <Link href="#contact">
            <a className={styles.contactButton}>
              Contact Me <MailIcon />
            </a>
          </Link>
          <Link href="#projects">
            <a className={styles.projectsButton}>
              My Portfolio <ArrowIcon />
            </a>
          </Link>

          {/* <Link href="#contact">
            <a className={`${styles.button} ${styles.contactButton}`}>
              Contact Me <MailIcon />
            </a>
          </Link>
          <Link href="#projects">
            <a className={`${styles.button} ${styles.projectsButton}`}>
              My Portfolio <ArrowIcon />
            </a>
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
