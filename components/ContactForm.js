import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";

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
      console.log(formData);
      // TODO: SET SUCCESS STATE/MESSAGE
    } catch (error) {
      // TODO: handle validation error
      console.log(error);
    }
  }

  return (
    <div>
      <style jsx>{`
        label {
          display: block;
          margin-botton: 0.2em;
        }
        button {
          color: white;
          background-color: blueviolet;
          padding: 0.8em 1em;
          border: 0;
          border-radius: 0.2em;
        }
      `}</style>
      <form method="post" onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" />
        </div>
        <div>
          <button>Submit</button>
        </div>

        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          size="invisible"
          ref={recaptchaRef}
        />
      </form>
    </div>
  );
};

export default ContactForm;
