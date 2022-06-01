import { useState } from "react";
import ContactForm from "./ui/ContactForm";
import SocialLinks from "./ui/SocialLinks";
import styles from "../styles/Contact.module.scss";

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.content}>
        {/* CONTACT FORM */}
        {isSuccess || (
          <div className={styles.container}>
            <div className={styles.text}>
              <h2>Contact Me</h2>
              <p>
                Have questions, comments or want to hire me? Just send me a
                message and lets chat!
              </p>
            </div>
            <ContactForm />
            <SocialLinks />
          </div>
        )}
        {/* SUCCESS MESSAGE */}
        {isSuccess && (
          <div>
            <h2>Thank You!</h2>
          </div>
        )}
        {/* ERROR MESSAGE */}
      </div>
    </section>
  );
};

export default Contact;
