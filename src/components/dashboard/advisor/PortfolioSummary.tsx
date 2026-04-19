'use client';

import { TrendingUp, TrendingDown, Users, Shield } from 'lucide-react';

// Mock data - replace with real data later
const mockData = {
  totalAUM: { value: 184700000, change: 12.4 },
  avgReturn: { value: 8.2, change: 1.5 },
  activeClients: { value: 187, change: 8 },
  riskScore: { value: 4.2, change: -0.3 }
};

export default function PortfolioSummary() {
  const metrics = [
    {
      label: 'Total AUM',
      value: `$${(mockData.totalAUM.value / 1000000).toFixed(1)}M`,
      change: mockData.totalAUM.change,
      icon: TrendingUp,
      color: 'text-blue-600'
    },
    {
      label: 'Avg. Return',
      value: `${mockData.avgReturn.value}%`,
      change: mockData.avgReturn.change,
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      label: 'Active Clients',
      value: mockData.activeClients.value,
      change: mockData.activeClients.change,
      icon: Users,
      color: 'text-purple-600'
    },
    {
      label: 'Risk Score',
      value: mockData.riskScore.value,
      change: mockData.riskScore.change,
      icon: Shield,
      color: 'text-orange-600'
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{metric.label}</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">{metric.value}</p>
            </div>
            <div className={`p-3 rounded-lg bg-gray-50 ${metric.color}`}>
              <metric.icon className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1">
            {metric.change > 0 ? (
              <TrendingUp className="w-4 h-4 text-green-500" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500" />
            )}
            <span className={`text-sm font-medium ${metric.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {Math.abs(metric.change)}%
            </span>
            <span className="text-sm text-gray-500">from last month</span>
          </div>
        </div>
      ))}
    </div>
  );
}