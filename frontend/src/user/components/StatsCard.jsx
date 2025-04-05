import * as React from "react";

function StatsCard() {
  return (
    <div className="flex flex-col min-w-[200px] w-[240px] rounded-lg overflow-hidden shadow-lg">
      <div className="flex flex-col max-w-full font-semibold text-slate-800 w-[240px]">
        <div className="flex overflow-hidden flex-col items-start px-4 pt-5 pb-2 w-full bg-blue-100 shadow-lg rounded-t-lg max-md:px-3">
          <div className="flex flex-col">
            <h2 className="text-lg leading-tight">Total Jobs Applied</h2>
            <div
              className="self-start mt-5 text-6xl leading-none text-center max-md:text-3xl"
              aria-label="45 total jobs applied"
            >
              45
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-12 max-w-full w-[240px] max-md:mt-8">
        <div className="flex flex-col justify-end pt-4 pl-4 w-full bg-blue-100 rounded-b-lg shadow-lg max-md:pl-3">
          <div className="flex gap-6 items-center w-full min-h-[48px]">
            <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-6">
              <h3 className="text-lg font-semibold leading-snug text-zinc-900">
                Matched Jobs
              </h3>
              <div className="mt-1 text-sm leading-loose text-zinc-900 text-opacity-70">
                (This Month)
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center w-full text-3xl font-bold leading-tight whitespace-nowrap min-h-[40px] text-zinc-900">
            <div
              className="gap-2 self-stretch my-auto"
              aria-label="9 matched jobs this month"
            >
              9
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;