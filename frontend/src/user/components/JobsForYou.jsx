import * as React from "react";

import { useState, useEffect } from "react";

function JobsForYou() {
  const [jobs, setJobs] = useState([
    {
      title: "Product Designer",
      company: "Grameenphone",
      location: "Dhaka, Bangladesh",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/46422130019213f377be08a1ebeec285685e75124b2eaaf0d6e5a0ea117bb810?placeholderIfAbsent=true&apiKey=c91ead126a69425b87b1bcc53f92c9db",
    },
    {
      title: "Product Designer",
      company: "Grameenphone",
      location: "Dhaka, Bangladesh",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/49a619d39523cd838d65e68dd4b9e10c6cb327305cb0dbd7aeda524db0acf074?placeholderIfAbsent=true&apiKey=c91ead126a69425b87b1bcc53f92c9db",
    },
    {
      title: "Product Designer",
      company: "Grameenphone",
      location: "Dhaka, Bangladesh",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/387990624b4ca6f8f266ff358158345f4bd3abf95cb99c896ca967f31ee0ee0b?placeholderIfAbsent=true&apiKey=c91ead126a69425b87b1bcc53f92c9db",
    },
  ]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
      setLoading(true);
      setTimeout(() => {
        setJobs((prevJobs) => [
          ...prevJobs,
          ...prevJobs, // Add more jobs here or fetch from an API
        ]);
        setLoading(false);
      }, 2000); // Simulate loading time
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col py-0.5">
        <div className="flex overflow-hidden flex-col px-4 pt-4 w-full bg-white rounded-lg h-[550px]">
          <div className="flex gap-4 justify-center items-center px-2 w-full">
            <h2 className="flex-1 shrink self-stretch my-auto text-2xl leading-none text-zinc-900">
              Jobs for you
            </h2>
            <button className="flex justify-center items-center self-stretch my-auto text-base font-semibold tracking-wide text-blue-700 capitalize">
              All Jobs
            </button>
          </div>
          <div className="flex flex-col mt-8 w-full overflow-y-auto h-[481px]">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="flex gap-4 items-start p-2 w-full rounded-lg"
              >
                <img
                  loading="lazy"
                  src={job.logo}
                  alt={`${job.company} logo`}
                  className="object-contain shrink-0 rounded-lg aspect-square w-[72px]"
                />
                <div className="flex flex-col flex-1 shrink basis-0">
                  <div className="flex flex-col w-full">
                    <div className="text-base font-medium text-zinc-900">
                      {job.title}
                    </div>
                    <div className="flex gap-2 items-start mt-1 w-full text-xs">
                      <div className="text-zinc-900">{job.company}</div>
                      <div className="text-zinc-900 text-opacity-70">
                        {job.location}
                      </div>
                    </div>
                  </div>
                  <button className="flex gap-2 items-center self-start mt-2 text-base font-semibold tracking-wide text-blue-700 capitalize">
                    View Jobs
                  </button>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-center items-center mt-4">
                <div className="loader"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobsForYou;