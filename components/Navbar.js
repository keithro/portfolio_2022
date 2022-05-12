import Link from "next/link";
import Image from "next/image";
import styles from "./../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className="logo">
        <Image src="/logo.svg" alt="Keith Logo" width={30} height={30} />
        Keith
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

      <nav>
        <Link href="#home">
          <a className="nav-link">Home</a>
        </Link>
        <Link href="#about">
          <a className="nav-link">About</a>
        </Link>
        <Link href="#projects">
          <a className="nav-link">Projects</a>
        </Link>
        <Link href="#contact">
          <a className="nav-link">Contacts</a>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
