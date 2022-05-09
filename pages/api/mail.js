// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  // console.log(body);

  const isHuman = await validateHuman(body.token);
  if (!isHuman) {
    res.status(400).json({ errors: ["Cannot validate user"] });
    return;
  }

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
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

async function validateHuman(token) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    { method: "POST" }
  );
  const data = await response.json();
  // console.log("recaptcha response data: ", data);
  return data.success;
}
