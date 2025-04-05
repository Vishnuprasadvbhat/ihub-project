import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import JobIcon from "../../assets/icons/jobicons/Icon.png";
import NotificationIcon from "../../assets/icons/jobicons/Vector.png";
import MenuIcon from "../../assets/icons/jobicons/Icon (1).png";
import HeaderLogo from "../../assets/icons/jobicons/Rectangle 3890.png"
const JobDetails = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    try {
      setIsRegistered(true);
      toast.success("Successfully registered!");
      setTimeout(() => setIsRegistered(false), 3000);
    } catch (error) {
      toast.error("Something went wrong. Try again!");
    }
  };

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8 font-outfit">
      <Toaster position="top-right" />
     
      <div className="bg-white rounded-md shadow-md max-w-4xl mx-auto p-6 mb-6">
        <div className="border-b border-gray-200 pb-4 mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <img src={HeaderLogo} alt="Company Logo" className="w-12 h-12 rounded-lg" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Product Designer</h2>
                <p className="text-sm text-gray-500">GreenSphere Ltd. • Mangalore, India</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <img src={JobIcon} alt="Job Icon" className="w-6 h-6 cursor-pointer" />
              <img src={NotificationIcon} alt="Notifications" className="w-6 h-6 cursor-pointer" />
              <img src={MenuIcon} alt="Menu" className="w-6 h-6 cursor-pointer" />
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Posted on: 15 January 2025 | Expires on: 30 January 2025
          </p>
        </div>
        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Responsibilities:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Work on and execute design projects from start to finish.</li>
              <li>Collaborate closely with engineers, researchers, and product managers.</li>
              <li>Participate in user research and usability studies.</li>
              <li>Design wireframes and prototypes for multiple platforms.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Preferred Qualifications:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Experience with Figma, Sketch, or Adobe XD.</li>
              <li>Strong visual design skills.</li>
              <li>Familiarity with HTML/CSS and front-end development.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Skills:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Proficiency in user-centered design principles.</li>
              <li>Strong problem-solving and critical-thinking skills.</li>
              <li>Excellent communication and teamwork abilities.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Qualifications:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>BA/BS degree in Design, HCI, or equivalent practical experience.</li>
              <li>3+ years of UX design experience.</li>
              <li>Portfolio of UX design work.</li>
            </ul>
          </section>

          <div>
            <button
              onClick={handleRegister}
              className="bg-black text-white px-5 py-2 rounded-md text-base hover:bg-indigo-400 transition"
            >
              Register
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white max-w-4xl mx-auto p-6 border border-gray-200 rounded-md text-center">
        <img src={HeaderLogo} alt="Company Logo" className="w-20 h-20 mx-auto mb-4" />
        <div className="text-gray-800">
          <h3 className="text-lg font-semibold">GreenSphere Ltd.</h3>
          <p className="text-sm text-gray-600 mt-1">
            Telecommunications • 6,428 employees • Actively Hiring
          </p>
          <p className="text-sm text-gray-600 mt-3">
            The right and contemporary use of technology is key for the progress of a
            nation. Keeping this in mind, GreenSphere has always pioneered the
            telecommunications industry in Bangladesh.
          </p>
          <a
            href="#"
            className="inline-block mt-4 text-black font-semibold hover:text-indigo-400 transition"
          >
            View Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
