import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import ErrorMessage from "./ErrorMessage";
import MailIcon from "../icons/MailIcon";

import styles from "./../../styles/ui/ContactForm.module.scss";

const ContactForm = ({ setSuccessfullySent }) => {
  const recaptchaRef = useRef();
  const [formData, setFormData] = useState({});
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState(null);

  function handleTouch(event) {
    const inputName = event.target.name;
    setTouched({ ...touched, [inputName]: true });

    // FIXME: or validate here? ...no
  }

  function handleFormDataChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setFormData({ ...formData, inputName: inputValue });

    // FIXME: check if valid here
    // const isCorrectLenth = input.name.length >= 3;
    // const isValidCharacters = /[a-zA-Z]/.test(inputValue);
    // // setNameIsValid(isCorrectLenth && isValidCharacters);
    // const nameIsValid = isCorrectLenth && isValidCharacters;
  }

  async function handleOnSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setErrors(null);

    // const formData = {};
    // Using currentTarget obj to create array of data then iterated through and add to formData obj
    // Array.from(e.currentTarget.elements).forEach((field) => {
    //   if (!field.name) return;
    //   formData[field.name] = field.value;
    // });

    // FIXME: CHECK IF EACH INPUT IS VALID ELSE SET THAT INPUT TO TOUCHED & DISABLE BUTTON

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
        console.log("Successfully sent!");
        console.log(data);
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
        <div>
          <label
            // className={`${nameIsValid ? styles.touched : ""}`}
            htmlFor="name"
          >
            name*
          </label>
          <input
            type="text"
            name="name"
            value={formData.name ? formData.name : ""}
            onChange={handleFormDataChange}
            onBlur={handleTouch}
          />
        </div>
        <div>
          <label
            // className={`${emailIsValid ? styles.touched : ""}`}
            htmlFor="email"
          >
            email*
          </label>
          <input
            type="email"
            name="email"
            value={formData.email ? formData.email : ""}
            onChange={handleFormDataChange}
            onBlur={handleTouch}
          />
        </div>
        <div>
          <label
            // className={`${messageIsValid ? styles.touched : ""}`}
            htmlFor="message"
          >
            message*
          </label>
          <textarea
            name="message"
            value={formData.message ? formData.message : ""}
            onChange={handleFormDataChange}
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
