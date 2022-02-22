const mailer = require('nodemailer');
const nodeCron = require('node-cron');

// Creating a transporter
const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iamhamid28@mailinator.com',
        pass: ''
    }
});

const scheduleEmail = (req, res) => {
    // cron.schedule('*/10 * * * *', sendEmail("Hi, this is a test email sent to you by corn job."));
    // sendEmail('Hi, this is a test email sent to you by corn job.')
    nodeCron.schedule("* * * * * *",function sendEmail(){
        //sending the email
        transporter.sendMail({
            from: '"Hamid" <iamhamid28@mailinator.com>',
            to: '"Hamid" <hamid.hussain@invozone.com>',
            subject: 'This is a test email',
            text: "test"
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