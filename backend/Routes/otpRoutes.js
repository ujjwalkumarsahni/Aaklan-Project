import express from 'express';
import { sendOTP, verifyOTP } from '../Controllers/otpController.js';

const otpRoutes = express.Router();

// Send OTP
otpRoutes.post('/send', sendOTP);

// Verify OTP
otpRoutes.post('/verify', verifyOTP);

export default otpRoutes;