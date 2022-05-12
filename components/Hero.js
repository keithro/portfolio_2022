import Link from "next/link";
import styles from "./../styles/Hero.module.css";

const Hero = () => {
  return (
    <section id="home" className={styles.home}>
      <h2>A Full Stack Engineer</h2>
      <h1>That Brings It All Together</h1>
      <h2>A Full Stack Engineer</h2>

      <Link href="#projects">
        <a className="nav-link">Projects</a>
      </Link>
      <Link href="#contact">
        <a className="nav-link">Contacts</a>
      </Link>
    </section>
  );
};

export default Hero;
