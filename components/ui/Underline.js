import styles from "./../../styles/ui/Underline.module.scss";

const Underline = ({ backgroundColor, left, width, padding }) => {
  left = left - padding;
  width = width + padding * 2;

  return (
    <div
      className={styles.underline}
      style={{ left, width, backgroundColor }}
    ></div>
  );
};

export default Underline;
