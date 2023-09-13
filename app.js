const nodeMailer = require ('nodemailer')

const transporter = nodeMailer.createTransport({
    host : "smtp-relay.brevo.com",
    port : "587",
    auth : {
        user : "kelvinadugyamfi00@gmail.com",
        pass : "JvgpaN4hBQ2SPxXG"
    }
})

const sendEmail = async()=>{
    await transporter.sendMail({
        to: "nanaserwaaakoto21@gmail.com",
        from: "kelvinadugyamfi.kag@gmail.com",
        subject: "Welcome to my mail",
        html: "<h1>Welcome to my mail</h1>"
    })
}

sendEmail()