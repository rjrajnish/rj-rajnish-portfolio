import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    // email='rjrajnish.developer@gmail.com'
    // password= 'enyvofbvmtntgnbx'
    // Create a transporter object using Gmail's SMTP server
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'rjrajnish.developer@gmail.com',
        pass: 'enyv ofbv mtnt gnbx'
      }
    });

    // Define email content
    const mailOptions = {
      from: email,
      to: 'rajnishpandey010@gmail.com',
      subject: 'New Message from Contact Form',
      text: `
        Name: ${name}\n
        Email: ${email}\n
        Message: ${message}\n
      `
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
