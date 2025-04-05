import React from "react";
import {
  FaSearch,
  FaBuilding,
  FaUserTie,
  FaLaptopCode,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6"; 
import HeroImage from '../../assets/Hero.png';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/Authcontext";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const HomePage = () => {

  
  const navigate = useNavigate();
  const { user, loading, logout, getUserDetails, email_verify, isAuthenticated } = useContext(AuthContext);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const fetchUserAndCheckAuth = async () => {
      await getUserDetails(); 
  
      if (user?._id) {
        const verified = await isAuthenticated(user?._id);
        setIsVerified(verified); 
      }
    };
  
    fetchUserAndCheckAuth();
  }, [user?._id]); 

  const handleEmailVerify = async () => {
    await email_verify(navigate);
    toast.success("OTP sent to the registered email ID!", { position: "top-right" });
  
    const verified = await isAuthenticated(user?._id);
    setIsVerified(verified); 
  };
  

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-16">
              <h1 className="text-2xl font-bold">OpportunityHub</h1>
              <div className="space-x-8 hidden md:block">
                <a href="#" className="text-gray-600 hover:text-gray-900">Jobs</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Testimonials</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button  onClick={() => navigate("/register")} className="px-4 py-2 text-gray-600 hover:text-blue-600">Sign In</button>
              <button onClick={() => navigate("/login")} className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">Log In</button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px]">
        <div className="absolute inset-0">
          <img
            src={HeroImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              Find Your Dream Job Today
            </h1>
            <p className="text-gray-200 mb-8">
              Browse through thousands of full-time and part-time jobs near you
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-3.5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter job title"
                    className="w-full pl-10 pr-4 py-3 border rounded-lg"
                  />
                </div>
                <div className="relative">
                  <FaLocationDot className="absolute left-3 top-3.5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter location"
                    className="w-full pl-10 pr-4 py-3 border rounded-lg"
                  />
                </div>
                <button className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800">
                  Search Jobs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 space-y-12">
          {/* Employers */}
          <UserTypeSection
            icon={<FaBuilding className="text-3xl text-blue-600" />}
            bg="bg-blue-100"
            title="FOR EMPLOYERS"
            text="Find the right person for your team. Post jobs, review applications, and connect with candidates all in one place."
            buttonText="Post a Job"
          />
          <hr className="border-gray-200" />

          {/* Candidates */}
          <UserTypeSection
            icon={<FaUserTie className="text-3xl text-green-600" />}
            bg="bg-green-100"
            title="FOR CANDIDATES"
            text="Your dream job is waiting. Browse through thousands of opportunities and apply with just one click."
            buttonText="Find Jobs"
          />
          <hr className="border-gray-200" />

          {/* Freelancers */}
          <UserTypeSection
            icon={<FaLaptopCode className="text-3xl text-purple-600" />}
            bg="bg-purple-100"
            title="FOR FREELANCERS"
            text="Work on your terms. Find gigs that match your skills and schedule, all while building your portfolio."
            buttonText="Start Freelancing"
          />
        </div>
      </section>
    </div>
  );
};

const UserTypeSection = ({ icon, bg, title, text, buttonText }) => (
  <div className="flex flex-col md:flex-row items-center gap-8">
    <div className={`w-20 h-20 ${bg} rounded-full flex items-center justify-center`}>{icon}</div>
    <div className="flex-1">
      <div className="flex flex-col md:flex-row justify-between items-start w-full">
        <h3 className="text-2xl font-bold mb-2 md:w-1/3">{title}</h3>
        <div className="md:w-1/2">
          <p className="text-gray-600">{text}</p>
          <button className="mt-4 relative bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 hover:animate-pulse">{buttonText}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;