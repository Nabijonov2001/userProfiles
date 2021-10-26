const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth:{
        user: 'fazliddinnabijonov@gmail.com',
        pass: 'fazliddin2001'
    }
})

var message = {
    from: "fazliddinnabijonv@gmail.com",
    to: "fazliddinnabijonov2001@gmail.com",
    subject: "Message title",
    text: "Fazliddindan Fazliddinga salomlar!",
    html: "<p>HTML version of the message</p>"
  };


transporter.sendMail(message, (err, info)=>{
    if(err){
        console.log(err)
    }
    console.log(info)
})