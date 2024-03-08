require("dotenv").config();
const nodeMailer = require("nodemailer");

const emailContent = `
<p>This is the content of the email!</p>
`;

async function main() {

	const transporter = nodeMailer.createTransport({
		host: "smtp-mail.outlook.com", 
		port: 587,
		secure: false,
		auth: {
			user: process.env.SENDER_EMAIL,
			pass: process.env.SENDER_PASSWORD
		}
	});

	const info = await transporter.sendMail({
		from: `Shelf Controll Book forum <${process.env.SENDER_EMAIL}>`,
		to: process.env.RECEIVER_EMAIL,
		subject: "test email",
		html: emailContent
	});
	console.log("message sent: " + info.messageId);
};

main().catch(error => console.log(error));