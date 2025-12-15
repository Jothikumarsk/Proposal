// Home.jsx
import React from 'react';
import MetricsDashboard from '../components/Dashboard/MetricsDashboard';
import TransformationRoadmap from '../components/Roadmap/TransformationRoadmap';

const Home = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-qa-primary to-qa-secondary text-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold mb-4">QA Transformation Initiative</h1>
        <p className="text-xl opacity-90">
          Rebuilding QA excellence across Chennai, Pune, Mumbai & Bangalore locations
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <div className="text-2xl font-bold">3</div>
            <div className="text-sm">Phases</div>
          </div>
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <div className="text-2xl font-bold">4</div>
            <div className="text-sm">Locations</div>
          </div>
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <div className="text-2xl font-bold">12</div>
            <div className="text-sm">Months</div>
          </div>
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <div className="text-2xl font-bold">5.1x</div>
            <div className="text-sm">Projected ROI</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <MetricsDashboard />
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-qa-primary text-white p-3 rounded-lg hover:bg-blue-700">
                Download Proposal PDF
              </button>
              <button className="w-full border border-qa-primary text-qa-primary p-3 rounded-lg hover:bg-blue-50">
                Schedule Governance Review
              </button>
              <button className="w-full border border-gray-300 text-gray-700 p-3 rounded-lg hover:bg-gray-50">
                Access Training Materials
              </button>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-lg mb-4">Upcoming Events</h3>
            <div className="space-y-4">
              {[
                { date: 'Tomorrow', event: 'Site Lead Sync', time: '10:00 AM IST' },
                { date: 'Dec 15', event: 'QA Town Hall', time: '3:00 PM IST' },
                { date: 'Dec 20', event: 'Steering Committee', time: '4:00 PM IST' },
              ].map((event, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
                  <div>
                    <div className="font-medium">{event.event}</div>
                    <div className="text-sm text-gray-500">{event.time}</div>
                  </div>
                  <div className="text-sm font-semibold">{event.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <TransformationRoadmap />
    </div>
  );
};

export default Home;