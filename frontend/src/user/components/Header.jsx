import React, { useState } from "react";
import toast from "react-hot-toast";

const Header = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search.trim() === "") {
      toast.error("Please enter a job role to search");
    } else {
      toast.success(`Searching for "${search}"`);
    }
  };

  const handleAllFilter = () => {
    toast.success("All filters applied");
  };

  return (
    <div className="flex flex-col gap-4 p-4 bg-white border-b border-gray-200">
      {/* First Row */}
      <div className="flex flex-wrap gap-3 md:gap-4 items-center justify-between">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Product Designer"
          className="flex-grow min-w-[180px] px-4 py-2 border border-gray-300 rounded-md text-sm"
        />
        <select className="min-w-[150px] px-3 py-2 border border-gray-300 rounded-md text-sm">
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Japan">Japan</option>
        </select>
        <button
          onClick={handleSearch}
          className="min-w-[100px] px-4 py-2 bg-[#02080f] text-white rounded-md text-sm hover:bg-[#b4b2e6] transition"
        >
          Search
        </button>
      </div>

      {/* Second Row */}
      <div className="flex flex-wrap gap-3 md:gap-4 items-center justify-between">
        <select className="min-w-[150px] px-3 py-2 border border-gray-300 rounded-md text-sm">
          <option value="">Date Posted</option>
          <option value="last24hours">Last 24 hours</option>
          <option value="last7days">Last 7 days</option>
          <option value="last30days">Last 30 days</option>
        </select>

        <select className="min-w-[150px] px-3 py-2 border border-gray-300 rounded-md text-sm">
          <option value="">Job Type</option>
          <option value="fulltime">Full-Time</option>
          <option value="parttime">Part-Time</option>
          <option value="freelance">Freelance</option>
        </select>

        <select className="min-w-[150px] px-3 py-2 border border-gray-300 rounded-md text-sm">
          <option value="">Experience Level</option>
          <option value="entry">Entry Level</option>
          <option value="mid">Mid Level</option>
          <option value="senior">Senior Level</option>
        </select>

        <select className="min-w-[150px] px-3 py-2 border border-gray-300 rounded-md text-sm">
          <option value="">On-Site/Remote</option>
          <option value="onsite">On-Site</option>
          <option value="remote">Remote</option>
          <option value="hybrid">Hybrid</option>
        </select>

        <select className="min-w-[150px] px-3 py-2 border border-gray-300 rounded-md text-sm">
          <option value="">Company</option>
          <option value="google">Google</option>
          <option value="microsoft">Microsoft</option>
          <option value="nutanix">Nutanix</option>
        </select>

        <button
          onClick={handleAllFilter}
          className="min-w-[100px] px-4 py-2 bg-[#333] text-white rounded-md text-sm hover:bg-white hover:text-black border border-[#333] transition"
        >
          All Filter
        </button>
      </div>
    </div>
  );
};

export default Header;
