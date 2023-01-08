import Project from "./Project";
import styles from "../styles/Projects.module.scss";

const projectData = [
  {
    name: "Trivia Candy",
    description:
      "A fun trivia game built with React using the Open Trivia Database API. It's seriously addictive. Play at your own risk!",
    url: "https://www.keithrodriguez.me/trivia-game/",
    gitHubUrl: "https://github.com/keithro/trivia-game",
    image1: "/trivia-game-1.png",
    image2: "/trivia-game-2.png",
    watermark1: "/watermark-ribbon.svg",
    watermark2: "/watermark-brain.svg",
    altText1: "Trivia game",
    altText2: "Trivia game",
  },
  {
    name: "Pick-Up Game",
    description:
      "A web app for starting pick-up games and other group sports or social activities. It was built with the MERN stack, featuring full CRUD capabilities, user authentication and authorization.",
    url: "https://www.keithrodriguez.me/pickup-client/",
    gitHubUrl: "https://github.com/keithro/pickup-client",
    image1: "/pick-up-1.png",
    image2: "/pick-up-2.png",
    watermark1: "/watermark-net.svg",
    watermark2: "/watermark-ball.svg",
    altText1: "Pick-Up Game App",
    altText2: "Pick-Up Game App",
  },
];

const Projects = () => {
  const projectsList = projectData.map((project, i) => {
    // const imageLeft = i % 2 === 1;

    return (
      <Project
        key={`${i}${project.name}`}
        imageLeft={i % 2 === 0}
        {...project}
      />
    );
  });

  return (
    <section id="projects" className={styles.section}>
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
