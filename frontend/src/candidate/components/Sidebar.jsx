import React from "react";
import homeIcon from "../assets/icons/home.svg";
import myProfileIcon from "../assets/icons/myprofile.svg";
import myApplicationsIcon from "../assets/icons/myapplications.svg";
import searchIcon from "../assets/icons/search.svg";
import interviewIcon from "../assets/icons/interview.svg";
import documentsIcon from "../assets/icons/documents.svg";
import avatarIcon from "../assets/icons/Avatar.svg";

const Sidebar = () => {
  return (
    <div className="w-[260px] h-screen fixed top-0 left-0 bg-white shadow-lg flex flex-col z-50 md:w-[72px] md:items-center">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 w-full">
        <h2 className="text-gray-800 text-xl font-bold md:hidden">OpportunityHub</h2>
      </div>

      {/* Menu */}
      <div className="flex-1 p-5 overflow-y-auto w-full">
        <ul className="space-y-2">
          <li>
            <a
              href="/dashboard"
              className="flex items-center p-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-800 rounded-md md:justify-center"
            >
              <img src={homeIcon} alt="Home" className="w-6 h-6 md:mr-0 md:w-7" />
              <span className="ml-3 md:hidden">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="/profile"
              className="flex items-center p-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-800 rounded-md md:justify-center"
            >
              <img src={myProfileIcon} alt="My Profile" className="w-6 h-6 md:mr-0" />
              <span className="ml-3 md:hidden">My Public Profile</span>
            </a>
          </li>
          <li>
            <a
              href="/applications"
              className="flex items-center p-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-800 rounded-md md:justify-center"
            >
              <img src={myApplicationsIcon} alt="Applications" className="w-6 h-6 md:mr-0" />
              <span className="ml-3 md:hidden">My Applications</span>
            </a>
          </li>
          <li className="relative bg-blue-100 rounded-md">
            <a
              href="/find-jobs"
              className="flex items-center p-3 text-sm font-medium text-blue-600 md:justify-center"
            >
              <span className="absolute left-0 top-0 h-full w-[3px] bg-blue-500 md:hidden"></span>
              <img src={searchIcon} alt="Find Jobs" className="w-6 h-6 md:mr-0" />
              <span className="ml-3 md:hidden">Find Jobs</span>
            </a>
          </li>
          <li>
            <a
              href="/interviews"
              className="flex items-center p-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-800 rounded-md md:justify-center"
            >
              <img src={interviewIcon} alt="Interviews" className="w-6 h-6 md:mr-0" />
              <span className="ml-3 md:hidden">Interviews</span>
            </a>
          </li>
          <li>
            <a
              href="/documents"
              className="flex items-center p-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-800 rounded-md md:justify-center"
            >
              <img src={documentsIcon} alt="Documents" className="w-6 h-6 md:mr-0" />
              <span className="ml-3 md:hidden">Documents</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Footer User Info */}
      <div className="p-5 border-t border-gray-200 bg-gray-100 w-full hidden md:flex md:flex-col md:items-center">
        <img src={avatarIcon} alt="User" className="w-10 h-10 rounded-full mb-2" />
      </div>
      <div className="p-5 border-t border-gray-200 bg-gray-100 w-full md:hidden">
        <div className="flex items-center">
          <img src={avatarIcon} alt="User" className="w-10 h-10 rounded-full mr-3" />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-800">Adithya Nayak</span>
            <span className="text-xs text-gray-500">adithyanayak@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
