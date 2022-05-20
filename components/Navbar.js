import Link from "next/link";
import Image from "next/image";
import styles from "./../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.content}>
        {/* <div className="content"> */}
        <div className={styles.logo}>
          <Image src="/logo.svg" alt="Keith Logo" width={30} height={30} />
          <span className={styles.brand}>Keith</span>
        </div>

        {/* TODO: Add icons and move to ui component so can reuse in Contact section */}
        {/* <div>
          <Link href="#">
            <a className="social-link"></a>
          </Link>
          <Link href="#">
            <a className="social-link"></a>
          </Link>
          <Link href="#">
            <a className="social-link"></a>
          </Link>
        </div> */}

        <div className={styles.menu}>
          <span className={styles.hamburger}>&nbsp;</span>
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
              <a className={styles.link}>Contacts</a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
