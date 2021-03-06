import { useState } from "react";
import ContactForm from "./ui/ContactForm";
import SocialLinks from "./ui/SocialLinks";
import styles from "../styles/Contact.module.scss";

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <section id="contact" className={styles.section}>
      <img
        className={styles.bg_elipse_sm}
        src="/bg-contact-elipse-sm.svg"
        alt="Background Elipse"
      />
      <img
        className={styles.bg_elipse_lg}
        src="/bg-contact-elipse-lg.svg"
        alt="Background Elipse"
      />

      <img
        className={styles.bg_img_1}
        src="/bg-contact-layer-1.svg"
        alt="Background Layer 1"
      />
      <img
        className={styles.bg_img_2}
        src="/bg-contact-layer-2.svg"
        alt="Background Layer 2"
      />

      <div className={styles.content}>
        {/* CONTACT FORM */}
        {isSuccess || (
          <div className={styles.container}>
            <div className={styles.text}>
              <h2>Contact</h2>
              <span></span>
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
