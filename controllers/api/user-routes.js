const router = require('express').Router();
const { User } = require('../../models');

// prerequisites for nodemailer if end up writing the entire function in router.post
// need to figure out how to import the function and replace the RECIEVER_EMAIL with req.body.email
// const mailFunction = require("../../nodemailer/mail-app.js");
const nodeMailer= require("nodemailer");
require("dotenv").config();

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email, 
      password: req.body.password,
    });

    console.log(req.body.email);
    userMail = req.body.mail;

    req.session.save(() => {
      req.session.loggedIn = true;

      // send a confirmation email to the new user upon signup
      async function mailFunction() {

        const emailContent = `
        <p>Thank you for signing up to the I Have No Shelf Control book forum!</p>
        `;

        const transporter = nodeMailer.createTransport({
          host: "smtp-mail.outlook.com", 
          port: 587,
          secure: false,
          requireTLS: true,
          logger: true,
          auth: {
            user: process.env.SENDER_EMAIL,
            pass: process.env.SENDER_PASSWORD
          }
        });

        const info = await transporter.sendMail({
          from: `Shelf Controll Book forum <${process.env.SENDER_EMAIL}>`,
          to: req.body.email,
          subject: "Sign up confirmation",
          html: emailContent
        });
        console.log("message sent: " + info.messageId);
      };

      mailFunction();

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;