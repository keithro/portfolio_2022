import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import LogoIcon from "./icons/LogoIcon";
import SocialLinks from "./ui/SocialLinks";
import Underline from "./ui/Underline";

import styles from "./../styles/Navbar.module.scss";

const Navbar = ({ darkNav, pageLocation }) => {
  const [navIndicatorPosition, setNavIndicatorPosition] = useState({
    left: 0,
    width: 0,
  });
  const [tempNavIndicatorPosition, setTempNavIndicatorPosition] =
    useState(null);
  const navRef = useRef();

  const handleMouseEnter = (event) => {
    console.log("Mouse Enter!", event);

    const { offsetLeft, offsetWidth } = event.target;
    console.log(offsetLeft, offsetWidth);
    setTempNavIndicatorPosition({ left: offsetLeft, width: offsetWidth });
  };

  const handleMouseLeave = (event) => {
    console.log("Mouse Leave!", event);
    setTempNavIndicatorPosition(null);
  };

  const indicatorPosition = tempNavIndicatorPosition
    ? tempNavIndicatorPosition
    : navIndicatorPosition;

  useEffect(() => {
    console.log("useEffect for Nav Indicator ran again on ", pageLocation);
    if (navRef.current.childNodes) {
      navRef.current.childNodes.forEach((node) => {
        const { innerText, offsetLeft, offsetWidth } = node;
        // console.log(innerText, offsetLeft, offsetWidth);

        if (innerText === pageLocation) {
          setNavIndicatorPosition({ left: offsetLeft, width: offsetWidth });
        }
      });
    }
  }, [pageLocation]);

  return (
    <header className={`${styles.navbar} ${darkNav ? "" : styles.dark}`}>
      <div className={styles.content}>
        <Link href="#">
          <a className={styles.logo}>
            <LogoIcon />
            <span className={styles.brand}>keith</span>
          </a>
        </Link>

        {/* TODO: Hamburger menu on mobile or no menu? Will need containing element and X to close menu */}
        <div className={styles.menu}>
          {/* <span className={styles.hamburger}>&nbsp;</span> */}
          <nav className={styles.list} ref={navRef}>
            <Link href="#home">
              <a
                className={styles.link}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Home
              </a>
            </Link>
            <Link href="#about">
              <a
                className={styles.link}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                About
              </a>
            </Link>
            <Link href="#projects">
              <a
                className={styles.link}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Projects
              </a>
            </Link>
            <Link href="#contact">
              <a
                className={styles.link}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Contact
              </a>
            </Link>
          </nav>
          <Underline
            backgroundColor={`${
              darkNav ? styles.colorPurple : styles.colorAqua
            }`}
            padding={5}
            {...indicatorPosition}
          />
        </div>

        <div className={styles.social_links_container}>
          <SocialLinks />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
