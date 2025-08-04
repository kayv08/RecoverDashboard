import React, { useState } from "react";

const surgeries = [
  "Hip Surgery on August 25th, 2025 @ 6am",
  "Knee Replacement on September 10th, 2025 @ 9am",
  "Shoulder Surgery on October 5th, 2025 @ 11am",
];

const reminders = [
  "Take medication at 8:00 AM",
  "Pre-op fasting starts at 10:00 PM",
  "Call your care coordinator",
];

const UserDashboard: React.FC = () => {
  const [selectedSurgery, setSelectedSurgery] = useState(surgeries[0]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col p-6">
        <div className="mb-8 flex items-center space-x-2">
          <img src="/logo.png" alt="Recover Logo" className="w-10 h-10" />
          <span className="font-bold text-lg">RECOVER</span>
        </div>
        <nav className="flex-1">
          <ul className="space-y-4">
            <li className="font-semibold">Patient Dashboard</li>
            <li>Shop for product</li>
            <li>Your Care Hub</li>
            <li>My Progress</li>
            <li>Reminders</li>
            <li>Notifications</li>
            <li>Account</li>
            <li>My Cards</li>
            <li>Settings</li>
            <li>Customer Support</li>
            <li>Help</li>
            <li>Log Out</li>
          </ul>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white bg-blue-700 px-4 py-2 rounded">
              Welcome back, Felicia
            </h1>
            <p className="text-blue-700 font-semibold mt-1">
              One Step Closer To Recovery
            </p>
          </div>
          <div className="flex items-center space-x-2 bg-white rounded px-3 py-2">
            <input
              type="text"
              placeholder="Search Recover here"
              className="outline-none"
            />
            <span className="material-icons text-gray-400">search</span>
          </div>
        </div>
        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Upcoming Surgery Dropdown */}
            <div className="bg-gray-200 rounded-xl p-4">
              <label className="block font-semibold mb-2">
                Upcoming Surgery:
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
              <button className="mt-3 w-full bg-gray-400 text-white rounded py-2 font-semibold hover:bg-gray-500">
                View full surgery details
              </button>
            </div>
            {/* Days till surgery */}
            <div className="bg-gray-200 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="bg-blue-700 text-white text-2xl font-bold px-3 py-1 rounded">
                  2
                </span>
                <span className="bg-blue-700 text-white text-2xl font-bold px-3 py-1 rounded">
                  4
                </span>
              </div>
              <span className="font-semibold">Days till surgery</span>
            </div>
            {/* Reminders Card */}
            <div className="bg-gray-200 rounded-xl p-4">
              <h3 className="font-semibold mb-2">Reminders</h3>
              <ul className="list-disc list-inside space-y-1">
                {reminders.map((reminder, idx) => (
                  <li key={idx}>{reminder}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* Middle Column */}
          <div className="space-y-6">
            {/* Progress Bar */}
            <div className="bg-gray-200 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">Felicia’s Progress:</span>
                <span className="text-2xl font-bold text-blue-700">33%</span>
              </div>
              <div className="w-full bg-blue-100 rounded-full h-4 mb-2">
                <div
                  className="bg-blue-500 h-4 rounded-full"
                  style={{ width: "33%" }}
                ></div>
              </div>
              <p>You are 33% prepared for your surgery!</p>
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
  );
};

export default UserDashboard;