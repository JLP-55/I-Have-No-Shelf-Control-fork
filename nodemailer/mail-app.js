require("dotenv").config();
const nodeMailer= require("nodemailer");

async function mailFunction() {

	const emailContent = `
	<p>Thank you for signing up to the I Have No Shelf Controll book forum!</p>
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
		to: process.env.RECEIVER_EMAIL,
		subject: "Sign up confirmation",
		html: emailContent
	});
	console.log("message sent: " + info.messageId);
};

mailFunction().catch(error => console.log(error));

module.exports = mailFunction;