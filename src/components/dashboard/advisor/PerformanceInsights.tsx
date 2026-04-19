'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const portfolioData = [
  { month: 'Jan', value: 142000000 },
  { month: 'Feb', value: 148000000 },
  { month: 'Mar', value: 152000000 },
  { month: 'Apr', value: 158000000 },
  { month: 'May', value: 165000000 },
  { month: 'Jun', value: 172000000 },
  { month: 'Jul', value: 178000000 },
  { month: 'Aug', value: 184700000 }
];

const allocationData = [
  { category: 'Equities', weight: 45, return: 12.5 },
  { category: 'Fixed Income', weight: 30, return: 4.2 },
  { category: 'Alternatives', weight: 15, return: 8.6 },
  { category: 'Cash', weight: 10, return: 2.1 }
];

export default function PerformanceInsights() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Portfolio Growth Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Portfolio Growth</h3>
        <p className="text-sm text-gray-600 mb-6">AUM progression over time</p>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={portfolioData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" stroke="#6B7280" />
              <YAxis 
                stroke="#6B7280"
                tickFormatter={(value) => `$${(value / 1000000).toFixed(0)}M`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px'
                }}
                formatter={(value) => typeof value === 'number' ? `$${(value / 1000000).toFixed(1)}M` : value}
              />
              <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Asset Allocation Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Asset Allocation</h3>
        <p className="text-sm text-gray-600 mb-6">Portfolio breakdown by asset class</p>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={allocationData}
              layout="vertical"
              margin={{ left: 80 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis type="number" stroke="#6B7280" tickFormatter={(value) => `${value}%`} />
              <YAxis type="category" dataKey="category" stroke="#6B7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px'
                }}
                formatter={(value) => typeof value === 'number' ? `${value}%` : value}
              />
              <Legend />
              <Bar dataKey="weight" fill="#3B82F6" name="Portfolio Weight" radius={[0, 4, 4, 0]} />
              <Bar dataKey="return" fill="#10B981" name="Return (%)" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}