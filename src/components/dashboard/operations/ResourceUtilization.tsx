'use client';

import { CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';

const systems = [
  { name: 'HubSpot CRM', status: 'connected', lastSync: '2024-03-15 10:30 AM' },
  { name: 'Addepar', status: 'connected', lastSync: '2024-03-15 10:28 AM' },
  { name: 'eMoney', status: 'syncing', lastSync: '2024-03-15 09:45 AM' },
  { name: 'Schwab', status: 'connected', lastSync: '2024-03-15 10:32 AM' }
];

export default function SystemHealth() {
  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'connected': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'syncing': return <RefreshCw className="w-5 h-5 text-yellow-500 animate-spin" />;
      default: return <AlertCircle className="w-5 h-5 text-red-500" />;
    }
  };
  
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'connected': return 'text-green-600 bg-green-50';
      case 'syncing': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-red-600 bg-red-50';
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">System Integration Health</h3>
          <p className="text-sm text-gray-600 mt-1">
            {systems.filter(s => s.status === 'connected').length}/{systems.length} systems connected
          </p>
        </div>
        <div className="px-3 py-1 rounded-full text-sm font-medium bg-green-50 text-green-600">
          0 issues
        </div>
      </div>
      
      <div className="space-y-3">
        {systems.map((system, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              {getStatusIcon(system.status)}
              <div>
                <p className="font-medium text-gray-900">{system.name}</p>
                <p className="text-xs text-gray-500">Last sync: {system.lastSync}</p>
              </div>
            </div>
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(system.status)}`}>
              {system.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}