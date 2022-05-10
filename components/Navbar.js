import Link from "next/link";
import styles from "./../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className="logo">Keith</div>
      <nav>
        <Link href="#home">
          <a>Home</a>
        </Link>
        <Link href="#about">
          <a>About</a>
        </Link>
        <Link href="#projects">
          <a>Projects</a>
        </Link>
        <Link href="#contact">
          <a>Contacts</a>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
