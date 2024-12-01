import nodemailer from "nodemailer";

const Sendemail = async (req, res) => {
  const { username, phone, data, message } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    const mailOptions = {
      from: username,
      phone,
      data,
      message,
      to: process.env.EMAIL,
      subject: "sending Email with Getin  Touch ",
      html: `
      <h2>New Contact Request</h2>
      <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%;">
        <tr>
          <th style="text-align: left;">Name</th>
          <td>${username}</td>
        </tr>
        <tr>
          <th style="text-align: left;">Phone Number</th>
          <td>${phone}</td>
        </tr>
        <tr>
          <th style="text-align: left;">Preferred Date</th>
          <td>${data}</td>
        </tr>
        <tr>
          <th style="text-align: left;">Message</th>
          <td>${message}</td>
        </tr>
      </table>
    `,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error", error);
      } else {
        console.log("Email send" + info.response);
        res.status(201).json({ status: 201, info });
      }
    });
  } catch (error) {
    res.status(201).json({ status: 401, error });
  }
};

export { Sendemail };
