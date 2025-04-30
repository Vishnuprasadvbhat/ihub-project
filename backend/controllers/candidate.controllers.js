

import Candidate from '../models/candidate.model.js';

// Add New Candidate
export const addCandidateDetails = async (req, res) => {
    console.log("Received data:", req.body); 
    try {
      
        const existingCandidate = await Candidate.findOne({ "personalInfo.email": req.body.personalInfo.email });
        if (existingCandidate) {
            return res.status(400).json({ message: "Candidate with this email already exists." });
        }

       
        const newCandidate = new Candidate(req.body);
        const savedCandidate = await newCandidate.save();
        res.status(201).json({
            message: "Candidate added successfully!",
            data: savedCandidate
        });
    } catch (error) {
        console.error("POST Error:", error);
        res.status(400).json({
            message: error.name === 'ValidationError' 
                   ? "Validation Error: Check your input data"
                   : "Error adding candidate",
            error: error.message 
        });
    }
};

// Get All Candidates
export const getCandidatesDetails =  async (req, res) => {
    try {
        const candidates = await Candidate.find().lean();
        if (candidates.length === 0) {
            return res.status(404).json({ message: "No candidates found" });
        }
        res.status(200).json({
            count: candidates.length,
            data: candidates
        });
    } catch (error) {
        console.error("GET Error:", error);
        res.status(500).json({
            message: "Server error fetching candidates",
            error: error.message
        });
    }
};


export const updatedCandidateDetails = async (req, res) => {
  try {
      const updates = {};
      
      // Dynamically construct update object using dot notation
      for (const key in req.body) {
          if (req.body[key] !== undefined) {
              updates[key] = req.body[key];
          }
      }

      const updatedCandidate = await Candidate.findByIdAndUpdate(
          req.params.id,
          { $set: updates },  // Ensures only provided fields are updated
          { new: true, runValidators: true }
      );

      if (!updatedCandidate) {
          return res.status(404).json({ message: "Candidate not found" });
      }

      res.status(200).json({
          message: "Candidate updated successfully!",
          data: updatedCandidate
      });
  } catch (error) {
      console.error("PUT Error:", error);
      const statusCode = error.name === 'CastError' ? 404 : 400;
      res.status(statusCode).json({
          message: "Error updating candidate",
          error: error.message
      });
  }
};

// Delete Candidate
export const deletedCandidateDetails = async (req, res) => { 
    try {
        const deletedCandidate = await Candidate.findByIdAndDelete(req.params.id);
        
        if (!deletedCandidate) {
            return res.status(404).json({ message: "Candidate not found" });
        }
        
        res.status(200).json({
            message: "Candidate deleted successfully!",
            data: deletedCandidate
        });
    } catch (error) {
        console.error("DELETE Error:", error);
        res.status(400).json({
            message: "Error deleting candidate",
            error: error.message
        });
    }
};

