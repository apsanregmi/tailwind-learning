const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001; // Choose a port for your email server

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
  const { name, phone_number, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mahesh.regmi@cloudpro.ai',
      pass: 'welcome@mahesh.regmi',
    },
  });

  const mailOptions = {
    from: 'mahesh.regmi@cloudpro.ai',
    to: 'contact@cloudpro.ai',
    subject: subject,
    text: `Name: ${name}\nPhone Number: ${phone_number}\nEmail: ${email}\n\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Email server is running on port ${port}`);
});
