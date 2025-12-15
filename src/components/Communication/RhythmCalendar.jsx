import React, { useState } from 'react';
import { FiCalendar, FiClock, FiUsers, FiVideo, FiMessageSquare } from 'react-icons/fi';

const RhythmCalendar = () => {
  const [selectedView, setSelectedView] = useState('daily');

  const dailySchedule = [
    { time: '09:00', event: 'Local Standups', location: 'All Sites', type: 'sync', duration: '30m' },
    { time: '10:00', event: 'Cross-site Pairing', location: 'Virtual', type: 'collab', duration: '2h' },
    { time: '11:00', event: 'Dev Team Sync', location: 'Embedded', type: 'sync', duration: '30m' },
    { time: '14:00', event: 'Domain Knowledge Share', location: 'Virtual', type: 'learning', duration: '1h' },
    { time: '16:30', event: 'Async Status Update', location: 'Dashboard', type: 'async', duration: '15m' },
  ];

  const weeklyMeetings = [
    { day: 'Mon', time: '10:00', title: 'Site Lead Sync', participants: 'Leads', duration: '1h', tool: 'Zoom' },
    { day: 'Tue', time: '11:00', title: 'Automation Guild', participants: 'All Engineers', duration: '1.5h', tool: 'Teams' },
    { day: 'Wed', time: '11:00', title: 'Performance Guild', participants: 'Performance Team', duration: '1.5h', tool: 'Zoom' },
    { day: 'Thu', time: '10:00', title: 'Process Review', participants: 'QA Managers', duration: '1h', tool: 'Teams' },
    { day: 'Fri', time: '09:00', title: 'Metrics Review', participants: 'Leadership', duration: '45m', tool: 'Zoom' },
  ];

  const renderEventType = (type) => {
    const colors = {
      sync: 'bg-blue-100 text-blue-800',
      async: 'bg-green-100 text-green-800',
      collab: 'bg-purple-100 text-purple-800',
      learning: 'bg-yellow-100 text-yellow-800',
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex space-x-4 mb-6">
        {['daily', 'weekly', 'monthly'].map((view) => (
          <button
            key={view}
            className={`px-4 py-2 rounded-lg font-medium ${
              selectedView === view
                ? 'bg-qa-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setSelectedView(view)}
          >
            {view.charAt(0).toUpperCase() + view.slice(1)} View
          </button>
        ))}
      </div>

      {selectedView === 'daily' && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FiCalendar /> Daily Communication Rhythm (IST)
          </h3>
          <div className="space-y-3">
            {dailySchedule.map((item, index) => (
              <div key={index} className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
                <div className="w-24 font-mono font-bold">{item.time}</div>
                <div className="flex-1">
                  <div className="font-semibold">{item.event}</div>
                  <div className="text-sm text-gray-500 flex items-center gap-2">
                    <FiUsers /> {item.location}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-xs ${renderEventType(item.type)}`}>
                    {item.type.toUpperCase()}
                  </span>
                  <span className="text-gray-500 flex items-center gap-1">
                    <FiClock /> {item.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedView === 'weekly' && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Weekly Meeting Schedule</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {weeklyMeetings.map((meeting, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="font-bold text-lg">{meeting.day}</span>
                    <span className="ml-2 text-gray-500">{meeting.time}</span>
                  </div>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                    {meeting.duration}
                  </span>
                </div>
                <h4 className="font-semibold mb-2">{meeting.title}</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex items-center gap-2">
                    <FiUsers /> {meeting.participants}
                  </div>
                  <div className="flex items-center gap-2">
                    <FiVideo /> {meeting.tool}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedView === 'monthly' && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Monthly Communication Cadence</h3>
          <div className="space-y-6">
            {[
              { week: 'Week 1', focus: 'Strategic Alignment', activities: ['QA Town Hall', 'Metrics Review', 'Quarter Planning'] },
              { week: 'Week 2', focus: 'Capability Building', activities: ['Domain Deep Dives', 'Technical Workshops', 'Cross-training'] },
              { week: 'Week 3', focus: 'Innovation', activities: ['Process Hackathon', 'Tool Evaluation', 'Innovation Day'] },
              { week: 'Week 4', focus: 'Governance', activities: ['Steering Committee', 'Budget Review', 'Risk Assessment'] },
            ].map((item, index) => (
              <div key={index} className="border-l-4 border-qa-primary pl-4 py-2">
                <div className="flex items-center gap-4">
                  <div className="w-24 font-bold text-lg">{item.week}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{item.focus}</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.activities.map((activity, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RhythmCalendar;