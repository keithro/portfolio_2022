import { useEffect, useRef, useState } from "react";

import TechDetails from "./TechDetails";
import InterestDetails from "./InterestDetails";
import AboutImage1 from "./graphics/AboutImage1";
import AboutImage2 from "./graphics/AboutImage2";
import ElipseSmall from "./graphics/ElipseSmall";
import ElipseLarge from "./graphics/ElipseLarge";
import Underline from "./ui/Underline";

import styles from "./../styles/About.module.scss";

const About = () => {
  const [details, setDetails] = useState("tech");
  const [underlineProps, setUnderlineProps] = useState({});
  const detailsRef = useRef();

  useEffect(() => {
    console.log(detailsRef.current.offsetLeft, detailsRef.current.offsetWidth);

    const { offsetLeft, offsetWidth } = detailsRef.current;

    setUnderlineProps({ left: offsetLeft, width: offsetWidth });
  }, []);

  const handleShowDetails = (event) => {
    const { offsetLeft, offsetWidth } = event.target;

    // console.log("Target details: ", event);
    // console.log(event.target.offsetLeft, event.target.offsetWidth);
    // console.log("Do your variables match? ", offsetLeft, offsetWidth);

    setDetails(event.target.id);
    setUnderlineProps({ left: offsetLeft, width: offsetWidth });
  };

  return (
    <section id="about">
      <div className={styles.container}>
        <div className={styles.content}>
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
              >
                My Tech Stack
              </span>
              <span
                id="interests"
                className={styles.interests}
                onClick={handleShowDetails}
              >
                Other Interests
              </span>
              <Underline
                backgroundColor={styles.colorAqua}
                padding={5}
                {...underlineProps}
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
