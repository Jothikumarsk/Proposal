import React from 'react';
import { FiCheckCircle, FiCircle, FiPlayCircle } from 'react-icons/fi';

const TransformationRoadmap = () => {
  const phases = [
    {
      title: 'Phase 1: Assessment & Foundation',
      duration: 'Months 1-3',
      status: 'completed',
      milestones: [
        { task: 'QA Health Assessment', completed: true },
        { task: 'Establish Core Framework', completed: true },
        { task: 'Deploy Unified Toolchain', completed: true },
        { task: 'Define Baseline Metrics', completed: true },
      ],
      metrics: [
        { name: 'Projects Documented', value: '100%', target: '100%' },
        { name: 'Toolchain Decided', value: 'Yes', target: 'Yes' },
      ]
    },
    {
      title: 'Phase 2: Standardization & Scaling',
      duration: 'Months 4-6',
      status: 'active',
      milestones: [
        { task: 'Roll Out Standard Processes', completed: true },
        { task: 'Launch Automation Guild', completed: true },
        { task: 'Implement Domain Chapters', completed: false },
        { task: 'Establish Governance', completed: false },
      ],
      metrics: [
        { name: 'Automation Coverage', value: '55%', target: '70%' },
        { name: 'Process Variations', value: '-30%', target: '-50%' },
      ]
    },
    {
      title: 'Phase 3: Optimization & Excellence',
      duration: 'Months 7-12',
      status: 'upcoming',
      milestones: [
        { task: 'Predictive Analytics', completed: false },
        { task: 'Advanced Shift-Left', completed: false },
        { task: 'Continuous Improvement', completed: false },
        { task: 'Quality as Differentiator', completed: false },
      ],
      metrics: [
        { name: 'Escape Defects', value: 'TBD', target: '-60%' },
        { name: 'Regression Time', value: 'TBD', target: '-50%' },
      ]
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <FiCheckCircle className="text-green-500 text-xl" />;
      case 'active': return <FiPlayCircle className="text-blue-500 text-xl animate-pulse" />;
      default: return <FiCircle className="text-gray-300 text-xl" />;
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-qa-dark">Transformation Roadmap</h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
        
        {phases.map((phase, phaseIndex) => (
          <div key={phaseIndex} className="relative mb-12 ml-12">
            {/* Phase dot */}
            <div className="absolute -left-11 top-0">
              {getStatusIcon(phase.status)}
            </div>
            
            {/* Phase card */}
            <div className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${
              phase.status === 'completed' ? 'border-green-500' :
              phase.status === 'active' ? 'border-blue-500' : 'border-gray-300'
            }`}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{phase.title}</h3>
                  <p className="text-gray-500">{phase.duration}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  phase.status === 'completed' ? 'bg-green-100 text-green-800' :
                  phase.status === 'active' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {phase.status.charAt(0).toUpperCase() + phase.status.slice(1)}
                </span>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Milestones */}
                <div>
                  <h4 className="font-semibold mb-3">Key Milestones</h4>
                  <div className="space-y-2">
                    {phase.milestones.map((milestone, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        {milestone.completed ? (
                          <FiCheckCircle className="text-green-500" />
                        ) : (
                          <FiCircle className="text-gray-300" />
                        )}
                        <span className={milestone.completed ? 'text-gray-700' : 'text-gray-400'}>
                          {milestone.task}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Metrics */}
                <div>
                  <h4 className="font-semibold mb-3">Success Metrics</h4>
                  <div className="space-y-3">
                    {phase.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{metric.name}</span>
                          <span className="font-bold">{metric.value}</span>
                        </div>
                        <div className="text-sm text-gray-500">Target: {metric.target}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Progress bar */}
              <div className="mt-6">
                <div className="flex justify-between text-sm text-gray-500 mb-1">
                  <span>Progress</span>
                  <span>
                    {Math.round(
                      (phase.milestones.filter(m => m.completed).length / 
                      phase.milestones.length) * 100
                    )}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      phase.status === 'completed' ? 'bg-green-500' :
                      phase.status === 'active' ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                    style={{
                      width: `${(phase.milestones.filter(m => m.completed).length / 
                              phase.milestones.length) * 100}%`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransformationRoadmap;