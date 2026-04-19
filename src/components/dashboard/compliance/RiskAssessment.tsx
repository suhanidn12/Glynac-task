'use client';

import { AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';

const risks = [
  { category: 'Regulatory', riskLevel: 'Low', score: 92, status: 'monitored' },
  { category: 'Operational', riskLevel: 'Medium', score: 78, status: 'needs-review' },
  { category: 'Market', riskLevel: 'Low', score: 88, status: 'monitored' },
  { category: 'Cybersecurity', riskLevel: 'Medium', score: 82, status: 'monitored' },
  { category: 'Liquidity', riskLevel: 'Low', score: 95, status: 'good' }
];

export default function RiskAssessment() {
  const getRiskColor = (riskLevel: string) => {
    switch(riskLevel) {
      case 'Low': return 'text-green-600 bg-green-50';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      case 'High': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };
  
  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'good': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'monitored': return <AlertCircle className="w-5 h-5 text-blue-500" />;
      case 'needs-review': return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      default: return <AlertCircle className="w-5 h-5 text-gray-500" />;
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Risk Assessment</h3>
        <p className="text-sm text-gray-600 mt-1">Risk levels by category</p>
      </div>
      
      <div className="divide-y divide-gray-200">
        {risks.map((risk, index) => (
          <div key={index} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-4">
              {getStatusIcon(risk.status)}
              <div>
                <p className="font-medium text-gray-900">{risk.category}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${getRiskColor(risk.riskLevel)}`}>
                    {risk.riskLevel} Risk
                  </span>
                  <span className="text-xs text-gray-500">Score: {risk.score}%</span>
                </div>
              </div>
            </div>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}