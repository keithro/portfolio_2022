import { useEffect, useRef, useState } from "react";

import ContactForm from "./ui/ContactForm";
import SocialLinks from "./ui/SocialLinks";
import ContactImage1 from "./graphics/ContactImage1";
import ContactImage2 from "./graphics/ContactImage2";
import ElipseLarge from "./graphics/ElipseLarge";
import ElipseSmall from "./graphics/ElipseSmall";

import styles from "../styles/Contact.module.scss";

const Contact = ({ setPageLocation }) => {
  const [contactFormIsVisible, setContactFormIsVisible] = useState(false);
  const [successfullySent, setSuccessfullySent] = useState(false);
  const sectionRef = useRef();
  const contactFormRef = useRef();

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        console.log("Contact section", entry.isIntersecting); // DELETE
        if (entry.isIntersecting) {
          setPageLocation("Contact");
        }
      },
      { rootMargin: "-30% 0px -30% 0px" }
    );
    sectionObserver.observe(sectionRef.current);
  }, []);

  useEffect(() => {
    const contactFormObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        console.log("Contact Form", entry.isIntersecting); // DELETE
        setContactFormIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    contactFormObserver.observe(sectionRef.current);
  }, []);

  return (
    <section ref={sectionRef} id="contact" className={styles.section}>
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
        <div
          ref={sectionRef}
          className={`${styles.content} ${
            contactFormIsVisible ? styles.visible : ""
          }`}
        >
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
