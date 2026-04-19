'use client';

import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

const audits = [
  { id: 1, date: '2024-03-15', action: 'Client KYC Updated', user: 'Sarah Chen', status: 'completed' },
  { id: 2, date: '2024-03-14', action: 'Trade Review', user: 'Compliance Team', status: 'completed' },
  { id: 3, date: '2024-03-14', action: 'Document Verification', user: 'John Smith', status: 'pending' },
  { id: 4, date: '2024-03-13', action: 'Risk Assessment', user: 'System', status: 'completed' }
];

const deadlines = [
  { id: 1, name: 'SEC Form ADV', dueDate: '2024-03-30', priority: 'high', status: 'in-progress' },
  { id: 2, name: 'Quarterly Reporting', dueDate: '2024-04-15', priority: 'medium', status: 'not-started' },
  { id: 3, name: 'Client Suitability Review', dueDate: '2024-03-25', priority: 'high', status: 'in-progress' },
  { id: 4, name: 'Annual Compliance Training', dueDate: '2024-04-30', priority: 'low', status: 'not-started' }
];

export default function AuditTracking() {
  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'in-progress': return <Clock className="w-4 h-4 text-yellow-500" />;
      default: return <AlertCircle className="w-4 h-4 text-gray-400" />;
    }
  };
  
  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Audit Trail */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Audit Trail</h3>
          <p className="text-sm text-gray-600 mt-1">Latest compliance actions</p>
        </div>
        <div className="divide-y divide-gray-200">
          {audits.map((audit) => (
            <div key={audit.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center gap-3">
                {getStatusIcon(audit.status)}
                <div>
                  <p className="text-sm font-medium text-gray-900">{audit.action}</p>
                  <p className="text-xs text-gray-500">{audit.user} · {new Date(audit.date).toLocaleDateString()}</p>
                </div>
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                audit.status === 'completed' ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'
              }`}>
                {audit.status}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Compliance Deadlines */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Upcoming Deadlines</h3>
          <p className="text-sm text-gray-600 mt-1">Regulatory and compliance due dates</p>
        </div>
        <div className="divide-y divide-gray-200">
          {deadlines.map((deadline) => (
            <div key={deadline.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
              <div>
                <p className="text-sm font-medium text-gray-900">{deadline.name}</p>
                <p className="text-xs text-gray-500">Due: {new Date(deadline.dueDate).toLocaleDateString()}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(deadline.priority)}`}>
                  {deadline.priority}
                </span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  deadline.status === 'in-progress' ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-600'
                }`}>
                  {deadline.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}