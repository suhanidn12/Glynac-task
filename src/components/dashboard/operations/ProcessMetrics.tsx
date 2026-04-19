'use client';

import { CheckCircle, Database, Clock, Activity } from 'lucide-react';

const metrics = {
  taskCompletion: { value: 92, change: 3 },
  dataQuality: { value: 85, change: 2 },
  docProcessing: { value: 2.1, change: -0.4 },
  systemUptime: { value: 99.8, change: 0.1 }
};

export default function ProcessMetrics() {
  const metricItems = [
    { label: 'Task Completion Rate', value: `${metrics.taskCompletion.value}%`, change: metrics.taskCompletion.change, icon: CheckCircle, color: 'text-green-600' },
    { label: 'Data Quality Score', value: `${metrics.dataQuality.value}%`, change: metrics.dataQuality.change, icon: Database, color: 'text-blue-600' },
    { label: 'Doc Processing Speed', value: `${metrics.docProcessing.value} hrs`, change: metrics.docProcessing.change, icon: Clock, color: 'text-purple-600' },
    { label: 'System Uptime', value: `${metrics.systemUptime.value}%`, change: metrics.systemUptime.change, icon: Activity, color: 'text-orange-600' }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metricItems.map((metric, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{metric.label}</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">{metric.value}</p>
            </div>
            <div className={`p-3 rounded-lg bg-gray-50 ${metric.color}`}>
              <metric.icon className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-4">
            <span className={`text-sm font-medium ${metric.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {metric.change > 0 ? '+' : ''}{metric.change}%
            </span>
            <span className="text-sm text-gray-500 ml-1">from last month</span>
          </div>
        </div>
      ))}
    </div>
  );
}