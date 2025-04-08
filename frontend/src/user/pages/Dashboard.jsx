
import * as React from "react";
import Sidebar from "../../user/components/Slider";
import SearchBar from "../../user/components/SearchBar";
import StatsCard from "../../user/components/StatsCard";
import UpcomingInterviews from "../../user/components/UpcomingInterviews";
import JobsForYou from "../../user/components/JobsForYou";
import ApplicationHistory from "../../user/components/ApplicationHistory";

import { useContext } from 'react';
import { AuthContext } from "../../auth/context/Authcontext";

function Dashboard() {
const { user, loading, logout, getUserDetails, email_verify, isAuthenticated } = useContext(AuthContext);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <div className="flex flex-1">
        <Sidebar />
        <main className="z-10 w-full">
          <div className="flex gap-5 max-md:flex-col w-full">
            <main className="flex-1 ml-[260px] min-h-screen w-full">
              <div className="flex flex-col w-full mx-auto px-6">
                <header className="py-10 text-3xl font-semibold text-slate-800">
                  Dashboard
                </header>
                <div className="w-full mt-2 flex justify-center">
                  <SearchBar className="w-[calc(100%-260px)] max-w-2xl" />
                </div>
                <div className="w-full mt-5">
                  <div className="flex gap-2 max-md:flex-col w-full">
                    <div className="flex flex-col w-[75%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-wrap gap-2 items-start px-8 pb-8 max-md:px-5 w-full justify-between">
                        <StatsCard className="w-full max-w-2xl" />
                        <UpcomingInterviews className="w-full max-w-2xl h-48" />
                      </div>
                    </div>
                    <JobsForYou className="w-[25%]" />
                  </div>
                </div>
                <div className="w-full mt-5 flex justify-center">
                  <ApplicationHistory className="w-[calc(100%-520px)]" />
                </div>
              </div>
            </main>
          </div>
        </main>
      </div>
      <footer className="flex flex-col items-center w-full bg-black min-h-[150px] mt-10 p-4">
        <div className="text-white text-2xl font-bold  w-[calc(100%-520px)]">OpportunityHub</div>
        <div className="text-white text-sm mt-2 w-[calc(100%-520px)]">Keep pushing forward, your dream job is just around the corner!</div>
        <div className="text-white text-center text-xs mt-auto">© 2021 OpportunityHub. All rights reserved.</div>
    
      </footer>
    </div>
  );
}

export default Dashboard