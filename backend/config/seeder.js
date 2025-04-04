import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db.js";
import Job from '../models/jobs.model.js'


dotenv.config();
connectDB();

const jobs = [
  {
    title: "Software Engineer",
    company: "Google",
    location: "San Francisco, CA",
    description: "Develop and maintain web applications.",
  },
  {
    title: "Data Scientist",
    company: "Facebook",
    location: "New York, NY",
    description: "Analyze and interpret complex data.",
  },
  {
    title: "Product Manager",
    company: "Amazon",
    location: "Seattle, WA",
    description: "Lead teams to develop new products.",
  },
  {
    title: "Product Designer",
    company: "GreenSphere",
    location: "Mangalore, India",
    description: "Design intuitive product interfaces and experiences.",
  },
  {
    title: "UX Designer",
    company: "Microsoft",
    location: "Bangalore, India",
    description: "Improve user experience through research and testing.",
  },
  {
    title: "Full Stack Developer",
    company: "Google",
    location: "Mumbai, India",
    description: "Work on both frontend and backend of web applications.",
  },
  {
    title: "Backend Developer",
    company: "Discord",
    location: "Bangalore, India",
    description: "Build scalable backend systems and APIs.",
  },
  {
    title: "Mobile App Developer",
    company: "Fly",
    location: "Hyderabad, India",
    description: "Develop Android and iOS applications.",
  },
];

const importData = async () => {
  try {
    await Job.deleteMany(); // Clear existing jobs
    await Job.insertMany(jobs);
    console.log("✅ Dummy jobs added successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error adding jobs:", error);
    process.exit(1);
  }
};

importData();