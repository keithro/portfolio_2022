import { useState } from "react";
import TechDetails from "./TechDetails";
import InterestDetails from "./InterestDetails";
import styles from "./../styles/About.module.scss";

const About = () => {
  const [details, setDetails] = useState("tech");

  const handleShowDetails = (event) => {
    setDetails(event.target.id);
  };

  return (
    <section id="about">
      <div className={styles.container}>
        <main className={styles.story}>
          <h2>My Story</h2>
          <p>
            Hi! I&#39;m a former accountant and I recently completed General
            Assembly&#39;s Software Engineering Immersive program where I
            learned to fundamentals of software engineering, I learned multiple
            frameworks and languages within a twelve week period and built
            several projects. Previously I was a hobby programmer while working
            as an accountant before I decided to make this my full time career.
            So I&#39;m looking for a role in company that cares about my growth
            and where I can continue learning and find mentorship.
          </p>
        </main>
        <aside className={styles.details}>
          <h4>
            <span id="tech" className={styles.tech} onClick={handleShowDetails}>
              My Tech Stack
            </span>
            <span
              id="interests"
              className={styles.interests}
              onClick={handleShowDetails}
            >
              My Interests
            </span>
          </h4>
          {details === "tech" ? <TechDetails /> : <InterestDetails />}
        </aside>
        <img
          className={styles.bg_elipse_sm}
          src="/bg-about-elipse-sm.svg"
          alt="Background Elipse"
        />
        <img
          className={styles.bg_elipse_lg}
          src="/bg-about-elipse-lg.svg"
          alt="Background Elipse"
        />

        <img
          className={styles.bg_img_1}
          src="/bg-about-layer-1.svg"
          alt="Background Layer 1"
        />
        <img
          className={styles.bg_img_2}
          src="/bg-about-layer-2.svg"
          alt="Background Layer 2"
        />
      </div>
    </section>
  );
};

export default About;
