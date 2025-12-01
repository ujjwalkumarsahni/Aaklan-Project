import twilio from "twilio";

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

export const sendOTPSMS = async (phoneNumber, otp) => {
    try {
        await client.messages.create({
            body: `Your verification OTP is ${otp}`,
            from: process.env.TWILIO_PHONE,
            to: phoneNumber
        });
        return true;
    } catch (error) {
        console.error("SMS sending failed:", error);
        return false;
    }
};
