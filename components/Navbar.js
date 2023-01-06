import Link from "next/link";
import Image from "next/image";
import LogoIcon from "./icons/LogoIcon";
import SocialLinks from "./ui/SocialLinks";
import styles from "./../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.content}>
        {/* <div className={styles.logo}>
          <LogoIcon />
          <span className={styles.brand}>keith</span>
        </div> */}

        <Link href="#">
          <a className={styles.logo}>
            <LogoIcon />
            <span className={styles.brand}>keith</span>
          </a>
        </Link>

        {/* <SocialLinks /> */}

        {/* TODO: Hamburger menu on mobile or no menu? Will need containing element and X to close menu */}
        <div className={styles.menu}>
          {/* <span className={styles.hamburger}>&nbsp;</span> */}
          <nav className={styles.list}>
            <Link href="#home">
              <a className={styles.link}>Home</a>
            </Link>
            <Link href="#about">
              <a className={styles.link}>About</a>
            </Link>
            <Link href="#projects">
              <a className={styles.link}>Projects</a>
            </Link>
            <Link href="#contact">
              <a className={styles.link}>Contact</a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
