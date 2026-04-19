'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const pipelineData = [
  { stage: 'New Prospects', count: 23, target: 30 },
  { stage: 'Document Collection', count: 15, target: 20 },
  { stage: 'Account Setup', count: 8, target: 12 },
  { stage: 'Ready to Activate', count: 5, target: 8 }
];

export default function OnboardingPipeline() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Onboarding Pipeline</h3>
      <p className="text-sm text-gray-600 mb-6">Client onboarding progress by stage</p>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={pipelineData} layout="vertical" margin={{ left: 120 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis type="number" stroke="#6B7280" />
            <YAxis type="category" dataKey="stage" stroke="#6B7280" width={120} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '8px'
              }}
            />
            <Bar dataKey="count" fill="#3B82F6" name="Current Count" radius={[0, 4, 4, 0]} />
            <Bar dataKey="target" fill="#E5E7EB" name="Target" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}