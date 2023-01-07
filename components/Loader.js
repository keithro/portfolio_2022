import styles from "./../styles/Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.box}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loader;
