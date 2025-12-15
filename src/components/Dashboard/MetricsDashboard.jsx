import React, { useState } from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const MetricsDashboard = () => {
  const [timeRange, setTimeRange] = useState('quarter');

  const defectData = [
    { month: 'Jan', escape: 12, critical: 8 },
    { month: 'Feb', escape: 10, critical: 6 },
    { month: 'Mar', escape: 7, critical: 4 },
    { month: 'Apr', escape: 5, critical: 3 },
    { month: 'May', escape: 4, critical: 2 },
    { month: 'Jun', escape: 3, critical: 1 },
  ];

  const automationData = [
    { team: 'Payments', coverage: 65, stability: 92 },
    { team: 'Customer', coverage: 45, stability: 85 },
    { team: 'Inventory', coverage: 72, stability: 94 },
    { team: 'Analytics', coverage: 38, stability: 78 },
  ];

  const locationData = [
    { name: 'Chennai', value: 35, color: '#0088FE' },
    { name: 'Pune', value: 25, color: '#00C49F' },
    { name: 'Mumbai', value: 20, color: '#FFBB28' },
    { name: 'Bangalore', value: 20, color: '#FF8042' },
  ];

  const kpiCards = [
    { title: 'Escape Defect Rate', value: '3.2%', target: '<2%', trend: 'down', change: '-15%' },
    { title: 'Automation Coverage', value: '55%', target: '70%', trend: 'up', change: '+12%' },
    { title: 'Regression Time', value: '2.1 days', target: '1 day', trend: 'down', change: '-25%' },
    { title: 'Team Satisfaction', value: '7.8/10', target: '9/10', trend: 'up', change: '+8%' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-qa-dark">QA Transformation Dashboard</h1>
        <select 
          className="px-4 py-2 border rounded-lg bg-white"
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
        >
          <option value="month">Last Month</option>
          <option value="quarter">Last Quarter</option>
          <option value="year">Last Year</option>
        </select>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiCards.map((card, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg border">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">{card.title}</p>
                <p className="text-2xl font-bold mt-2">{card.value}</p>
                <p className="text-sm text-gray-500 mt-1">Target: {card.target}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                card.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {card.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Defect Trend Chart */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Defect Trend Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={defectData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="escape" stroke="#dc2626" strokeWidth={2} />
              <Line type="monotone" dataKey="critical" stroke="#d97706" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Team Performance */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Team Automation Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={automationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="team" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="coverage" fill="#2563eb" name="Coverage %" />
              <Bar dataKey="stability" fill="#7c3aed" name="Stability %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Location Distribution */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Team Distribution by Location</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={locationData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {locationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Phase Progress */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Transformation Phase Progress</h3>
          <div className="space-y-4">
            {[
              { phase: 'Phase 1: Assessment', progress: 100, status: 'completed' },
              { phase: 'Phase 2: Standardization', progress: 65, status: 'active' },
              { phase: 'Phase 3: Optimization', progress: 20, status: 'upcoming' },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{item.phase}</span>
                  <span className="text-sm text-gray-500">{item.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      item.status === 'completed' ? 'bg-qa-success' :
                      item.status === 'active' ? 'bg-qa-primary' : 'bg-gray-300'
                    }`}
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsDashboard;