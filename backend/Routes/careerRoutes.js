// import express from 'express';
// import { applyForCareer, getAllApplicants, sendTopicEmail, shortlistApplicant, submitVideo } from '../Controllers/careerController.js';
// import multer from "multer";
// import { uploadVideo } from '../Config/videoMulter.js';

// const careerRoutes = express.Router();
// const upload = multer({ dest: "uploads/" });

// // Apply for a career
// careerRoutes.post("/apply", upload.single("resume"), applyForCareer);

// // Shortlist or Reject an applicant (update status)
// careerRoutes.put("/shortlist/:id", shortlistApplicant);

// // Send topic email (only for shortlisted applicants)
// careerRoutes.post("/send-topic/:id", sendTopicEmail);

// // Get all applicants
// careerRoutes.get("/applicants", getAllApplicants);

// // Submit video response
// careerRoutes.post("/upload-video",uploadVideo.single('video'), submitVideo);

// export default careerRoutes;


import express from "express";
import multer from "multer";
import {
  applyForCareer,
  getAllApplicants,
  nextStageController,
  sendTopicEmail,
  shortlistApplicant,
  submitVideo,
  videoShortlistController,
} from "../Controllers/careerController.js";

const careerRoutes = express.Router();

// Multer setup
const uploadResume = multer({ dest: "uploads/" }); // For resumes (disk storage)
const uploadVideo = multer({ storage: multer.memoryStorage() }); // For videos (memory buffer)

// Routes

// Apply for a career (resume upload)
careerRoutes.post("/apply", uploadResume.single("resume"), applyForCareer);

// Shortlist or Reject an applicant
careerRoutes.put("/shortlist/:id", shortlistApplicant);

// Send topic email (only for shortlisted applicants)
careerRoutes.post("/send-topic/:id", sendTopicEmail);

// Get all applicants
careerRoutes.get("/applicants", getAllApplicants);

// Submit video response (video upload)
careerRoutes.post("/upload-video", uploadVideo.single("video"), submitVideo);

// Video shortlist or reject
careerRoutes.put("/video-screening/:id", videoShortlistController);

careerRoutes.put("/next-stage/:id", nextStageController);


export default careerRoutes;
