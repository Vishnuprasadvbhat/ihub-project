import Application from "../models/Application.js";

// Apply for a job
export const applyForJob = async (req, res) => {
  try {
    const { jobId, userId } = req.body;

    const existingApplication = await Application.findOne({ jobId, userId });

    if (existingApplication) {
      return res.status(400).json({ message: "You have already applied for this job" });
    }

    const newApplication = new Application({ jobId, userId });
    await newApplication.save();
    res.status(201).json({ message: "Application submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get applications of a user
export const getUserApplications = async (req, res) => {
  try {
    const applications = await Application.find({ userId: req.params.userId }).populate("jobId");
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};