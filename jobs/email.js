const mailer = require('nodemailer');
const nodeCron = require('node-cron');


const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iamhamid28@mailinator.com',
        pass: ''
    }
});

const scheduleEmail = (req, res) => {
    nodeCron.schedule("* 10 * * * *",function sendEmail(){
        //sending the email
        transporter.sendMail({
            from: '"Hamid" <iamhamid28@mailinator.com>',
            to: '"Hamid" <hamid.hussain@invozone.com>',
            subject: 'This is a test email',
            text: "This is a test email sent by node mailier."
        })
            .then(_ => {console.log()
        res.send("Email sent on " + new Date())})

            .catch(error => {console.log(error)});
    }
      )
    
}


module.exports = {
    scheduleEmail
}