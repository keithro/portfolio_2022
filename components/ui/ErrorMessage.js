import styles from "./../../styles/ui/ErrorMessage.module.scss";

const ErrorMessage = ({ errors }) => {
  return (
    <ul className={styles.errors}>
      {errors.map((error) => {
        return <li key={error}>{error}</li>;
      })}
    </ul>
  );
};

export default ErrorMessage;
