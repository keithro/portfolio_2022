import Link from "next/link";
import ProjectImageLeft from "./graphics/ProjectImageLeft";
import ProjectImageRight from "./graphics/ProjectImageRight";
import CrossMark from "./graphics/CrossMark";
import GlobeIcon from "./icons/GlobeIcon";
import GitHubIcon from "./icons/GitHubIcon";
import styles from "./../styles/Project.module.scss";

const Project = (props) => {
  console.log(props);

  let backgroundImage, imageClass, contentClass, crossMarkOne, crossMarkTwo;

  if (props.imageLeft) {
    imageClass = styles.imageLeft;
    backgroundImage = <ProjectImageLeft className={styles.bg_img_left} />;
    crossMarkOne = <CrossMark fill={styles.colorAqua} />;
    crossMarkTwo = <CrossMark fill={styles.colorPurple} />;
  } else {
    imageClass = styles.imageRight;
    backgroundImage = <ProjectImageRight className={styles.bg_img_right} />;
    crossMarkOne = <CrossMark fill={styles.colorBlue} />;
    crossMarkTwo = <CrossMark fill={styles.colorPurple} />;
  }

  return (
    <section className={styles.project}>
      <div className={styles.image_pane}>
        {/* <div className={imageClass}> */}
        {backgroundImage}
        <div className={styles.images}>
          {/* Image 1 */}
          {/* Image 2 */}
        </div>
      </div>
      <div className={styles.content_pane}>
        <div className={styles.content}>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <div className={styles.buttons}>
            <Link href={props.url}>
              <a className={styles.live_button}>
                Live <GlobeIcon />
              </a>
            </Link>
            <Link href={props.gitHubUrl}>
              <a className={styles.github_button}>
                GitHub <GitHubIcon />
              </a>
            </Link>
          </div>
        </div>
        {/* Watermark 1 */}
        {/* Watermark 2 */}
      </div>
    </section>
  );
};

export default Project;
