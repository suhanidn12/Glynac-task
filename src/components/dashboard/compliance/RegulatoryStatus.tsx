'use client';

import { Shield, AlertTriangle, CheckCircle, FileText } from 'lucide-react';

const metrics = {
  complianceScore: { value: 94, change: 2 },
  openIssues: { value: 8, change: -3 },
  deadlinesMet: { value: 97, change: 1 },
  auditFindings: { value: 3, change: -2 }
};

export default function RegulatoryStatus() {
  const metricItems = [
    { label: 'Compliance Score', value: `${metrics.complianceScore.value}%`, change: metrics.complianceScore.change, icon: Shield, color: 'text-blue-600' },
    { label: 'Open Issues', value: metrics.openIssues.value, change: metrics.openIssues.change, icon: AlertTriangle, color: 'text-red-600' },
    { label: 'Deadlines Met', value: `${metrics.deadlinesMet.value}%`, change: metrics.deadlinesMet.change, icon: CheckCircle, color: 'text-green-600' },
    { label: 'Audit Findings', value: metrics.auditFindings.value, change: metrics.auditFindings.change, icon: FileText, color: 'text-orange-600' }
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