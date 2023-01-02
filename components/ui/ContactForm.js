import { useRef } from "react";
import MailIcon from "../icons/MailIcon";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./../../styles/ui/ContactForm.module.scss";

const ContactForm = () => {
  const recaptchaRef = useRef();

  async function handleOnSubmit(e) {
    e.preventDefault();
    // setSubmitting(true);
    // setServerErrors([]);

    const formData = {};
    // Using currentTarget obj to create array of data then iterated through and added to obj
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    try {
      const token = await recaptchaRef.current.executeAsync();
      // console.log("Your token: ", token);
      recaptchaRef.current.reset();
      formData.token = token;

      // FIXME: DO WE NEED TO SAVE A VARIABLE? IS RESPONSE FOR ERRORS?
      await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      console.log({ formData }); // this is only the original data from form

      // TODO: SET SUCCESS STATE/MESSAGE
    } catch (error) {
      // TODO: handle validation error
      console.log(error);
    }
  }

  return (
    <>
      <form className={styles.form} method="post" onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="name">name*</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">email*</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">message*</label>
          <textarea name="message" />
        </div>
        <button>
          Send Message <MailIcon />
        </button>

        {/* <div>
          <button>Submit</button>
        </div> */}

        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          size="invisible"
          ref={recaptchaRef}
        />
      </form>
    </>
  );
};

export default ContactForm;
