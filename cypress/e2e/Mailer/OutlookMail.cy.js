const nodemailer =require('nodemailer');

let transpoter = nodemailer.createTransport({
service: 'outlook',
auth:{
    user: 'makhaan.gupta@enpointe.io',
    pass: 'M#8424922558gu',
}
});

let mailOption = {
    from: 'Automated mail',
    to: 'mkhangupta@gmail.com',
    subject: 'Test mail',
    text: 'Hello this is a test mail sent via automated mailer'
};

transpoter.sendMail(mailOption, (error, info) => {
if (error) {
    return console.log('Error:' + error);

}
console.log('Email sent: ' +info.response);
});