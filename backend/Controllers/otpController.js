// import OTP from '../models/OTP.js';
import otpModel from '../Models/otpModel.js';
import generateOTP from '../Utils/generateOTP.js';
import { sendOTPEmail } from '../Utils/sendMailforQueryform.js';
// import { sendOTPEmail } from '../utils/sendMail.js';

// Store verified phone numbers (in production, use Redis)
const verifiedPhones = new Set();

// Send OTP to email
export const sendOTP = async (req, res) => {
    try {
        const { email, phoneNumber, name } = req.body;

        // Validation
        if (!email || !phoneNumber || !name) {
            return res.status(400).json({
                success: false,
                message: 'Email, phone number, and name are required'
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Please provide a valid email address'
            });
        }

        // Generate OTP
        const otp = generateOTP();

        // Set expiry time (10 minutes from now)
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

        // Save OTP to database
        await otpModel.findOneAndDelete({ email }); // Remove existing otpModel
        await otpModel.create({ 
            email, 
            otp, 
            phoneNumber,
            expiresAt // Explicitly set expiry
        });

        console.log(`OTP ${otp} created for ${email}, expires at: ${expiresAt}`);

        // Send OTP via email
        const emailSent = await sendOTPEmail(email, otp, name);

        if (!emailSent) {
            return res.status(500).json({
                success: false,
                message: 'Failed to send OTP email. Please try again.'
            });
        }

        res.status(200).json({
            success: true,
            message: 'OTP sent successfully to your email',
            data: { 
                email,
                expiresAt: expiresAt.toISOString()
            }
        });

    } catch (error) {
        console.error('Send OTP error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error. Please try again later.'
        });
    }
};

// Verify OTP
export const verifyOTP = async (req, res) => {
    try {
        const { email, otp, phoneNumber } = req.body;

        // Validation
        if (!email || !otp || !phoneNumber) {
            return res.status(400).json({
                success: false,
                message: 'Email, OTP, and phone number are required'
            });
        }

        console.log(`Verifying OTP for ${email}: ${otp}`);

        // Find OTP in database
        const otpRecord = await otpModel.findOne({ 
            email: email.toLowerCase(), 
            otp, 
            phoneNumber 
        });

        console.log('Found OTP record:', otpRecord);

        if (!otpRecord) {
            return res.status(400).json({
                success: false,
                message: 'Invalid OTP. Please check and try again.'
            });
        }

        // Check if OTP is expired
        const now = new Date();
        if (otpRecord.expiresAt < now) {
            await otpModel.findByIdAndDelete(otpRecord._id);
            console.log(`OTP expired at: ${otpRecord.expiresAt}, current time: ${now}`);
            return res.status(400).json({
                success: false,
                message: 'OTP has expired. Please request a new one.'
            });
        }

        console.log(`OTP verified successfully for ${email}`);

        // Mark phone as verified
        verifiedPhones.add(phoneNumber);

        // Delete used OTP
        await otpModel.findByIdAndDelete(otpRecord._id);

        res.status(200).json({
            success: true,
            message: 'OTP verified successfully',
            data: { phoneNumber }
        });

    } catch (error) {
        console.error('Verify OTP error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

// Check if phone is verified (middleware function)
export const isPhoneVerified = (phoneNumber) => {
    return verifiedPhones.has(phoneNumber);
};

// Clear verified phone (after form submission)
export const clearVerifiedPhone = (phoneNumber) => {
    verifiedPhones.delete(phoneNumber);
};