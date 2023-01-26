// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

// Google reCAPTCHA Validation
async function validateHuman(token) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
      { method: "POST" }
    );

    // NOTE: An error will still respond with a 200 status code
    console.log("reCAPTCHA validation response status: ", response.status);

    const data = await response.json();
    console.log("reCAPTCHA validation response data: ", data);

    return data;
  } catch (error) {
    // NOTE: Successfully received responses with errors do not trigger this catch block
    console.log("reCAPTCHA validation error: ", error);
    // "error-codes" matches response from reCAPTCHA
    return { success: false, "error-codes": ["Unable to verify captcha"] };
  }
}

// Handle Mail Request
export default async function handler(req, res) {
  const formData = JSON.parse(req.body);
  // console.log("Form data received from request: ", formData);

  const isHuman = await validateHuman(formData.token);
  if (!isHuman.success) {
    // return res.status(400).json({ errors: isHuman["error-codes"] });
    return res.status(400).json({ errors: ["Unable to verify captcha"] });
  }

  const message = `
    Name: ${formData.name}\r\n
    Email: ${formData.email}\r\n
    Message: ${formData.message}
  `;

  const data = {
    to: "rodriguez.keith@gmail.com",
    from: "hello@keithrodriguez.dev",
    subject: "New contact form message!",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  await mail.send(data);

  res.status(200).json({ status: "Ok" });
}
