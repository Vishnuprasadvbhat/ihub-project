import Job from "../models/Job.js";

// Get all jobs
export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Search jobs by title
export const searchJobs = async (req, res) => {
  try {
    console.log("Search Query Received:", req.query.keyword); // ✅ Debugging step

    if (!req.query.keyword) {
      return res.status(400).json({ message: "No search keyword provided" });
    }

    const keywordFilter = {
      title: { $regex: new RegExp(req.query.keyword, "i") }, // ✅ Ensure regex is properly formatted
    };

    console.log("MongoDB Query:", keywordFilter); // ✅ Debugging step

    const jobs = await Job.find(keywordFilter);
    
    console.log("Filtered Jobs:", jobs.length ? jobs : "No matching jobs found"); // ✅ Debugging step
    
    res.json(jobs);
  } catch (error) {
    console.error("Error searching jobs:", error);
    res.status(500).json({ message: "Server Error" });
  }
};