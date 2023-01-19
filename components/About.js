import { useEffect, useRef, useState } from "react";

import TechDetails from "./TechDetails";
import InterestDetails from "./InterestDetails";
import AboutImage1 from "./graphics/AboutImage1";
import AboutImage2 from "./graphics/AboutImage2";
import ElipseSmall from "./graphics/ElipseSmall";
import ElipseLarge from "./graphics/ElipseLarge";
import Underline from "./ui/Underline";

import styles from "./../styles/About.module.scss";

const About = ({ setPageLocation }) => {
  const [details, setDetails] = useState("tech");
  const [contentIsVisible, setContentIsVisible] = useState(false);
  const [tabIndicatorPosition, setTabIndicatorPosition] = useState({
    left: 0,
    width: 0,
  });
  const [tempTabIndicatorPosition, setTempTabIndicatorPosition] =
    useState(null);
  const detailsRef = useRef();
  const sectionRef = useRef();

  const handleShowDetails = (event) => {
    const { id, offsetLeft, offsetWidth } = event.target;
    setDetails(id);
    setTabIndicatorPosition({ left: offsetLeft, width: offsetWidth });
  };

  const handleMouseEnter = (event) => {
    const { offsetLeft, offsetWidth } = event.target;
    setTempTabIndicatorPosition({ left: offsetLeft, width: offsetWidth });
  };

  const handleMouseLeave = () => {
    setTempTabIndicatorPosition(null);
  };

  const indicatorPosition = tempTabIndicatorPosition
    ? tempTabIndicatorPosition
    : tabIndicatorPosition;

  useEffect(() => {
    const { offsetLeft, offsetWidth } = detailsRef.current;
    setTabIndicatorPosition({ left: offsetLeft, width: offsetWidth });
  }, [detailsRef]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setContentIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setPageLocation("About");
        }
      },
      {
        rootMargin: "-30% 0px -30% 0px",
        // threshold: 0.5,
      }
    );
    sectionObserver.observe(sectionRef.current);
  }, []);

  return (
    <section ref={sectionRef} id="about">
      <div className={styles.container}>
        <div
          className={`${styles.content} ${
            contentIsVisible ? styles.visible : ""
          }`}
        >
          <main className={styles.story}>
            <h2>My Story</h2>
            <p>
              I&#39;m a Software Developer. I build Single-Page-Apps
              &#40;SPA&#41;, responsive full-stack websites and RESTful APIs. I
              am always learning new technologies and frameworks and am always
              working on some sort of project. Currently, I am creating a web
              app for organizing Pickleball games.
            </p>
            <p>
              In a former life I was an accountant before I decided to turn my
              coding hobby into a full-time career. Now I am looking forward to
              continuing my learning journey and continuing to make bigger and
              better things.
            </p>
          </main>
          <aside className={styles.details}>
            <h4>
              <span
                ref={detailsRef}
                id="tech"
                className={styles.tech}
                onClick={handleShowDetails}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                My Tech Stack
              </span>
              <span
                id="interests"
                className={styles.interests}
                onClick={handleShowDetails}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Other Interests
              </span>
              <Underline
                backgroundColor={styles.colorAqua}
                padding={5}
                {...indicatorPosition}
              />
            </h4>
            {details === "tech" ? <TechDetails /> : <InterestDetails />}
          </aside>
        </div>

        <ElipseSmall className={styles.bg_elipse_sm} stroke={styles.colorRed} />
        <ElipseLarge className={styles.bg_elipse_lg} stroke={styles.colorRed} />

        <AboutImage1 className={styles.bg_img_1} />
        <AboutImage2 className={styles.bg_img_2} />
      </div>
    </section>
  );
};

export default About;
