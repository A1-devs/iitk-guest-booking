import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'mmtp.iitk.ac.in',
  port: 465,
  secure: true,   // SSL/TLS on port 465
  auth: {
    user: 'rajaryan23',    // e.g. rajaryan23
    pass: 'rajaryan722004aryanRAJ7'
  },
  tls: {
    rejectUnauthorized: false
  }
});

const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: '"Guest Room Booking Portal" <rajaryan23@iitk.ac.in>',  // better to use your IITK email here
    to,
    subject,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info);
  } catch (err) {
    console.error("Error sending email:", err);
    throw err;
  }
};

export default sendEmail;
