import React, { useState } from "react";

import Popup from "./popup";


const surgeries = [
  "Hip Surgery",
  "Knee Replacement",
  "Shoulder Surgery",
  "Cardiac Surgery",
  "Gallbladder Removal",
  "Appendectomy",
  "Cholecystectomy",
  "Hysterectomy",
  "Cataract Surgery",
  "Knee Replacement",
  "Hip Replacement",
  "Cesarean Section",
  "Coronary Artery Bypass",
  "Mastectomy",
  "Hernia Repair",
  "Tonsillectomy",
  "Thyroidectomy",
  "Spinal Fusion",
  "Gastric Bypass",
  "Angioplasty",
  "Lumpectomy",
  "Arthroscopy",
  "Laparoscopy",
  "Prostatectomy",
   "Craniotomy",
  "Skin Graft",
  "Pacemaker Implantation",
  "Liver Transplant",
  "Kidney Transplant",
  "Bariatric Sleeve Surgery",
  "ACL Reconstruction",
  "Dental Implant Surgery",
  "Sinus Surgery",
  "Vitrectomy"

];

const reminders = [
  "Take medication at 8:00 AM",
  "Pre-op fasting starts at 10:00 PM",
  "Call your care coordinator",
];


const UserDashboard: React.FC = () => {
  const [selectedSurgery, setSelectedSurgery] = useState(surgeries[0]);

  

  return (

    <>
           <Popup message="Welcome to Recover! Select your surgery to get started." />

    <div className="flex min-h-screen bg-gray-100">
     
      {/* Sidebar */}
      <aside className="w-36 bg-blue-900 text-white flex flex-col px-4 py-6">
        <div className="mb-0 flex items-center space-x-2">
          <img src="/recoverlogo.png" alt="Recover Logo" className="w-10 h-10" />
          <span className="font-bold text-lg">RECOVER</span>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            {[
              { label: "Dashboard" },
              { label: "Products" },
              { label: "Resources" },
              { label: "Progress" },
              { label: "Reminders" },
              { label: "Notifications" },
              { label: "Account" },
              { label: "Payment" },
              { label: "Settings" },
              { label: "Customer Support" },
              { label: "Help" },
              { label: "Log Out" }
            ].map((tab) => (
              <li
                key={tab.label}
                className="cursor-pointer px-4 py-2 rounded-lg font-medium transition-colors duration-150 hover:bg-blue-800 hover:text-white active:bg-blue-700 focus:bg-blue-700 focus:text-white"
                tabIndex={0}
                role="button"
                onClick={() => { /* Add navigation logic here if needed */ }}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-0">
     {/* Top Header Bar */}
<div className="flex justify-between items-center bg-blue-900 text-white px-6 py-4 mb-0" style={{marginTop: 0}}>
  <div className="flex flex-col">
    <h1 className="text-2xl font-bold">Welcome back, Felicia</h1>
    <p className="text-sm text-blue-200">One Step Closer To Recovery</p>
  </div>
  <div className="flex items-center bg-blue-800 rounded px-3 py-2">
    <input
      type="text"
      placeholder="Search Recover here"
      className="outline-none bg-blue-800 text-white placeholder-blue-200"
    />
    <span className="material-icons text-blue-200 ml-2">search</span>
  </div>
</div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 ml-6">
          {/* Left Column */}
          <div className="space-y-6 mt-0">
           {/* Select a Procedure Dropdown + Date/Time Inputs */}
<div className="bg-gray-200 rounded-xl p-4">
  <label className="block font-semibold mb-2">
    Select a Procedure:
  </label>
  <select
    className="w-full p-2 rounded border"
    value={selectedSurgery}
    onChange={(e) => setSelectedSurgery(e.target.value)}
  >
    {surgeries.map((surgery) => (
      <option key={surgery} value={surgery}>
        {surgery}
      </option>
    ))}
  </select>

  {/* Date & Time Inputs */}
  <div className="mt-4 grid grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium mb-1">Select Date:</label>
      <input
        type="date"
        className="w-full p-2 rounded border"
      />
    </div>
    <div>
      <label className="block text-sm font-medium mb-1">Select Time:</label>
      <input
        type="time"
        className="w-full p-2 rounded border"
      />
    </div>
  </div>
 
    <button className="mt-4 w-full bg-blue-700 text-white rounded py-2 font-semibold hover:bg-blue-800">
    Save
  </button>

  <button className="mt-2 w-full bg-gray-400 text-white rounded py-2 font-semibold hover:bg-gray-500">
    View full surgery details
  </button>
</div>



            {/* Days till surgery */}
            <div className="bg-gray-200 rounded-xl p-4 flex items-center space-x-4">
  <div className="flex items-center space-x-2">
    <span className="bg-blue-700 text-white text-2xl font-bold px-3 py-1 rounded">
      -
    </span>
    <span className="bg-blue-700 text-white text-2xl font-bold px-3 py-1 rounded">
      -
    </span>
  </div>
  <span className="font-semibold">Days till surgery</span>
</div>

            {/* Reminders Card */}
            <div className="bg-gray-200 rounded-xl p-4">
              <h3 className="font-semibold mb-2">Reminders</h3>
            </div>
          </div>
          {/* Middle Column */}
          <div className="space-y-6">
            {/* Progress Bar */}
            <div className="bg-gray-200 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">Felicia’s Progress:</span>
                <span className="text-2xl font-bold text-blue-700">0%</span>
              </div>
              <div className="w-full bg-blue-100 rounded-full h-4 mb-2">
                <div
                  className="bg-blue-500 h-4 rounded-full"
                  style={{ width: "0%" }}
                ></div>
              </div>
              <p>Select procedure type to view progress.</p>
              <button className="mt-3 w-full bg-gray-400 text-white rounded py-2 font-semibold hover:bg-gray-500">
                View more progress here
              </button>
            </div>
          </div>
          {/* Right Column */}
          <div>
            {/* Recovery Picks */}
            <div className="bg-gray-200 rounded-xl p-4">
              <h3 className="font-semibold mb-2">
                Recovery Picks to help you be prepared
              </h3>
              <div className="flex space-x-4 overflow-x-auto">
                <div className="flex flex-col items-center">
                  <img
                    src="https://images.pexels.com/photos/3845128/pexels-photo-3845128.jpeg?auto=compress&w=80"
                    alt="Walker"
                    className="w-20 h-20 object-cover rounded"
                  />
                  <span className="text-xs mt-1 text-center">
                    Folding Paddle Walker
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="https://images.pexels.com/photos/3952236/pexels-photo-3952236.jpeg?auto=compress&w=80"
                    alt="Pads"
                    className="w-20 h-20 object-cover rounded"
                  />
                  <span className="text-xs mt-1 text-center">
                    Sterile Abdominal Pads
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg?auto=compress&w=80"
                    alt="Commode"
                    className="w-20 h-20 object-cover rounded"
                  />
                  <span className="text-xs mt-1 text-center">
                    DMI Drop-Arm Steel Commodes
                  </span>
                </div>
              </div>
              <button className="mt-3 w-full bg-gray-400 text-white rounded py-2 font-semibold hover:bg-gray-500">
                Shop for more products here
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default UserDashboard;