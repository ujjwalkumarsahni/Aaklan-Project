// import mongoose from 'mongoose';

// const bookDemoSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: [true, 'Name is required'],
//         trim: true
//     },
//     email: {
//         type: String,
//         required: [true, 'Email is required'],
//         trim: true,
//         lowercase: true,
//         match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
//     },
//     phoneNumber: {
//         type: String,
//         required: [true, 'Phone number is required'],
//         trim: true
//     },
//     designation: {
//         type: String,
//         required: [true, 'Designation is required'],
//         enum: ['Educator', 'Management', 'Principal', 'Parent', 'Trainer', 'Student', 'Other']
//     },
//     schoolName: {
//         type: String,
//         required: [true, 'School name is required'],
//         trim: true
//     },
//     city: {
//         type: String,
//         required: [true, 'City is required'],
//         trim: true
//     },
//     schoolAddress: {
//         type: String,
//         required: [true, 'School address is required'],
//         trim: true
//     },
//     scheduleCallFor: {
//         type: String,
//         required: [true, 'Schedule call for is required'],
//         enum: [
//             'AI and Robotics Lab',
//             'Computer & Coding Books for School',
//             'Online Coding & Robotics Classes',
//             'Hire Coding, Robotics & AI Trainer for School',
//             'VR/AR Lab',
//             'Coding, Robotics & AI Workshop in School',
//             'Other'
//         ]
//     },
//     message: {
//         type: String,
//         trim: true,
//         default: ''
//     },
//     status: {
//         type: String,
//         enum: ['pending', 'resolved', 'rejected'],
//         default: 'pending'
//     },
//     isOTPVerified: {
//         type: Boolean,
//         default: false
//     }
// }, {
//     timestamps: true
// });

// // Index for better query performance
// bookDemoSchema.index({ email: 1, createdAt: -1 });
// bookDemoSchema.index({ status: 1 });

// const bookDemoModel = mongoose.model('BookDemo', bookDemoSchema);

// export default bookDemoModel;

import mongoose from 'mongoose';

const bookDemoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
    phoneNumber: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true
    },
    designation: {
        type: String,
        required: [true, 'Designation is required'],
        enum: ['Educator', 'Management', 'Principal', 'Parent', 'Trainer', 'Student', 'Other']
    },
    schoolName: {
        type: String,
        required: [true, 'School name is required'],
        trim: true
    },
    city: {
        type: String,
        required: [true, 'City is required'],
        trim: true
    },
    schoolAddress: {
        type: String,
        required: [true, 'School address is required'],
        trim: true
    },
    scheduleCallFor: {
        type: String,
        required: [true, 'Schedule call for is required'],
        enum: [
            'AI and Robotics Lab',
            'Computer & Coding Books for School',
            'Online Coding & Robotics Classes',
            'Hire Coding, Robotics & AI Trainer for School',
            'VR/AR Lab',
            'Coding, Robotics & AI Workshop in School',
            'Other'
        ]
    },
    message: {
        type: String,
        trim: true,
        default: ''
    },
    status: {
        type: String,
        enum: ['pending', 'resolved', 'rejected'],
        default: 'pending'
    },
    isOTPVerified: {
        type: Boolean,
        default: false
    },
    
    // NEW FIELDS FOR 24-HOUR REMINDER
    reminderSent: {
        type: Boolean,
        default: false
    },
    lastReminderSentAt: {
        type: Date
    },
    reminderCount: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

// Index for better query performance
bookDemoSchema.index({ email: 1, createdAt: -1 });
bookDemoSchema.index({ status: 1 });
bookDemoSchema.index({ createdAt: 1 }); // For reminder queries
bookDemoSchema.index({ reminderSent: 1 }); // For reminder queries

const bookDemoModel = mongoose.model('BookDemo', bookDemoSchema);

export default bookDemoModel;