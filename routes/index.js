const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

require("dotenv").config();

// Home Page
router.get("/", (req, res) =>
  res.render("index", {
    title: "Courage through the Darkness",
    style: "/css/index.css",
    js: "/js/index.js"
  })
);

// Contact Form
router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Check for errors
  if (!name || !email || !message) {
    error = "Please fill in all fields.";
    req.flash("error_msg", error);
  } else {
    success = "Thanks for the message! Have a great day!";
    req.flash("success_msg", success);

    const user = process.env.EMAIL;
    const pass = process.env.PASSWORD;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass
      }
    });

    const mailOptions = {
      from: email,
      to: user,
      subject: `New Form Submission From ${name}`,
      text: message
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }

  res.redirect("/#contact-the-author");
});

module.exports = router;
