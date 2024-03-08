const nodeMailer = require("nodemailer");
// const SMTPServer = require("smtp-server").SMTPServer;
require("dotenv").config(); 

const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

// instance of smtp-server
// const server = new SMTPServer({
// 	secure: true,

// });

const message = `
<p>This will be the message</p>
`;

const transporter = nodeMailer.createTransport({
		// all the info about the mail server that we will send the email from will be specified here
	host: "localhost",
	port: 3001,
		// host: "smtp.gmail.com",
		// port: 587,
	secure: false,
			// service: "gmail",
	auth: {
		user: process.env.SENDER_EMAIL,
		pass: process.env.SENDER_PASSWORD
	}	
});

async function main() {
	// pass in info about the mail server that we will use to the createTransport method.
	// call the createTransporter method on the nodemailer package.
	
	
	// transporter.verify(function (error, success) {
	// 	if (error) {
	// 		console.log(error)
	// 	} else {
	// 		console.log("Success!");
	// 	};
	// });

	const info = await transporter.sendMail({
		from: `Forum app <${process.env.SENDER_EMAIL}>`,
		to: process.env.RECIEVER_EMAIL,
		subject: "test email",
		text: "plain text",
		html: message 
	});

	console.log("message sent: " + info.messageId);
}

main().catch(err => console.log(err));

app.listen(PORT, () => {
	console.log(`app is listering at http://localhost:${PORT}`);
});