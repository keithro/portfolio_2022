import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import ErrorMessage from "./ErrorMessage";
import MailIcon from "../icons/MailIcon";

import styles from "./../../styles/ui/ContactForm.module.scss";

// DELETE:
// const initialFormVals = { name: "", email: "", message: "" };
// const initialTouchState = { name: false, email: false, message: false };
// const initialValidState = { name: false, email: false, message: false };
const initialState = {
  formVals: { name: "", email: "", message: "" },
  touch: { name: false, email: false, message: false },
  // isValid: { name: false, email: false, message: false },
};

const ContactForm = ({ setSuccessfullySent }) => {
  const recaptchaRef = useRef();
  const [formData, setFormData] = useState(initialState.formVals);
  const [touched, setTouched] = useState(initialState.touch);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState(null);

  const nameIsValid =
    /[a-zA-Z]/.test(formData.name) && formData.name.trim().length >= 3;
  const emailIsValid =
    formData.email.includes("@") && formData.email.includes(".");
  const messageIsValid = formData.message.length >= 20;

  const nameIsNotValid = !nameIsValid && touched.name;
  const emailIsNotValid = !emailIsValid && touched.email;
  const messageIsNotValid = !messageIsValid && touched.message;

  // FIXME: Not being used - need to disable button
  let formDataIsValid = false;
  if (nameIsValid && emailIsValid && messageIsValid) {
    formDataIsValid = true;
  }

  function handleTouch(event) {
    const inputName = event.target.name;
    setTouched({ ...touched, [inputName]: true });
  }

  function handleFormInputChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setFormData({ ...formData, [inputName]: inputValue });
  }

  async function handleOnSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setErrors(null);

    setTouched({ name: true, email: true, message: true });

    if (!nameIsValid) {
      return;
    }

    try {
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();
      // formData.token = token;

      console.log("The form data: ", formData);

      const response = await fetch("/api/mail", {
        method: "POST",
        // body: JSON.stringify(formData), // DELETE
        body: JSON.stringify({ ...formData, token }),
      });
      console.log(response.status);
      const data = await response.json();

      if (data.errors) {
        console.log("Something went wrong!", data.errors);
        setErrors(data.errors);
      } else {
        console.log("Successfully sent!", data);

        setFormData(initialState.formVals);
        setTouched(initialState.touch);
        setSuccessfullySent(true);
      }

      setSubmitting(false);
    } catch (error) {
      console.log(error);
      setErrors([error]);
    }
  }

  return (
    <>
      <form className={styles.form} method="post" onSubmit={handleOnSubmit}>
        {errors && <ErrorMessage errors={errors} />}
        <div className={`${nameIsNotValid ? styles.error : ""}`}>
          <label htmlFor="name">
            name*{nameIsNotValid && " must be 3 letters or more"}
          </label>
          <input
            required
            type="text"
            name="name"
            value={formData.name ? formData.name : ""}
            onChange={handleFormInputChange}
            onBlur={handleTouch}
          />
        </div>
        <div className={`${emailIsNotValid ? styles.error : ""}`}>
          <label htmlFor="email">
            email*{emailIsNotValid && " must be a valid email address"}
          </label>
          <input
            required
            type="email"
            name="email"
            value={formData.email ? formData.email : ""}
            onChange={handleFormInputChange}
            onBlur={handleTouch}
          />
        </div>
        <div className={`${messageIsNotValid ? styles.error : ""}`}>
          <label htmlFor="message">
            message*{messageIsNotValid && " must be 20 or more characters"}
          </label>
          <textarea
            required
            name="message"
            value={formData.message ? formData.message : ""}
            onChange={handleFormInputChange}
            onBlur={handleTouch}
          />
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
