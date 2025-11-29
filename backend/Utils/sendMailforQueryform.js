import { adminNotificationTemplate, dailyReminderTemplate, otpEmailTemplate } from "../Config/EmailTempletes.js";
import transporter from "../Config/nodeMailer.js";
// import transporter from '../config/emailConfig.js';
// import { otpEmailTemplate, adminNotificationTemplate, dailyReminderTemplate } from './emailTemplates.js';

// For Book Demo Form
export const sendOTPEmail = async (email, otp, name) => {
    try {
        const mailOptions = {
            from: `"Book Demo System" <${process.env.SENDER_EMAIL}>`,
            to: email,
            subject: 'OTP Verification - Book Demo Request',
            html: otpEmailTemplate(otp, name)
        };

        console.log('📧 Sending OTP email to:', email);
        console.log('📧 From email:', process.env.SENDER_EMAIL);
        
        const result = await transporter.sendMail(mailOptions);
        console.log('✅ OTP email sent successfully:', result.messageId);
        return true;
    } catch (error) {
        console.error('❌ Error sending OTP email:', error);
        return false;
    }
};

export const sendAdminNotification = async (formData) => {
    try {
        // Debug: Check if admin email is configured
        console.log('🔍 Checking admin email configuration...');
        console.log('🔍 ADMIN_EMAIL from env:', process.env.ADMIN_EMAIL);
        console.log('🔍 SENDER_EMAIL from env:', process.env.SENDER_EMAIL);

        if (!process.env.ADMIN_EMAIL) {
            console.warn('⚠️ ADMIN_EMAIL not configured. Skipping admin notification.');
            return true;
        }

        if (!process.env.SENDER_EMAIL) {
            console.warn('⚠️ SENDER_EMAIL not configured. Skipping admin notification.');
            return true;
        }

        const mailOptions = {
            from: `"Book Demo System" <${process.env.SENDER_EMAIL}>`,
            to: process.env.ADMIN_EMAIL,
            subject: `New Demo Request - ${formData.name}`,
            html: adminNotificationTemplate(formData)
        };

        console.log('📧 Sending admin notification to:', process.env.ADMIN_EMAIL);
        console.log('📧 Form data:', {
            name: formData.name,
            email: formData.email,
            phone: formData.phoneNumber,
            school: formData.schoolName
        });

        const result = await transporter.sendMail(mailOptions);
        console.log('✅ Admin notification sent successfully:', result.messageId);
        console.log('✅ Email response:', result.response);
        return true;
    } catch (error) {
        console.error('❌ Error sending admin notification:', error);
        console.error('❌ Error details:', {
            code: error.code,
            response: error.response,
            command: error.command
        });
        return false;
    }
};

export const sendDailyReminder = async (pendingRequests) => {
    try {
        if (!process.env.ADMIN_EMAIL) {
            console.warn('ADMIN_EMAIL not configured. Skipping daily reminder.');
            return true;
        }

        const mailOptions = {
            from: `"Book Demo System" <${process.env.SENDER_EMAIL}>`,
            to: process.env.ADMIN_EMAIL,
            subject: `Daily Reminder: ${pendingRequests.length} Pending Demo Requests`,
            html: dailyReminderTemplate(pendingRequests)
        };

        await transporter.sendMail(mailOptions);
        console.log('Daily reminder sent successfully');
        return true;
    } catch (error) {
        console.error('Error sending daily reminder:', error);
        return false;
    }
};

// For Career Page
export const sendStatusEmail = async (to, subject, text) => {
    try {
        if (!to) {
            throw new Error('No recipient defined for career email');
        }

        const info = await transporter.sendMail({
            from: `"Aaklan HR" <${process.env.SENDER_EMAIL}>`,
            to,
            subject,
            text,
        });

        console.log("Career email sent:", info.messageId);
        return info;
    } catch (error) {
        console.error("Career email send error:", error);
        throw error;
    }
};

 
export const twentyFourHourReminderTemplate = (request) => {
    const hoursPending = Math.floor((new Date() - new Date(request.createdAt)) / (1000 * 60 * 60));
    const reminderNumber = (request.reminderCount || 0) + 1;
    
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                .container { max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; }
                .header { background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); padding: 30px; text-align: center; color: white; border-radius: 10px 10px 0 0; }
                .content { padding: 30px; background: #f9f9f9; border-radius: 0 0 10px 10px; }
                .info-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                .info-table td { padding: 12px; border-bottom: 1px solid #ddd; }
                .info-table tr:last-child td { border-bottom: none; }
                .urgent { color: #e74c3c; font-weight: bold; background: #ffeaa7; padding: 15px; border-radius: 5px; text-align: center; margin: 20px 0; }
                .reminder-count { background: #e74c3c; color: white; padding: 5px 10px; border-radius: 3px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🚨 REMINDER #${reminderNumber}: Pending Request</h1>
                </div>
                <div class="content">
                    <div class="urgent">
                        ⚠️ This is reminder <span class="reminder-count">#${reminderNumber}</span> for a request pending for <strong>${hoursPending} hours</strong>
                    </div>
                    
                    <h2>Request Details:</h2>
                    <table class="info-table">
                        <tr><td><strong>Name:</strong></td><td>${request.name}</td></tr>
                        <tr><td><strong>Email:</strong></td><td>${request.email}</td></tr>
                        <tr><td><strong>Phone:</strong></td><td>${request.phoneNumber}</td></tr>
                        <tr><td><strong>School:</strong></td><td>${request.schoolName}</td></tr>
                        <tr><td><strong>City:</strong></td><td>${request.city}</td></tr>
                        <tr><td><strong>Designation:</strong></td><td>${request.designation}</td></tr>
                        <tr><td><strong>Interest:</strong></td><td>${request.scheduleCallFor}</td></tr>
                        <tr><td><strong>Submitted:</strong></td><td>${new Date(request.createdAt).toLocaleString()}</td></tr>
                        <tr><td><strong>Hours Pending:</strong></td><td><strong style="color: #e74c3c;">${hoursPending} hours</strong></td></tr>
                        <tr><td><strong>Reminder Count:</strong></td><td><strong style="color: #e74c3c;">#${reminderNumber}</strong></td></tr>
                    </table>
                    
                    <p><strong>Message:</strong> ${request.message || 'No message provided'}</p>
                    
                    <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 5px;">
                        <strong>💡 Required Actions:</strong>
                        <ul>
                            <li>📞 Contact the person immediately</li>
                            <li>📊 Update status to "resolved" or "rejected" in dashboard</li>
                            <li>✅ Reminders will stop automatically when status is updated</li>
                        </ul>
                    </div>
                    
                    <div style="margin-top: 15px; padding: 10px; background: #e8f4fd; border-radius: 5px;">
                        <strong>ℹ️ Next Reminder:</strong> Will be sent in 1 minute if status remains pending
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;
};

export const send24HourReminder = async (request) => {
    try {
        // Validate admin email
        if (!process.env.ADMIN_EMAIL) {
            console.warn('ADMIN_EMAIL not configured. Skipping 24-hour reminder.');
            return false;
        }

        const mailOptions = {
            from: `"Book Demo System - URGENT" <${process.env.SENDER_EMAIL}>`,
            to: process.env.ADMIN_EMAIL,
            subject: `🚨 URGENT: 24-Hour Pending - ${request.name} from ${request.schoolName}`,
            html: twentyFourHourReminderTemplate(request)
        };

        console.log('⏰ Sending 24-hour reminder for:', request.name);
        const result = await transporter.sendMail(mailOptions);
        console.log('✅ 24-hour reminder sent successfully');
        return true;
    } catch (error) {
        console.error('❌ Error sending 24-hour reminder:', error);
        return false;
    }
};





