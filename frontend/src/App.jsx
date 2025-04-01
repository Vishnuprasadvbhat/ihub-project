import React from "react";

const Dashboard = () => {
  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/3 bg-white p-6 shadow-md h-full">
        <h1 className="text-2xl font-bold text-gray-800">OpportunityHub</h1>
        <nav className="mt-6">
          <ul>
            <li className="p-3 bg-indigo-100 rounded-md text-indigo-700 font-semibold">Dashboard</li>
            <li className="p-3 text-gray-600 hover:bg-indigo-100 rounded-md cursor-pointer">My Public Profile</li>
            <li className="p-3 text-gray-600 hover:bg-indigo-100 rounded-md cursor-pointer">My Availability</li>
            <li className="p-3 text-gray-600 hover:bg-indigo-100 rounded-md cursor-pointer">Interviews</li>
          </ul>
        </nav>
        <div className="absolute bottom-6 left-6">
          <p className="text-gray-700 font-semibold">Alden Olivero</p>
          <p className="text-gray-500 text-sm">aldenolivero12@gmail.com</p>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto h-full">
        <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

        {/* Statistics Section */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h3 className="text-xl font-bold text-gray-800">Interviews</h3>
            <p className="text-3xl font-bold text-indigo-600">12</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h3 className="text-xl font-bold text-gray-800">Pending Actions</h3>
            <p className="text-3xl font-bold text-red-600">5</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h3 className="text-xl font-bold text-gray-800">Completed Tasks</h3>
            <p className="text-3xl font-bold text-green-600">20</p>
          </div>
        </div>

        {/* Scheduled Interviews */}
        <div className="bg-white p-6 shadow-md rounded-lg mb-6">
          <h3 className="text-green-600 font-semibold">SCHEDULED INTERVIEWS (8)</h3>
          <div className="mt-4 space-y-4">
            <div className="p-4 border rounded-md">
              <p className="font-bold">T Gurubrahmareddy</p>
              <p className="text-sm text-gray-600">Java Lead K - Tech Mahindra</p>
              <p className="text-sm text-gray-500">Feb 04, 2023 - 2:00 PM IST <span className="text-red-500">Missed</span></p>
            </div>
            <div className="p-4 border rounded-md">
              <p className="font-bold">Kritesh Mehra</p>
              <p className="text-sm text-gray-600">Engineering Lead - LTIMindtree</p>
              <p className="text-sm text-gray-500">Jan 02, 2025 - 3:00 PM IST <span className="text-red-500">Missed</span></p>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="bg-white p-6 shadow-md rounded-lg mb-6">
          <h3 className="text-blue-600 font-semibold">Recent Notifications</h3>
          <ul className="mt-4 space-y-4">
            <li className="text-gray-700">
              <span className="font-bold">System Update:</span> New features have been added to the dashboard.
            </li>
            <li className="text-gray-700">
              <span className="font-bold">Reminder:</span> Your availability needs to be updated.
            </li>
            <li className="text-gray-700">
              <span className="font-bold">Interview Scheduled:</span> Check your upcoming interviews.
            </li>
          </ul>
        </div>

        {/* Pending Actions */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="font-semibold">Pending Actions</h3>
          <ul className="mt-4 space-y-4">
            <li className="text-red-500 font-semibold">Confirm Interview Slot <span className="text-gray-600 text-sm">Urgent</span></li>
            <li className="text-gray-700 font-semibold">Reminder: Interview in 2 Days <span className="text-gray-500 text-sm">Feb 10, 2025</span></li>
            <li className="text-red-500 font-semibold">Reschedule Interview Slot <span className="text-gray-600 text-sm">Urgent</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
