import React from 'react';
import { FiUsers, FiTarget, FiBarChart, FiCheckSquare } from 'react-icons/fi';

const GovernanceStructure = () => {
  const roles = [
    {
      title: 'QA Director',
      responsibilities: [
        'Overall strategy & governance',
        'Budget & resource allocation',
        'Executive reporting',
        'Cross-functional alignment'
      ],
      tools: ['Jira Dashboards', 'Budget Tools', 'Reporting Suite']
    },
    {
      title: 'Site QA Leads',
      responsibilities: [
        'Local team management',
        'Process implementation',
        'Daily operations',
        'Escalation handling'
      ],
      tools: ['Test Management', 'Team Dashboards', 'Communication Tools']
    },
    {
      title: 'Domain Chapter Leads',
      responsibilities: [
        'Domain expertise development',
        'Best practice definition',
        'Cross-team consistency',
        'Quality standards'
      ],
      tools: ['Domain Wikis', 'Test Data Mgmt', 'Standards Repository']
    },
    {
      title: 'Guild Leads',
      responsibilities: [
        'Technical excellence',
        'Tool standardization',
        'Training & enablement',
        'Innovation driving'
      ],
      tools: ['Automation Tools', 'CI/CD Systems', 'Training Platforms']
    }
  ];

  const decisionMatrix = [
    { decision: 'Tool Selection', owner: 'QA Director', consulted: 'Guild Leads', informed: 'All Teams' },
    { decision: 'Process Changes', owner: 'Site Leads', consulted: 'Domain Leads', informed: 'All QAs' },
    { decision: 'Release Sign-off', owner: 'Domain Lead', consulted: 'Site Lead', informed: 'Product' },
    { decision: 'Budget Approval', owner: 'QA Director', consulted: 'Vertical Head', informed: 'Finance' },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-qa-dark">Governance Structure</h2>
      
      {/* Role Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roles.map((role, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <FiUsers className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{role.title}</h3>
                <p className="text-sm text-gray-500">Reporting: {index > 0 ? 'QA Director' : 'Vertical Head'}</p>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <FiCheckSquare /> Responsibilities
              </h4>
              <ul className="space-y-1">
                {role.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <FiTarget /> Primary Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {role.tools.map((tool, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Decision Matrix */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <FiBarChart /> Decision Rights Matrix (RACI)
        </h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Decision Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Responsible (R)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Accountable (A)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Consulted (C)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Informed (I)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {decisionMatrix.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium">
                    {item.decision}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {item.owner}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {item.owner === 'QA Director' ? 'Vertical Head' : 'QA Director'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                      {item.consulted}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      {item.informed}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold mb-2">RACI Legend</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <span className="font-bold text-blue-700">R</span> - Responsible (Does the work)
            </div>
            <div>
              <span className="font-bold text-green-700">A</span> - Accountable (Approves work)
            </div>
            <div>
              <span className="font-bold text-yellow-700">C</span> - Consulted (Provides input)
            </div>
            <div>
              <span className="font-bold text-gray-700">I</span> - Informed (Kept updated)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceStructure;