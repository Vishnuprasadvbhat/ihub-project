import express from "express";
import { getCandidatesDetails, addCandidateDetails, deletedCandidateDetails, updatedCandidateDetails } from "../controllers/candidate.controllers.js";
const Candidaterouter = express.Router()

Candidaterouter.get('/profile/', getCandidatesDetails);
Candidaterouter.post('/profile/add', addCandidateDetails);
Candidaterouter.put('/profile/update/:id', updatedCandidateDetails);
Candidaterouter.delete('/profile/delete/:id', deletedCandidateDetails );


export default Candidaterouter;