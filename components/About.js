import { useState } from "react";
import styles from "./../styles/About.module.scss"

const About = () => {
  const [ details, setDetails ] = useState('tech');

  const handleShowDetails = (event) => {
    console.log(event);
    console.log(event.target.id);
    setDetails(event.target.id);
  }

  return (
    <section id="about">
      <div className={styles.container}>
        <main className={styles.story}>
        <h2>My Story</h2>
        <p>Hi! I’m a former accountant...I recently completed General Assembly's Software Engineering Immersive program where I learned to fundamentals of software engineering, I learned multiple frameworks and languages within a twelve week period and built several projects. Previously I was a hobby programmer while working as an accountant before I decided to make this my full time career. So I'm looking for a role in company that cares about my growth and  where I can continue learning and find mentorship.</p>
        </main>
        <aside>
          <h4>
            <span id="tech" className={styles.tech} onClick={handleShowDetails}>My Tech Stack</span>
            <span id="interests" className={styles.interests} onClick={handleShowDetails}>My Interests</span>
          </h4>
          {
            details === 'tech' ?
            <div>
              <p>I&#39;m always learning new technologies, frameworks or languages. Here are some I am confortable with.</p>
              <ul>
                <li>HTML/CSS</li>
                <li>Sass</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Git/GitHub</li>
                <li>Python</li>
                <li>PostgreSQL</li>
              </ul>
            </div> :
            <div>
              <p>I&#39;ve also got a lot of interests!</p>
              <ul>
                <li>Working Out</li>
                <li>Biking</li>
                <li>Learning Spanish</li>
                <li>Reading</li>
                <li>Photography</li>
                <li>Hiking</li>
                <li>Camping</li>
              </ul>
            </div>
          }
        </aside>

      </div>
    </section>
  );
};

export default About;
