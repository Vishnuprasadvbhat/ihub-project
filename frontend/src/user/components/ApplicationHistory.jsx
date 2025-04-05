import * as React from "react";

function ApplicationHistory() {
  const applications = [
    {
      role: "Software intern",
      company: "Canva",
      location: "India",
      type: "Full-Time",
      dateApplied: "1 Jan 2025",
      status: { text: "In Review", color: "amber" },
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/387990624b4ca6f8f266ff358158345f4bd3abf95cb99c896ca967f31ee0ee0b?placeholderIfAbsent=true&apiKey=c91ead126a69425b87b1bcc53f92c9db",
    },
    {
      role: "Data Analyst",
      company: "Wolff",
      location: "Manglore",
      type: "Full-Time",
      dateApplied: "23 Dec 2025",
      status: { text: "Shortlisted", color: "indigo" },
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/4032679ae0c5cf2520e5894131ad0862432e009d3212aac4d78bc2c8505f21ad?placeholderIfAbsent=true&apiKey=c91ead126a69425b87b1bcc53f92c9db",
    },
    {
      role: "Social Media Assistant",
      company: "Packer",
      location: "Udupi",
      type: "Full-Time",
      dateApplied: "18 Jan 2025",
      status: { text: "Declined", color: "red" },
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/0246edd27f0aeaa926f121dbca3dfb18f43a8ef1b80b4c73ae7b6e7adb03055b?placeholderIfAbsent=true&apiKey=c91ead126a69425b87b1bcc53f92c9db",
    },
  ];

  return (
    <section className="flex flex-col px-8 pb-8 mr-5 leading-relaxed border border-white border-solid max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[1104px]">
        <div className="flex flex-col py-6 w-full bg-white border border-solid border-zinc-200 max-md:max-w-full">
          <h2 className="self-start ml-6 text-xl font-semibold leading-tight text-slate-800 max-md:ml-2.5">
            Recent Applications History
          </h2>
          <div className="shrink-0 mt-8 h-px border border-solid bg-zinc-200 border-zinc-200 max-md:max-w-full" />
          <div className="flex flex-col mx-6 mt-2 bg-white max-md:mr-2.5 max-md:max-w-full">
            {applications.map((app, index) => (
              <div
                key={index}
                className="flex flex-wrap gap-10 justify-between items-center p-6 w-full rounded-lg bg-slate-50 max-md:px-5 max-md:max-w-full"
              >
                <div className="flex gap-4 items-center self-stretch my-auto min-w-[240px] w-[446px] max-md:max-w-full">
                  <img
                    loading="lazy"
                    src={app.logo}
                    alt={`${app.company} logo`}
                    className="object-contain shrink-0 self-stretch my-auto aspect-[0.97] w-[78px]"
                  />
                  <div className="flex flex-col self-stretch my-auto">
                    <div className="text-lg font-bold text-slate-800">
                      {app.role}
                    </div>
                    <div className="flex gap-2 justify-center items-center text-base whitespace-nowrap min-h-[27px] text-slate-500">
                      <div className="self-stretch my-auto">{app.company}</div>
                      <div className="self-stretch my-auto">{app.location}</div>
                      <div className="self-stretch my-auto">{app.type}</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col self-stretch my-auto text-base w-[171px]">
                  <div className="font-medium text-slate-800">Date Applied</div>
                  <div className="mt-1.5 text-slate-500">{app.dateApplied}</div>
                </div>
                <div
                  className={`flex flex-col justify-center items-start self-stretch my-auto text-sm font-semibold text-${app.status.color}-400 w-[117px]`}
                >
                  <div
                    className={`gap-2 self-stretch px-2.5 py-1.5 border border-${app.status.color}-400 border-solid rounded-[80px]`}
                  >
                    {app.status.text}
                  </div>
                </div>
                <button aria-label={`More options for ${app.role} application`}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e1b98ae98afea13367dd12782c7cb77bc988ed3315a14211dcb15118f8395e5?placeholderIfAbsent=true&apiKey=c91ead126a69425b87b1bcc53f92c9db"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                </button>
              </div>
            ))}
          </div>
          <button className="flex gap-4 items-center self-center mt-2 text-base font-semibold text-center text-indigo-600">
            View all applications history
          </button>
        </div>
      </div>
    </section>
  );
}

export default ApplicationHistory;