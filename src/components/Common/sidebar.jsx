// Sidebar.jsx
import React from 'react';
import { FiMap, FiUsers, FiTarget, FiTrendingUp } from 'react-icons/fi';

const Sidebar = () => {
  const sections = [
    { title: 'Overview', icon: <FiMap />, items: ['Executive Summary', 'Business Case', 'ROI Projection'] },
    { title: 'Governance', icon: <FiUsers />, items: ['Structure', 'RACI Matrix', 'Decision Rights'] },
    { title: 'Roadmap', icon: <FiTarget />, items: ['Phase 1', 'Phase 2', 'Phase 3', 'Milestones'] },
    { title: 'Metrics', icon: <FiTrendingUp />, items: ['KPIs', 'Dashboards', 'Reporting'] },
  ];

  return (
    <aside className="w-64 bg-white border-r p-6 hidden md:block">
      <div className="space-y-8">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              {section.icon}
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <a href="#" className="text-gray-600 hover:text-qa-primary hover:bg-blue-50 p-2 rounded block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;