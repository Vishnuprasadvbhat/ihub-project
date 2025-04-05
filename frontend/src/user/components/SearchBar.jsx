import * as React from "react";

function SearchBar() {
  const [location, setLocation] = React.useState("Job Search");
  const [showLocationDropdown, setShowLocationDropdown] = React.useState(false);
  const [jobTitle, setJobTitle] = React.useState("");
  const [showJobDropdown, setShowJobDropdown] = React.useState(false);

  const jobSuggestions = ["UI Designer", "UX Researcher", "Android Developer", "Admin"];
  const locationSuggestions = ["Manglore, India", "Bangalore, India", "Mumbai, India", "Delhi, India"];

  const handleLocationInput = (e) => {
    setLocation(e.target.value);
    setShowLocationDropdown(true);
  };

  const handleLocationSelect = (place) => {
    setLocation(place);
    setShowLocationDropdown(false);
  };

  const handleJobInput = (e) => {
    setJobTitle(e.target.value);
    setShowJobDropdown(true);
  };

  const handleJobClick = () => {
    setShowJobDropdown(!showJobDropdown);
  };

  const handleJobSelect = (job) => {
    setJobTitle(job);
    setShowJobDropdown(false);
  };

  // Add click outside handler
  const searchBarRef = React.useRef(null);

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setShowJobDropdown(false);
        setShowLocationDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col pt-4 mr-3 text-base leading-relaxed bg-white max-md:mr-2 max-md:max-w-full" style={{ marginTop: '0px' }}>
      <div className="flex flex-col self-center max-w-full w-[900px]">
        <form ref={searchBarRef} className="flex flex-wrap gap-3 p-4 w-full bg-white border border-solid border-zinc-200 rounded-lg shadow-md max-w-[900px] max-md:px-4 max-md:max-w-full">
          <div className="flex flex-1 shrink gap-3 items-center px-3 h-full basis-4 min-w-[200px] text-slate-500 max-md:max-w-full relative">
            <div className="flex shrink-0 self-stretch my-auto w-5 h-5">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <div className="flex flex-col flex-1 shrink self-stretch pt-2 my-auto basis-0 min-w-[200px] relative">
              <label htmlFor="jobSearch" className="sr-only">
                Job title or keyword
              </label>
              <input
                type="text"
                id="jobSearch"
                value={jobTitle}
                onChange={handleJobInput}
                onClick={() => {
                  setShowJobDropdown(true);
                  setShowLocationDropdown(false);
                }}
                placeholder="Job title or keyword"
                className="w-full bg-transparent border-none focus:outline-none cursor-pointer text-slate-500"
                aria-label="Search for jobs"
              />
              <div className="flex mt-2 w-full bg-zinc-200 min-h-[1px]" />
              {showJobDropdown && (
                <ul className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 max-h-32 overflow-y-auto">
                  {jobSuggestions.map((job) => (
                    <li
                      key={job}
                      onClick={() => handleJobSelect(job)}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-slate-500"
                    >
                      {job}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="shrink-0 self-start w-0 h-12 bg-gray-800 border border-gray-800 border-solid opacity-10" />
          <div className="flex flex-1 shrink gap-3 items-center pr-4 pl-2 h-full text-gray-800 whitespace-nowrap basis-4 min-w-[200px] max-md:pr-4 max-md:max-w-full relative">
            <div className="flex shrink-0 self-stretch my-auto w-5 h-5">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 00-7.07 17.07A10 10 0 1012 2z"></path>
              </svg>
            </div>
            <div className="flex flex-col flex-1 shrink self-stretch pt-2 my-auto basis-0 min-w-[200px] relative">
              <label htmlFor="location-input" className="sr-only">
                Enter location
              </label>
              <input
                id="location-input"
                type="text"
                value={location}
                onChange={handleLocationInput}
                onClick={() => {
                  setShowLocationDropdown(true);
                  setShowJobDropdown(false);
                }}
                className="w-full bg-transparent border-none focus:outline-none cursor-pointer"
                placeholder="Enter location..."
                aria-label="Search for location"
              />
              <div className="flex mt-2 w-full bg-zinc-200 min-h-[1px]" />
              {showLocationDropdown && (
                <ul className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 max-h-32 overflow-y-auto">
                  {locationSuggestions.map((place) => (
                    <li
                      key={place}
                      onClick={() => handleLocationSelect(place)}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      {place}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 self-start px-5 py-2 font-bold text-center text-white whitespace-nowrap bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-[100px] max-md:px-4"
            aria-label="Search jobs"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Search
          </button>
        </form>
        <div className="mt-3 opacity-70 text-slate-600">
          Popular: <span className="text-blue-600 cursor-pointer hover:underline">UI Designer</span>, <span className="text-blue-600 cursor-pointer hover:underline">UX Researcher</span>, <span className="text-blue-600 cursor-pointer hover:underline">Android</span>, <span className="text-blue-600 cursor-pointer hover:underline">Admin</span>
        </div>
      </div>
      <div className="flex mt-6 w-full bg-zinc-200 min-h-[1px] max-md:max-w-full" />
    </div>
  );
}

export default SearchBar;


