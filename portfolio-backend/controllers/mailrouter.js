require('dotenv').config()
const mailRouter = require('express').Router()
const nodemailer = require('nodemailer')


/* When frontend sends post request it is handled here
  with nodemailer we send email from me to me containing data from email contact form
*/
async function mainMail(name, email, message, response) {
  const transporter = await nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  })

  const mailOption = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'Email contact',
    html: `You got a message from 
    Email : ${email}
    Name: ${name}
    Message: ${message}`,
  }

  try {
    await transporter.sendMail(mailOption)
    return response.status(200)
  } catch (error) {
    return response.status(500)
  }
}

mailRouter.post('/', async ( request, response ) => {
  const { name, email, message } = request.body
  try {
    await mainMail(name, email, message, response)
    response.status(200)
  }catch (error) {
    response.status(500)
  }
})

module.exports = mailRouter