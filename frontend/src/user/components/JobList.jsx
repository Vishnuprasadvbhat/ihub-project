import React from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Rectangle3890 from "../../assets/icons/logos/Rectangle 3890.png";
import Microsoft from "../../assets/icons/logos/Microsoft.png";
import Google from "../../assets/icons/logos/Google.png";
import Discord from "../../assets/icons/logos/Discord.png";
import Fly from "../../assets/icons/logos/Fly.png";

const JobList = () => {
  const jobs = [
    {
      id: 1,
      title: "Product Designer",
      company: "GreenSphere",
      location: "Mangalore, India",
      logo: Rectangle3890,
      applied: false,
      appliedDate: null,
      link: "/greensphere",
    },
    {
      id: 2,
      title: "Product Designer",
      company: "Microsoft",
      location: "Mangalore, India",
      logo: Microsoft,
      applied: true,
      appliedDate: "20 Dec 2024",
      link: "/microsoft",
    },
    {
      id: 3,
      title: "Product Designer",
      company: "Google",
      location: "Mangalore, India",
      logo: Google,
      applied: true,
      appliedDate: "22 Dec 2024",
      link: "/google",
    },
    {
      id: 4,
      title: "Product Designer",
      company: "Discord",
      location: "Mangalore, India",
      logo: Discord,
      applied: false,
      appliedDate: null,
      link: "/discord",
    },
    {
      id: 5,
      title: "Product Designer",
      company: "Fly",
      location: "Mangalore, India",
      logo: Fly,
      applied: false,
      appliedDate: null,
      link: "/fly",
    },
  ];

  const handleJobClick = (job) => {
    if (job.link) {
      toast.success(`Redirecting to ${job.company}'s job page...`);

      window.location.href = job.link;
    } else {
      toast.error("Job link not available!");
    }
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm w-full max-w-3xl mx-auto">
      <h3 className="text-2xl font-medium mb-6 text-gray-800">
        Jobs in Mangalore
      </h3>

      <div className="flex flex-col gap-4">
        {jobs
          .filter((job) => job.location.includes("Mangalore"))
          .map((job) => (
            <div
              key={job.id}
              className={`flex items-start p-4 rounded-lg border transition hover:shadow-md ${
                job.applied
                  ? "bg-green-50 border-green-200"
                  : "bg-white border-gray-200"
              }`}
            >
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="w-12 h-12 object-contain mr-4 rounded border"
              />
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-800 mb-1">
                  {job.title}
                </h4>
                <p className="text-sm text-gray-600">{job.company}</p>
                <p className="text-sm text-gray-400 mb-2">{job.location}</p>
                {job.applied ? (
                  <span className="text-sm text-green-700 font-medium">
                    Applied on {job.appliedDate}
                  </span>
                ) : (
                  <button
                    onClick={() => handleJobClick(job)}
                    className="px-3 py-1 text-sm border border-gray-800 text-gray-800 rounded hover:bg-gray-800 hover:text-white transition"
                  >
                    View Job
                  </button>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default JobList;
