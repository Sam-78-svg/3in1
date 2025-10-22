const fs = require('fs');
const path = require('path');
const AutoEmailSender = require('auto-email-sender');

// Load credentials from env (don't hardcode passwords)
const smtpConfig = {
    host: process.env.SMTP_HOST || 'smtp.zoho.in',
    port: Number(process.env.SMTP_PORT || 465),
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : true,
    auth: {
        user: process.env.SMTP_USER || 'sangamkendre0505@zohomail.in',
        pass: process.env.SMTP_PASS || 'SangamKendre@13',
    },
};

// Check files exist
const excelPath = path.resolve('./data.xlsx');
const templatePath = path.resolve('./front.html');
if (!fs.existsSync(excelPath)) console.error('Missing file:', excelPath);
if (!fs.existsSync(templatePath)) console.error('Missing file:', templatePath);

// Initialize and run with error logging
const emailSender = new AutoEmailSender(excelPath, smtpConfig, 'Email', 'Name');
const subject = 'Your Email Subject';

(async () => {
    try {
        // If sendEmailsForColumn returns a Promise, await it. If not, catch errors via callback/docs.
        const result = await emailSender.sendEmailsForColumn(subject, templatePath);
        console.log('sendEmailsForColumn result:', result);
    } catch (err) {
        console.error('Failed to send emails:', err && err.stack ? err.stack : err);
    }
})();