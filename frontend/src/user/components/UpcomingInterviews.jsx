import * as React from "react";

function UpcomingInterviews() {
  const timeSlots = [
    { time: "9:30 AM", hasInterview:  false},
    { time: "10:00 AM", hasInterview: false },
    { time: "10:30 AM", hasInterview: true },
    { time: "11:00 AM", hasInterview: false },
  ];

  return (
    <div className="flex overflow-hidden flex-col pb-6 bg-white border border-solid border-zinc-200 min-w-[400px] w-[600px] max-md:max-w-full" style={{ height: 'calc(100% - 50px)' }}>
      <div className="flex z-10 flex-col pt-7 pb-4 w-full text-lg font-semibold leading-tight text-gray-800 bg-white border border-solid shadow-2xl border-zinc-200 max-md:max-w-full">
        <h2 className="self-start ml-6 text-center max-md:ml-2.5">
          Upcoming Interviews
        </h2>
        <div className="shrink-0 mt-5 h-px border border-solid bg-zinc-200 border-zinc-200 max-md:max-w-full" />
        <div className="flex gap-10 justify-between items-center mx-6 mt-4 max-md:mx-2.5">
          <div className="self-stretch my-auto">
            <span className="text-gray-800">Today, </span>
            <span className="leading-8 text-gray-800">26 November</span>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d193b684186d2c818dbf3b233d1e10bb95ea3a3470013239f8c63c202a0780f?placeholderIfAbsent=true&apiKey=c91ead126a69425b87b1bcc53f92c9db"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-16 aspect-[2.67]"
          />
        </div>
      </div>
      <div className="flex flex-col px-6 pb-11 mt-0 w-full text-sm leading-relaxed max-md:pl-5 max-md:max-w-full">
        <div className="flex flex-col w-full font-medium text-slate-500">
          {timeSlots.map((slot, index) => (
            <div
              key={index}
              className={`flex gap-4 ${
                index > 0 ? "mt-8" : ""
              } max-w-full rounded-none w-[560px] max-md:mt-7`}
            >
              <div>{slot.time}</div>
              {slot.hasInterview ? (
                <div className="flex z-10 gap-4 self-end py-4 pr-11 pl-4 mt-0 bg-violet-100 rounded-lg max-md:pr-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/02c88f979d07fb5592e1c64955f2bc3f50bf3b8e7d23758528e0ea22c8ef4f06?placeholderIfAbsent=true&apiKey=c91ead126a69425b87b1bcc53f92c9db"
                    alt="Alden's profile"
                    className="object-contain shrink-0 w-12 aspect-square"
                  />
                  <div className="flex flex-col self-start">
                    <div className="self-start font-semibold text-slate-800">
                      Alden
                    </div>
                    <div className="mt-1.5 font-medium text-slate-500">
                      HR Manager at google
                    </div>
                  </div>
                </div>
              ) : (
                <div className="shrink-0 my-auto max-w-full h-0.5 border-2 border-solid bg-zinc-200 border-zinc-200 w-[470px]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UpcomingInterviews;