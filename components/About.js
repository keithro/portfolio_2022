import { useState } from "react";
import TechDetails from "./TechDetails";
import InterestDetails from "./InterestDetails";
import AboutImage1 from "./graphics/AboutImage1";
import AboutImage2 from "./graphics/AboutImage2";
import ElipseSmall from "./graphics/ElipseSmall";
import ElipseLarge from "./graphics/ElipseLarge";
import styles from "./../styles/About.module.scss";

const About = () => {
  const [details, setDetails] = useState("tech");

  const handleShowDetails = (event) => {
    setDetails(event.target.id);
  };

  return (
    <section id="about">
      <div className={styles.container}>
        <div className={styles.content}>
          <main className={styles.story}>
            <h2>My Story</h2>
            {/* <p>
              Hi! I&#39;m a former accountant and I recently completed General
              Assembly&#39;s Software Engineering Immersive program where I
              learned to fundamentals of software engineering, I learned
              multiple frameworks and languages within a twelve week period and
              built several projects. Previously I was a hobby programmer while
              working as an accountant before I decided to make this my full
              time career. So I&#39;m looking for a role in company that cares
              about my growth and where I can continue learning and find
              mentorship.
            </p> */}
            {/* FIXME: Update wording and all something similar to below */}
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
                My Other Interests
              </span>
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
