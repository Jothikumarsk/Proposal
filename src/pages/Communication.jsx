// Communication.jsx
import React from 'react';
import RhythmCalendar from '../components/Communication/RhythmCalendar';
import GovernanceStructure from '../components/Governance/Structure';

const Communication = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-2">Communication & Governance</h1>
        <p className="text-gray-600 mb-6">
          Structured communication rhythm and governance framework for distributed QA teams
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-700">10:00 - 16:00</div>
            <div className="text-sm text-gray-600">Core Overlap Hours (IST)</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-700">80%</div>
            <div className="text-sm text-gray-600">Async Communication Target</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-700">4.2/5.0</div>
            <div className="text-sm text-gray-600">Meeting Effectiveness Score</div>
          </div>
        </div>
      </div>

      <RhythmCalendar />
      <GovernanceStructure />
    </div>
  );
};

export default Communication;