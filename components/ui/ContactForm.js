import { useRef, useState } from "react";
import MailIcon from "../icons/MailIcon";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./../../styles/ui/ContactForm.module.scss";

const ContactForm = ({ setSuccessfullySent }) => {
  const recaptchaRef = useRef();
  const [submitting, setSubmitting] = useState(false);
  const [serverErrors, setServerErrors] = useState(null);

  console.log(serverErrors); // DELETE

  async function handleOnSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setServerErrors(null);

    const formData = {};
    // Using currentTarget obj to create array of data then iterated through and added to obj
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    try {
      const token = await recaptchaRef.current.executeAsync();
      // console.log("Your token: ", token); // DELETE
      recaptchaRef.current.reset();
      formData.token = token;

      console.log({ formData }); // this is only the original data from form

      const response = await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      console.log(response.status);
      const data = await response.json();

      if (data.errors) {
        console.log("Something went wrong!", data.errors);
        setServerErrors(data.errors);
      } else {
        console.log("Successfully sent!");
        console.log(data);
        setSuccessfullySent(true);
      }

      setSubmitting(false);
    } catch (error) {
      console.log(error);
      setServerErrors([error]);
    }
  }

  return (
    <>
      <form className={styles.form} method="post" onSubmit={handleOnSubmit}>
        {serverErrors && (
          <ul className={styles.errors}>
            {serverErrors.map((error) => {
              return <li key={error}>{error}</li>;
            })}
          </ul>
        )}
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
        <button disabled={submitting}>
          Send Message <MailIcon />
        </button>

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
