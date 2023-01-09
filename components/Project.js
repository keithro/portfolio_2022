import Link from "next/link";
import Image from "next/image";
import ProjectImageLeft from "./graphics/ProjectImageLeft";
import ProjectImageRight from "./graphics/ProjectImageRight";
import CrossMark from "./graphics/CrossMark";
import GlobeIcon from "./icons/GlobeIcon";
import GitHubIcon from "./icons/GitHubIcon";
import styles from "./../styles/Project.module.scss";

const Project = (props) => {
  // console.log("Your Props: ", props); // DELETE

  // TODO: Clean up unused code
  // let backgroundImage, imageClass, contentClass, crossMarkOne, crossMarkTwo;
  let backgroundImage, crossMarkOne, crossMarkTwo;

  if (props.imageLeft) {
    // imageClass = styles.imageLeft;
    backgroundImage = <ProjectImageLeft className={styles.bg_img_left} />;
    crossMarkOne = (
      <CrossMark className={styles.cross_mark_1} fill={styles.colorPurple} />
    );
    crossMarkTwo = (
      <CrossMark className={styles.cross_mark_2} fill={styles.colorAqua} />
    );
  } else {
    // imageClass = styles.imageRight;
    backgroundImage = <ProjectImageRight className={styles.bg_img_right} />;
    crossMarkTwo = (
      <CrossMark className={styles.cross_mark_1} fill={styles.colorBlue} />
    );
    crossMarkOne = (
      <CrossMark className={styles.cross_mark_2} fill={styles.colorPurple} />
    );
  }

  return (
    <section className={styles.project}>
      <div className={styles.image_pane}>
        {/* <div className={imageClass}> */}
        {backgroundImage}
        <div className={styles.images}>
          <div className={styles.image}>
            <Image
              // className={styles.image}
              src={props.image1}
              alt={props.altText1}
              height={450}
              width={741}
            />
          </div>
          <div className={styles.image}>
            <Image
              // className={styles.image}
              src={props.image2}
              alt={props.altText2}
              height={450}
              width={741}
            />
          </div>
        </div>
      </div>
      <div className={styles.content_pane}>
        <div className={styles.watermark_1}>
          <Image
            src={props.watermark1}
            alt="Decorative watermark image"
            height={500}
            width={500}
          />
        </div>
        <div className={styles.watermark_2}>
          <Image
            src={props.watermark2}
            alt="Decorative watermark image"
            height={500}
            width={500}
          />
        </div>

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

          {crossMarkOne}
          {crossMarkTwo}
        </div>
      </div>
    </section>
  );
};

export default Project;
