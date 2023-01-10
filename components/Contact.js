import { useState } from "react";
import ContactForm from "./ui/ContactForm";
import SocialLinks from "./ui/SocialLinks";
import Loader from "./Loader";
import ContactImage1 from "./graphics/ContactImage1";
import ContactImage2 from "./graphics/ContactImage2";
import ElipseLarge from "./graphics/ElipseLarge";
import ElipseSmall from "./graphics/ElipseSmall";
import styles from "../styles/Contact.module.scss";

const Contact = () => {
  const [successfullySent, setSuccessfullySent] = useState(false);

  return (
    <section id="contact" className={styles.section}>
      <ContactImage1 className={styles.bg_img_1} alt="Background Layer 1" />
      <ContactImage2 className={styles.bg_img_2} alt="Background Layer 2" />

      <ElipseSmall
        className={styles.bg_elipse_sm}
        stroke={styles.colorOrange}
        alt="Background Elipse"
      />
      <ElipseLarge
        className={styles.bg_elipse_lg}
        stroke={styles.colorOrange}
        alt="Background Layer 2"
      />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h2>Contact</h2>
            <span></span>
            <p>
              Have questions, comments or want to hire me? Just send me a
              message and let&#39;s chat!
            </p>
          </div>

          {successfullySent || (
            <ContactForm setSuccessfullySent={setSuccessfullySent} />
          )}

          {successfullySent && (
            <div className={styles.success_message}>
              <h2>Thank You!</h2>
              <p>
                Your message was sent successfully. I&#39;ll be in touch
                shortly!
              </p>
            </div>
          )}

          <div className={styles.social_links_container}>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
