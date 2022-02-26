var nodemailer = require("nodemailer");
const ics = require('ics');

async function sendScheduleToMail(events,email) {
    // Create a SMTP transporter object
    var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: "absolutedentalny@gmail.com",
        pass: "Dev@michael"
    },
    });

    const { error, value } = ics.createEvents(
    events
    )

    if (error) {
    console.log(error)
    return
    }

    const message = {
        from: 'test@gmail.com',
        // to: 'mishaba1990@gmail.com',
        to: email,
        subject: "Upcoming matches in Sammy Ofer",
        text: 'Check the traffic before going home',
        icalEvent: {
        content: value,
        method: 'publish'
    }
    };

    smtpTransport.sendMail(message, (err, message) => {
    console.log(err, message);
    });

 }

 exports.sendScheduleToMail = sendScheduleToMail