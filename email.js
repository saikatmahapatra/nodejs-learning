var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }
});

var mailOptions =  {
    from: '',
    to: '',
    subject: 'Test email using node.js',
    text: 'This is a sample email message'
};

transporter.sendMail(mailOptions, function(err, info){
    if(err) {
        console.log(err);
    } else {
        console.log('email sent successfully', info.response);
    }
});