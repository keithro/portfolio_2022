import Link from "next/link";
import Image from "next/image";
import styles from "./../styles/Hero.module.scss";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
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

      {/* <img src="/bg-layer-1.svg" alt="Background Layer 3"/>
      <img src="/bg-layer-2.svg" alt="Background Layer 3"/>
      <img src="/bg-layer-3.svg" alt="Background Layer 3"/> */}
      {/* <Image src="/bg-layer-1.svg" alt="Background Layer 3" width={1000} height={1000} />
      <Image src="/bg-layer-2.svg" alt="Background Layer 3" width={1000} height={1000} />
      <Image src="/bg-layer-3.svg" alt="Background Layer 3" width={1000} height={1000} /> */}
    </section>
  );
};

export default Hero;
