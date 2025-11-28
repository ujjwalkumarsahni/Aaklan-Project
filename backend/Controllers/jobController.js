import jobModel from "../Models/jobModel.js";

export const getJobs = async (req, res) => {
  try {
    const jobs = await jobModel.find().sort({ posted: -1 });

    res.status(200).json({
      success: true,
      count: jobs.length,
      jobs,
    });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching jobs",
      error: error.message,
    });
  }
};

// export const getJobById = async (req, res) => {
//   try {
//     const job = await Job.findById(req.params.id);
//     if (!job) {
//       return res.status(404).json({ success: false, message: "Job not found" });
//     }
//     res.status(200).json({ success: true, job });
//   } catch (error) {
//     console.error("Error fetching job:", error);
//     res.status(500).json({ success: false, message: "Server error", error: error.message });
//   }
// };


export const createJob = async (req, res) => {
  try {
    const {
      title,
      category,
      type,
      location,
      experience,
      salary,
      description,
      urgent = false,
      featured = false,
    } = req.body;

    // STRICT VALIDATION
    if (!title?.trim()) {
      return res.status(400).json({ success: false, message: "Job title is required" });
    }
    if (!category?.trim()) {
      return res.status(400).json({ success: false, message: "Category is required" });
    }
    if (!type?.trim()) {
      return res.status(400).json({ success: false, message: "Job type is required" });
    }
    if (!location?.trim()) {
      return res.status(400).json({ success: false, message: "Location is required" });
    }
    if (!experience?.trim()) {
      return res.status(400).json({ success: false, message: "Experience is required" });
    }
    if (!salary?.trim()) {
      return res.status(400).json({ success: false, message: "Salary is required" });
    }
    if (!description?.trim() || description.trim().length < 50) {
      return res.status(400).json({
        success: false,
        message: "Description must be at least 50 characters long",
      });
    }

    const newJob = new jobModel({
      title,
      category,
      type,
      location,
      experience,
      salary,
      description,
      urgent,
      featured,
    });

    const savedJob = await newJob.save();

    res.status(201).json({
      success: true,
      message: "Job created successfully",
      job: savedJob,
    });

  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};


export const updateJob = async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedJob) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }
    res.status(200).json({
      success: true,
      message: "Job updated successfully",
      job: updatedJob,
    });
  } catch (error) {
    console.error("Error updating job:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

export const deleteJob = async (req, res) => {
  try {
    const deletedJob = await Job.findByIdAndDelete(req.params.id);
    if (!deletedJob) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }
    res.status(200).json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting job:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};
