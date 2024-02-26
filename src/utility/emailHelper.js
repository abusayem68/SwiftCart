const nodemailer = require("nodemailer");

const sendEmail = async (emailTo, emailText, emailSubject) => {
  const transporter = nodemailer.createTransport({
    host: "mail.teamrabbil.com",
    port: 25,
    secure: false,
    auth: { user: "info@teamrabbil.com", pass: "~sR4[bhaC[Qs" },
    tls: { rejectUnauthorized: false },
  });

  const mailOptions = {
    from: "Mern ecommerce solution <mail.teamrabbil.com>",
    to: emailTo,
    subject: emailSubject,
    text: emailText,
  };
  return await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
