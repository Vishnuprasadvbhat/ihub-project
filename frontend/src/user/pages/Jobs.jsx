// src/pages/Jobs.jsx
import React from "react";
import Header from "../components/Header";
import JobList from "../components/JobList"; // or your actual job list component
import Footer from "../components/Footer";
import Sidebar from "../components/Slider";
import JobDetails from "../components/JobDetails";
import { Toaster, toast } from "react-hot-toast";
const Jobs = () => {


  return (
    <div className="flex flex-row h-screen overflow-hidden">
    
      <div className="w-[250px] bg-gray-100 flex flex-col h-screen fixed top-0 left-0 border-r border-gray-300 shadow-md z-10 p-2">
        <Sidebar />
      </div>

      <div className="ml-[250px] flex flex-col flex-1 bg-white overflow-y-auto px-5 pt-5 h-[calc(100vh-90px)]">
   
        <div className="mb-4">
          <Header />
        </div>

        <div className="flex flex-col pb-[90px] flex-1">
          <div className="flex gap-5 flex-1 h-full">
            <div className="w-full md:w-[40%]">
              <JobList />
            </div>
            <div className="hidden md:block w-full md:w-[60%]">
              <JobDetails />
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default Jobs;