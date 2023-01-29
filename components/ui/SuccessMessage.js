import styles from "./../../styles/ui/SuccessMessage.module.scss";

const SuccessMessage = () => {
  return (
    <div className={styles.success_message}>
      <h2>Thank You!</h2>
      <p>Your message was sent. I&#39;ll be in touch shortly!</p>
    </div>
  );
};

export default SuccessMessage;
