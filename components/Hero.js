import Link from "next/link";
import { useRef, useEffect } from "react";

import CrossMark from "./graphics/CrossMark";
import HeroImage1 from "./graphics/HeroImage1";
import HeroImage2 from "./graphics/HeroImage2";
import HeroImage3 from "./graphics/HeroImage3";
import MailIcon from "./icons/MailIcon";
import ArrowIcon from "./icons/ArrowIcon";

import styles from "./../styles/Hero.module.scss";

const Hero = ({ setDarkNav }) => {
  const heroRef = useRef();

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        console.log(entry.intersectionRatio);
        setDarkNav(entry.isIntersecting);
      },
      {
        // rootMargin: "0px 0px 0px 0px",
        threshold: 0.9,
      }
    );
    heroObserver.observe(heroRef.current);
  }, []);

  return (
    <section id="home" className={styles.section} ref={heroRef}>
      <HeroImage1 className={styles.bg_img_1} />
      <HeroImage2 className={styles.bg_img_2} />
      <HeroImage3 className={styles.bg_img_3} />

      <CrossMark className={styles.cross_mark_1} fill={styles.colorAqua} />
      <CrossMark className={styles.cross_mark_2} fill={styles.colorBlue} />
      <CrossMark className={styles.cross_mark_3} fill={styles.colorRed} />
      <CrossMark className={styles.cross_mark_4} fill={styles.colorPurple} />

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
        </div>
      </div>
    </section>
  );
};

export default Hero;
