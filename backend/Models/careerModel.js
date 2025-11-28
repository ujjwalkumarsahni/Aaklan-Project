import mongoose from 'mongoose';

// const careerSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   phone: {
//     type: String,
//     required: true
//   },
//   resumeLink: {
//     type: String,
//     required: true
//   },
//   appliedPosition: {
//     type: String,
//     required: true
//   },
//   status: {
//     type: String,
//     enum: ['applied', 'shortlisted', 'rejected', "topic_sent", 'video_submitted', 'technicalInterview', 'hrInterview', 'offered'],
//     default: 'applied'
//   },
//   videoUrl: {
//     type: String
//   },
//   appliedAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// const careerModel = mongoose.model('Career', careerSchema);

// export default careerModel;


// import mongoose from "mongoose";

// const careerSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true,
//       trim: true,
//     },

//     phone: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     resumeLink: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     appliedPosition: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     // 🔥 BEST PRACTICE: Clean & descriptive recruitment pipeline
//     status: {
//       type: String,
//       enum: [
//         "applied",

//         // Resume screening
//         "resume_shortlisted",
//         "resume_rejected",

//         // Topic + Video round
//         "topic_sent",
//         "video_submitted",
//         "video_shortlisted",
//         "video_rejected",

//         // Interviews
//         "technicalInterview",
//         "hrInterview",

//         // Final
//         "offered",
//         "rejected"
//       ],
//       default: "applied",
//     },

//     // Video round
//     videoUrl: {
//       type: String,
//       default: null,
//     },

//     appliedAt: {
//       type: Date,
//       default: Date.now,
//     },
//   },
//   { timestamps: true }
// );

// const careerModel = mongoose.model("Career", careerSchema);

// export default careerModel;


const careerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true },
    resumeLink: { type: String, required: true, trim: true },
    appliedPosition: { type: String, required: true, trim: true },

    status: {
      type: String,
      enum: [
        "applied",
        "resume_shortlisted",
        "resume_rejected",
        "topic_sent",
        "video_submitted",
        "video_shortlisted",
        "video_rejected",
        "technicalInterview",
        "technicalInterview_cleared",
        "hrInterview",
        "hrInterview_cleared",
        "offered",
        "rejected"
      ],
      default: "applied",
    },

    videoUrl: { type: String, default: null },

    technicalInterview: {
      interviewDate: { type: String, default: "" },
      interviewTime: { type: String, default: "" },
      zoomLink: { type: String, default: "" },
    },

    hrInterview: {
      interviewDate: { type: String, default: "" },
      interviewTime: { type: String, default: "" },
      zoomLink: { type: String, default: "" },
    },

    appliedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
const careerModel = mongoose.model("Career", careerSchema);

export default careerModel;