import Link from "next/link";
import Image from "next/image";
import styles from "./../styles/Hero.module.scss";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <img className={styles.bg_img_1} src="/bg-layer-1.svg" alt="Background Layer 1"/>
      <img className={styles.bg_img_2} src="/bg-layer-2.svg" alt="Background Layer 2"/>
      <img className={styles.bg_img_3} src="/bg-layer-3.svg" alt="Background Layer 3"/>
      
      <div className={styles.content}>
        <h2>A Full Stack Engineer</h2>
        <h1>That Brings It <br /> All Together</h1>
        <h2>I&#8217;m Keith Rodriguez</h2>
        <div className={styles.buttons}>
          <Link href="#contact">
            <a className={styles.contact}>Contact Me</a>
          </Link>
          <Link href="#projects">
            <a className={styles.projects}>My Portfolio</a>
          </Link>
        </div>
      </div>

      {/* <Image src="/bg-layer-1.svg" alt="Background Layer 3" width={1000} height={1000} />
      <Image src="/bg-layer-2.svg" alt="Background Layer 3" width={1000} height={1000} />
      <Image src="/bg-layer-3.svg" alt="Background Layer 3" width={1000} height={1000} /> */}
    </section>
  );
};

export default Hero;
