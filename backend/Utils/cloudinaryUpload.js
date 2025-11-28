import cloudinary from "../Config/cloudinary.js";

// / Accepts multer file object
export const uploadToCloud = (file) => {
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
