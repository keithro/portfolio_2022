// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const formData = JSON.parse(req.body);
  console.log("Form data received from request: ", formData);

  const isHuman = await validateHuman(formData.token);
  if (!isHuman.success) {
    res.status(400).json({ errors: isHuman["error-codes"] });
    return;
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

  // FIXME: ADD TRY / CATCH BLOCK AND LOG ERRORS
  await mail.send(data);

  res.status(200).json({ status: "Ok" });
}

async function validateHuman(token) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
      { method: "POST" }
    );
    console.log(response.status);
    const data = await response.json();

    console.log("recaptcha response data: ", data);

    return data;
  } catch (error) {
    console.log("Captcha validation error: ", error);
    return { success: false, "error-codes": ["Unable to verify captcha"] };
  }
}
