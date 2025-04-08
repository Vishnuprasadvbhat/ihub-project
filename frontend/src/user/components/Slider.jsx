import React, { useState, useContext } from "react";
import toast from "react-hot-toast";
import homeIcon from "../../assets/icons/user/home.svg";
import myProfileIcon from "../../assets/icons/user/myprofile.svg";
import  myApplicationsIcon from "../../assets/icons/user/myapplications.svg";
import searchIcon from "../../assets/icons/user/search.svg";
import interviewIcon from "../../assets/icons/user/interview.svg";
import documentsIcon from "../../assets/icons/user/documents.svg";
import avatarIcon from "../../assets/icons/user/Avatar.svg";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/Authcontext";
import userimage from "../../assets/icons/user/user-profile.webp";

const Sidebar = () => {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  var [active , setActive] = useState("Dashboard");
  const { user, loading, logout, getUserDetails, email_verify, isAuthenticated } = useContext(AuthContext);


  const handleNavClick = (name) => {
    toast.success(`${name} clicked!`);
  };

  const handleError = () => {
    toast.error("Something went wrong!");
  };

  const handleClick = (label) => {
    setActive = label;
  };


  return (
    <>

      <div className="md:hidden p-4">
        <button onClick={() => setIsOpen(!isOpen)} className="text-xl">
          ☰
        </button>
      </div>


      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex w-[250px] h-screen flex-col justify-between bg-white shadow-md fixed z-50 top-0 left-0`}
      >
  
        <div className="bg-[#d3d6db] p-4 text-center border-b border-gray-300">
          <h2 className="text-xs font-normal text-[#040a14] font-['Sixtyfour']">
            OpportunityHub
          </h2>
        </div>

      
        <div className="px-0 py-2 flex-1 overflow-y-auto w-full">
          <ul className="list-none m-0 p-0">
            {[
              { href: "/user/dashboard", icon: homeIcon, label: "Dashboard" },
              { href: "/user/profile", icon: myProfileIcon, label: "My Public Profile" },
              { href: "/applications", icon: myApplicationsIcon, label: "My Applications" },
              { href: "/user/jobs", icon: searchIcon, label: "Find Jobs"},
              { href: "/interviews", icon: interviewIcon, label: "Interviews" },
              { href: "/documents", icon: documentsIcon, label: "Documents" },
            ].map(({ href, icon, label}) => (
              <li key={label} className="my-1">
                <a
                  href={href}
                  onClick={() => handleClick(label)}
                  className={`flex items-center px-3 py-2 text-base font-medium font-['Inter'] rounded-md transition ${
                    setActive === label
                      ? "bg-[#e9ebfd] text-[#4640de] border-l-4 border-[#4640de] pl-2"
                      : "text-[#7c8493] hover:bg-[#f0f2f9] hover:text-[#b4b2e6]"
                  }`}
                >
                  <img src={icon} alt={label} className="w-[18px] h-[18px] mr-2" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

  
        <div  className="bg-[#d3d6db] p-4 flex items-center border-t border-gray-300 w-full">
        <button
          onClick={() => navigate("/profile")}
          className="w-12 h-12 rounded-full mr-3 overflow-hidden">
          <img
            src={user ? user.picture : userimage}
            alt="User"
            className="w-full h-full object-cover"/>
        </button>
          <div className="flex flex-col">
            <span className="font-semibold text-[#000000]">{user ? user.Name : 'Student'}</span>
            <span className="text-sm text-[#000000]">{user ? user.email : ''}</span>
          </div>
        </div>  
        
      </div>
    </>
  );
};

export default Sidebar;
