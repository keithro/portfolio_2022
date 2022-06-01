import Link from "next/link";
import LinkedInIcon from "../icons/LinkedInIcon";
import GitHubIcon from "../icons/GitHubIcon";
import CodePenIcon from "../icons/CodePenIcon";
import styles from "./../../styles/ui/SocialLinks.module.scss";

const SocialLinks = () => {
  return (
    <div className={styles.social}>
      <Link href="https://github.com/keithro">
        <a>
          <GitHubIcon />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/keithrodriguez/">
        <a>
          <LinkedInIcon />
        </a>
      </Link>
      <Link href="https://codepen.io/keither">
        <a>
          <CodePenIcon />
        </a>
      </Link>
    </div>
  );
};

export default SocialLinks;
