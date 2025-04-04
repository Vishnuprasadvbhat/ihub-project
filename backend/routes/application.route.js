import express from "express";
import { applyForJob, getUserApplications } from "../controllers/application.controllers";

const application_router = express.Router();

application_router.post("/apply", applyForJob);
application_router.get("/my-applications/:userId", getUserApplications);

export default application_router;