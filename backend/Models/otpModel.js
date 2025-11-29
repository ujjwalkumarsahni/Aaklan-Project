import mongoose from 'mongoose';

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    otp: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    expiresAt: {
        type: Date,
        required: true,
        // Set expiry to 10 minutes from creation
        default: () => new Date(Date.now() + 10 * 60 * 1000) // 10 minutes
    }
}, {
    timestamps: true
});

// Create TTL index for automatic deletion after 10 minutes
otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

// Compound index for efficient queries
otpSchema.index({ email: 1, otp: 1 });

const otpModel = mongoose.model('OTP', otpSchema);

export default otpModel;