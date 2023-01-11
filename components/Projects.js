import { useEffect, useRef } from "react";

import Project from "./Project";
import projectData from "../projectData";

import styles from "../styles/Projects.module.scss";

const Projects = ({ setPageLocation }) => {
  const sectionRef = useRef();

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setPageLocation("Projects");
        }
      },
      { rootMargin: "-20% 0px -20% 0px" }
    );
    sectionObserver.observe(sectionRef.current);
  }, []);

  const projectsList = projectData.map((project, i) => {
    return (
      <Project
        key={`${i}${project.name}`}
        imageLeft={i % 2 === 0}
        {...project}
      />
    );
  });

  return (
    <section ref={sectionRef} id="projects" className={styles.section}>
      <div className={styles.container}>
        <main className={styles.content}>
          <h2>Projects</h2>
          <div className={styles.projects}>{projectsList}</div>
        </main>
      </div>
    </section>
  );
};

export default Projects;
