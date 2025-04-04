import express from "express";
import { getAllJobs, searchJobs } from "../controllers/jobs.contoller";

const jobrouter = express.Router();

jobrouter.get("/", getAllJobs);
jobrouter.get("/search", searchJobs);

export default jobrouter;