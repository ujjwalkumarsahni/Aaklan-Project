import { v2 as cloudinary } from "cloudinary";
import careerModel from "../Models/careerModel.js";
import transporter from "../Config/nodeMailer.js";
import { emailTemplates } from "../Config/EmailTempletes.js";
import { convertPdfToPng } from "../Utils/pdftoPng.js";
import { generateTopic1 } from "../services/generateTopic.js";
import * as fs from "fs";
import * as path from "path";

import { generateOfferLetterPDF } from "../Utils/generateOfferLetterPDF.js";

export const applyForCareer = async (req, res) => {
  try {
    const { name, email, phone, appliedPosition } = req.body;
    const resume = req.file;

    if (!resume) {
      return res.status(400).json({ message: "Resume file is required." });
    }

    // ✅ Check if user already applied with this email for this position
    const existingApplication = await careerModel.findOne({ email, appliedPosition });
    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: "You have already applied for this position with this email."
      });
    }

    // 1. Convert PDF → PNG
    const pngPath = await convertPdfToPng(resume.path);

    // 2. Upload PNG to Cloudinary
    const uploadedResume = await cloudinary.uploader.upload(pngPath, {
      folder: "career_resumes",
      resource_type: "image",
    });

    try {
      // Delete original uploaded PDF
      await fs.unlink(path.resolve(resume.path));

      // Delete generated PNG
      await fs.unlink(path.resolve(pngPath));

      console.log("✅ Local files deleted successfully");
    } catch (err) {
      console.warn("⚠ Could not delete local files:", err.message);
    }

    // 3. Save to MongoDB
    const newApplication = await careerModel.create({
      name,
      email,
      phone,
      appliedPosition,
      resumeLink: uploadedResume.secure_url,
    });

    // 4. Send confirmation email
    await transporter.sendMail({
      from: `"Aaklan HR" <${process.env.SENDER_EMAIL}>`,
      to: email,
      subject: "Application Received",
      html: emailTemplates.applicationConfirmation(name),
    });

    res.status(201).json({
      success: true,
      message: "Application submitted successfully.",
      application: newApplication,
    });

  } catch (error) {
    console.error("Error processing career application:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};


export const getAllApplicants = async (req, res) => {
  try {
    const applicants = await careerModel.find().sort({ createdAt: -1 });
    res.json({ success: true, message: applicants });

  } catch (error) {
    console.error("Error fetching applicants:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
}

// Shortlist or Reject applicant
export const shortlistApplicant = async (req, res) => {
  try {
    const { id } = req.params;
    const { decision } = req.body || {};

    if (!decision) {
      return res.status(400).json({ message: "Decision is required" });
    }

    const applicant = await careerModel.findById(id);
    if (!applicant) return res.status(404).json({ message: "Applicant not found" });

    // -------------------- REJECT --------------------
    if (decision === "reject") {
      applicant.status = "resume_rejected";
      await applicant.save();

      await transporter.sendMail({
        from: `"Aaklan HR" <${process.env.SENDER_EMAIL}>`,
        to: applicant.email,
        subject: "Application Update",
        html: emailTemplates.rejection(applicant.name),
      });

      return res.json({ message: "Applicant rejected & rejection email sent." });
    }

    // -------------------- SHORTLIST --------------------
    if (decision === "shortlist") {
      applicant.status = "resume_shortlisted";
      await applicant.save();
      await transporter.sendMail({
        from: `"Aaklan HR" <${process.env.SENDER_EMAIL}>`,
        to: applicant.email,
        subject: "Application Update",
        html: emailTemplates.shortlisted(applicant.name, applicant.resumeLink),
      });
      return res.json({ message: "Applicant shortlisted successfully." });
    }

    return res.status(400).json({ message: "Invalid decision. Use 'shortlist' or 'reject'." });

  } catch (error) {
    console.error("Error updating applicant:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Send topic email only if shortlisted

export const sendTopicEmail = async (req, res) => {
  try {
    const { id } = req.params;

    const applicant = await careerModel.findById(id);
    if (!applicant)
      return res.status(404).json({ message: "Applicant not found" });

    // Only shortlisted users can get topic
    if (applicant.status !== "resume_shortlisted") {
      return res.status(400).json({
        message: "Topic can only be sent to shortlisted applicants.",
      });
    }

    // Generate AI-based topic
    const topic = await generateTopic1(applicant.appliedPosition);

    console.log(topic);

    //  Build dynamic video submission link
    const videoLink = `${process.env.VIDEO_FORM_URL}?email=${encodeURIComponent(
      applicant.email,
    )}&topic=${encodeURIComponent(topic
    )}`;


    //  Send Email
    await transporter.sendMail({
      from: `"Aaklan HR" <${process.env.SENDER_EMAIL}>`,
      to: applicant.email,
      subject: "Screening Round - Submit Your Video",
      html: emailTemplates.screeningTopic(applicant.name, topic, videoLink),
    });

    //  Update status
    applicant.status = "topic_sent";
    applicant.topic = topic;
    await applicant.save();

    return res.json({
      success: true,
      message: "Topic email sent successfully.",
      topic,
    });
  } catch (error) {
    console.error("Error sending topic email:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Upload function
const uploadToCloud = (file) => {
  return new Promise((resolve, reject) => {
    if (!file || !file.buffer) return reject(new Error("No file buffer found"));

    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: "video", folder: "applicant_videos" },
      (error, result) => {
        if (error) return reject(error);
        resolve(result.secure_url);
      }
    );

    uploadStream.end(file.buffer);
  });
};

// Video submission handler
export const submitVideo = async (req, res) => {
  try {
    const { email } = req.body;

    if (!req.file) return res.status(400).json({ message: "No video file uploaded" });

    const applicant = await careerModel.findOne({ email });
    if (!applicant) return res.status(404).json({ message: "Applicant not found" });

    const videoUrl = await uploadToCloud(req.file); // Upload buffer to Cloudinary

    applicant.videoUrl = videoUrl;
    applicant.status = "video_submitted";
    await applicant.save();

    return res.json({
      success: true,
      message: "Video uploaded successfully",
      videoUrl,
    });
  } catch (error) {
    console.error("Cloud upload error:", error);
    return res.status(500).json({ message: "Failed to upload video" });
  }
};

/// Video shortlist or reject
export const videoShortlistController = async (req, res) => {
  try {
    const { id } = req.params;
    const { decision, interviewDate, interviewTime, zoomLink } = req.body;

    // Validate decision
    if (!decision) {
      return res.status(400).json({ message: "Decision is required." });
    }

    // Fetch Applicant
    const applicant = await careerModel.findById(id);
    if (!applicant) {
      return res.status(404).json({ message: "Applicant not found." });
    }

    /* ======================================================
       VIDEO REJECT
    ====================================================== */
    if (decision === "reject") {
      applicant.status = "video_rejected";
      await applicant.save();

      await transporter.sendMail({
        from: `"Aaklan HR" <${process.env.SENDER_EMAIL}>`,
        to: applicant.email,
        subject: "Video Round Result",
        html: `
          <h2>Hello ${applicant.name},</h2>
          <p>Thank you for completing the video round interview.</p>
          <p>We appreciate your effort, but unfortunately, you have not been selected for the next stage.</p>
          <p>We wish you all the best in your future endeavors.</p>
          <br/>
          <p>Regards,<br/>Aaklan HR Team</p>
        `,
      });

      return res.json({ message: "Applicant rejected from video round & email sent." });
    }

    /* ======================================================
       VIDEO SHORTLIST
    ====================================================== */
    if (decision === "shortlist") {
      // Validate interview details
      if (!interviewDate || !interviewTime || !zoomLink) {
        return res.status(400).json({
          message: "Interview date, time, and zoomLink are required for shortlist.",
        });
      }

      // Check if this is a reschedule
      const isReschedule = !!applicant.technicalInterview?.interviewDate;

      // Save interview details to database
      applicant.status = "video_shortlisted";
      applicant.technicalInterview = {
        interviewDate,
        interviewTime, 
        zoomLink
      };
      await applicant.save();

      // Set email content based on reschedule or new schedule
      let emailSubject = "";
      let emailHtml = "";

      if (isReschedule) {
        emailSubject = "Interview Rescheduled - Next Round";
        emailHtml = `
          <h2>Hello ${applicant.name},</h2>

          <p>Congratulations! You have been <strong>shortlisted</strong> after the video round.</p>
          <p>Your interview has been <strong>rescheduled</strong> with the following updated details:</p>

          <h3>📅 Updated Interview Schedule</h3>
          <p><strong>Date:</strong> ${interviewDate}</p>
          <p><strong>Time:</strong> ${interviewTime}</p>
          <p><strong>Zoom Meeting Link:</strong> <a href="${zoomLink}">Join Interview</a></p>

          <br/>
          <p>Please make sure to join on time with the updated schedule.</p>
          <p>We apologize for any inconvenience caused.</p>

          <p>Best wishes,<br/>Aaklan HR Team</p>
        `;
      } else {
        emailSubject = "Congratulations! You Are Shortlisted for Next Interview Round";
        emailHtml = `
          <h2>Hello ${applicant.name},</h2>

          <p>Congratulations! You have been <strong>shortlisted</strong> after the video round.</p>
          <p>We are excited to invite you to the next interview.</p>

          <h3>📅 Interview Schedule</h3>
          <p><strong>Date:</strong> ${interviewDate}</p>
          <p><strong>Time:</strong> ${interviewTime}</p>
          <p><strong>Zoom Meeting Link:</strong> <a href="${zoomLink}">Join Interview</a></p>

          <br/>
          <p>Please make sure to join on time.</p>

          <p>Best wishes,<br/>Aaklan HR Team</p>
        `;
      }

      // Send Email
      await transporter.sendMail({
        from: `"Aaklan HR" <${process.env.SENDER_EMAIL}>`,
        to: applicant.email,
        subject: emailSubject,
        html: emailHtml,
      });

      const actionMessage = isReschedule ? "rescheduled" : "scheduled";
      return res.json({
        message: `Applicant shortlisted & interview ${actionMessage} email sent!`,
        applicant
      });
    }

    /* ======================================================
       INVALID DECISION
    ====================================================== */
    return res.status(400).json({
      message: "Invalid decision. Use 'shortlist' or 'reject'.",
    });

  } catch (error) {
    console.error("Video shortlist error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


// hr and technical clear hone par mail nahi jaiyega
// export const nextStageController = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { status, technicalInterview, hrInterview } = req.body;

//     const applicant = await careerModel.findById(id);
//     if (!applicant) {
//       return res.status(404).json({ message: "Applicant not found." });
//     }

//     let emailSubject = "";
//     let emailHtml = "";
//     let isReschedule = false;

//     // Update interview info if provided
//     if (status === "technicalInterview" && technicalInterview) {
//       // Check if this is a reschedule (interview was already scheduled)
//       isReschedule = !!applicant.technicalInterview?.interviewDate;
      
//       applicant.technicalInterview = {
//         interviewDate: technicalInterview.interviewDate,
//         interviewTime: technicalInterview.interviewTime,
//         zoomLink: technicalInterview.zoomLink
//       };
//       applicant.status = "technicalInterview";

//       // Set email content based on reschedule or new schedule
//       if (isReschedule) {
//         emailSubject = "Technical Interview Rescheduled";
//         emailHtml = `
//           <h3>Hello ${applicant.name},</h3>
//           <p>Your Technical Interview has been <strong>rescheduled</strong>.</p>
//           <p>Please note the updated interview details:</p>
          
//           <h3>📅 Updated Interview Schedule</h3>
//           <p><strong>Date:</strong> ${technicalInterview.interviewDate}</p>
//           <p><strong>Time:</strong> ${technicalInterview.interviewTime}</p>
//           <p><strong>Zoom Meeting Link:</strong> <a href="${technicalInterview.zoomLink}">Join Meeting</a></p>

//           <br/>
//           <p>Please make sure to join on time with the updated schedule.</p>
//           <p>We apologize for any inconvenience caused.</p>

//           <p>Best regards,<br/>Aaklan HR Team</p>
//         `;
//       } else {
//         emailSubject = "Technical Interview Schedule";
//         emailHtml = `
//           <h3>Hello ${applicant.name},</h3>
//           <p>Congratulations! You have been shortlisted for the Technical Interview.</p>
//           <p>We are pleased to invite you for the interview as per the following schedule:</p>
          
//           <h3>📅 Interview Schedule</h3>
//           <p><strong>Date:</strong> ${technicalInterview.interviewDate}</p>
//           <p><strong>Time:</strong> ${technicalInterview.interviewTime}</p>
//           <p><strong>Zoom Meeting Link:</strong> <a href="${technicalInterview.zoomLink}">Join Meeting</a></p>

//           <br/>
//           <p>Please join 5 minutes before the scheduled time.</p>
//           <p>Good luck!</p>

//           <p>Best regards,<br/>Aaklan HR Team</p>
//         `;
//       }

//     } else if (status === "hrInterview" && hrInterview) {
//       // Check if this is a reschedule (interview was already scheduled)
//       isReschedule = !!applicant.hrInterview?.interviewDate;
      
//       applicant.hrInterview = {
//         interviewDate: hrInterview.interviewDate,
//         interviewTime: hrInterview.interviewTime,
//         zoomLink: hrInterview.zoomLink
//       };
//       applicant.status = "hrInterview";

//       // Set email content based on reschedule or new schedule
//       if (isReschedule) {
//         emailSubject = "HR Interview Rescheduled";
//         emailHtml = `
//           <h3>Hello ${applicant.name},</h3>
//           <p>Your HR Interview has been <strong>rescheduled</strong>.</p>
//           <p>Please note the updated interview details:</p>
          
//           <h3>📅 Updated Interview Schedule</h3>
//           <p><strong>Date:</strong> ${hrInterview.interviewDate}</p>
//           <p><strong>Time:</strong> ${hrInterview.interviewTime}</p>
//           <p><strong>Zoom Meeting Link:</strong> <a href="${hrInterview.zoomLink}">Join Meeting</a></p>

//           <br/>
//           <p>Please make sure to join on time with the updated schedule.</p>
//           <p>We apologize for any inconvenience caused.</p>

//           <p>Best regards,<br/>Aaklan HR Team</p>
//         `;
//       } else {
//         emailSubject = "HR Interview Schedule";
//         emailHtml = `
//           <h3>Hello ${applicant.name},</h3>
//           <p>Congratulations! You have been shortlisted for the HR Interview.</p>
//           <p>We are pleased to invite you for the interview as per the following schedule:</p>
          
//           <h3>📅 Interview Schedule</h3>
//           <p><strong>Date:</strong> ${hrInterview.interviewDate}</p>
//           <p><strong>Time:</strong> ${hrInterview.interviewTime}</p>
//           <p><strong>Zoom Meeting Link:</strong> <a href="${hrInterview.zoomLink}">Join Meeting</a></p>

//           <br/>
//           <p>Please join 5 minutes before the scheduled time.</p>
//           <p>Good luck!</p>

//           <p>Best regards,<br/>Aaklan HR Team</p>
//         `;
//       }

//     } else if (["technicalInterview_cleared", "hrInterview_cleared", "offered", "rejected"].includes(status)) {
//       // Direct status updates for cleared interviews and final decisions
//       applicant.status = status;
      
//       // Send email for final decisions
//       if (status === "offered") {
//         await transporter.sendMail({
//           from: `"Aaklan HR" <${process.env.SENDER_EMAIL}>`,
//           to: applicant.email,
//           subject: "Congratulations! Job Offer",
//           html: `
//             <h3>Hello ${applicant.name},</h3>
//             <p>We are thrilled to inform you that you have been selected for the position of ${applicant.appliedPosition} at Aaklan!</p>
//             <p>Congratulations on your outstanding performance throughout the interview process.</p>
//             <p>Our HR team will contact you shortly with the formal offer letter and next steps.</p>
//             <br/>
//             <p>Welcome to the Aaklan family! 🎉</p>
//             <p>Best regards,<br/>Aaklan HR Team</p>
//           `,
//         });
//       } else if (status === "rejected") {
//         await transporter.sendMail({
//           from: `"Aaklan HR" <${process.env.SENDER_EMAIL}>`,
//           to: applicant.email,
//           subject: "Update on Your Application",
//           html: `
//             <h3>Hello ${applicant.name},</h3>
//             <p>Thank you for your interest in the ${applicant.appliedPosition} position at Aaklan and for the time you invested in the interview process.</p>
//             <p>After careful consideration, we have decided to move forward with other candidates whose qualifications more closely match our current needs.</p>
//             <p>We appreciate your effort and wish you the best in your job search.</p>
//             <br/>
//             <p>Best regards,<br/>Aaklan HR Team</p>
//           `,
//         });
//       }
//     } else {
//       return res.status(400).json({ message: "Invalid stage/status." });
//     }

//     await applicant.save();

//     // Send email if moving to interview stage
//     if ((status === "technicalInterview" && technicalInterview) || (status === "hrInterview" && hrInterview)) {
//       await transporter.sendMail({
//         from: `"Aaklan HR" <${process.env.SENDER_EMAIL}>`,
//         to: applicant.email,
//         subject: emailSubject,
//         html: emailHtml,
//       });
//     }

//     const actionMessage = isReschedule ? "rescheduled" : "scheduled";
//     const successMessage = status.includes("_cleared") 
//       ? `Interview marked as cleared successfully.`
//       : status === "offered" 
//         ? "Offer extended successfully."
//         : status === "rejected"
//           ? "Candidate rejected successfully."
//           : `Interview ${actionMessage} successfully.`;

//     return res.json({ 
//       success: true,
//       message: successMessage,
//       applicant 
//     });

//   } catch (error) {
//     console.error("Next stage error:", error);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// };


// export const nextStageController = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { status, technicalInterview, hrInterview } = req.body;

//     const applicant = await careerModel.findById(id);
//     if (!applicant) {
//       return res.status(404).json({ message: "Applicant not found." });
//     }

//     let emailSubject = "";
//     let emailHtml = "";
//     let isReschedule = false;

//     // Update interview info if provided
//     if (status === "technicalInterview" && technicalInterview) {
//       // Check if this is a reschedule (interview was already scheduled)
//       isReschedule = !!applicant.technicalInterview?.interviewDate;
      
//       applicant.technicalInterview = {
//         interviewDate: technicalInterview.interviewDate,
//         interviewTime: technicalInterview.interviewTime,
//         zoomLink: technicalInterview.zoomLink
//       };
//       applicant.status = "technicalInterview";

//       // Set email content based on reschedule or new schedule
//       if (isReschedule) {
//         emailSubject = "Technical Interview Rescheduled";
//         emailHtml = `
//           <h3>Hello ${applicant.name},</h3>
//           <p>Your Technical Interview has been <strong>rescheduled</strong>.</p>
//           <p>Please note the updated interview details:</p>
          
//           <h3>📅 Updated Interview Schedule</h3>
//           <p><strong>Date:</strong> ${technicalInterview.interviewDate}</p>
//           <p><strong>Time:</strong> ${technicalInterview.interviewTime}</p>
//           <p><strong>Zoom Meeting Link:</strong> <a href="${technicalInterview.zoomLink}">Join Meeting</a></p>

//           <br/>
//           <p>Please make sure to join on time with the updated schedule.</p>
//           <p>We apologize for any inconvenience caused.</p>

//           <p>Best regards,<br/>Aaklan HR Team</p>
//         `;
//       } else {
//         emailSubject = "Technical Interview Schedule";
//         emailHtml = `
//           <h3>Hello ${applicant.name},</h3>
//           <p>Congratulations! You have been shortlisted for the Technical Interview.</p>
//           <p>We are pleased to invite you for the interview as per the following schedule:</p>
          
//           <h3>📅 Interview Schedule</h3>
//           <p><strong>Date:</strong> ${technicalInterview.interviewDate}</p>
//           <p><strong>Time:</strong> ${technicalInterview.interviewTime}</p>
//           <p><strong>Zoom Meeting Link:</strong> <a href="${technicalInterview.zoomLink}">Join Meeting</a></p>

//           <br/>
//           <p>Please join 5 minutes before the scheduled time.</p>
//           <p>Good luck!</p>

//           <p>Best regards,<br/>Aaklan HR Team</p>
//         `;
//       }

//     } else if (status === "hrInterview" && hrInterview) {
//       // Check if this is a reschedule (interview was already scheduled)
//       isReschedule = !!applicant.hrInterview?.interviewDate;
      
//       applicant.hrInterview = {
//         interviewDate: hrInterview.interviewDate,
//         interviewTime: hrInterview.interviewTime,
//         zoomLink: hrInterview.zoomLink
//       };
//       applicant.status = "hrInterview";

//       // Set email content based on reschedule or new schedule
//       if (isReschedule) {
//         emailSubject = "HR Interview Rescheduled";
//         emailHtml = `
//           <h3>Hello ${applicant.name},</h3>
//           <p>Your HR Interview has been <strong>rescheduled</strong>.</p>
//           <p>Please note the updated interview details:</p>
          
//           <h3>📅 Updated Interview Schedule</h3>
//           <p><strong>Date:</strong> ${hrInterview.interviewDate}</p>
//           <p><strong>Time:</strong> ${hrInterview.interviewTime}</p>
//           <p><strong>Zoom Meeting Link:</strong> <a href="${hrInterview.zoomLink}">Join Meeting</a></p>

//           <br/>
//           <p>Please make sure to join on time with the updated schedule.</p>
//           <p>We apologize for any inconvenience caused.</p>

//           <p>Best regards,<br/>Aaklan HR Team</p>
//         `;
//       } else {
//         emailSubject = "HR Interview Schedule";
//         emailHtml = `
//           <h3>Hello ${applicant.name},</h3>
//           <p>Congratulations! You have been shortlisted for the HR Interview.</p>
//           <p>We are pleased to invite you for the interview as per the following schedule:</p>
          
//           <h3>📅 Interview Schedule</h3>
//           <p><strong>Date:</strong> ${hrInterview.interviewDate}</p>
//           <p><strong>Time:</strong> ${hrInterview.interviewTime}</p>
//           <p><strong>Zoom Meeting Link:</strong> <a href="${hrInterview.zoomLink}">Join Meeting</a></p>

//           <br/>
//           <p>Please join 5 minutes before the scheduled time.</p>
//           <p>Good luck!</p>

//           <p>Best regards,<br/>Aaklan HR Team</p>
//         `;
//       }

//     } else if (["technicalInterview_cleared", "hrInterview_cleared", "offered", "rejected"].includes(status)) {
//       // Direct status updates for cleared interviews and final decisions
//       applicant.status = status;
      
//       // Send email for cleared interviews and final decisions
//       if (status === "technicalInterview_cleared") {
//         emailSubject = "Technical Interview Completed Successfully";
//         emailHtml = `
//           <h3>Hello ${applicant.name},</h3>
//           <p>Congratulations! You have successfully cleared the Technical Interview.</p>
//           <p>Your performance was impressive and we are pleased to inform you that you have qualified for the next round.</p>
//           <p>Our HR team will contact you shortly to schedule the HR Interview.</p>
//           <br/>
//           <p>Well done and keep up the great work! 🎉</p>
//           <p>Best regards,<br/>Aaklan HR Team</p>
//         `;
//       } else if (status === "hrInterview_cleared") {
//         emailSubject = "HR Interview Completed Successfully";
//         emailHtml = `
//           <h3>Hello ${applicant.name},</h3>
//           <p>Congratulations! You have successfully cleared the HR Interview.</p>
//           <p>We are impressed with your profile and overall performance throughout the selection process.</p>
//           <p>The final decision will be communicated to you shortly by our HR team.</p>
//           <br/>
//           <p>Thank you for your patience and interest in joining Aaklan! 🙌</p>
//           <p>Best regards,<br/>Aaklan HR Team</p>
//         `;
//       } else if (status === "offered") {
//         emailSubject = "Congratulations! Job Offer";
//         emailHtml = `
//           <h3>Hello ${applicant.name},</h3>
//           <p>We are thrilled to inform you that you have been selected for the position of ${applicant.appliedPosition} at Aaklan!</p>
//           <p>Congratulations on your outstanding performance throughout the interview process.</p>
//           <p>Our HR team will contact you shortly with the formal offer letter and next steps.</p>
//           <br/>
//           <p>Welcome to the Aaklan family! 🎉</p>
//           <p>Best regards,<br/>Aaklan HR Team</p>
//         `;
//       } else if (status === "rejected") {
//         emailSubject = "Update on Your Application";
//         emailHtml = `
//           <h3>Hello ${applicant.name},</h3>
//           <p>Thank you for your interest in the ${applicant.appliedPosition} position at Aaklan and for the time you invested in the interview process.</p>
//           <p>After careful consideration, we have decided to move forward with other candidates whose qualifications more closely match our current needs.</p>
//           <p>We appreciate your effort and wish you the best in your job search.</p>
//           <br/>
//           <p>Best regards,<br/>Aaklan HR Team</p>
//         `;
//       }

//       // Send email for cleared interviews and final decisions
//       if (["technicalInterview_cleared", "hrInterview_cleared", "offered", "rejected"].includes(status)) {
//         await transporter.sendMail({
//           from: `"Aaklan HR" <${process.env.SENDER_EMAIL}>`,
//           to: applicant.email,
//           subject: emailSubject,
//           html: emailHtml,
//         });
//       }
//     } else {
//       return res.status(400).json({ message: "Invalid stage/status." });
//     }

//     await applicant.save();

//     // Send email if moving to interview stage
//     if ((status === "technicalInterview" && technicalInterview) || (status === "hrInterview" && hrInterview)) {
//       await transporter.sendMail({
//         from: `"Aaklan HR" <${process.env.SENDER_EMAIL}>`,
//         to: applicant.email,
//         subject: emailSubject,
//         html: emailHtml,
//       });
//     }

//     const actionMessage = isReschedule ? "rescheduled" : "scheduled";
//     const successMessage = status.includes("_cleared") 
//       ? `Interview marked as cleared successfully.`
//       : status === "offered" 
//         ? "Offer extended successfully."
//         : status === "rejected"
//           ? "Candidate rejected successfully."
//           : `Interview ${actionMessage} successfully.`;

//     return res.json({ 
//       success: true,
//       message: successMessage,
//       applicant 
//     });

//   } catch (error) {
//     console.error("Next stage error:", error);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// };


export const nextStageController = async (req, res) => {
  try {
    const { id } = req.params;
    const { 
      status, 
      technicalInterview, 
      hrInterview,
      // Dynamic offer letter fields from dashboard
      name,
      role,
      dateOfJoining,
      probationPeriod,
      payCycleFrom,
      payCycleTo,
      ctc,
      basicSalary,
      houseRentAllowance,
      providentFund,
      securityAmount,
      netSalary
    } = req.body;

    const applicant = await careerModel.findById(id);
    if (!applicant) {
      return res.status(404).json({ message: "Applicant not found." });
    }

    let emailSubject = "";
    let emailHtml = "";
    let isReschedule = false;

    // Update interview info if provided
    if (status === "technicalInterview" && technicalInterview) {
      // ... existing technical interview code ...
    } else if (status === "hrInterview" && hrInterview) {
      // ... existing HR interview code ...
    } else if (["technicalInterview_cleared", "hrInterview_cleared", "offered", "rejected"].includes(status)) {
      applicant.status = status;
      
      if (status === "technicalInterview_cleared") {
        // ... existing technical interview cleared code ...
      } else if (status === "hrInterview_cleared") {
        // ... existing HR interview cleared code ...
      } else if (status === "offered") {
        // Prepare offer data from request body
        const offerData = {
          name: name || applicant.name,
          role: role || applicant.appliedPosition,
          dateOfJoining: dateOfJoining || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB'),
          probationPeriod: probationPeriod,
          payCycleFrom: payCycleFrom || "1st",
          payCycleTo: payCycleTo || "30th/31st",
          ctc: ctc ,
          basicSalary: basicSalary ,
          houseRentAllowance: houseRentAllowance ,
          providentFund: providentFund ,
          securityAmount: securityAmount ,
          netSalary: netSalary
        };

        // Generate offer letter PDF with dynamic data
        const offerLetterPdfPath = await generateOfferLetterPDF(applicant, offerData);
        
        emailSubject = "Congratulations! Job Offer from Aaklan";
        emailHtml = `
          <h3>Hello ${applicant.name},</h3>
          <p>We are thrilled to inform you that you have been selected for the position of ${offerData.role} at Aaklan!</p>
          <p>Congratulations on your outstanding performance throughout the interview process.</p>
          <p>Please find your formal offer letter attached with this email.</p>
          <br/>
          <p><strong>Key Offer Details:</strong></p>
          <ul>
            <li><strong>Position:</strong> ${offerData.role}</li>
            <li><strong>Date of Joining:</strong> ${offerData.dateOfJoining}</li>
            <li><strong>Net Salary:</strong> ${offerData.netSalary}</li>
            <li><strong>Probation Period:</strong> ${offerData.probationPeriod}</li>
          </ul>
          <br/>
          <p>Please review the attached offer letter carefully and let us know your acceptance.</p>
          <p>Welcome to the Aaklan family! 🎉</p>
          <p>Best regards,<br/>Aaklan HR Team</p>
        `;

        try {
          // Send email with offer letter attachment
          await transporter.sendMail({
            from: `"Aaklan HR" <${process.env.SENDER_EMAIL}>`,
            to: applicant.email,
            subject: emailSubject,
            html: emailHtml,
            attachments: [
              {
                filename: `Offer_Letter_${applicant.name.replace(/\s+/g, '_')}.pdf`,
                path: offerLetterPdfPath,
                contentType: 'application/pdf'
              }
            ]
          });

          // Clean up the temporary PDF file after successful email send
          if (fs.existsSync(offerLetterPdfPath)) {
            fs.unlinkSync(offerLetterPdfPath);
          }
        } catch (emailError) {
          console.error("Email sending failed:", emailError);
          // Clean up file even if email fails
          if (fs.existsSync(offerLetterPdfPath)) {
            fs.unlinkSync(offerLetterPdfPath);
          }
          throw emailError;
        }
        
      } else if (status === "rejected") {
        // ... existing rejection code ...
      }

      // Send email for other statuses
      if (["technicalInterview_cleared", "hrInterview_cleared", "rejected"].includes(status)) {
        await transporter.sendMail({
          from: `"Aaklan HR" <${process.env.SENDER_EMAIL}>`,
          to: applicant.email,
          subject: emailSubject,
          html: emailHtml,
        });
      }
    } else {
      return res.status(400).json({ message: "Invalid stage/status." });
    }

    await applicant.save();

    // Send email if moving to interview stage
    if ((status === "technicalInterview" && technicalInterview) || (status === "hrInterview" && hrInterview)) {
      await transporter.sendMail({
        from: `"Aaklan HR" <${process.env.SENDER_EMAIL}>`,
        to: applicant.email,
        subject: emailSubject,
        html: emailHtml,
      });
    }

    const actionMessage = isReschedule ? "rescheduled" : "scheduled";
    const successMessage = status.includes("_cleared") 
      ? `Interview marked as cleared successfully.`
      : status === "offered" 
        ? "Offer extended successfully with dynamic offer letter."
        : status === "rejected"
          ? "Candidate rejected successfully."
          : `Interview ${actionMessage} successfully.`;

    return res.json({ 
      success: true,
      message: successMessage,
      applicant 
    });

  } catch (error) {
    console.error("Next stage error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
